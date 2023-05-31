import { useRouter } from 'next/navigation';
import {  useAppContext } from '@/logic/AppStateContext';
import styles from './style.module.css';


const VideoCard = ({ video }: any ) => {
 const { dispatch } = useAppContext();
 const router = useRouter();

  const handleVideoClick = () => {
    router.push(`/videodetails/${video.id}`)
    dispatch({ type: 'SELECT_VIDEO', payload: video });
  };

  return (
  <div className={styles.card} onClick={handleVideoClick}>
    <img className={styles.cardimage} src={video.thumbnail} alt={video.title} />
    <div className={styles.cardcontent}>
    <h3 className={styles.cardtitle}>{video.title}</h3>
  </div>
</div>

);
};

export default VideoCard;