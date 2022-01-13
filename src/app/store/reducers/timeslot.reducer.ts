import { TimeSlot } from "src/app/models/timeSlot.model";
import { TimeSlotActionType, TimeSlotAction } from "../actions/timeslots.action";

const initialState: Array<TimeSlot> = [
    {
      id: 1,
      timeString: '9AM to 10AM',
      isSelected: false,
      userDetails: {
        firstName: '',
        lastName: '',
        phone: ''
      }
    },
    {
      id: 2,
      timeString: '10AM to 11AM',
      isSelected: false,
      userDetails: {
        firstName: '',
        lastName: '',
        phone: ''
      }
    },
    {
      id: 3,
      timeString: '11AM to 12PM',
      isSelected: false,
      userDetails: {
        firstName: '',
        lastName: '',
        phone: ''
      }
    },
    {
      id: 4,
      timeString: '12PM to 1PM',
      isSelected: false,
      userDetails: {
        firstName: '',
        lastName: '',
        phone: ''
      }
    },
    {
      id: 5,
      timeString: '2PM to 3PM',
      isSelected: false,
      userDetails: {
        firstName: '',
        lastName: '',
        phone: ''
      }
    },
    {
      id: 6,
      timeString: '3PM to 4PM',
      isSelected: false,
      userDetails: {
        firstName: '',
        lastName: '',
        phone: ''
      }
    },
    {
      id: 7,
      timeString: '5PM to 6PM',
      isSelected: false,
      userDetails: {
        firstName: '',
        lastName: '',
        phone: ''
      }
    },
    {
      id: 8,
      timeString: '6PM to 7PM',
      isSelected: false,
      userDetails: {
        firstName: '',
        lastName: '',
        phone: ''
      }
    },
    {
      id: 9,
      timeString: '7PM to 8PM',
      isSelected: false,
      userDetails: {
        firstName: '',
        lastName: '',
        phone: ''
      }
    },
    {
      id: 10,
      timeString: '8PM to 9PM',
      isSelected: false,
      userDetails: {
        firstName: '',
        lastName: '',
        phone: ''
      }
    }
  ];

  export function timeSlotReducer(state: Array<TimeSlot> = initialState, action: TimeSlotAction,){
    switch (action.type) {
        case TimeSlotActionType.UPDATE_TIMESLOT: {
            const newState: Array<TimeSlot> = JSON.parse(JSON.stringify(state))
            newState[action.id - 1].isSelected = true
            newState[action.id -1].userDetails = action.changes
            console.log(newState);
            return newState;
        }
        default:
          return state
      }
  }