import React from 'react';

const DownloadButton = ({name}) => {
  return (
    <div>
      <a href={`/${name}`} download>
        <button  className="btn btn-outline-success get-started-btn">Download</button>
      </a>
    </div>
  );
};

export default DownloadButton;
