import React from 'react'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      dragons: [
        {name: 'Samael', breed: 'Guardian', level: '25', image:"Samael.png"},
        { name: 'Fangorn', breed: 'Guardian', level: '23', image: "Samael.png"},
        { name: 'Lien', breed: 'Guardian', level: '25', image: "Samael.png"}
      ]
    }
  }
  render() {
    return <div className="section has-text-centered">
      <h1 className="title is-1">Dragons!</h1>
      {this.state.dragons.map(dragon => <div className="box">
        <h1 className="title is-2">Name: {dragon.name}</h1>
        <h2 className="subtitle is-2">Breed: {dragon.breed}</h2>
        <h2 className="subtitle is-2">Level: {dragon.level}</h2>
        <img src={dragon.image}></img>
      </div>)}
    </div>
  }
}

export default App
