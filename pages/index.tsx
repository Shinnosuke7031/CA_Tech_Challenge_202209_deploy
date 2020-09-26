import Layout from '../components/Layout';
import ShowChannel from '../components/ShowChannel';


type TypeChannnel = {
  id: string;
  name: string;
  url: string;
  thumbnail: string;
}
interface Props {
  channels: TypeChannnel[];
}

const IndexPage = (props: Props) => {

  return (
  <Layout title="チャンネル一覧">
    
    {props.channels.map((channel, index) => 
      <ShowChannel key={index} data={channel} />
    )}

  </Layout>
);}

export async function getStaticProps() {
  const res = await fetch('https://ca-tech-challenge-web-202009.herokuapp.com/v2/channels');
  const data = await res.json();
  return {
    props: { 
      channels: data.data.channels,
    },
  }
}

export default IndexPage;
