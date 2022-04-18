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
            
            <div className={this.props.articleClassName}>
                <button className='delete'onClick={ ()=>this.props.borrarTrack(this.props.dataTrack.id)}><i className='delete'onClick={ ()=>this.props.borrarTrack(this.props.dataTrack.id)}className="fas bi fa-trash"></i></button>
                <img src={this.props.dataTrack.album.cover_xl} alt={this.props.dataTrack.title}/>
                <h3 className='text'>{this.props.dataTrack.title}</h3>
                <h5 className="description artista">{this.props.dataTrack.artist.name}</h5>
                <section className={this.state.descClassName}>
                    <p className='masInfo'>Album : {this.props.dataTrack.album.title}</p>
                    <p className='masInfo'>Duration : {this.props.dataTrack.duration} seconds</p>
                    <p className='masInfo'>Ranking : {this.props.dataTrack.rank}</p>
                </section>
                <p className="descButton" onClick={()=> this.showDescription()}>{this.state.text}</p>
            </div>   
        )}
}

export default Article;