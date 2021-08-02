import React, { useState } from 'react';
import {View, Text } from 'react-native';
import IAlbum from '../../../models/IAlbum';
import AlbumDetail from '../../organisms/AlbumDetail';
import AlbumList from '../../organisms/AlbumsList';

const HomeScreen: React.FC = () => {
    const [albums, setAlbum] = useState<IAlbum[]>([]);
    const [currentAlbum, setCurrentAlbum] = useState<IAlbum | null>(null);

console.log(currentAlbum);
    return (
        <View>
            {currentAlbum ? (<AlbumDetail album={currentAlbum} setCurrentAlbum={setCurrentAlbum}/>) : 
        (<AlbumList albums={albums} 
        setAlbum={setAlbum}
        setCurrentAlbum= {setCurrentAlbum}
        />)}
        </View>
    );
}

export default HomeScreen;