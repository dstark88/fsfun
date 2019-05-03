// import React, { Component } from "react";
// import Card from "../components/Card";
// import axios from 'axios';


// class Discover extends Component {
//   state = {
//     beerList: [],
//     name: "",
//     likes: 0,
//   };

//   // When the component mounts, load the next Beer to be displayed
//   componentDidMount() {
//     this.axiosGetBeer();
//   }

//   handleBtnClick = event => {
//     // Get the data-value of the clicked button
//     const btnType = event.target.attributes.getNamedItem("data-value").value;
//     // Clone this.state to the newState object
//     // We'll modify this object and use it to set our component's state
//     const newState = { ...this.state };

//     if (btnType === "pick") {
//       // Set newState.match to either true or false depending on whether or not the Beer likes us (1/5 chance)
//       newState.match = 1 === Math.floor(Math.random() * 5) + 1;

//       // Set newState.matchCount equal to its current value or its current value + 1 depending on whether the Beer likes us
//       newState.matchCount = newState.match
//         ? newState.matchCount + 1
//         : newState.matchCount;
//     } else {
//       // If we thumbs down'ed the Beer, we haven't matched with it
//       newState.match = false;
//     }
//     // Replace our component's state with newState, load the next Beer image
//     this.setState(newState);
//     this.axiosGetBeer();
//   };
//   updateBeerList() {
//     {
//       this.axiosGetBeer()
//       .then(data => {
//         this.setState({
//           beerList: data.data.slice(0, 25)
//         })
//       })
//       .catch(err => console.log(err));
//       console.log('Updating Beer Cooler')
//     }
//   }
//   axiosGetBeer = () => {
//     return axios({
//       url: "https://cors-anywhere.herokuapp.com/https://beer.fluentcloud.com/v1/beer/",
//       method: "get",
//       headers: { "Content-Type": "application/json" }
//     })
//     .then(console.log(this.state.beerList, "Axios Call completed"));
//   }

//   render() {
//     return (
//       <div>
//         <h1 className="text-center">Find New Beers!</h1>
//         <h3 className="text-center">
//           Thumbs up on any beer you'd like to drink!
//         </h3>
//         <Card image={this.state.name} handleBtnClick={this.handleBtnClick} />
//         <h1 className="text-center">
//           You like {this.state.matchCount} beers so far!
//         </h1>
//       </div>
//     );
//   }
// }

// export default Discover;
