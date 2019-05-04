import React, { Component } from "react";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import { Input, FormBtn } from "../components/Form";
import SearchForm from "../components/SearchForm";
import SearchResults from "../components/SearchResults";
import axios from 'axios';
// import API from "../utils/API";


class Beers extends Component {
  state = {
    search: "",
    brands: [],
    results: [],
    error: "",
    id: "",
    name: "",
    likes: "",
    beers: [],
    newBeer: "",
  };

  componentDidMount() {
    this.loadBeers()
  }

  loadBeers = () => {
    return axios({
      url: "https://cors-anywhere.herokuapp.com/https://beer.fluentcloud.com/v1/beer/",
      method: "get",
      data: {
        id: "",
        name: "",
        likes: ""
      },
    })
    .then(res => {
      this.setState({ beers: res.data, name: "", likes: ""})
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    // if (this.state.search)
    // API.getBrand({
    //   id: this.state.id,
    //   name: this.state.name,
    //   likes: this.state.likes,
    // })

    if (this.state.search)
      return axios({
        url: "https://cors-anywhere.herokuapp.com/https://beer.fluentcloud.com/v1/beer/",
        method: "get",

      })
      .then(res => {
        console.log("search");
        console.log("data ", this.state.search);
        // for (var i)
        // this.setState({ results: res.data.message});
       })
     .catch(err => (err));
  }

  render() {
    return (
      <Container fluid>
        <Row>

          <Col size="md-6">
              <h1>Beer in Juliette' Cooler</h1>
            {this.state.beers.length ? (
              <List>
                {this.state.beers.map(beer => (
                  <ListItem key={beer.id}>
                    <a href={"/beers/" + beer.id}>
                      <strong>
                        {beer.name} with {beer.likes} likes
                      </strong>
                    </a>
                  </ListItem>
                ))}
              </List>
            ) : (
              <h3>No Results to Display</h3>
            )}
          </Col>
            <Row>
              <Col size="md-6">
              <h1>Search Beer Here:</h1>
                <SearchForm
                  handleFormSubmit={this.handleFormSubmit}
                  handleInputChange={this.handleInputChange}
                  brands={this.state.brands}
                />
                  <datalist id="brand">
                    {this.state.brands.map(brand => <option key={brand}>{brand}</option>)}
                  </datalist>
                <SearchResults results={this.state.results} />
              </Col>
            </Row>
            <Row>
              <Col size="md-6">
                  <h1>Add a Beer:</h1>
                <form>
                  <Input 
                    list="name" 
                    value={this.state.name}
                    onChange={this.handleInputChange}
                    name="name"
                    placeholder="Name of Beer (required)" 
                  />
                  <FormBtn
                    onClick={this.handleFormSubmit}
                  >
                    Submit
                  </FormBtn>
                </form>
              </Col>
            </Row>

        </Row>

      </Container>
    );
  }
}

export default Beers;
