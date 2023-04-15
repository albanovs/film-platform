import { store } from './redux/store'
import { Routes, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import { HomePage } from './pages/home-page';
import { OrderPage } from './pages/order-page';
import { Header } from './components/header';
import { FilmPage } from './pages/film-page'
import './index.css'

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/film/:title" element={<FilmPage />} />
          <Route path="/order" element={<OrderPage />} />
        </Routes>
      </div>
    </Provider>
  )
}

export default App;
