import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {LayoutModule} from './layout/layout.module';
import {LoginModule} from './login/login.module';

@NgModule({
  // 所有樣板上會使用的東西
  declarations: [
    AppComponent
  ],
  // 匯入其他模組使用的
  imports: [
    BrowserModule,
    LayoutModule,
    LoginModule,
    AppRoutingModule
  ],
  // 歷史共業了，Angular 5 之前用的，Services 用在這裡，不過到 Angular 6 之後 Service 預設就有 providedIn 在 root 上，並隨懶加載。
  // 若在這裡設置 Services，就沒有懶加載了，都會編譯進去，所以會越來越肥
  providers: [],
  // 啟動用的模組，先啟動哪個 component 作為最開始進入的元件
  // 多放的話會是各自獨立的進入點，不會互相傳遞訊息
  bootstrap: [AppComponent]
})
export class AppModule { }
