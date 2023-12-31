import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { BaseComponent, SpinnerType } from 'src/app/base/base.component';

@Component({
  selector: 'app-carts',
  templateUrl: './carts.component.html',
  styleUrls: ['./carts.component.scss']
})
export class CartsComponent extends BaseComponent implements OnInit {
  constructor(spinner:NgxSpinnerService){
    super(spinner)
  }
  ngOnInit(): void {
    this.showSpinner(SpinnerType.BallScaleMutliple)
  }

}
