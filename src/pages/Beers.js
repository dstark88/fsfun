import React, { Component } from "react";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import { Input, FormBtn } from "../components/Form";
import SearchForm from "../components/SearchForm";
import LikeForm from "../components/LikeForm";
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
        // console.log("res.data[i]: ", res.data[i]);
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

  // Update likes
  handleLikeSubmit = event => {
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
        if (res.data[i].name.includes(this.state.brand)) {
          console.log("res.data[i]: ", res.data[i].likes);
          return axios({
            url: "https://cors-anywhere.herokuapp.com/https://beer.fluentcloud.com/v1/beer/" + res.data[i].id,
            method: "put",
            data: {
              likes: ++res.data[i].likes,
            },
          })
          .then(res => {
            // this.setState({ beers: res.data, name: "", likes: "" })
            this.loadBeers()
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
            <button type="submit" onClick={this.loadBeers} className="btn btn-success">
              All Beers
            </button>
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
            <Row>
              <Col size="md-12">
              <h1>Like A Beer Here:</h1>
                <LikeForm
                  handleLikeSubmit={this.handleLikeSubmit}
                  handleInputChange={this.handleInputChange}
                  brands={this.state.brands}
                  beer={this.state.beers}
                />
                <button id="like" className="btn btn-primary" onClick={this.handleLikeSubmit}>
                  Likes
                </button>
                  {" "}
                <button id="dislike" className="btn btn-danger" onClick={this.handleLikeSubmit}>
                  Dislikes
                </button> 
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Beers;
