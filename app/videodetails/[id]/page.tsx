'use client'

import { useRouter } from 'next/navigation';
import { useAppContext } from '@/logic/AppStateContext'
import styles from './style.module.css';
import { useEffect } from 'react';
import { videos } from '@/utils/VideosData';


const VideoDetailsPage = ({params}:any) => {
  const { state, dispatch} = useAppContext();
  const router = useRouter();
  
  useEffect(()=>{
    if(state?.selectedVideo === null){
      updateSelectedVideo()
    }
  },[params?.id])

  const updateSelectedVideo = () =>{
    const tempSelectedVideo:any = videos?.find((video)=>video?.id === Number(params?.id));
    dispatch({ type: 'SELECT_VIDEO', payload: tempSelectedVideo });
  }


  const handlePlay = () => {
    dispatch({ type: 'SET_MODAL_STATUS', payload: true });
    router.push('/')
  };

  if (!state?.selectedVideo) {
    return <div className={styles.details_container}>
      <p>No video selected.</p>
      </div>;
  }

  return (
    <div className={styles.video_details_page}>
      <h1>Video Details</h1>
      <div className="underline"></div>
      {state?.selectedVideo && (
        <div className={styles.video_content}>
          <h2>{state?.selectedVideo.title}</h2>
          <div className={styles.image_container}>
            <img src={state?.selectedVideo.thumbnail} alt={state?.selectedVideo.title} className={styles.image} />
            <div className={styles.play_button} onClick={handlePlay} >
              <i className="fas fa-play"></i>
            </div>
          </div>
          <p>{state?.selectedVideo.description}</p>
        </div>
      )}
    </div>
  );
};

export default VideoDetailsPage;
