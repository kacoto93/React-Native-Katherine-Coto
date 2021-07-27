import styled from '@emotion/native';
import React from 'react';
import {View, Text, Button, Image, StyleSheet} from 'react-native';
import IAlbum from '../../../models/IAlbum';

export interface AlbumDetail {
  album: IAlbum;
  setCurrentAlbum: React.Dispatch<React.SetStateAction<IAlbum | null>>;
}

const Container = styled.View`
  background-color: #b2dd7b;
  border-radius: 15px;
  font-size: 24px;
  padding: 15px;
  margin: 8px;
  font-weight: bold;
`;

const Title = styled.View`
  font-weight: bold;
`;

const MyButton = styled.Button`
  padding: 32px;
  background-color: hotpink;
  font-size: 24px;
  border-radius: 4px;
  color: black;
  font-weight: bold;
  &:hover {
    color: white;
  }
`;

const styles = StyleSheet.create({
  topImage: {
    flex: 1,
    height: 200,
    margin: 5,
    borderRadius: 5,
  },
  imagesRow: {
    flex: 1,
    flexDirection: 'row',
  },
  imageContainer: {
    flex: 1,
    padding: 5,
  },
  image: {
    flex: 1,
    height: 100,
    borderRadius: 5,
  },
});

const AlbumDetail: React.FC<AlbumDetail> = ({album, setCurrentAlbum}) => {
  return (
    <Container>
      <Text>{album.id}</Text>
      <Text>{album.title}</Text>
      <Image
        source={{uri: album.thumbnailUrl}}
        style={{width: 300, height: 400}}
      />
      <MyButton title="Volver" onPress={() => setCurrentAlbum(null)}></MyButton>
    </Container>
  );
};

export default AlbumDetail;
