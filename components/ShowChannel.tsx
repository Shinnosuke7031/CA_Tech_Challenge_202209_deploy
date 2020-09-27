import React from 'react';
import { GetBroadcast } from '../components/GetData';
import VisibilityIcon from '@material-ui/icons/Visibility';
import CommentIcon from '@material-ui/icons/Comment';

type TypeChannnel = {
  id: string;
  name: string;
  url: string;
  thumbnail: string;
}
interface Props {
  data: TypeChannnel;
  logo: string;
}



const ShowChannel = (props: Props) => {

  const id = props.data.id;
  //const name = props.data.name;
  //const url = props.data.url;
  //const thumbnail = props.data.thumbnail;
  //const thumbnail = props.logo;
  let title: string;
  let endTime;
  let thumbnail;
  let view;
  let comment

  const { data, isLoading, isError } = GetBroadcast(id);
  //if (isLoading) return <div className={styles.loader}></div>
  if (isLoading) return <div className='_all'>Loading...</div>
  if (isError) return <div>Error</div>
  if (data.data === undefined) {
    title = '現在放送していません';

  } else {
    title = data.data.slots[0].title;
    endTime = getTime(data.data.slots[0].endAt);
    thumbnail = data.data.slots[0].thumbnail;
    view = data.data.slots[0].stats.view;
    comment = data.data.slots[0].stats.comment;
  }
  
  return (
    <div className='all'>
      <h1>{title}</h1>
      <p className='time'>~{endTime}</p>
      <img src={thumbnail} />
      <div className='stats'>
        <p><VisibilityIcon fontSize='default'/> {view}</p>
        <p><CommentIcon fontSize='default'/>{comment}</p>
      </div>

      <style jsx>{`
        .all {
          position: relative;
          margin-left: -9px; 
          padding: 10px 30px;
          border: 1px solid black;
          border-radius: 5px;
          width: 700px;
          text-align: left;
          height: 78px;
        }
        h1 {
          font-size: 20px;
        }
        .time {
          position: absolute;
          bottom: 5px;
          left: 27px;
        }
        img {
          position: absolute;
          width: 100px;
          border-radius: 5px;
          bottom: 5px;
          right: 27px;
        }
        .stats {
          width: 250px;
          height: 15px;
          position: absolute;
          bottom: 5px;
          right: 150px;
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 5px;
          border-bottom: 1px solid black;
        }
        .stats p {
          width: 150px;
          display: flex;
          justify-content: center;
        }
      `}</style>
    </div>
  );
}

export default ShowChannel;

const getTime = (time: string) => {
  
  return time.slice(-14,-9);

}