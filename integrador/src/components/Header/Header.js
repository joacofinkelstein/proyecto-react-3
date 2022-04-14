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
                <i class="musica fas fa-solid fa-music fa-2x"></i>
                <h1>Deezer Music</h1>
            </header> 
        )
    }
}
 
export default Header;