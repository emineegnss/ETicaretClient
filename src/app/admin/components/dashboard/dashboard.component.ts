import { Component, OnInit } from '@angular/core';
import {
  AlertifyOptions,
  AlertifyService,
  MessageType,
  Position,
} from 'src/app/services/admin/alertify.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  constructor(private alertifyService: AlertifyService) {}
  ngOnInit(): void {}
  m() {
    this.alertifyService.message('Error', { messageType: MessageType.Error, delay: 2, position:Position.TopCenter,dismissOthers:true});
  }
  d() {
    this.alertifyService.dismiss();
  }
}
