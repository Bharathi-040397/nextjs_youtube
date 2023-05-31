import { createPortal } from "react-dom";
import { useAppContext } from "@/logic/AppStateContext";
import styles from './style.module.css';

const VideoModal = () => {
    const { state,dispatch } = useAppContext();

  const handleModalClose = () => {
    dispatch({ type: 'SET_MODAL_STATUS', payload: false });
    dispatch({ type: 'SELECT_VIDEO', payload: null });

  };

  const modalRoot = document.getElementById("modal-root");

  if (!modalRoot) return null; 

  return createPortal(
    <div className={styles.video_modal}>
      {state?.selectedVideo && (
        <div>
          <h3>{state?.selectedVideo.title}</h3>
          <button onClick={handleModalClose} className={styles.close_button}></button>
          <div className={styles.video_iframe_container}>
            <iframe
              src={state?.selectedVideo.url}
              title={state?.selectedVideo.title}
              allow="autoplay"
            ></iframe>
          </div>
        </div>
      )}
    </div>,
    modalRoot
  );
};

export default VideoModal;
