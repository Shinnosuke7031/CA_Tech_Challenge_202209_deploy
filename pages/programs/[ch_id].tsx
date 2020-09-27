import Layout from '../../components/Layout';
import { GetTimeTable } from '../../components/GetData';
import styles from '../../styles/animetion.module.css';
import { useRouter } from 'next/router';
import { getChannelName } from '../../functions/getValues';
import Timetable from '../../components/Timetable';


type TypeProgram = {
  id: string,
  channelId: string,
  title: string,
  highlight: string,
  startAt: string,
  endAt: string,
  thumbnail: string
}

const ProgramGuide = () => {
  const router = useRouter()
  const id  = router.query.ch_id;

  const { data, isLoading, isError } = GetTimeTable(id);
  if (isLoading) return <div className={styles.loader}></div>
  if (isError) return <div>Error</div>
  const programs: TypeProgram[] = data.data.slots;

  const name = getChannelName(id);

  return (
  <Layout title={`${name}の番組表`}>

      <img src={`/${id}.png`} className='channel_icon' />

    {/*programs.map((program, index) => (
      <div key={index}>
        <p>番組名 : {program.title}</p>
        <p>{program.startAt.slice(-14,-9)} ~ {program.endAt.slice(-14,-9)}</p>
      </div>
    ))*/}

    <Timetable programs={programs} />

    <style jsx>{`
      .channel_icon {
        display: block;
        margin: 30px auto;
        background-color: black;
        padding: 10px;
        border-radius: 10px;
        cursor: pointer;
        width: 200px;
      }
    `}</style>
    
  </Layout>
);}


export default ProgramGuide;
