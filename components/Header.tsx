import React, { FC } from 'react';

const Header: FC<{}> = () => {

  return (
    <div className='wrapper'>
      <p>
        made by のすけ
      </p>

      <style jsx>{`
      .wrapper {
        width: 100%;
        height: 50px;
        background-color: black;
        display: flex;
        justify-content: center;
        align-items: center;
      }
      p {
        color: white;
        display: flex;
        justify-content: center;
        align-items: center;
      }
      `}</style>
    </div>
  );
}

export default Header;