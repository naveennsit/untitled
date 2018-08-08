import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {
  MatButtonModule,
  MatDialogModule, MatListModule
} from '@angular/material';
import {AppComponent} from './app.component';
import {UploadModule} from './upload/upload.module';
import {HttpClientModule} from '@angular/common/http';
import {MatProgressBarModule} from '@angular/material';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, UploadModule, HttpClientModule, MatProgressBarModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
