import styled from '@emotion/native';
import React, {useEffect, useMemo} from 'react';
import {Button, Image, StyleSheet} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {IState} from '../../../models/IState';
import ISong from '../../../models/ISong';
import {fetchSongs} from '../../../store/actions/Songs';
import {actualizarSelectedAlbum} from '../../../store/actions/Albums';
import SongListItem from '../SongListItem';

const AlbumDetails: React.FC = () => {
  const dispatch = useDispatch();

  const selectedAlbum = useSelector(
    (state: IState) => state.Albums.selectedAlbum,
  );
  const albums = useSelector((state: IState) => state.Albums.albums);
  const {title, id} = albums[selectedAlbum || 0];
  const songs = useSelector((state: IState) => state.Songs.songs);
  const filteredSongs = useMemo(
    () => songs.filter(song => song.albumId === id),
    [songs, id],
  );

  const onBackPress = () => {
    dispatch(actualizarSelectedAlbum(null));
  };

  useEffect(() => {
    dispatch(fetchSongs());
  }, []);

  return (
    <Container>
      <CustomText>{id}</CustomText>
      <CustomText>{title}</CustomText>

      {filteredSongs && (
        <AlbumList
          data={filteredSongs}
          renderItem={({item}) => <SongListItem song={item as ISong} />}
        />
      )}
      <Button title="Volver" onPress={onBackPress} />
    </Container>
  );
};

const Container = styled.View`
  padding: 16px;
  height: 100%;
`;

const CustomText = styled.Text`
  font-size: 18px;
`;

const AlbumList = styled.FlatList`
  padding: 8px;
`;

const styles = StyleSheet.create({
  image: {
    width: 50,
    height: 50,
  },
});

export default AlbumDetails;
