import React from 'react'
import css from './CreatePage.css'

export default class CreatePage extends React.Component {

    state = {
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

    updateFormField = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })

    }

    render() {

        return (
            <React.Fragment>
                <h3>Fill in the details to create a new car post.</h3>



                <div>
                    <label>Name of Model</label>
                    <input type="text"
                        className='form-control'
                        name="nameOfModel"
                        value={this.state.nameOfModel}
                        onChange={this.updateFormField} />
                </div>

                <div>
                    <label>Year of Launch</label>
                    <input type="number"
                        className='form-control'
                        name="yearOfLaunch"
                        value={this.state.yearOfLaunch}
                        onChange={this.updateFormField} />
                </div>
                <div>
                    <label>Car Brand</label>
                    <input type="text"
                        className='form-control'
                        name="brandOfCar"
                        value={this.state.brandOfCar}
                        onChange={this.updateFormField} />
                </div>
                <div>
                    <label>Car Type</label>
                    <input type="text"
                        className='form-control'
                        name="typeOfCar"
                        value={this.state.typeOfCar}
                        onChange={this.updateFormField} />
                </div>

                <div>
                    <div>Seat Number</div>
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
                <div>
                    <label>Color</label>
                    <input type="text"
                        className='form-control'
                        name="color"
                        value={this.state.color}
                        onChange={this.updateFormField} />
                </div>
                <div>
                    <label>Color Shade</label>
                    <input type="text"
                        className='form-control'
                        name="colorShade"
                        value={this.state.colorShade}
                        onChange={this.updateFormField} />
                </div>

                <div>
                    <label>Land Terrain</label>
                    <input type="text"
                        className='form-control'
                        name="landTerrain"
                        value={this.state.landTerrain}
                        onChange={this.updateFormField} />
                </div>

                <div>
                    <label>Username</label>
                    <input type="text"
                        className='form-control'
                        name="userName"
                        value={this.state.userName}
                        onChange={this.updateFormField} />
                </div>

                <div>
                    <label>Email</label>
                    <input type="text"
                        className='form-control'
                        name="email"
                        value={this.state.email}
                        onChange={this.updateFormField} />
                </div>
                <div>
                    <label>Car rating:</label>
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

                <div>
                    <label>Description</label>
                    <input type="text"
                        placeholder='Fill in details of car recommendation'

                        className='form-control'
                        name="description"
                        value={this.state.description}
                        onChange={this.updateFormField} />
                </div>
                <div>
                    <label>Image</label>
                    <input type="text"
                        placeholder='Type URL link of car image'
                        className='form-control'
                        name="image"
                        value={this.state.image}
                        onChange={this.updateFormField} />
                </div>
                <div>
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
                <div className='space-create-form-input-section'>
                    <label>Engine Name</label>
                    <select name="engineName"
                        value={this.state.engineName}
                        onChange={this.updateFormField}
                        className="space-engine-dropdown-tab"
                    >
                        <option value="A1">A1</option>
                        <option value="A2">A2</option>
                        <option value="A3">A3</option>
                        <option value="A4">A4</option>
                        <option value="A5">A5</option>
                        <option value="A6">A6</option>
                        <option value="A7">A7</option>

                    </select>
                </div>
                <div>
                    <label>Top Speed</label>
                    <div>To autopopulate - fill in </div>
                </div>
                <div>
                    <label>Engine Power</label>
                    <div>To autopopulate - fill in </div>
                </div>

                <div>
                    <label>Oil Consumption</label>
                    <div>To autopopulate - fill in </div>
                </div>

                <div>
                    <input type="checkbox"
                        name="comfortFeatures"
                        value="Blind Spot Monitoring"
                        checked={this.state.comfortFeatures.includes
                            ("Blind Spot Monitoring")}
                    />
                    <label>Blind Spot Monitoring</label>
                    <input type="checkbox"
                        name="comfortFeatures"
                        value="Premium Sound System"
                        checked={this.state.comfortFeatures.includes
                            ("Premium Sound System")}
                    />
                    <label>Premium Sound System</label>
                    <input type="checkbox"
                        name="comfortFeatures"
                        value="Wireless Connectivity"
                        checked={this.state.comfortFeatures.includes
                            ("Wireless Connectivity")}
                    />
                    <label>Wireless Connectivity</label>
                    <input type="checkbox"
                        name="comfortFeatures"
                        value="Digital Keys"
                        checked={this.state.comfortFeatures.includes
                            ("Digital Keys")}
                    />
                    <label>Digital Keys</label>
                    <input type="checkbox"
                        name="comfortFeatures"
                        value="AI Bot Alexa Enabled"
                        checked={this.state.comfortFeatures.includes
                            ("AI Bot Alexa Enabled")}
                    />
                    <label>AI Bot Alexa Enabled</label>
                    <input type="checkbox"
                        name="comfortFeatures"
                        value="Ventilated Seats"
                        checked={this.state.comfortFeatures.includes
                            ("Ventilated Seats")}
                    />
                    <label>Ventilated Seats</label>

                </div>
            </React.Fragment>
        )

    }




}