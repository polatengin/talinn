import React, { useRef } from 'react';

import Webcam from 'react-webcam';

export const App: React.FunctionComponent = () => {

  const webcam = useRef<Webcam>(null);

  return (
    <>
    <header className="header">
        <div className="title">face mask App</div>
      </header>
      <Webcam
        audio={false}
        ref={webcam}
        style={{
          position: "absolute",
          margin: "auto",
          textAlign: "center",
          top: 100,
          left: 0,
          right: 0,
        }}
      />
    </>
  );
}
