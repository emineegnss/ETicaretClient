import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { CostomToastrService, ToastrMessageType, ToastrPosition } from './services/ui/costom-toastr.service';
import { NgxSpinnerService } from 'ngx-spinner';
declare var $: any
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  
  title = 'ETicaretClient';
  constructor(private toastr:CostomToastrService,private spinner:NgxSpinnerService){
    toastr.message("Selam","Başarisiz",{
      messageType : ToastrMessageType.Error,
      position: ToastrPosition.TopLeft
    })
    toastr.message("Selam","Başarisiz",{
      messageType : ToastrMessageType.Success,
      position:  ToastrPosition.TopLeft})
    toastr.message("Selam","Başarisiz",{
      messageType : ToastrMessageType.Warning,
      position:  ToastrPosition.TopFullWidth})
    toastr.message("Selam","Başarisiz",{
      messageType : ToastrMessageType.Info,
      position:  ToastrPosition.BottomFullWidth})

  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
 
}
// $(document).ready(()=>{
//   alert("asd")
// })