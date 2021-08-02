import {IAction} from '../../../models/IAction';
import ISong from '../../../models/ISong';
import {ACTUALIZAR_SONGS} from '../../actions';

export interface ISongsReducerState {
  songs: ISong[];
}

const initialState = {
  songs: [],
};

export default (
  state = initialState,
  {type, payload}: IAction,
): ISongsReducerState => {
  switch (type) {
    case ACTUALIZAR_SONGS:
      return {...state, songs: payload as ISong[]};
    default:
      return state;
  }
};
