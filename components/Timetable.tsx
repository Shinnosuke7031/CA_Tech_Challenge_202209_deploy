import React, { FC, useState, useEffect } from 'react';
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import AirtimeIcon from './AirtimeIcon';
import Drawer from '@material-ui/core/Drawer';
import grey from '@material-ui/core/colors/grey';
import orange from '@material-ui/core/colors/orange';


const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
    display: 'flex',
    justifyContent: 'center'
  },
  paper: {
    padding: '10px 20px',
    textAlign: "center",
    color: grey[900],
    cursor: 'pointer',
    backgroundColor: grey[200],
    border: '1px black solid'
  },
  paper_now: {
    padding: '10px 20px',
    textAlign: "center",
    color: grey[900],
    cursor: 'pointer',
    backgroundColor: orange[100],
    border: '1px black solid'
  }
}));


type TypeProgram = {
  id: string,
  channelId: string,
  title: string,
  highlight: string,
  startAt: string,
  endAt: string,
  thumbnail: string
}

type Props = {
  programs: TypeProgram[];
}
const Timetable: FC<Props> = (props) => {
  
  const classes = useStyles();
  const [isOpen, setIsOpen] = useState(false);
  const [Current, setCurrent] = useState(0);//[hh, mm]
  const [program, setProgram] = useState({title: '', highlight: '', thumbnail: '', startAt: '', endAt: ''});
  
  const programs = props.programs;
  const startAt = programs.map((program) => 
                              {
                                if (program.startAt[11] === '0') return program.startAt.slice(-13,-9);
                                else return program.startAt.slice(-14,-9);
                              });
  const endAt = programs.map((program) => 
                              {
                                if (program.endAt[11] === '0') return program.endAt.slice(-13,-9);
                                else return program.endAt.slice(-14,-9);
                              });
  const Airtimes: number[] = startAt.map((startTime, index) => {//放送時間取得
    const isTail = index === startAt.length - 1;
    return getAirtime(startTime, endAt[index], isTail)
  });


  const toggleDrawer = (bool: boolean) => {
    setIsOpen(bool);
  };

  const setData = (program: TypeProgram, index: number) => {
    setProgram({
      title: program.title,
      highlight: program.highlight,
      thumbnail: program.thumbnail,
      startAt: startAt[index],
      endAt: endAt[index]
    })
  }
  const start_value = startAt.map((time) => {
    const startStr: string[] = time.split(':');
    const start_h = Number(startStr[0]);
    const start_m = Number(startStr[1]);
    return start_h + start_m / 60;
  })

  const end_value = endAt.map((time, index) => {
    let isTail = false;
    if (index === endAt.length - 1) isTail = true;
    const Str: string[] = time.split(':');
    const end_h = Number(Str[0]);
    const end_m = Number(Str[1]);
    return isTail ? 24 : end_h + end_m / 60;
  })

  useEffect(()=>{
    const date1 = new Date();
    const date2 = date1.getHours()
    const date3 = date1.getMinutes();

    const CurrentValue = date2 + date3 / 60;
    const now_time = start_value.filter((start, index) => {

      return ((start < CurrentValue ) && ( end_value[index] > CurrentValue ));
    });

    setCurrent(now_time[0]);
  },[])

  return (
    <div className={`${classes.root}`}>
      <Grid container spacing={1}>

        {programs.map((program, index) => 
        <Grid key={index} container item xs={12} spacing={0} direction="column"  justify="center">
          <div className='program_info'>
            
            <div className='time_info'>
              {startAt[index]}
              <AirtimeIcon num={Airtimes[index]} />
              {endAt[index]}
            </div>
            {Current !== start_value[index] ? <Paper className={`${classes.paper} prog_info`} style={{width: '600px'}} onClick={()=>{setData(program, index); toggleDrawer(true);}}>
              <div className='prog_info'>
                <h1>{program.title}</h1>
                {/*<p>{program.highlight}</p>*/}
                {Airtimes[index] > 1.5 && <img src={program.thumbnail} />}
              </div>
            </Paper>
            :<Paper className={`${classes.paper_now} prog_info`} style={{width: '600px'}} onClick={()=>{setData(program, index); toggleDrawer(true);}}>
              <div className='prog_info'>
                <h1>{program.title}</h1>
                {/*<p>{program.highlight}</p>*/}
                {Airtimes[index] > 1.5 && <img src={program.thumbnail} />}
              </div>
            </Paper>
            }

          </div>
        </Grid>  
        )}
      </Grid>

      <Drawer anchor='right' open={isOpen} onClose={() => toggleDrawer(false)} >
        <div className={`side_info`}>
          <p style={{textAlign: 'left', paddingBottom: '20px'}}>番組概要</p>
          <h1>{program.title}</h1>
          <p>{program.highlight}</p>
          <img src={program.thumbnail} />
          <div className='box'>
            <p>開始：{program.startAt}</p>
            <p>終了：{program.endAt}</p>

          </div>
        </div>
      </Drawer>

      <style jsx>{`
        .program_info {
          display: flex;
          justify-content: flex-start;
          width: 800px;
        }
        .time_info {
          display: flex;
          flex-direction: column;
          width: 80px;
          margin: 0 0 0 100px;
        }
        .prog_info {
          height: 100%;
          width: 100%;
          transform: scale(1.0,1.0);
          transition: 0.5s all;
        }
        .prog_info:hover{
          transform: scale(1.1,1.1);
          transition: 0.5s all;
        }

        h1{
          font-size: 20px;
          font-weight: bold;
        }
        img {
          display: block;
          width: 100px;
          height: 100px;
          margin: 20px auto;
          border-radius: 5px;
          border: 1px solid black;
        }

        .side_info {
          padding: 10px;
          text-align: center;
          background: black;
          color: white;
          height: 100vh;
        }

        .side_info h1 {
          margin: 10px;
          text-align: center;
          width: 300px;
        }
        .side_info img {
          display: block;
          width: 240px;
          height: 240px;
          margin: 10px auto;
        }
        .box {
          border: 1px solid rgb(189, 184, 184);
          border-radius: 5px;
          width: 130px;
          margin: 0 auto;
        }

      `}</style>

    </div>
  );

}
export default Timetable;

const getAirtime = (startAt: string, endAt: string, isTail: boolean) => {

  const startStr: string[] = startAt.split(':');
  const endStr: string[] = endAt.split(':');
  const start_h = Number(startStr[0]);
  const start_m = Number(startStr[1]);
  const end_h = Number(endStr[0]);
  const end_m = Number(endStr[1]);

  const start_value = start_h + start_m / 60 ;
  const end_value = isTail ? 24 : end_h + end_m / 60;

  const airTime = (end_value - start_value);
  console.log(airTime)

  return airTime;
}

/*<h1>{name}</h1>
      {programs.map((program, index) => (
        <div key={index}>
          <p>番組名 : {program.title}</p>
          <p>{program.startAt.slice(-14,-9)} ~ {program.endAt.slice(-14,-9)}</p>
        </div>
      ))}*/