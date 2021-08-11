import styled from '@emotion/native';
import React, {FC} from 'react';
import {Text} from 'react-native';
import {useAlbums} from '../../../context/album-context';
import IAlbum from '../../../models/IAlbum';

export interface AlbumListItemProps {
  album: IAlbum;
  index: number;
}

const AlbumListItem: FC<AlbumListItemProps> = ({album, index}) => {
  const {setSelectedAlbum} = useAlbums();

  const onPress = () => {
    setSelectedAlbum(index);
  };

  return (
    <ItemContainer onPress={onPress}>
      <Text>
        {++index}. {album.title}
      </Text>
    </ItemContainer>
  );
};

const ItemContainer = styled.TouchableOpacity`
  background-color: #f1f1f1;
  border-radius: 32px;
  padding: 8px 12px;
  margin: 4px 0;
`;

export default AlbumListItem;
