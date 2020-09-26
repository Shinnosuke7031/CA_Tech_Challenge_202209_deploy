import React from 'react';
import { GetBroadcast } from '../components/GetData';
import styles from '../styles/animetion.module.css';
import Link from 'next/link';

type TypeChannnel = {
  id: string;
  name: string;
  url: string;
  thumbnail: string;
}
interface Props {
  data: TypeChannnel;
}

const ShowChannel = (props: Props) => {
  const id = props.data.id;
  //const name = props.data.name;
  //const url = props.data.url;
  const thumbnail = props.data.thumbnail;

  const { data, isLoading, isError } = GetBroadcast(id);
  if (isLoading) return <div className={styles.loader}></div>
  if (isError) return <div>Error</div>
  const title = data.data.slots[0].title;
  const endTime = getTime(data.data.slots[0].endAt);
  
  return (
    <div>
        <div className='icon'>
          <Link href='/programs/[ch_id]' as={`/programs/${id}`}>
          <img className='channel_icon' src={thumbnail} />
          </Link>
          <p>{title}</p>
          <p>~{endTime}</p>
        </div>


      <style jsx>{`
      .info {
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 50px 0;
      }
      .icon {
        margin: 50px 0;
        display: flex;
        justify-content: flex-start;
      }
      .channel_icon {
        display: block;
        background-color: black;
        padding: 10px;
        border-radius: 10px;
        cursor: pointer;
      }
      `}</style>
    </div>
  );
}

export default ShowChannel;

const getTime = (time: string) => {
  
  return time.slice(-14,-9);

}