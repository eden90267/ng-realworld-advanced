import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {switchMap} from 'rxjs/operators';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  postId;
  postTitle;

  post;

  // ActivatedRoute 針對參數的部分
  constructor(private route: ActivatedRoute, private httpClient: HttpClient) {
  }

  ngOnInit() {
    this.route.params.subscribe(params => { // 一有 params 變化就執行該內容
      // 發 http request
      console.log(params);
      this.postId = params.id;
      this.postTitle = params.title;
      // this.httpClient.get(`http://some/article/${params.id}`).subscribe(post => {
      //   this.post = post;
      //   // this.httpClient.get ...
      // });
    });

    // this.route.params.pipe(
    //   switchMap((params) => this.httpClient.get(`http://some/artice/${params.id}`)), // switchMap 把一個資料換成一個 Observable，一路 switchMap 下去，內容可以再拉出來設變數
    //   switchMap((post: any) =>
    //     this.httpClient.get(`http://some/artice/${post.catId}`)
    //       .pipe(map((cat: any) => { // map 只是轉換資料
    //         post.catName = cat.Name;
    //         return post;
    //       })))
    // ).subscribe((post) => {
    //   console.log(post.catName);
    // });

    // 可參考：https://gist.github.com/wellwind/e366a236f9e261709105e9690f1f780c
  }

}
