import React from 'react';
import {Text, View} from 'react-native';
import {useAlbums} from '../../../context/album-context';

import AlbumDetails from '../../molecules/AlbumDetails';
import AlbumList from '../../organisms/AlbumList';

const HomeScreen: React.FC = () => {
  const {selectedAlbum} = useAlbums();

  return <View>{selectedAlbum ? <AlbumDetails /> : <AlbumList />}</View>;
};

export default HomeScreen;
