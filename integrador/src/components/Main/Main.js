import React, { Component } from "react";
import Article from "../Article/Article";
import FilterField from '../FilterField/FilterField'
import Header from '../Header/Header'

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tracks: [],
      next: 0,
      orient: <i class="fas fa-solid fa-bars"></i>,
      horizontal: true,
      orientClassName: 'row containerT'
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
          next: this.state.next
        });
      })
      .catch((e) => console.log(e));
  }

  borrar(id){
    let filteredTracks = [];
    filteredTracks = this.state.tracks.filter( track => track.id !== id );

    this.setState({
      tracks: filteredTracks
    })
  }
  
  filtrarTracks(textoAFiltrar){
    let tracksFiltrados = []
    
    tracksFiltrados = this.state.tracks.filter( track => track.title.toLowerCase().includes(textoAFiltrar.toLowerCase()))

    this.setState({
        tracks: tracksFiltrados
    })
  }
  
  pedirMas(){
    let url = `https://thingproxy.freeboard.io/fetch/https://api.deezer.com/chart/${this.state.next+ 2}/tracks&top?limit=10`
    fetch(url)
    .then (response=> response.json())
    .then ((resultado)=>{
      console.log(resultado);
      this.setState({
        tracks: this.state.tracks.concat(resultado.data),
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
        <div className='inputs'>
          <FilterField filtrarTracks={(textoAFiltrar)=>this.filtrarTracks(textoAFiltrar)}/>
          <div className='orientacion'>
            <button className='btn btn-outline-danger' onClick={()=> this.orient()}type='button'>{this.state.orient}</button>
          </div>
        </div>
        <div className={this.state.orientClassName}>
          {
            this.state.tracks.length === 0?
            <div className='container-fluid'>
              <i class="fas fa-regular fa-spinner fa-spin "></i>
              <p>Loading tracks...</p>
            </div>:
            this.state.tracks.map( (track, idx) => <Article key={track.title + idx} dataTrack={track} borrarTrack={ (id)=>this.borrar(id) } />)
          }
        </div>
        <button className='btn btn-outline-danger' type='button'onClick={()=>this.pedirMas()} >Pedir Mas</button>
      </div>

    )}
}


export default Main;
