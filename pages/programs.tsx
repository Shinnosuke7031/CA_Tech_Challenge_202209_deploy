
import Layout from '../components/Layout';
//import styles from '../../styles/animetion.module.css';
//import Timetable from '../components/Timetable';

/*type TypeProgram = {
  id: string,
  channelId: string,
  title: string,
  highlight: string,
  startAt: string,
  endAt: string,
  thumbnail: string
}*/

//const ch_ids = ['ch-0', 'ch-1', 'ch-2', 'ch-3', 'ch-4'];

const ProgramGuide = () => {

  return (
  <Layout title={`全番組表`}>
    <h1>全チャンネル一覧</h1>
    {/*ch_ids.map((id, index) => (
      <Timetable  />
    ))*/}
    
  </Layout>
);}


export default ProgramGuide;