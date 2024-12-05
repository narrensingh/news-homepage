import './App.css';
import Body from './Body';
import Navbar from './Navbar';
import Recom from './Recom';
import retro_pc from './images/image-retro-pcs.jpg';
import laptops from './images/image-top-laptops.jpg';
import gaming from './images/image-gaming-growth.jpg';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Body />
      <div className="recoms">
        <Recom
          Source={retro_pc}
          Title={'Reviving Retro PCs'}
          Content={'What happens when old PCs are given modern upgrades?'}
          Number={'01'}
        />
        <Recom
          Source={laptops}
          Title={'Top 10 Laptops of 2022'}
          Content={'Our best picks for various needs and budgets.'}
          Number={'02'}
        />
        <Recom
          Source={gaming}
          Title={'The Growth of Gaming'}
          Content={'How the pandemic has sparked fresh opportunities.'}
          Number={'03'}
        />
      </div>
      <div className="footer">
        <p>Created By Narren Singh S</p>
        <p>
          Github: @<a href="https://github.com/narrensingh">narrensingh</a>
        </p>
      </div>
    </div>
  );
}

export default App;
