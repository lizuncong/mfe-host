import './App.css';
import Button from './components/Button';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        子应用消费远程容器暴露的模块
      </header>
      <Button />
    </div>
  );
}

export default App;
