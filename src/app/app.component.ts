import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { CostomToastrService, ToastrMessageType, ToastrPosition } from './services/ui/costom-toastr.service';
declare var $: any
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ETicaretClient';
  constructor(private toastr:CostomToastrService){
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
}
// $(document).ready(()=>{
//   alert("asd")
// })