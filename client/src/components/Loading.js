import React from 'react';

const Loading = () => {
  return (
    <div
      style={{
        maxHeight: '600px',
        maxWidth: '800px',
        height: '250px',
        width: '480px',
        backgroundImage: `url(${require('../assets/img/loading.gif')})`,
        backgroundPosition: 'center center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'contain',
        marginTop: '130px',
        marginLeft: 'auto',
        marginRight: 'auto',
      }}
    ></div>
  );
};

export default Loading;
