/* eslint-disable no-unused-vars */
import { BrowserRouter } from 'react-router-dom';
import Pages from './pages/Pages';
import Category from './components/Category';

function App() {
  return (
    <BrowserRouter>
      <h1>Hello</h1>
      <Category />
      <Pages />
    </BrowserRouter>
  );
}

export default App;
