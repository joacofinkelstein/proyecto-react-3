import React, { Component } from "react";
import Article from "../Article/Article";
import FilterField from '../FilterField/FilterField'
import "./Main.css"
import Header from '../Header/Header'

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tracks: [],
      filteredTracks: [],
      next: 0,
      loaded: false,
      articleClassName: "columna"
    };
  }

  componentDidMount() {
    fetch(
      `https://thingproxy.freeboard.io/fetch/https://api.deezer.com/chart/${this.state.next}/tracks&top?limit=10`
    )
      .then((result) => result.json())
      .then((resultado) => {
        console.log(resultado);
        this.setState({
          tracks: resultado.data,
          filteredTracks: resultado.data,
          next: this.state.next,
          loaded: true

        });
      })
      .catch((e) => console.log(e));
  }

  ordenColumna(){
    this.setState({
      articleClassName: "zoom columna"
    })
  }
  ordenFila(){
    this.setState({
      articleClassName: "zoom fila"
    })
  }

  borrar(id) {
    let filteredTracks = [];
    filteredTracks = this.state.tracks.filter(track => track.id !== id);

    this.setState({
      tracks: filteredTracks,
      filteredTracks: filteredTracks
    })
  }

  filtrarTracks(textoAFiltrar) {
    let tracksFiltrados = []

    tracksFiltrados = this.state.tracks.filter(track => track.title.toLowerCase().includes(textoAFiltrar.toLowerCase()))

    this.setState({
      filteredTracks: tracksFiltrados
    })
  }

  pedirMas() {
    let url = `https://thingproxy.freeboard.io/fetch/https://api.deezer.com/chart/${this.state.next + 2}/tracks&top?limit=10`
    fetch(url)
      .then(response => response.json())
      .then((resultado) => {
        console.log(resultado);
        this.setState({
          tracks: this.state.filteredTracks.concat(resultado.data),
          filteredTracks: this.state.filteredTracks.concat(resultado.data),
          next: this.state.next + 2
        })
      })
      .catch(error => console.log(error))

  }

  orient(){
    if(!this.state.horizontal){
        this.setState({
            orient: <i class="fas fa-solid fa-border-all"></i>,
            horizontal: true,
            orientClassName: 'column containerT'
        })
    } else{
        this.setState({
            orient: <i class="fas fa-solid fa-bars"></i>,
            horizontal: false,
            orientClassName: 'row containterT'
        })
    }
}


  render() {
    return (
      <div className='containerT'>
        <div className='botones'>
          <button type='button' className='boton btn btn-outline-danger' onClick={() => this.ordenFila()} ><i class="fas fa-solid fa-bars"></i></button>
          <button type='button' className='boton btn btn-outline-danger' onClick={() => this.ordenColumna()} ><i class="fas fa-solid fa-border-all"></i></button>
        </div>
  
        <FilterField filtrarTracks={(textoAFiltrar) => this.filtrarTracks(textoAFiltrar)} />
        {
          this.state.loaded ? 
          <div className='row containerTracks'>
            {
              this.state.filteredTracks.map((track, idx) => <Article key={track.title + idx} dataTrack={track} borrarTrack={(id) => this.borrar(id)} articleClassName={this.state.articleClassName} />)
            }
          </div>: <div class="lds-ring"><div></div><div></div><div></div><div></div></div>
        }

        <button type='button' className='boton btn btn-outline-danger' onClick={() => this.pedirMas()} >Pedir Mas</button>
      </div>

    )
  }
}


export default Main;
