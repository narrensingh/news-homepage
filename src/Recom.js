import React from 'react';
import './Recom.css';

const Recom = ({ Number, Title, Content, Source }) => {
  return (
    <div className="recom">
      <div className="recom__left">
        <img className="recom__leftImg" src={Source} alt="recom_image" />
      </div>
      <div className="recom__right">
        <h2 className="recom_num">{Number}</h2>
        <h2 className="recom_title">{Title}</h2>
        <p className="recom_content">{Content}</p>
      </div>
    </div>
  );
};

export default Recom;
