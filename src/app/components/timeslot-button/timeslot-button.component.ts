import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { TimeSlot } from 'src/app/models/timeSlot.model';

@Component({
  selector: 'app-timeslot-button',
  templateUrl: './timeslot-button.component.html',
  styleUrls: ['./timeslot-button.component.scss']
})
export class TimeslotButtonComponent {
  @Input() timeSlot: TimeSlot;
  constructor(private router: Router) { }

  redirect():void {
    this.router.navigate([this.timeSlot.id])
  }
}
