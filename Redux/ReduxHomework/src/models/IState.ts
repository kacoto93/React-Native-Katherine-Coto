import {IAlbumsState} from '../store/reducers/Albums';
import {ISongsReducerState} from '../store/reducers/Songs';
export interface IState {
    Albums: IAlbumsState;
    Songs: ISongsReducerState;
}