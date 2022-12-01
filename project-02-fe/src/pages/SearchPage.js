import React from 'react';

import axios from 'axios';
import CarPost from '../components/CarPost'
import OffCanvas from '../components/OffCanvas'
import css from './SearchPage.css';
import CarPostDetails from '../components/CarPostDetails'
import SeeDetailedPost from '../components/SeeDetailedPost';

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
        yearLengthError: false,
        page: "general",
        singleSearchSavedId: null,
        detailedSearchPressed: false,
        singleCarObject: {}

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

    async componentDidUpdate() {
        if (this.state.detailedSearchPressed === true
            &&
            Object.keys(this.state.singleCarObject).length === 0
        ) {

            // console.log(Object.keys(this.state.singleCarObject).length)
            let a = this.state.singleSearchSavedId
            // console.log(a)
            // console.log(this.BASE_API_URL + "car/" +
            //     this.state.singleSearchSavedId)
            let endpoint = this.BASE_API_URL + "car/" +
                this.state.singleSearchSavedId

            let response = await axios.get(endpoint)
            // console.log("ComponentUpdate", response.data[0])

            this.setState({
                singleCarObject: response.data[0]
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


    renderPage = () => {

        if (this.state.page === "single") {

            // CANNOT READ INTO NESTED OBJECT UNLESS YOU TRY
            let color = null;
            let colorShade = null;
            let comfortFeaturesProp = null;
            let stringConvert = null;

            try {
                colorShade = this.state.singleCarObject.color["shade"] && this.state.singleCarObject.color["shade"]
                // console.log(colorShade)
                color = this.state.singleCarObject.color["name"] && this.state.singleCarObject.color["name"]
                // console.log(color)
                console.log("Object",this.state.singleCarObject)
                // console.log(this.state.singleCarObject.comfort_features_id
                // )

                // comfortFeaturesProp = [...this.state.singleCarObject.comfort_features_id]
                // console.log("HERE",comfortFeaturesProp)


                
                comfortFeaturesProp = this.state.singleCarObject
                
                // console.log("Before pass",comfortFeaturesProp)

                stringConvert = comfortFeaturesProp.comfort_features_id.join(', ')
                // console.log(stringConvert)

                
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
                    />

                </React.Fragment>


            )



        } else if (this.state.page === "general") {
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
                                this.state.data.map((c) =>
                                    <CarPost
                                        key={c._id}
                                        car={c}

                                        changeSearchStateDetailedPost={this.changeSearchStateDetailedPost}
                                    />)


                            }

                        </div>



                    </div>





                </React.Fragment>
            )


        }
    }

    changeSearchStateDetailedPost = (c) => {


        // console.log(c);
        // console.log("saveId to state worked")
        this.setState({
            "singleSearchSavedId": c,
            "page": "single",
            "detailedSearchPressed": true
        })





    }

    callFunctionFirst = async () => {
        console.log("detailedSearchedPressed => ", this.state.detailedSearchPressed)
        if (this.state.detailedSearchPressed === true) {
            // let a = this.state.singleSearchSavedId
            // console.log(a)
            // console.log(this.BASE_API_URL + "car/" +
            //     this.state.singleSearchSavedId)
            let endpoint = this.BASE_API_URL + "car/" +
                this.state.singleSearchSavedId

            // let response = await axios.get(endpoint)
            // console.log(response.data)

            // console.log("Query id", response.data)
            return (<h2>The api function ran</h2>)
            //return response.data




        }

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