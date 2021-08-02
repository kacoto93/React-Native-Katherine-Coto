import styled from '@emotion/native';
import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {IState} from '../../../models/IState';
import {Button, Image, StyleSheet} from 'react-native';
import ISong from '../../../models/ISong';
import {actualizarSongs} from '../../../store/actions/Songs';
export interface SongListItemProps {
  song: ISong;
}

const SongListItem: React.FC<SongListItemProps> = ({song}) => {
  const dispatch = useDispatch();
  const songs = useSelector((state: IState) => state.Songs.songs);
  const {title, thumbnailUrl, id} = song;

  //   const onCheck = (newValue: boolean) => {
  //     // Actualiza el arreglo de TODOS
  const indexOfTodo = songs.indexOf(song);
  const newArray = songs;
  newArray[indexOfTodo] = {...song};

  dispatch(actualizarSongs(newArray));
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
