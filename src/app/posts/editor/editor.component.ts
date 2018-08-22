import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {from, fromEvent, Observable, Subject, Subscription} from 'rxjs';
import {debounceTime, switchMap, takeUntil} from 'rxjs/operators';
import {HttpClient} from '@angular/common/http';
import {fromPromise} from 'rxjs/internal-compatibility';

const customizeValidator = Validators.compose([
  Validators.required,
  Validators.minLength(10)
]);

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css']
})
export class EditorComponent implements OnInit, OnDestroy {

  post = new FormGroup({
    title: new FormControl('test title', [
      Validators.required,
      Validators.minLength(10)
    ]),
    body: new FormControl('', customizeValidator),
    tags: new FormArray([
      new FormControl('HTML'),
      new FormControl('CSS'),
      new FormControl('Angular'),
    ])
  });

  destroy$ = new Subject();
  valueChangesSubscription: Subscription;

  get tags(): FormArray {
    return this.post.get('tags') as FormArray;
  }

  constructor(private fb: FormBuilder, private httpClient: HttpClient) {
  }

  ngOnInit() {

    // fromPromise(); // 把 promise 轉 observable
    // toPromise(); // 把 observable 轉 promise，盡量少使用，因為 .then 不會有資料流


    // this.post = this.fb.group({ // 單元測試好用，可動態增減內容不被 FormGroup 綁住
    //   title: this.fb.control('default title'),
    //   // ...
    // });
    // Validators.required(this.post.get('title')); // reactive programming

    // this.post.get('title').valueChanges.map().switchMap()...... // 一路點下去，5.5 之前版本，之後 6 後都用 pipe 包
    // const operator = this.post.get('title').valueChanges
    //   .pipe(
    //     switchMap(),
    //     switchMap()
    //   ); 然後丟給 pipe，模組化

    const checkUserExist = value => this.httpClient.get(`http://check/username/${value}`); // 模組化，並可切開測試
    this.valueChangesSubscription = this.post.get('title').valueChanges
      .pipe(
        debounceTime(300), // 300 毫秒，可節省請求次數
        takeUntil(this.destroy$),
        switchMap(checkUserExist),
        switchMap(value => this.httpClient.get(`http://check/log/${value}`))
      )
      .subscribe(result => {
        if (!result) {
          alert('帳號重複');
        }
      });

    this.destroy$.subscribe(value => {
      console.log(value);
    });
    this.destroy$.next('1');
    this.destroy$.next('2');
    this.destroy$.next('3');
  }

  ngOnDestroy(): void {
    this.valueChangesSubscription.unsubscribe(); // 不想要了，就會需要設變數出來，要切記要做 unsubscribe，否則會被重複訂閱
  }

  onKeyDown($event) {
    if ($event.keyCode === 13) {
      this.tags.push(new FormControl($event.target.value));
      $event.target.value = '';
    }
  }

  submit() {
    // this.tags.push();
    // this.tags.removeAt();
    console.log(this.post.value);

    // const fakeEvent: any = {};
    // fromEvent(fakeEvent).subscribe(data => {
    //
    // });


  }


}
