import React, { Component } from 'react';
import "./Article.css"
class Article extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: "Ver mas",
            showing: false,
            descClassName: "hidden"
        }
    }

    showDescription() {
        if (!this.state.showing) {
            this.setState({
                text: "Ver menos",
                showing: true,
                descClassName: "show"
            })
        } else {
            this.setState({
                text: "Ver mas",
                showing: false,
                descClassName: "hidden"
            })
        }


    }

    render() {
        return (
            
            <div className='card cardC shadow mb-4'>
                <button onClick={ ()=>this.props.borrarTrack(this.props.dataTrack.id)}>Eliminar</button>
                <img src={this.props.dataTrack.album.cover} alt="" />
                <h3>{this.props.dataTrack.title}</h3>
                <p className="description">{this.props.dataTrack.artist.name}</p>
                <section className={this.state.descClassName}>
                    <p>Album : {this.props.dataTrack.album.title}</p>
                    <p>Duration : {this.props.dataTrack.duration}</p>
                    <p>Ranking : {this.props.dataTrack.rank}</p>
                </section>
                <a className="descButton" onClick={()=> this.showDescription()}>{this.state.text}</a>
            </div>   
        )}
}

export default Article;