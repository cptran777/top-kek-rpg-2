import * as constants from './constants';

/******************************* ACTION CREATORS *******************************/

export interface testAction {
  type: constants.TEST_ACTION;
  data: string | number;
}

export const testAction: () => testAction = (value: string | number) => ({ type: TEST_ACTION, data: value });