import Link from 'next/link';
import Layout from '../components/Layout';

const ProgramGuide = () => {
  
  
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
