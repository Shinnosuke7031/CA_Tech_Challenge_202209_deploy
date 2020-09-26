import Link from 'next/link';
import Layout from '../components/Layout';
import { GetTimeTable } from '../components/GetData';

const ProgramGuide = () => {
  const { data, isLoading, isError} = GetTimeTable();
  if (isLoading) return <div></div>
  if (isError) return <div>Error</div>
  const titles = data.data.slots.map((tmp: any) => tmp.title);
  
  
  return (
  <Layout title="番組表">
    <h1>About</h1>
    <p>This is the about page</p>
    <p>
      <Link href="/">
        <a>Go home</a>
      </Link>
    </p>
  </Layout>
);}


export default ProgramGuide;
