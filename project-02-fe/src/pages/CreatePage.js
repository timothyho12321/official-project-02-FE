import axios from 'axios'
import React from 'react'
import css from './CreatePage.css'

export default class CreatePage extends React.Component {

    state = {
        currentEngineDB: [],
        nameOfModel: "",
        yearOfLaunch: null,
        brandOfCar: "",
        typeOfCar: "",
        seatNumber: 2,
        color: "",
        colorShade: "",
        landTerrain: "",
        userName: "",
        email: "",
        rating: null,
        description: "",
        image: "",
        price: null,
        engineName: "",
        comfortFeatures: []

        //FOR USING TO CHECK CHECKBOXES COMFORT FEATURES--- TO DELETE
        // ["Blind Spot Monitoring",
        //     "Premium Sound System",
        //     "Wireless Connectivity",
        //     "Digital Keys",
        //     "AI Bot Alexa Enabled",
        //     "Ventilated Seats"]

    }

    BASE_API_URL = "http://localhost:3080/"

    async componentDidMount() {


        //Setting currentEngineDB into array and setState
        // currentEngine in mongoDB is a fixed list
        const response = await axios.get(this.BASE_API_URL + "engine")

        // console.log(response.data)

        // for (let e of response.data){
        //     console.log(e.engine_name)
        // }

        this.setState({
            currentEngineDB: response.data
        })
    }

    updateFormField = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })

    }

    updateCheckBoxes = (event) => {
        if (!this.state.comfortFeatures.includes(event.target.value)) {
            let modified = [...this.state.comfortFeatures, event.target.value]

            // console.log(modified);
            this.setState({
                comfortFeatures: modified
            })

        } else {

            let indexToReplace = this.state.comfortFeatures.indexOf(event.target.value)

            // console.log(indexToReplace);
            this.setState({
                comfortFeatures: [...this.state.comfortFeatures.slice(0, indexToReplace)
                    , ...this.state.comfortFeatures.slice(indexToReplace + 1)]
            })
        }

    }

    createCarPost = async () => {

        console.log(this.BASE_API_URL + "newcarandengine")

        const response = await axios.post(this.BASE_API_URL + "newcarandengine", {

            name_of_model: this.state.nameOfModel,
            year_of_launch: parseInt(this.state.yearOfLaunch),
            brand: this.state.brandOfCar,
            type: this.state.typeOfCar,
            seats: parseInt(this.state.seatNumber),
            // // KEY INTO PARAMS AS OBJECT IN FRONT END FOR COLOR (NAME AND SHADE)
            color: {
                "name": this.state.color,
                "shade": this.state.colorShade
            },
            land_terrain: this.state.landTerrain,
            username: this.state.userName,
            email: this.state.email,
            rating: this.state.rating,
            description: this.state.description,
            cost_price: parseInt(this.state.price),
            image: this.state.image,

            engine_name: this.state.engineName,
            top_speed: 70,
            engine_power: 30,
            oil_consumption: 2,

            comfort_features_id: this.state.comfortFeatures





        })
        console.log(response)



    }
    render() {

        return (
            <React.Fragment>
                <h3>Fill in the details to create a new car post.</h3>



                <div>
                    <label>Name of Model</label>
                    <input type="text"
                        className='form-control
                        '
                        name="nameOfModel"
                        value={this.state.nameOfModel}
                        onChange={this.updateFormField} />
                </div>

                <div className=
                    'create-input-div-space'
                >
                    <label >
                        Year of Launch</label>
                    <input type="number"
                        className='form-control'
                        name="yearOfLaunch"
                        value={this.state.yearOfLaunch}
                        onChange={this.updateFormField} />
                </div>
                <div className=
                    'create-input-div-space'
                >
                    <label>
                        Car Brand</label>
                    <input type="text"
                        className='form-control'
                        name="brandOfCar"
                        value={this.state.brandOfCar}
                        onChange={this.updateFormField} />
                </div>
                <div className=
                    'create-input-div-space'
                >
                    <label>
                        Car Type
                    </label>
                    <input type="text"
                        className='form-control'
                        name="typeOfCar"
                        value={this.state.typeOfCar}
                        onChange={this.updateFormField} />
                </div>

                <div className=
                    'create-input-div-space'
                >
                    <div>
                        Seat Number</div>
                    <input type="radio"
                        name="seatNumber"
                        value={2}
                        checked={parseInt(this.state.seatNumber) === 2}
                        onClick={this.updateFormField}
                    />
                    <label >2</label>
                    <input type="radio"
                        name="seatNumber"
                        value={4}
                        checked={parseInt(this.state.seatNumber) === 4}
                        onClick={this.updateFormField}
                        className="radio-button-style" />
                    <label >4</label>
                    <input type="radio"
                        name="seatNumber"
                        value={6}
                        checked={parseInt(this.state.seatNumber) === 6}
                        onClick={this.updateFormField}
                        className="radio-button-style" />
                    <label >6</label>


                </div>
                <div className=
                    'create-input-div-space'
                >
                    <label>
                        Color</label>
                    <input type="text"
                        className='form-control'
                        name="color"
                        value={this.state.color}
                        onChange={this.updateFormField} />
                </div>
                <div className=
                    'create-input-div-space'
                >
                    <label>
                        Color Shade</label>
                    <input type="text"
                        className='form-control'
                        name="colorShade"
                        value={this.state.colorShade}
                        onChange={this.updateFormField} />
                </div>

                <div className=
                    'create-input-div-space'
                >
                    <label>
                        Land Terrain</label>
                    <input type="text"
                        className='form-control'
                        name="landTerrain"
                        value={this.state.landTerrain}
                        onChange={this.updateFormField} />
                </div>

                <div className=
                    'create-input-div-space'
                >
                    <label>
                        Username
                    </label>
                    <input type="text"
                        className='form-control'
                        name="userName"
                        value={this.state.userName}
                        onChange={this.updateFormField} />
                </div>

                <div className=
                    'create-input-div-space'
                >
                    <label>
                        Email</label>
                    <input type="text"
                        className='form-control'
                        name="email"
                        value={this.state.email}
                        onChange={this.updateFormField} />
                </div>
                <div className=
                    'create-input-div-space'
                >

                    <label >
                        Car rating:</label>
                    <select name="rating"
                        value={this.state.rating}
                        onChange={this.updateFormField}
                    >
                        <option>Select one</option>
                        <option value={1}>1</option>
                        <option value={2}>2</option>
                        <option value={3}>3</option>
                        <option value={4}>4</option>
                        <option value={5}>5</option>
                    </select>
                </div>

                <div className=
                    'create-input-div-space'
                >
                    <label>Description</label>
                    <input type="text"
                        placeholder='Fill in details of car recommendation'

                        className='form-control'
                        name="description"
                        value={this.state.description}
                        onChange={this.updateFormField} />
                </div>
                <div className=
                    'create-input-div-space'
                >
                    <label>Image</label>
                    <input type="text"
                        placeholder='Type URL link of car image'
                        className='form-control'
                        name="image"
                        value={this.state.image}
                        onChange={this.updateFormField} />
                </div>
                <div className=
                    'create-input-div-space'
                >
                    <label>Select Price Estimate</label>
                    <select name="price"
                        value={parseInt(this.state.price)}
                        onChange={this.updateFormField}
                    >
                        <option value={40000}>Max $40,000</option>
                        <option value={60000}>Max $60,000</option>
                        <option value={80000}>Max $80,000</option>
                        <option value={100000}>Max $100,000</option>
                        <option value={120000}>Max $120,000</option>

                    </select>
                </div>
                <div className=
                    'create-input-div-space'
                >

                    <label>Engine Name</label>
                    <select name="engineName"
                        value={this.state.engineName}
                        onChange={this.updateFormField}
                        className="space-engine-dropdown-tab"
                    >
                        <option> Please select one</option>
                        {this.state.currentEngineDB.map(e =>
                            <option value={e.engine_name} key={e._id}>
                                Engine Name: {e.engine_name} |
                                Top Speed: {e.top_speed} |
                                Engine Power: {e.engine_power} |
                                Oil Consumption: {e.oil_consumption}
                            </option>)}

                    </select>
                </div>

                <div className=
                    'create-input-div-space'
                >
                    <input type="checkbox"
                        name="comfortFeatures"
                        value="637b79c39b9228988ebddfdd"
                        checked={this.state.comfortFeatures.includes
                            ("637b79c39b9228988ebddfdd")}
                        onChange={this.updateCheckBoxes}
                    />
                    <label>Blind Spot Monitoring</label>
                    <input type="checkbox"
                        name="comfortFeatures"
                        className='checkbox-style'
                        value="637b79c39b9228988ebddfde"
                        checked={this.state.comfortFeatures.includes
                            ("637b79c39b9228988ebddfde")}
                        onChange={this.updateCheckBoxes}
                    />
                    <label>Premium Sound System</label>

                    <div>
                        <input type="checkbox"
                            name="comfortFeatures"
                            value="637b79c39b9228988ebddfdf"
                            checked={this.state.comfortFeatures.includes
                                ("637b79c39b9228988ebddfdf")}
                            onChange={this.updateCheckBoxes}
                        />
                        <label>Wireless Connectivity</label>

                        <input type="checkbox"
                            name="comfortFeatures"
                            className='checkbox-style'
                            value="637b79c39b9228988ebddfe0"
                            checked={this.state.comfortFeatures.includes
                                ("637b79c39b9228988ebddfe0")}
                            onChange={this.updateCheckBoxes}
                        />
                        <label>Digital Keys</label>
                    </div>

                    <div>
                        <input type="checkbox"
                            name="comfortFeatures"
                            value="637b79c39b9228988ebddfe1"
                            checked={this.state.comfortFeatures.includes
                                ("637b79c39b9228988ebddfe1")}
                            onChange={this.updateCheckBoxes}
                        />
                        <label>AI Bot Alexa Enabled</label>
                        <input type="checkbox"
                            name="comfortFeatures"
                            className='checkbox-style'
                            value="637b79c39b9228988ebddfe2"
                            checked={this.state.comfortFeatures.includes
                                ("637b79c39b9228988ebddfe2")}
                            onChange={this.updateCheckBoxes}
                        />
                        <label>Ventilated Seats</label>

                    </div>


                    <div className=
                        'create-input-div-space'
                    >
                        <button className='btn btn-light'
                            onClick={this.createCarPost}
                        >Confirm Create Car Post</button>
                    </div>


                </div>
            </React.Fragment>
        )

    }




}