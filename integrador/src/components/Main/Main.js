import React, { Component } from "react";
import Article from "../Article/Article";
import FilterField from '../FilterField/FilterField'

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tracks: [],
      next: 0,
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



  render() {
    return (
      <div>
        <FilterField filtrarTracks={(textoAFiltrar)=>this.filtrarTracks(textoAFiltrar)}/>
        <div className=''>
          {
            this.state.tracks.map( (track, idx) => <Article key={track.title + idx} dataTrack={track} borrarTrack={ (id)=>this.borrar(id) } />)
          }
        </div>
        <button type='button'onClick={()=>this.pedirMas()} >Pedir Mas</button>
      </div>

    )}
}


export default Main;
