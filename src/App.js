import { Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import NavbarComponent from './components/navbar';
import FooterComponent from './components/footer_component';
import PopularTitles from './pages/popular_titles';
import Series from './pages/series';
import Movies from './pages/movies';

function App() {
  return (
    <Fragment>
      <NavbarComponent />
      <Switch >
        <Route exact path='/' component={PopularTitles} />
        <Route exact path='/series' component={Series} />
        <Route exact path='/movies' component={Movies} />
      </Switch>
      <FooterComponent />
    </Fragment>
  );
}

export default App;
