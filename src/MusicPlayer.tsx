import React, { useState, useEffect } from 'react';
import { ConfigsType } from './configs';

const useAudio = (url: string) => {
  const [audio] = useState(new Audio(url));
  const [playing, setPlaying] = useState(false);

  const toggle = () => setPlaying(!playing);

  useEffect(() => {
    playing ? audio.play() : audio.pause();
  }, [playing]);

  useEffect(() => {
    audio.addEventListener('ended', () => setPlaying(false));
    return () => {
      audio.removeEventListener('ended', () => setPlaying(false));
    };
  }, []);

  return [playing, toggle];
};

type TitleProps = {
  config: ConfigsType;
};

const Player = ({ config }: TitleProps) => {
  const [playing, toggle] = useAudio(config.musicSrc);

  return (
    <div>
      <button onClick={() => toggle}>{playing ? 'Pause' : 'Play'}</button>
    </div>
  );
};

export default Player;
