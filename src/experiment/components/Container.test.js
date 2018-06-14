import { exp_reducer } from '../reducers';

test.only('returns default state if action is unknown', () => {
  const state = undefined;
  const action = { type: 'UNKNOWN' };
  expect(exp_reducer(state, action)).toEqual({ text: 'hallo', zahl: 1 });
});

test.only('returns "Blabla 1" if action is TEXT', () => {
  const state = undefined;
  const action = { type: 'TEXT' };
  expect(exp_reducer(state, action)).toEqual({ text: 'Blabla 1', zahl: 1 });
});
