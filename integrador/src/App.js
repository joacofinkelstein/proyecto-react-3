import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Article from './components/Article/Article'
function App() {
  return (
    <div className="App">
    <Header/>
    <main>
        <button type="button">Cargar más tarjetas</button>
        <section class="card-container">
            <article>
                <main>
                    <img src="./img/image-default.png" alt=""/>
                    <h3>Título/ Nombre</h3>
                    <p class="description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint cumque velit minus facere laboriosam voluptatem impedit ea unde labore optio eius quis, dignissimos expedita. Culpa, soluta perspiciatis! Sint, laboriosam cum.</p>
                    <section class="aditional-info">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse qui atque.</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse qui atque.</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse qui atque.</p>
                    </section>
                    <a href="">Ver más</a>
                </main>
            </article>
            <Article/>
            <article>
                <main>
                    <img src="./img/image-default.png" alt=""/>
                    <h3>Título/ Nombre</h3>
                    <p class="description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint cumque velit minus facere
                        laboriosam voluptatem impedit ea unde labore optio eius quis, dignissimos expedita. Culpa, soluta
                        perspiciatis! Sint, laboriosam cum.</p>
                    <section class="aditional-info">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse qui atque.</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse qui atque.</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse qui atque.</p>
                    </section>
                    <a href="">Ver más</a>
                </main>
            </article>
            <article>
                <main>
                    <img src="./img/image-default.png" alt=""/>
                    <h3>Título/ Nombre</h3>
                    <p class="description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint cumque velit minus facere
                        laboriosam voluptatem impedit ea unde labore optio eius quis, dignissimos expedita. Culpa, soluta
                        perspiciatis! Sint, laboriosam cum.</p>
                    <section class="aditional-info">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse qui atque.</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse qui atque.</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse qui atque.</p>
                    </section>
                    <a href="">Ver más</a>
                </main>
            </article>
            <article>
                <main>
                    <img src="./img/image-default.png" alt=""/>
                    <h3>Título/ Nombre</h3>
                    <p class="description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint cumque velit minus facere
                        laboriosam voluptatem impedit ea unde labore optio eius quis, dignissimos expedita. Culpa, soluta
                        perspiciatis! Sint, laboriosam cum.</p>
                    <section class="aditional-info">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse qui atque.</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse qui atque.</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse qui atque.</p>
                    </section>
                    <a href="">Ver más</a>
                </main>
            </article>
            <article>
                <main>
                    <img src="./img/image-default.png" alt=""/>
                    <h3>Título/ Nombre</h3>
                    <p class="description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint cumque velit minus facere
                        laboriosam voluptatem impedit ea unde labore optio eius quis, dignissimos expedita. Culpa, soluta
                        perspiciatis! Sint, laboriosam cum.</p>
                    <section class="aditional-info">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse qui atque.</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse qui atque.</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse qui atque.</p>
                    </section>
                    <a href="">Ver más</a>
                </main>
            </article>
            <article>
                <main>
                    <img src="./img/image-default.png" alt=""/>
                    <h3>Título/ Nombre</h3>
                    <p class="description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint cumque velit minus facere
                        laboriosam voluptatem impedit ea unde labore optio eius quis, dignissimos expedita. Culpa, soluta
                        perspiciatis! Sint, laboriosam cum.</p>
                    <section class="aditional-info">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse qui atque.</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse qui atque.</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse qui atque.</p>
                    </section>
                    <a href="">Ver más</a>
                </main>
            </article>
        </section>
    </main>
    <Footer/>
    
    </div>
  );
}

export default App;
