// import React, { Component } from "react";
// import Container from "../components/Container";
// import SearchForm from "../components/SearchForm";
// import SearchResults from "../components/SearchResults";
// import Axios from "axios";

// class Search extends Component {
//   state = {
//     search: "",
//     brands: [],
//     results: [],
//     error: ""
//   };

//   // When the component mounts, get a list of all available base brands and update this.state.brands
//   // componentDidMount() {
//   //   Axios.getBaseBrandsList()
//   //     .then(res => this.setState({ brands: res.data.message }))
//   //     .catch(err => console.log(err));
//   // }

//   handleInputChange = event => {
//     this.setState({ search: event.target.value });
//   };

//   // handleFormSubmit = event => {
//   //   event.preventDefault();
//   //   API.getDogsOfBrand(this.state.search)
//   //     .then(res => {
//   //       if (res.data.status === "error") {
//   //         throw new Error(res.data.message);
//   //       }
//   //       this.setState({ results: res.data.message, error: "" });
//   //     })
//   //     .catch(err => this.setState({ error: err.message }));
//   // };
//   render() {
//     return (
//       <div>
//         <Container style={{ minHeight: "80%" }}>
//           <h1 className="text-center">Search By Brand!</h1>

//           <SearchForm
//             handleFormSubmit={this.handleFormSubmit}
//             handleInputChange={this.handleInputChange}
//             brands={this.state.brands}
//           />
//           <SearchResults results={this.state.results} />
//         </Container>
//       </div>
//     );
//   }
// }

// export default Search;
