import React, { Component } from "react";
import axios from 'axios';


class Search extends Component {
    state = {
        nameList: []
    }

    componentDidMount() {
        this.loadNameList()
    }

    loadNameList = () => {
        return axios({
            url: "https://cors-anywhere.herokuapp.com/https://beer.fluentcloud.com/v1/beer/",
            method: "get",
            data: {
              name: "",
            },
          })
          .then(res => {
              console.log("res: ", res.data);
            this.setState({ beers: res.data, name: ""})
          })
          .catch(function (error) {
            console.log(error);
          });    }

          render() {
            return (
                <>
                    <h2>Search</h2>
                    <form>
                        <label htmlFor="brand-choice">Brand name:</label>
                        <input list="brands" id="brand-choice" name="brand-choice" className="form-control" placeholder="Choose a Brand" />
                        <datalist id="brands">
                            {this.state.brandList.map(brand => <option key={brand}>{brand}</option>)}
                        </datalist>
                        <button type="submit" className="btn btn-success btn-block mt-2">Search</button>
                    </form>
                </>
            )
        }
       
    }

export default Search;
