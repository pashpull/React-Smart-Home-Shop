import { BrowserRouter } from 'react-router-dom';
import { Route, Routes } from 'react-router';
import { Provider } from 'react-redux';

import 'normalize.css';
import './App.scss';
import { store } from './redux/store';

import HomePage from './pages/Home-Page/Home-Page';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <Provider store={store}>
      <Header />
      <BrowserRouter basename="React-Smart-Home-Shop">
        <Routes>
          <Route index element={<HomePage />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </Provider>
  );
}

export default App;