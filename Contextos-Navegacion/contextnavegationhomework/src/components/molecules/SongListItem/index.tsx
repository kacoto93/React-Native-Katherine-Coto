import styled from '@emotion/native';
import React from 'react';
import {Button, Image, StyleSheet} from 'react-native';
import ISong from '../../../models/ISong';
import {useSongs} from '../../../context/song-context';

export interface SongListItemProps {
  song: ISong;
}

const SongListItem: React.FC<SongListItemProps> = ({song}) => {
  const {songs} = useSongs();

  const {title, thumbnailUrl, id} = song;

  //   const onCheck = (newValue: boolean) => {
  //     // Actualiza el arreglo de TODOS
  const indexOfTodo = songs.indexOf(song);
  const newArray = songs;
  newArray[indexOfTodo] = {...song};

  // };

  return (
    <Container>
      <CustomText>
        {id}. {title}
      </CustomText>
      <Image style={styles.image} source={{uri: thumbnailUrl}} />
    </Container>
  );
};

const Container = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const CustomText = styled.Text`
  width: 85%;
`;

const styles = StyleSheet.create({
  image: {
    width: 50,
    height: 50,
    padding: 10,
  },
});
export default SongListItem;
function useSong(): {} {
  throw new Error('Function not implemented.');
}
