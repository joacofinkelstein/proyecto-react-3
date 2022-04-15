import React, { Component } from 'react';
import './Header.css'

class  Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
        
        }
    }


    render() { 
        return (    
            <header className='header'>
                <div className='logo'>
                    <i class="musica fas fa-solid fa-music fa-2x"></i>
                    <h1>Deezer Music</h1>
                </div>
            </header> 
        )
    }
}
 
export default Header;