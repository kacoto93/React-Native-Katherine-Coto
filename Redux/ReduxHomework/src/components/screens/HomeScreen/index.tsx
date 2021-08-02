import React from 'react';
import {Text, View} from 'react-native';
import {useSelector} from 'react-redux';
import {IState} from '../../../models/IState';
//import UserDetails from '../../molecules/UserDetails';
import AlbumList from '../../organisms/AlbumList';

const HomeScreen: React.FC = () => {
  const selectedAlbum = useSelector(
    (state: IState) => state.Albums.selectedAlbum,
  );
  return (
    <View>
      <Text>Hola</Text>
      <AlbumList />
    </View>
  );
  // return <View>{selectedAlbum ? <AlbumDetails /> : <AlbumList />}</View>;
};

export default HomeScreen;
