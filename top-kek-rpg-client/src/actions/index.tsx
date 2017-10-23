/**
 * top-kek-rpg-client/src/actions/index.tsx
 * Main file that contains the action functions for our redux state
 */

import * as constants from './constants';
import * as alias from '../types/alias';

/******************************* ACTION CREATORS *******************************/

export interface testAction {
  type: constants.TEST_ACTION;
  data: string | number;
}

export const testAction: (value: alias.Value) => testAction = (value: alias.Value) => ({ type: constants.TEST_ACTION, data: value });