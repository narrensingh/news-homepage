import React from 'react';
import './Body.css';
import desktopbanner from './images/image-web-3-desktop.jpg';
import mobilebanner from './images/image-web-3-mobile.jpg';

const Body = () => {
  return (
    <div className="body">
      <div className="body__left">
        <div className="body__leftTop">
          <picture>
            <source media="(max-width: 768px)" srcSet={mobilebanner} />
            <img
              className="body__leftTopbanner"
              src={desktopbanner}
              alt="web3banner"
            />
          </picture>
        </div>
        <div className="body__leftBottom">
          <div className="body__leftBottomheader">
            <h1>The Bright Future of Web 3.0?</h1>
          </div>
          <div className="body__leftBottomContent">
            <p>
              We dive into the next evolution of web that claims to put the
              power of the platforms back into the hands of people. But is it
              really fulfilling its promise
            </p>
            <button className="body__readMoreButton">READ MORE</button>
          </div>
        </div>
      </div>
      <div className="body__right">
        <h1 className="body__rightHeader">New</h1>
        <div className="body__rightHeadlineContainer">
          <div className="body__rightHeadline">
            <h2>Hydrogen VS Electric Cars</h2>
            <p>Will hydrogen-fueled cars ever catch up to EVs?</p>
          </div>
          <hr />
          <div className="body__rightHeadline">
            <h2>The Downsides of Al Artistry</h2>
            <p>
              What are the possible adverse effects of on-demand Al image
              generation?
            </p>
          </div>
          <hr />
          <div className="body__rightHeadline">
            <h2>Is VC Funding Drying Up?</h2>
            <p>
              Private funding by VC firms is down 50% YOY. We take a look at
              what that means.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Body;
