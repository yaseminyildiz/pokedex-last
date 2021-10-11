import React, {Component} from "react";
import { Link } from "react-router-dom";

class PokemonDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
        name: '',
        imageUrl: '',
        pokemonIndex: ''
     
        
      };
    }
    componentDidMount() {
        const name = this.props.name;
        const url = this.props.url;
      
        const pokemonIndex = url.split('/')[url.split('/').length - 2];
        const imageUrl = `https://github.com/PokeAPI/sprites/blob/master/sprites/pokemon/${pokemonIndex}.png?raw=true`;
        
        this.setState ({
           name: name,
           imageUrl: imageUrl,
           pokemonIndex: pokemonIndex ,
           
        });
    }

    render () {
       
   

        return(
           
            <Link to= {`pokemon/${this.state.pokemonIndex}`}>
                <div className="container">
                </div>
            <div className="row">
                <div className="col-4">
                <p>{this.state.pokemonIndex}</p>
                <p>{this.state.name}</p>
                <img src={this.state.imageUrl} alt="pokemon-img"/>
                </div>
        
            </div>
            </Link>
        )
    }
}
export default PokemonDetail;