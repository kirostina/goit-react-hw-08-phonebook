import { createSelector } from '@reduxjs/toolkit';

const selectPhonebook = state => state.contact;

export const selectContact = createSelector(
  selectPhonebook,
  contact => contact.contacts
);

export const selectIsLoading = createSelector(
  selectPhonebook,
  contact => contact.isLoading
);

export const selectError = createSelector(
  selectPhonebook,
  contact => contact.error
);

export const selectFilter = state => state.filter;
