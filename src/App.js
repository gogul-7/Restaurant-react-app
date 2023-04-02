
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import RestaurantList from './components/RestaurantList';
import RestaurantView from './components/RestaurantView';
import { Route,Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <header className="App-header">
          <Header />

          <Routes>
            <Route path="/" element={<RestaurantList/>}/>
  
            <Route path="/restaurant/:id" element={<RestaurantView/>}/>
          </Routes>

          <Footer/>
      </header>
    </div>
  );
}

export default App;
