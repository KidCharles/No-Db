import React, { Component } from 'react';

import './reset.css';
import './App.css';
import axios from 'axios';

import Header from './components/Header.js';
import Sidenav from './components/Sidenav.js';
import Well from './components/Well'


class App extends Component {
  constructor() {
    super();

    this.state = {
      wishes: [],
      wishInput: 'name of wish',
      imageInput: '',
      editName: ''
    }
    //bind methods!
    this.deleteWish = this.deleteWish.bind(this)
    this.editInput = this.editInput.bind(this)
    this.changeWish = this.changeWish.bind(this)

  }

  //functions go here
  componentDidMount() {
    axios.get('/api/getWish').then(res => {
      this.setState({ wishes: res.data })
    })

  }

  addWish() {
    axios.post('/api/addWish', { name: this.state.wishInput, url: this.state.imageInput }).then(res => {
      this.setState({ wishes: res.data, wishInput: '', imageInput: '' })
    })

  }

  deleteWish(id) {
    axios.delete(`/api/deleteWish/${id}`).then(res => {
      this.setState({ wishes: res.data })
    })
  }

  changeWish(id) {
    axios.put(`/api/changeWish/${id}`, { name: this.state.editName }).then(res => {
      this.setState({ wishes: res.data, editName: '' })
    })
  }

  editInput(e) {
    this.setState({ editName: e.target.value })
  }

  render() {
    console.log(this.state);
    let mappedWishes = this.state.wishes.map((x, i) => {
      return (
        //keys need to be in the top tag of where your mapping
        <Well key={i + x.name}
          name={x.name}
          changeWish={this.changeWish}
          id={x.id}
          url={x.url}
          editName={this.state.editName}
          editInput={this.editInput}
          deleteWish={this.deleteWish}
        />
      )
    })
    return (
      <div className="app" >
        <div>
          <Header />
          <div className='sidenav'>
            <Sidenav />

          </div>
          <link href="https://fonts.googleapis.com/css?family=Alegreya+Sans+SC:100|Anton|Roboto+Condensed" rel="stylesheet" />
        </div>
        <main>
          <div className='wish'>
            <p>Wish</p>
            <input value={this.state.wishInput} onChange={e => this.setState({ wishInput: e.target.value })} />
            <p>URL</p>
            <input type='url' value={this.state.imageInput} onChange={e => this.setState({ imageInput: e.target.value })} />
            <br /><br />
            <button onClick={() => this.addWish()}>Drop in the Well</button>
          </div>
          <div className='well'>
            <h1 >WELL</h1>
            <br /><br />
            {mappedWishes}
          </div>
        </main>
      </div>
    );
  }
}


export default App;
