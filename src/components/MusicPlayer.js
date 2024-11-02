import React, { useEffect, useRef, useState } from "react";

const MusicPlayer = () => {
  const audioRef = useRef(null);
  const [isMuted, setIsMuted] = useState(true);

  useEffect(() => {
    // Play music when the component mounts
    const playAudio = async () => {
      try {
        await audioRef.current.play();
      } catch (error) {
        console.error("Error trying to play audio:", error);
      }
    };

    playAudio();

    return () => {
      // Pause the music when the component unmounts
      audioRef.current.pause();
    };
  }, []);

  const toggleMute = () => {
    setIsMuted((prev) => !prev);
    audioRef.current.muted = !isMuted;
  };

  return (
    <div>
      <audio ref={audioRef} autoPlay loop muted={isMuted}>
        <source src="/public/boyfriend.mp3" type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
      <button onClick={toggleMute}>{isMuted ? "Unmute" : "Mute"}</button>
    </div>
  );
};

export default MusicPlayer;
