
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Main from './components/Main/Main';


function App() {
  return (
    <div className="App">

      <Header/>
      <div className='container-fluid'>
        <Main />
      </div>
      <Footer/>
    
    </div>
  );
}

export default App;
