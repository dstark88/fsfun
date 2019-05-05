import React, { Component } from "react";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import { Input, FormBtn } from "../components/Form";
import SearchForm from "../components/SearchForm";
import SearchResults from "../components/SearchResults";
import axios from 'axios';

class Beers extends Component {
  state = {
    search: "",
    brands: [],
    results: [],
    id: "",
    name: "",
    likes: "",
    beers: [],
  };

  componentDidMount() {
    this.loadBeers()
  }
// Get all
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

// Get 1 search
  handleSearchSubmit = event => {
    event.preventDefault();
    return axios({
      url: "https://cors-anywhere.herokuapp.com/https://beer.fluentcloud.com/v1/beer/",
      method: "get",
      data: {
        name: "",
      },
    })
    .then(res => {
      for(var i =0; i < res.data.length; i++) {
        console.log("res.data[i]: ", res.data[i]);
        if (res.data[i].name.includes(this.state.brand)) {
          return axios({
            url: "https://cors-anywhere.herokuapp.com/https://beer.fluentcloud.com/v1/beer/" + res.data[i].id,
            method: "get",
            data: {
              name: "",
            },
          })
          .then(res => {
            this.setState({ beers: res.data, name: "", likes: "" })
          })
        } 
      }
    })
    .catch(function (error) {
      console.log(error);
    });    
  }

// Post new beer
  handleFormSubmit = event => {
    event.preventDefault();
;    return axios({
      url: "https://cors-anywhere.herokuapp.com/https://beer.fluentcloud.com/v1/beer/",
      method: "post",
      data: {
        name: this.state.name,
        likes: "1"
      },
    })
    .then(res => {
      this.setState({ beers: res.data })
      this.loadBeers()
    })
    .catch(function (error) {
      console.log(error);
    });
  }
// add or delete likes
  handleLike = event => {
    event.preventDefault();
    return axios({
      url: "https://cors-anywhere.herokuapp.com/https://beer.fluentcloud.com/v1/beer/",
      method: "get",
      data: {
        name: "",
      },
    })
    .then(res => {
      for(var i =0; i < res.data.length; i++) {
        // console.log("res.data[i]: ", res.data[i]);
        if (res.data[i].name === this.state.brand) {
          return axios({
            url: "https://cors-anywhere.herokuapp.com/https://beer.fluentcloud.com/v1/beer/" + res.data[i].id,
            method: "put",
            data: {
              name: "",
              likes: "",
            },
          })
          .then(res => {
            console.log("like: ", res.data);

            // this.setState({ brand: res.data[i].name })
            // console.log("name/brand: ", this.state.brand);
            // console.log("res in second one: ", res.data);
            // this.setState({ beers: res.data, name: "", likes: "" })
          })
        } 
      }
    })
    .catch(function (error) {
      console.log(error);
    });    
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
                    <p>
                    <button 
                        data-action="like" 
                        type="button" 
                        className="btn btn-primary mr-2"
                        onClick={this.handleLike}>
                        Like
                    </button>
                    <button 
                        data-action="dislike" 
                        type="button" 
                        className="btn btn-secondary"
                        onClick={this.handleLike}>
                        Dislike
                    </button>
                </p>
                  </ListItem>
                ))}
              </List>
            ) : (
              <h3>No Results to Display</h3>
            )}
          </Col>
          <Col size="md-6">
            <Row>
              <Col size="md-12">
              <h1>Search Beer Here:</h1>
                <SearchForm
                  handleSearchSubmit={this.handleSearchSubmit}
                  handleInputChange={this.handleInputChange}
                  brands={this.state.brands}
                  beer={this.state.beers}
                />
                <SearchResults results={this.state.results} />
              </Col>
            </Row>
            <Row>
              <Col size="md-12">
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
          </Col>
        </Row>

      </Container>
    );
  }
}

export default Beers;
