import React from 'react';
import axios from 'axios';
import CarPost from '../components/CarPost'
import OffCanvas from '../components/OffCanvas'
import css from './SearchPage.css';

export default class SearchPage extends React.Component {

    state = {
        data: [],
        searchBrand: "",
        searchType: "",
        searchYear: "",
        searchPrice: "",
        searchRating: ""
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

    onlyBrandSearch = async () => {
        //RESET THE STATE WHEN RECLICK ONLYBRANDSEARCH
        this.setState({
            data: [],
            searchType: "",
            searchYear: "",
            searchPrice: "",
            searchRating: ""
        })


        const response = await axios.get(this.BASE_API_URL + "car", {
            params: {
                brand: this.state.searchBrand,

            }

        })


        this.setState({
            data: response.data
        })
    }

    filterSearch = async () => {


        const response = await axios.get(this.BASE_API_URL + "car", {
            params: {
                brand: this.state.searchBrand,
                year_of_launch: this.state.searchYear,
                type: this.state.searchType,
                cost_price: this.state.searchPrice,
                rating: this.state.searchRating
            }

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
                        onClick={this.onlyBrandSearch}

                    >Brand Search</button>

                    <div className='OffCanvas-div'>

                        <OffCanvas
                            searchBrand={this.state.searchBrand}
                            searchType={this.state.searchType}
                            searchYear={this.state.searchYear}
                            searchPrice={this.state.searchPrice}
                            searchRating={this.state.searchRating}
                            updateFormField={this.updateFormField}
                            filterSearch={this.filterSearch}
                        />

                    </div>

                </div>

                <div className='container'>

                    <div className='row'>
                        {
                            this.state.data.map(c =>
                                <CarPost car={c} />)


                        }

                    </div>


                </div>



            </React.Fragment>
        )

    }




}