import React, {useEffect} from 'react';
import {View, Text, ActivityIndicator, FlatList} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {IState} from '../../../models/IState';
import IAlbum from '../../../models/IAlbum';
import {actualizarAlbums, fetchAlbums} from '../../../store/actions/Albums';

import AlbumListItem from '../../molecules/AlbumListItem';

const AlbumList: React.FC = () => {
  const albums = useSelector((state: IState) => state.Albums.albums);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAlbums());
  }, []);

  return (
    <View>
      {albums.length > 0 ? (
        <FlatList
          data={albums}
          renderItem={({item, index}) => (
            <AlbumListItem key={item.id} album={item} index={index} />
          )}
        />
      ) : (
        <ActivityIndicator color="#000" />
      )}
    </View>
  );
};

export default AlbumList;
