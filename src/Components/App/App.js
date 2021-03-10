import React, { lazy, Suspense } from 'react';
import { Route, NavLink, Switch } from "react-router-dom";
// import Home from '../Home/Home';
// import MovieSearch from '../MovieSearch/MovieSearch';
import NotFound from '../NotFound/NotFound';
import Loader from 'loader';
// import MovieDetailPage from '../MovieDetailPage/MovieDeatilPage';

const MovieDetailPage = lazy(() => import('../MovieDetailPage/MovieDeatilPage'));
const MovieSearch = lazy(() => import('../MovieSearch/MovieSearch'));
const Home = lazy(() => import('../Home/Home'));

const App = () => (
  <>
    <ul>
      <li >
        <NavLink to="/">
          Home
        </NavLink>
      </li>
      <li >
        <NavLink to="/movies">
          Movies
        </NavLink>
      </li>
    </ul>

    <Suspense fallback={<h1>Loading...</h1>}>
      <Switch>
        <Route exact path="/" component={ Home }/>
        <Route exact path="/movies" component={ MovieSearch }/>
        <Route path="/movies/:movieId" component={ MovieDetailPage }/>
        <Route component={ NotFound }/>
      </Switch>
    </Suspense>
  </>
);
export default App;
