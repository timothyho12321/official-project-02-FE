import React from 'react';
import axios from 'axios';
import CarPost from '../components/CarPost'
import OffCanvas from '../components/OffCanvas'
import css from './SearchPage.css';

export default class SearchPage extends React.Component {

    state = {
        data: [],
        searchBrand: "",
        searchPrice: "",
        searchYear: ""
    }

    BASE_API_URL = "http://localhost:3080/"

    async componentDidMount() {
        const response = await axios.get(this.BASE_API_URL + "car")
        this.setState({
            data: response.data
        })
        // console.log(this.state.data)
    }

    updateFormField = (event) => {

        this.setState({
            [event.target.name]: event.target.value


        })

    }

    filterSearch = async () => {

        // const response = await axios.get(this.BASE_API_URL + "car" + "?brand=" + this.searchBrand)


        const response = await axios.get(this.BASE_API_URL + "car", {
            params: { brand: this.state.searchBrand }

        })


        // console.log(response.data)
        this.setState({
            data: response.data
        })

    }



    render() {

        return (
            <React.Fragment>
                <h1>This is the SearchPage</h1>


                <label>Brand</label>
                <input type="text"
                    className='form-control'
                    value={this.state.searchBrand}
                    name="searchBrand"
                    onChange={this.updateFormField} />

                <div className='button-search-div mt-3'>
                    <button className='btn btn-primary '
                        onClick={this.filterSearch}

                    >Search</button>

                    <div className='OffCanvas-div'> 
                    
                    <OffCanvas 
                    searchBrand = {this.state.searchBrand}
                    searchPrice = {this.state.searchPrice}
                    searchYear = {this.state.searchYear}
                    updateFormField = {this.updateFormField}
                    />
                    
                    </div>
                   
                    </div>

                {
                    this.state.data.map(c =>
                        <div className="card mt-3" key={c._id}>
                            <CarPost car={c} />


                        </div>)


                }

            </React.Fragment>
        )

    }




}