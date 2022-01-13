import { Action } from '@ngrx/store';
import { UserDetail } from 'src/app/models/userDetail.model';

export enum TimeSlotActionType {
  UPDATE_TIMESLOT = '[TIMESLOT] Update Time Slot',
  GET_TIMESLOT_BY_ID = '[TIMESLOT] Get Time Slot'
}


export class UpdateTimeSlotAction implements Action {
  readonly type = TimeSlotActionType.UPDATE_TIMESLOT
  //add an optional payload
  constructor(public id: number, public changes: UserDetail) {}
}

export class GetTimeSlotByIdAction implements Action {
    readonly type = TimeSlotActionType.GET_TIMESLOT_BY_ID;
    constructor(public id: number) {}
}

export type TimeSlotAction = UpdateTimeSlotAction | GetTimeSlotByIdAction