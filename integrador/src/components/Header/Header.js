import React, { Component } from 'react';
class  Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            
        }
    }
    render() { 
        return (    
            <header className='header'>
                <h1>Deezer Music</h1>
                <i class="musica fas fa-solid fa-music fa-2x"></i>
            </header> 
        )
    }
}
 
export default Header;