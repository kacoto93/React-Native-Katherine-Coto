import axios from 'axios';
import {ThunkDispatch} from 'redux-thunk';
import {ACTUALIZAR_SELECTED_ALBUM, ACTUALIZAR_ALBUMS} from '..';
import {IAction} from '../../../models/IAction';
import {IState} from '../../../models/IState';
import IAlbum from '../../../models/IAlbum';

export const actualizarAlbums = (payload: IAlbum[]) => ({
  type: ACTUALIZAR_ALBUMS,
  payload,
});

export const actualizarSelectedAlbum = (payload: number | null) => ({
  type: ACTUALIZAR_SELECTED_ALBUM,
  payload,
});

export const fetchAlbums =
  () => async (dispatch: ThunkDispatch<IState, null, IAction>) => {
    try {
      console.log("estoy en fetch album");
      const albumReponse = await axios.get(
        'https://jsonplaceholder.typicode.com/albums',
      );
      dispatch(actualizarAlbums(albumReponse.data));
      console.log("Aqui estoy");
    } catch (error) {
      console.error(error);
    }
  };
