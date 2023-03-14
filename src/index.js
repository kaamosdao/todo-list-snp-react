import ReactDOM from 'react-dom/client';
import LocalStorageData from './utils/localStorageData.js';
import init from './init.jsx';
import '../assets/styles/style.scss';

const render = () => {
  const localStorageTodo = new LocalStorageData('todosTestTask');
  const root = ReactDOM.createRoot(document.querySelector('#root'));
  const App = init(localStorageTodo);
  root.render(App);
};

render();
