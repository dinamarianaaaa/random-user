import React, { Component } from "react";
import './Home.css';
 
class Home extends Component {
 
  constructor(props) {
    super(props);
    this.state = {
      items: []
    };
  }
 
  componentDidMount() {
      fetch("https://randomuser.me/api/?results=100")
        .then(res => res.json())
        .then(parsedJSON => parsedJSON.results.map(data => (
          {
            id: `${data.id.name}`,
            firstName: `${data.name.first}`,
            lastName: `${data.name.last}`,
            age: `${data.age}`,
            location: `${data.location.city}, ${data.location.state}, ${data.postcode}`,
            email: `${data.email}`,
            thumbnail: `${data.picture.large}`,
 
          }
        )))
        .then(items => this.setState({
          items,
          isLoaded: false
        }))
        .catch(error => console.log('parsing failed', error))
    }
 
    render() {
      const {items } = this.state;
        return (
          <div className="boxWhite">
            <h2>Random User</h2>
            {
              items.length > 0 ? items.map(item => {
              const {id, firstName, lastName, age, location, email, thumbnail} = item;
               return (
 
               <div key={id} className="bgBox">
               <center><img src={thumbnail} alt={firstName} className="box"/> </center><br />
               <div className="ctr">
                  {firstName} {lastName}<br />
                  {age} <br />
                  {location} <br />
                  {email}
                </div>
 
              </div>
              );
            }) : null
          }
          </div>
        );
 
    }
  }
 
export default Home;