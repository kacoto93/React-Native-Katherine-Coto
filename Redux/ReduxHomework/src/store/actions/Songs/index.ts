import axios from 'axios';
import {ThunkDispatch} from 'redux-thunk';
import {ACTUALIZAR_SONGS} from '..';
import {IAction} from '../../../models/IAction';
import {IState} from '../../../models/IState';
import ISong from '../../../models/ISong';

export const actualizarSongs = (payload: ISong[]): IAction => {
 // console.log(payload);
  return {
    type: ACTUALIZAR_SONGS,
    payload,
  };
};

export const fetchSongs =
  () => async (dispatch: ThunkDispatch<IState, null, IAction>) => {
    try {
      const songResponse = await axios.get(
        'https://jsonplaceholder.typicode.com/photos',
      );
      dispatch(actualizarSongs(songResponse.data));
    } catch (error) {
      console.error(error);
    }
  };
