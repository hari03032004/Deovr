import React, { Suspense, useRef, useEffect, useState } from 'react';
import { Canvas, useThree } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import * as THREE from 'three';
import { FaPlay } from "react-icons/fa";
import { FaPause } from "react-icons/fa6";
import { HiSpeakerWave } from "react-icons/hi2";
import { HiSpeakerXMark } from "react-icons/hi2";
import { RiFullscreenLine } from "react-icons/ri";
import { RiFullscreenExitLine } from "react-icons/ri";
import "./video.css"

const Video360 = () => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [volume, setVolume] = useState(1);
  const [seek, setSeek] = useState(0);
  const [fullscreen, setFullscreen] = useState(false);
  const [playbackRate, setPlaybackRate] = useState(1);

  // Play/Pause the video
  const handlePlayPause = () => {
    const video = videoRef.current;
    if (video) {
      if (isPlaying) {
        video.pause();
      } else {
        video.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  // Change video volume
  const handleVolumeChange = (e) => {
    const video = videoRef.current;
    if (video) {
      video.volume = e.target.value;
      setVolume(e.target.value);
    }
  };

  // Change video seek position
  const handleSeekChange = (e) => {
    const video = videoRef.current;
    if (video) {
      video.currentTime = (e.target.value / 100) * video.duration;
      setSeek(e.target.value);
    }
  };

  // Toggle fullscreen mode
  const handleFullScreen = () => {
    if (fullscreen) {
      document.exitFullscreen();
    } else {
      videoRef.current.requestFullscreen();
    }
    setFullscreen(!fullscreen);
  };

  // Mute/Unmute toggle
  const handleMuteToggle = () => {
    const video = videoRef.current;
    if (video) {
      video.muted = !video.muted;
    }
  };

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.play();
    }
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      const updateControls = () => {
        setSeek((video.currentTime / video.duration) * 100);
      };

      video.addEventListener('timeupdate', updateControls);
      video.addEventListener('volumechange', () => setVolume(video.volume));
      return () => {
        video.removeEventListener('timeupdate', updateControls);
        video.removeEventListener('volumechange', () => setVolume(video.volume));
      };
    }
  }, []);

  useEffect(() => {
    // Update fullscreen state on change
    const handleFullscreenChange = () => {
      setFullscreen(!!document.fullscreenElement);
    };

    document.addEventListener('fullscreenchange', handleFullscreenChange);
    return () => {
      document.removeEventListener('fullscreenchange', handleFullscreenChange);
    };
  }, []);

  return (
    <>
      <Canvas
        className='canvas'
      >
        <Suspense fallback={<div>Loading...</div>}>
          <VideoSphere videoRef={videoRef} />
          <OrbitControls
            enableZoom={false}
            enablePan={false}
            enableRotate={true}
          />
        </Suspense>
      </Canvas>
      <div
        className="video-controls">
        <button onClick={handlePlayPause} className='pause'>
          {isPlaying ?
           <FaPause  size= '1rem' color='#335FFF' />  
           : 
           <FaPlay color='#335FFF' size='1rem'
           />}
        </button>
        <input
          id="seek-bar"
          type="range"
          min="0"
          max="100"
          value={seek}
          onChange={handleSeekChange}
        />
        <div className='mute-volume'>
          <button onClick={handleMuteToggle} className='mute'>
            {videoRef.current?.muted ? 
            <HiSpeakerXMark color="#335FFF" /> 
            : 
            <HiSpeakerWave color='#335FFF'/>}
          </button>
          <input
          id="volume-control"
          type="range"
          min="0"
          max="1"
          step="0.01"
          value={volume}
          onChange={handleVolumeChange}
          />
        </div>
      </div>
      <video
        ref={videoRef}
        src='/src/assets/video360.mp4'
        crossOrigin='anonymous'
        controls
        loop
        muted
        style={{
          display: 'none', // Hidden but used for controls and texture
        }}
      />
    </>
  );
};

const VideoSphere = ({ videoRef }) => {
  const { scene } = useThree();

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const videoTexture = new THREE.VideoTexture(video);
    videoTexture.minFilter = THREE.LinearFilter;
    videoTexture.magFilter = THREE.LinearFilter;
    videoTexture.format = THREE.RGBFormat;

    const geometry = new THREE.SphereGeometry(500, 60, 40);
    const material = new THREE.MeshBasicMaterial({ map: videoTexture });
    material.side = THREE.BackSide;

    const mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);

    return () => {
      scene.remove(mesh);
    };
  }, [scene, videoRef]);

  return null;
};

export default Video360;
