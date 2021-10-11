import React, {Component} from "react";
import PokemonDetail from "./PokemonCard";

  class PokemonList extends Component {
  constructor(props) {
      super(props);
      this.state = {
      error: null,
      isLoaded: false,
      pokemonIndex: '',
      results: [],
    };
  }

 componentDidMount() {
  fetch('https://pokeapi.co/api/v2/pokemon?limit=5')
    .then(res => res.json())
    .then(
      (result) => {
        this.setState({
          isLoaded: true,
          results: result.results,
          
        });
      },
      // Note: it's important to handle errors here
    // instead of a catch() block so that we don't swallow
    // exceptions from actual bugs in components.
      (error) => {
        this.setState({
          isLoaded: true,
          error
        });
      }
    )
}
render() {
    

  const { error,isLoaded, results } = this.state;
 

  if (error) {
    return <div>Error: {error.message}</div>;
   } else if (!isLoaded) {
   return <div>Loading...</div>;
  } else {
      
    return (
        
            <div>
                {results.map(pokemon => (
                <PokemonDetail
                    key={pokemon.name}
                    name={pokemon.name}
                    url={pokemon.url}
                />
                ))}
            </div>
      
        
    );
  }
}
  
}
  export default PokemonList;