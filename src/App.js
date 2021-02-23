import './App.css';
import Sidebar from './Components/Sidebar';
import Main from './Components/Main';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
    <div className="App">
      <Sidebar/>
      <Main/>
    </div>
  );
}

export default App;
