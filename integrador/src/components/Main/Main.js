import React, { Component } from "react";
import Article from "../Article/Article";
class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tracks: [],
    };
  }

  componentDidMount() {
    fetch(
      "https://thingproxy.freeboard.io/fetch/https://api.deezer.com/chart/0/tracks&top?limit=10"
    )
      .then((result) => result.json())
      .then((resultado) => {
        console.log(resultado);
        console.log(resultado.data[0].title);
        this.setState({
          tracks: resultado.data,
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
  render() {
    return (
      this.state.tracks.map( (track, idx) => <Article key={track.title + idx} dataTrack={track} borrarTrack={ (id)=>this.borrar(id) } />)

    )
  }
}

export default Main;
