import React, {Component} from 'react'

class FilterField extends Component{
    constructor(props){
        super(props)
        this.state={
            value:'',
        }
    }
    evitarDefault(accionDefault){
        console.log('evitando envio de formulario');
        accionDefault.preventDefault()
    }

    obtenerDatos(datos){
        this.setState({
            value: datos.target.value
        },
        ()=> this.props.filtrarTracks(this.state.value))
    }

    render(){
        return(
            <div className='shadow mb-4'>
                <form onSubmit={(event)=>this.evitarDefault(event)}>
                    <input onChange={(cambios)=>this.obtenerDatos(cambios)} className='form-control form-control-color-danger' type='text' name='usuario' placeholder='Buscar Tracks' value={this.state.value}/>
                </form>
            </div>
        )
    }


}
export default FilterField