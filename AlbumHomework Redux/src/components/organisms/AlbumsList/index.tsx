import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  ActivityIndicator,
  Image,
  StyleSheet,
} from 'react-native';
import axios from 'axios';
import IAlbum from '../../../models/IAlbum';
import styled from '@emotion/native';

export interface AlbumListProps {
  albums: IAlbum[];
  setCurrentAlbum: React.Dispatch<React.SetStateAction<IAlbum | null>>;
  setAlbum: React.Dispatch<React.SetStateAction<IAlbum[]>>;
}

const AlbumList: React.FC<AlbumListProps> = ({
  albums,
  setCurrentAlbum,
  setAlbum,
}) => {
  const fetchAlbumList = async () => {
    try {
      const {data} = await axios.get(
        'https://jsonplaceholder.typicode.com/photos',
      );
      console.log(data);
      setAlbum(data);
    } catch (error) {
      console.error(error);
    }
  };

  const onAlbumClick = (album: IAlbum) => {
    setCurrentAlbum(album);
  };

  const styles = StyleSheet.create({
    container: {
      paddingTop: 50,
    },
    stretch: {
      width: 50,
      height: 200,
      resizeMode: 'stretch',
    },
  });

  useEffect(() => {
    fetchAlbumList();
  }, []);

  const ItemContainer = styled.View`
    background-color: #b2dd7b;
    border-radius: 15px;
    padding: 15px;
    margin: 8px;
    font-weight: bold;
  `;

  return (
    <View>
      {albums.length > 0 ? (
        <FlatList
          data={albums}
          renderItem={({item}) => (
            <ItemContainer>
              <TouchableOpacity onPress={() => onAlbumClick(item)}>
                <Text>
                  {item.id}. {item.title}
                </Text>
              </TouchableOpacity>
            </ItemContainer>
          )}
        />
      ) : (
        <ActivityIndicator color="#000" />
      )}
    </View>
  );
};

export default AlbumList;
