import React from 'react';

export default function Event({titulo, descricao, hora, local}){
    return(
        <section className='section-container'>
        <div>
            <p>{titulo}</p>
            <p>{descricao}</p>
            <p>{hora}</p>
            <p>{local}</p>
        </div>
            
            <img src="./src/images/evento.jpg"></img>
      
        </section>
    )
}