import React, { useRef } from 'react'
import axios from 'axios'
import IsVisible from 'react-is-visible'
import { Fade } from 'react-reveal'
import { skills } from '../../data/skills.json'
import { useContainerDimensions } from '../../hooks'


//const url = 'https://springboot-mysql-web-app.herokuapp.com/api/v1/skillsapi'

//const fetcher = (...args) => fetch(...args).then((res) => res.json())

class Skills extends React.Component {


  // * constructor
  // *
  // * @object  @props  parent props
  // * @object  @state  component state

  constructor(props) {

      super(props);

      this.state = {
          items: [],
          isLoaded: false
      }

  }


  // * componentDidMount
  // *
  // * Fetch json array of objects from given url and update state.

  componentDidMount() {

    axios.get('http://localhost:8080/api/v1/skillsapi', {
      headers: {
        "Content-Type": "application/json",
      },
    })
          .then(res => {
              this.setState({
                  items: res.data,
                  isLoaded: true, 
              })
          }).catch((err) => {
              console.log(err);
          });

  }


  // * render
  // *
   //* Render UI
   
  render() {

      const { isLoaded, items } = this.state;

      if (!isLoaded)
          return <div>Loading...</div>;

      return (
          <div className="App">
              <ul>
                  {items.map(item => (
                      <li key={item.id}>
                          Skill Name: {item.skillName} | Amount: {item.amount}
                      </li>
                  ))}
              </ul>
          </div>
      );

  }

}

export default Skills;