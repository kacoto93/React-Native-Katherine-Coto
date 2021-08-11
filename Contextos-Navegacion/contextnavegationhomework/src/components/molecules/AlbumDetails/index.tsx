import styled from '@emotion/native';
import React, {useEffect, useMemo} from 'react';
import {Button, Image, StyleSheet} from 'react-native';
import ISong from '../../../models/ISong';
import SongListItem from '../SongListItem';
import {useSongs} from '../../../context/song-context';
import {useAlbums} from '../../../context/album-context';

const AlbumDetails: React.FC = () => {
  const {songs, fetchSongs, selectedSong} = useSongs();
  const {albums, selectedAlbum} = useAlbums();
  const {title, id} = albums[selectedAlbum || 0];
  const filteredSongs = useMemo(
    () => songs.filter(song => song.albumId === id),
    [songs, id],
  );

  const onBackPress = () => {
    //selectedAlbum();
  };

  useEffect(() => {
    fetchSongs();
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
function useSelector(arg0: (state: any) => any) {
  throw new Error('Function not implemented.');
}
