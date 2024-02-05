import React, { useEffect } from 'react'
import { AuthValue } from '../../store/auth'
import { useParams } from 'react-router-dom';

const SingleVideoPage = () => {
  const { videoDownLoadLogic , videoDetails } = AuthValue();
  const { id } = useParams();
  console.log(id);

  console.log(videoDetails);

  useEffect(()=>{
    videoDownLoadLogic(id);
  },[id])

  
  return (
    <div>
      <div>
      {videoDetails && videoDetails.video_files && videoDetails.video_files.length > 0 && (
          <video width="800px" height="800px" autoPlay controls>
            <source src={videoDetails.video_files[0].link} type={videoDetails.video_files[0].file_type} />
          </video>
        )}
      </div>


    </div>
  )
}

export default SingleVideoPage