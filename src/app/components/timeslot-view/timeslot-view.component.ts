import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState, TimeSlot } from 'src/app/models/timeSlot.model';
import {take} from 'rxjs/operators'

@Component({
  selector: 'app-timeslot-view',
  templateUrl: './timeslot-view.component.html',
  styleUrls: ['./timeslot-view.component.scss']
})
export class TimeslotViewComponent implements OnInit {
  timeSlots: Array<TimeSlot>;
  constructor(private store: Store<AppState>) { 
    store.pipe(take(1)).subscribe(s => this.timeSlots = s.timeslot);
  }

  ngOnInit(): void {}

}

