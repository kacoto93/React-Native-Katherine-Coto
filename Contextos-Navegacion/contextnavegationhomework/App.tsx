import React from 'react';
import {SafeAreaView} from 'react-native';
import HomeScreen from './src/components/screens/HomeScreen';
import {AlbumsProvider} from './src/context/album-context';
import {SongsProvider} from './src/context/song-context';

const App = () => {
  return (
    <AlbumsProvider>
      <SongsProvider>
        <SafeAreaView>
          <HomeScreen />
        </SafeAreaView>
      </SongsProvider>
    </AlbumsProvider>
  );
};

export default App;
