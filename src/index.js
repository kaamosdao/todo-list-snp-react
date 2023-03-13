import ReactDOM from 'react-dom/client';
import init from './init.jsx';
import '../assets/styles/style.scss';

const render = () => {
  const root = ReactDOM.createRoot(document.querySelector('#root'));
  const App = init();
  root.render(App);
};

render();
