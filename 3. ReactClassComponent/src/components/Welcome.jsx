//Example of  Class Component for Multi Component Pages
import React, { Component } from 'react'
export class Welcome extends React.Component{
  render(){
    return(
      <>
      <header className='modal-header'>
        <h1>Hello This is Class Component(Welcome.jsx)</h1>
      </header>
      <section className='card p-3 m-3'>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea ipsum vero impedit qui quis facere alias, accusamus dignissimos obcaecati accusantium eius cupiditate eligendi earum sunt harum pariatur at mollitia natus?
        Deserunt consectetur dicta eligendi rem labore, maxime laborum voluptatem error aliquam molestiae tempore tenetur! Eligendi, aliquam nemo, rerum sint laborum velit eveniet fugiat enim suscipit vitae hic explicabo, ullam illum!
        Dolore repellat doloremque veniam assumenda impedit placeat, cumque, eveniet culpa aliquid sit distinctio, qui eos sequi cupiditate dolores laborum quas laboriosam quae corporis alias totam dicta obcaecati! Laudantium, fugit culpa!
        Similique error alias dignissimos iure, eos, sint pariatur magni veniam porro eveniet, nulla vero modi cum consequatur ea! Voluptate veritatis animi, corporis expedita a reiciendis magni distinctio deserunt aut accusamus?</p>
      </section>
      </>
    );
  }
}