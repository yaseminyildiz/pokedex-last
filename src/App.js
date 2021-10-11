import React, {Component} from "react";
import PokemonList from "./PokemonList";
import PokemonDetail from './PokemonCard';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
 



class App extends Component {
 
 
 
    
    render() {
      
        return (
          <Router>
            <Switch>
            {/* <Route path="/pokemonlist/:id" Component={PokemonList}/> */}
            <Route exact path="/pokemon/:pokemonIndex" component={PokemonDetail} />
            <PokemonList/>
            {/* <PokemonDetail/> */}
          </Switch>
          </Router>
          
        
         
         
          
        );
      }
    
  }
export default App;