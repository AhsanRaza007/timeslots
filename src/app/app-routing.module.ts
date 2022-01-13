import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EditTimeslotUserComponent } from './components/edit-timeslot-user/edit-timeslot-user.component';
import { TimeslotViewComponent } from './components/timeslot-view/timeslot-view.component';

const routes: Routes = [
  {
    path: ':timeSlotId',
    component: EditTimeslotUserComponent
  },
  {
    path: '',
    component: TimeslotViewComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
