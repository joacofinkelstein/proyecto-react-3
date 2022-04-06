import React, { Component } from 'react';
class  Article extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }

    render() {
        return(
            //Prueba Git
            <article>
            <main>
                <img src="./img/image-default.png" alt=""/>
                <h3>Título/ Nombre</h3>
                <p class="description">Laaaaaaaaaipsum dolor sit amet consectetur adipisicing elit. Sint cumque velit minus facere
                    laboriosam voluptatem impedit ea unde labore optio eius quis, dignissimos expedita. Culpa, soluta
                    perspiciatis! Sint, laboriosam cum.</p>
                <section class="aditional-info">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse qui atque.</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse qui atque.</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse qui atque.</p>
                </section>
                <a href="">Ver más</a>
            </main>
        </article>);
    }
}

export default Article;