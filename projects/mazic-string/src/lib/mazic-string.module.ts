import { NgModule } from '@angular/core';
import { MazicStringComponent } from './mazic-string.component';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [MazicStringComponent],
  imports: [
    HttpClientModule,
    CommonModule
  ],
  exports: [MazicStringComponent]
})
export class MazicStringModule { }
