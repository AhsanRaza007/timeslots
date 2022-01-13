import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState, TimeSlot } from 'src/app/models/timeSlot.model';
import { UpdateTimeSlotAction } from 'src/app/store/actions/timeslots.action';
import { getItemById } from 'src/app/store/selectors/timslot.selector';

@Component({
  selector: 'app-edit-timeslot-user',
  templateUrl: './edit-timeslot-user.component.html',
  styleUrls: ['./edit-timeslot-user.component.scss']
})
export class EditTimeslotUserComponent implements OnInit {

  editForm: FormGroup;
  timeSlotId: number;
  timeSlot: TimeSlot;
  constructor(private router: Router, private formBuilder: FormBuilder, private route: ActivatedRoute, private store: Store<AppState>) { 
    
  }

  ngOnInit(): void {
    this.timeSlotId = this.route.snapshot.params.timeSlotId
    this.store.select(getItemById(this.timeSlotId)).subscribe(item=>{
      this.timeSlot = item;
      this.editForm = this.formBuilder.group({
        firstName: [this.timeSlot.userDetails.firstName, Validators.required],
        lastName: [this.timeSlot.userDetails.lastName, Validators.compose([Validators.required])],
        phone: [this.timeSlot.userDetails.phone, Validators.compose([Validators.required, Validators.pattern("^[0-9]*$"), Validators.minLength(8)])]
      });
    })
  }

  redirect() {
    this.router.navigateByUrl('/')
  }

  submit() {
    this.editForm.markAllAsTouched();
    if(this.editForm.invalid) return
    this.store.dispatch(new UpdateTimeSlotAction(this.timeSlotId, this.editForm.value))
    this.router.navigateByUrl('/')
  }
}
