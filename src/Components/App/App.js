import { Route, NavLink, Switch } from "react-router-dom";
import Home from '../Home/Home';
import MovieSearch from '../MovieSearch/MovieSearch';
import MovieDetailPage from '../MovieDetailPage/MovieDeatilPage';
import NotFound from '../NotFound/NotFound';

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

    <Switch>
      <Route exact path="/" component={ Home }/>
      <Route exact path="/movies" component={ MovieSearch }/>
      <Route path="/movies/:movieId" component={ MovieDetailPage }/>
      <Route component={ NotFound }/>
    </Switch>
  </>
);
export default App;
