import { Header } from './components/Header';
import { Home } from './views/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { PokemonDetail } from './views/PokemonDetail';
function App() {
  return (
    <div className="App">
      <Router>
        <Header />

        <Switch>
          <Route path="/:name">
            <PokemonDetail />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
