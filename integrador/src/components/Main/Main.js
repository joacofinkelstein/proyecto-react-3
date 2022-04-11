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
        this.setState({
          tracks: resultado.data,
        });
      })
      .catch((e) => console.log(e));
  }

  render() {
    return <Article data={this.state.tracks} />;
  }
}

export default Main;
