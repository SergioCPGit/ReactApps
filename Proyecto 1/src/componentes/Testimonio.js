import React from 'react';
import '../HojasDeEstilo/Testimonio.css';

function Testimonio (props){
    return(
        <div className='contenedor-testimonio'>
            <img 
            className='imagen-testimonio'
            src={require(`../imagenes/${props.imagen}.jpg`)}
            alt='fotoLuffy'/>
            <div className='contenedor-texto-testimonio'>
                <p className='nombre-testimonio'> <strong>{props.nombre}</strong> </p>
                <p className='cargo-testimonio'> {props.cargo} </p>
                <p className='texto-testimonio'> {props.texto}</p>
            </div>
        </div>
    );
}

export default Testimonio;