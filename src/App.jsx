import {Click} from "./components/Practice_react/Click" ;
import Functionclick from "./components/Practice_react/Functionclick";
import Pstate from "./components/Practice_react/Pstate";
// import Chat from "./components/chat/Chat";
// import List from "./components/list/List";
// import Detail from "./components/detail/Details";
// import './index.css';



const App = () => {
  return (
    <div className='container'>
      <Click name='Ram' wife="Sita Maiya">
        <p>Ram is Maryada Purushottam . He is vishnu avtar</p>
        </Click>
        <Pstate />
       <Functionclick/>
      {/* <List/>
      <Chat/>
      <Detail/> */}
    </div>
  )
}

export default App;