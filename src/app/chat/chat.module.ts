import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChatboxComponent } from './chatbox/chatbox.component';


import { RouterModule, Router } from '@angular/router';
import { FormsModule ,ReactiveFormsModule} from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path:'chat',component:ChatboxComponent}
    ])
  ],
  declarations: [ChatboxComponent]
})
export class ChatModule { }
