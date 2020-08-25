import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css']
})
export class AlertComponent{
	@Input() message : string; //to make message settable from outside, so add Input
	@Output() close = new EventEmitter<void>();

	onClose(){
		this.close.emit();
	}
}
