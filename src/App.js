import './App.css';
import Button from './components/Button';
import Components from 'container/Components';
import lodash from 'lodash'
import axios from 'axios';
import  Cookies from 'js-cookie';
function App() {
  console.log('lodash ..', lodash, axios, Cookies)
  return (
    <div className="App">
      <header className="App-header">
        子应用消费远程容器暴露的模块
      </header>
      <Button />
      <Components />
    </div>
  );
}

export default App;
