import React from 'react';

import axios from 'axios';
import CarPost from '../components/CarPost'
import OffCanvas from '../components/OffCanvas'
import css from './SearchPage.css';
import Modal2 from '../components/Modal2'

export default class SearchPage extends React.Component {

    state = {
        data: [],
        searchBrand: "",
        searchType: "",
        searchYear: "",
        searchPrice: "",
        searchRating: "",
        existingCarTypes: [],
        existingCarBrand: [],
        makeAutoYear: null,
        yearGreaterError: false,
        yearLengthError: false

    }

    BASE_API_URL = "http://localhost:3080/"

    async componentDidMount() {

        const response = await axios.get(this.BASE_API_URL + "car")

        //setting existingCarBrands to the current brands in Mongodb

        let carData = response.data
        let existingCarBrand = []
        for (let car of carData) {
            existingCarBrand.push(car.brand)
        }

        existingCarBrand = [...new Set(existingCarBrand)]
        // console.log(existingCarBrand)

        //setting existingCarTypes to current type of cars in Mongo
        let carData2 = response.data;
        let existingCarTypes = [];
        for (let car of carData2) {
            existingCarTypes.push(car.type)
        }
        // console.log(carTypes)

        existingCarTypes = [...new Set(existingCarTypes)];
        // console.log(carTypes);


        this.setState({
            data: response.data,
            existingCarTypes: existingCarTypes,
            existingCarBrand: existingCarBrand
        })
        // console.log(this.state.data)


        // SET THE CURRENT YEAR FOR VALIDATION 
        let makeAutoYear = new Date()
        makeAutoYear = makeAutoYear.getFullYear()
        console.log(makeAutoYear)
        this.setState({
            makeAutoYear: makeAutoYear
        })

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


        // Make yearError come out if number greater than current year is 
        // keyed in 
        // if ((parseInt(this.state.searchYear) >= this.state.makeAutoYear) 
        // || parseInt(this.state.searchYear).length !== 4 )

        if (parseInt(this.state.searchYear) > this.state.makeAutoYear) {


            this.setState({
                yearGreaterError: true,
            })
        } else {
            this.setState({
                yearGreaterError: false
            })
        }

        if (parseInt(this.state.searchYear).toString().length !== 4) {


            this.setState({
                yearLengthError: true,
            })
        } else {
            this.setState({
                yearLengthError: false
            })
        }





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


    /////////////DELETE////////////////////
    // yearError = () => {
    //     this.setState({
    //         yearError: true
    //     })
    // }

    openModalDetail = (c) => {
        alert("Checking Modal Function")
        return (
            <React.Fragment>
                {console.log("return ran")}
                <Modal2 />

            </React.Fragment>

        )




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
                            yearGreaterError={this.state.yearGreaterError}
                            yearLengthError={this.state.yearLengthError}
                            makeAutoYear={this.state.makeAutoYear}
                            existingCarTypes={this.state.existingCarTypes}
                            existingCarBrand={this.state.existingCarBrand}
                        />

                    </div>

                </div>

                <div className='container'>

                    <div className='row test_center' >
                        {
                            this.state.data.map(c =>
                                <CarPost
                                    key={c._id}
                                    car={c}
                                    
                                />)


                        }

                    </div>
                    


                </div>



            </React.Fragment>
        )

    }




}