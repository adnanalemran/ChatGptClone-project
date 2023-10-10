import gptLogo from "../assets/chatgpt.svg";
import addBtn from "../assets/add-30.png";
import messageIcon from "../assets/message.svg";
import home from "../assets/home.svg";
import saved from "../assets/bookmark.svg";
 
 

const App = () => {
  return (
    <div className="App">
      <div className="sidebar">
        <div className="upperSide">
          <div className="upperSideTop">
            <img src={gptLogo} alt="" className="logo" />
            <span className="brand">ChatGpt+ ONTor</span>
            <button className="midBtn">
              <img src={addBtn} alt="New Chat" className="addBtn" />
              new chat
            </button>
            <div className="upperSideBottom">
              <button className="query">
                <img src={messageIcon} alt="query" />
                what id programming
              </button>
              <button className="query">
                <img src={messageIcon} alt="query" />
                how to use api 
              </button>
            </div>
          </div>
        </div>
        <div className="lowerSide">
          <div className="listItems">
            <img src={home} alt="" className="listItemsImg" />
            Home
          </div>
          <div className="listItems">
            <img src={saved} alt="" className="listItemsImg" />
            Saved
          </div>
        </div>
      </div>
      <div className="main"></div>
    </div>
  );
};

export default App;
