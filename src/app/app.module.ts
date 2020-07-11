import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';


import { AppComponent } from './app.component';
import { ConvertisseurFilsComponent } from './parent-fils/convertisseur-fils/convertisseur-fils.component';
import { ConvertParentComponent } from './parent-fils/convert-parent/convert-parent.component';

@NgModule({
  declarations: [
    AppComponent,
    ConvertisseurFilsComponent,
    ConvertParentComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
