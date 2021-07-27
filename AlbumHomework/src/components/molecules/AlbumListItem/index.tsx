import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import IAlbum from '../../../models/IAlbum';

export interface AlbumListItemProps {
  album: IAlbum;
  setCurrentAlbum: React.Dispatch<React.SetStateAction<IAlbum | null>>;
  setAlbum: React.Dispatch<React.SetStateAction<IAlbum[]>>;
}

const AlbumListItem: React.FC<AlbumListItemProps> = ({
  album,
  setCurrentAlbum,
  setAlbum,
}) => {
  return (
    <View>
      <Text>hOLA</Text>
    </View>
  );
};

export default AlbumListItem;
