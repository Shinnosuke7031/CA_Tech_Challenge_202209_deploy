import React, { FC } from 'react';
import MoreVertIcon from '@material-ui/icons/MoreVert';

type Props = {
  num: number;
}

const AirtimeIcon: FC<Props> = (props) => {
  const num = props.num;
  const nulls = Array(Math.floor(num*6)).fill('');

  return (
    <React.Fragment>
      {nulls.map((tmp, index)=>
        <div key={index}>
          {tmp}
          <MoreVertIcon fontSize='small' />
        </div>
      )}
      <style jsx>{`
        div {
          margin: -5.5px 0 -5.5px 0;
        }
      `}</style>
    </React.Fragment>
  );
}

export default AirtimeIcon;