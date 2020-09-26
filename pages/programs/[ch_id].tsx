
import Layout from '../../components/Layout';
import { GetTimeTable } from '../../components/GetData';
import styles from '../../styles/animetion.module.css';
import { useRouter } from 'next/router'

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
  console.log(programs)

  return (
  <Layout title={`${id}の番組表`}>
    <h1>{id}</h1>
    {programs.map((program, index) => (
      <div key={index}>
        <p>番組名 : {program.title}</p>
      </div>
    ))}
    
  </Layout>
);}


export default ProgramGuide;
