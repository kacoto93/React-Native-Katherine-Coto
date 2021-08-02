import React from 'react';
import {Text, View} from 'react-native';
import {useSelector} from 'react-redux';
import {IState} from '../../../models/IState';
import AlbumDetails from '../../molecules/AlbumDetails';
import AlbumList from '../../organisms/AlbumList';

const HomeScreen: React.FC = () => {
  const selectedAlbum = useSelector(
    (state: IState) => state.Albums.selectedAlbum,
  );

  return <View>{selectedAlbum ? <AlbumDetails /> : <AlbumList />}</View>;
};

export default HomeScreen;
