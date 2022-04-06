import React, { Component } from 'react';
class  Header extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (    
             <header>
            <h1>Título/ Nombre de la app</h1>
            <section>
                <i class="fas fa-th"></i>
                <i class="fas fa-align-justify"></i>
                <form action="">
                    <input type="text" name="search" id="" placeholder="Search"/>
                    <button type="submit"><i class="fas fa-search"></i></button>
                </form>
            </section>
        </header> );
    }
}
 
export default Header;