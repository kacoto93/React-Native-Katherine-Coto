import axios from 'axios';
import React, {createContext, useContext, useState, useMemo} from 'react';
import ISong from '../models/ISong';

interface SongsContextProps {
  songs: ISong[];
  setSongs: (songs: ISong[]) => void;
  selectedSong: number | null;
  setSelectedSong: (album: number | null) => void;
  fetchSongs: () => Promise<void>;
}

const SongsContext = createContext<SongsContextProps>({
  songs: [],
  setSongs: () => {},
  selectedSong: null,
  setSelectedSong: () => {},
  fetchSongs: () => Promise.resolve(),
});

export const SongsProvider: React.FC = ({children}) => {
  const [songs, setSongs] = useState<ISong[]>([]);
  const [selectedSong, setSelectedSong] = useState<number | null>(null);
  const fetchSongs = async () => {
    try {
      const songs = await axios.get(
        'https://jsonplaceholder.typicode.com/photos',
      );
      setSongs(songs.data);
    } catch (error) {
      console.error(error);
    }
  };

  const val = useMemo(() => {
    return {songs, setSongs, selectedSong, setSelectedSong, fetchSongs};
  }, [songs, setSongs, selectedSong, setSelectedSong, fetchSongs]);

  return <SongsContext.Provider value={val}>{children}</SongsContext.Provider>;
};

export const useSongs = () => useContext(SongsContext);
