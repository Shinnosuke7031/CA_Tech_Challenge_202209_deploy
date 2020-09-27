import Link from 'next/link';
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

const logos: string[] = ['ch-0', 'ch-1', 'ch-2', 'ch-3', 'ch-4'];

const IndexPage = (props: Props) => {

  return (
  <Layout title="チャンネル一覧">

      <h1>ON AIR</h1>

      {props.channels.map((channel, index) => 
        <div className='info' key={index}>
          <Link href='/programs/[ch_id]' as={`/programs/${logos[index]}`}>
            <img className='channel_icon' src={`/${logos[index]}.png`} />
          </Link>
          <ShowChannel key={index} data={channel} logo={logos[index]}/>
        </div>
      )}



    <style jsx>{`
      h1 {
        font-size: 50px;
        font-weight: bold;
        font-style: italic;
        margin: 25px 0 0 0;
      }
      .info {
        margin: 30px 0 30px 70px;
        display: flex;
        justify-content: flex-start;
      }
      .channel_icon {
        display: block;
        background-color: black;
        padding: 10px;
        border-radius: 10px;
        cursor: pointer;
        height: 80px;
        overflow: hidden;
        transition: 0.5s all;
        z-index: 10;
        border: 1px solid black;
      } 
      .channel_icon:hover{
        transform: scale(1.2,1.2);
        transition: 0.5s all;
      }
    `}</style>
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
