import { UserDetail } from "./userDetail.model";

export interface TimeSlot {
    id?: string | number,
    timeString?: string,
    isSelected?: boolean,
    userDetails?: UserDetail
}

export interface AppState {
    readonly timeslot: Array<TimeSlot>
}