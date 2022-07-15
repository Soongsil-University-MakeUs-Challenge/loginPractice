import "./App.css";
import Signup from "./components/signup";
import axios from 'axios'


function App() {


axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('token')}`;
axios.defaults.baseURL = 'http://localhost:5001';


  return (
    <div className="App">
      <header className="App-header">
        <Signup>
        </Signup>
      </header>
    </div>
  );
}

export default App;





































