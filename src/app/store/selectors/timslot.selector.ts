import { AppState } from 'src/app/models/timeSlot.model';
import { createSelector } from '@ngrx/store';

export const selectItems = (state: AppState) => state.timeslot;

export const getItemById = (id) => createSelector(selectItems, (allItems) => {
  if (allItems) {
    return allItems.find(item => {
      return item.id == id;
    });
  } else {
    return {};
  }
});