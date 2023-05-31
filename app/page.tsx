"use client"

import VideoCard from '@/components/videoCard/VideoCard';
import {Video, useAppContext} from '@/logic/AppStateContext';
import styles from './style.module.css';
import VideoModal from '@/components/videoModal/VideoModal';

export default function Home() {

  const { state } = useAppContext();

  return (
    <div className={styles.wrapper}>
    <div className={styles.homepage}>
      <h1>Video Listing</h1>
      <div className="underline"></div>
      <div className={styles.videolist}>
        {state?.videos?.map((video) => (
          <VideoCard key={video.id} video={video} />
        ))}
      </div>
    </div>
    {state?.modalOpen && <VideoModal/>}
  </div>
  )
}
