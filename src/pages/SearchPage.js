import React from 'react';

import axios from 'axios';
import CarPost from '../components/CarPost'
import OffCanvas from '../components/OffCanvas'
import css from './SearchPage.css';

import SeeDetailedPost from '../components/SeeDetailedPost';
import Button from 'react-bootstrap/esm/Button';

import { Player } from '@lottiefiles/react-lottie-player';


export default class SearchPage extends React.Component {

    state = {
        data: [],
        searchBrand: "",
        searchType: "",
        searchYear: "",
        minPrice: "",
        maxPrice: "",
        searchRating: "",
        existingCarTypes: [],
        existingCarBrand: [],
        makeAutoYear: null,
        yearGreaterError: false,
        yearLengthError: false,
        page: "general",
        singleSearchSavedId: null,
        detailedSearchPressed: false,
        singleCarObject: {},
        saveIDToAllowCompDidUpdate: "",
        changeStateForRender: false,
        isLoaded: false

    }

    BASE_API_URL = "https://project2-timothy-carousel.onrender.com/"
    // BASE_API_URL = "http://localhost:3080/"

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
            existingCarBrand: existingCarBrand,
            isLoaded: true
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

    async componentDidUpdate() {
        if (this.state.detailedSearchPressed === true
            &&
            // this.saveIDToAllowCompDidUpdate!=this.state.singleSearchSavedId


            Object.keys(this.state.singleCarObject).length === 0


            // take out  Object.keys(this.state.singleCarObject)._id!= this.state.singleSearchSavedId
        ) {

            console.log("Single Car Object", this.state.singleCarObject)
            console.log("Single Car Object ID", this.state.singleCarObject?._id)
            console.log("Need to load this singleSearchSavedId", this.state.singleSearchSavedId)

            // console.log(Object.keys(this.state.singleCarObject).length)
            let a = this.state.singleSearchSavedId
            // console.log(a)
            // console.log(this.BASE_API_URL + "car/" +
            //     this.state.singleSearchSavedId)
            let endpoint = this.BASE_API_URL + "car/" +
                this.state.singleSearchSavedId

            let response = await axios.get(endpoint)
            console.log("CarSearchUpdate", response.data[0])

            let saveIDToAllowCompDidUpdate = response.data[0]._id
            console.log("saveIDToAllowCompDidUpdate", saveIDToAllowCompDidUpdate)

            this.setState({
                singleCarObject: response.data[0],
                saveIDToAllowCompDidUpdate: saveIDToAllowCompDidUpdate,
                singleSearchSavedId: saveIDToAllowCompDidUpdate
            })
        }

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
                min_price: this.state.minPrice,
                max_price: this.state.maxPrice,
                rating: this.state.searchRating
            }

        })


        console.log(response.data)
        this.setState({
            data: response.data,
            isLoaded: true
        })

    }


    renderPage = () => {

        if (this.state.page === "single") {

            // CANNOT READ INTO NESTED OBJECT UNLESS YOU TRY
            let color = null;
            let colorShade = null;
            let comfortFeaturesProp = null;
            let stringConvert = null;

            try {
                colorShade = this.state.singleCarObject.color && this.state.singleCarObject.color["shade"]
                // console.log(colorShade)
                color = this.state.singleCarObject.color && this.state.singleCarObject.color["name"]
                // console.log(color)
                // console.log("Object", this.state.singleCarObject)
                // console.log(this.state.singleCarObject.comfort_features_id
                // )

                // comfortFeaturesProp = [...this.state.singleCarObject.comfort_features_id]
                // console.log("HERE",comfortFeaturesProp)

                comfortFeaturesProp = Array.isArray(this.state.singleCarObject.comfort_features_id) ? this.state.singleCarObject : null

                // console.log("Before pass",comfortFeaturesProp)




            } catch (e) {
                console.log(e)
            }



            return (
                <React.Fragment>
                    <SeeDetailedPost
                        {...this.state.singleCarObject}
                        colorShadeSpecial={colorShade}
                        colorSpecial={color}
                        comfortFeaturesProp={comfortFeaturesProp}
                        stringConvert={stringConvert}
                        changePreviousPage={this.changePreviousPage}
                        changeStateForRender={this.changeStateForRender}
                    />

                </React.Fragment>


            )



        } else if (this.state.page === "general") {

            //Display loading animation if not loaded yet 
            if (!this.state.isLoaded) {



                return (

                    <React.Fragment>
                        <h1>Find your car today!</h1>


                        <label>Brand</label>
                        <input type="text"
                            className='form-control'
                            value={this.state.searchBrand}
                            name="searchBrand"
                            onChange={this.updateFormField} />

                        <div className='button-search-div mt-3'>

                            <Button variant='light'
                                className='button-brand-green-style'
                                onClick={this.onlyBrandSearch}
                            >
                                Brand Search
                            </Button>


                            <div className='OffCanvas-div'>

                                <OffCanvas
                                    searchBrand={this.state.searchBrand}
                                    searchType={this.state.searchType}
                                    searchYear={this.state.searchYear}
                                    minPrice={this.state.minPrice}
                                    maxPrice={this.state.maxPrice}
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


                        <Player
                            src='https://assets5.lottiefiles.com/packages/lf20_gv7Ovi.json'
                            className='car-loading-animation-style'
                            loop
                            autoplay
                        />
                    </React.Fragment>

                )



            } else {
                return (
                    <React.Fragment>
                        <h1>Find your car today!</h1>


                        <label>Brand</label>
                        <input type="text"
                            className='form-control'
                            value={this.state.searchBrand}
                            name="searchBrand"
                            onChange={this.updateFormField} />

                        <div className='button-search-div mt-3'>

                            <Button variant='light'
                                className='button-brand-green-style'
                                onClick={this.onlyBrandSearch}
                            >
                                Brand Search
                            </Button>


                            <div className='OffCanvas-div'>

                                <OffCanvas
                                    searchBrand={this.state.searchBrand}
                                    searchType={this.state.searchType}
                                    searchYear={this.state.searchYear}
                                    minPrice={this.state.minPrice}
                                    maxPrice={this.state.maxPrice}
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

                            <div className='row card_div_center'
                                id='card_div_center_margin_media'
                            >
                                {
                                    this.state.data.map((c) =>
                                        <CarPost
                                            key={c._id}
                                            car={c}
                                            changeSearchStateDetailedPost={this.changeSearchStateDetailedPost}
                                            // changeSearchStateDetailedPost={() => this.changeSearchStateDetailedPost(c._id)}
                                            // changeSearchStateDetailedPost={()=> {this.changeSearchStateDetailedPost}
                                            //     }

                                            changePreviousPage={this.changePreviousPage}
                                        />)


                                }

                            </div>



                        </div>





                    </React.Fragment>
                )

            }




        }
    }

    changeSearchStateDetailedPost = async (c) => {
        // console.log("car id", c)
        let result = await axios.get(this.BASE_API_URL + "car/" + c);
        console.log("result", result)

        console.log("Check saved carID", c);
        // console.log("saveId to state worked")

        // this.setState({
        //     "singleSearchSavedId": c,
        //     "page": "single",
        //     "detailedSearchPressed": true
        // })

        this.setState({
            "singleCarObject": result.data[0],
            "page": "single",
            "detailedSearchPressed": true
        })





    }

    changePreviousPage = () => {

        this.setState({
            page: "general"
        })

    }

    changeStateForRender = () => {
        this.setState({
            changeStateForRender: !this.state.changeStateForRender
        })

    }






    render() {

        return (


            <React.Fragment>

                <div>

                    {this.renderPage()}
                </div>



            </React.Fragment>

        )




    }




}