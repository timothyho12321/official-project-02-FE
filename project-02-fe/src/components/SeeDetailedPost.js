import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'


export default class SeeDetailedPost extends React.Component {


    renderArray = () => {
        let a = [...this.props.comfortFeaturesProp]
        console.log(a)

        // let jsx = []
        // for (let each of a) {
        //     jsx.push(
        //         <p>{each}</p>
        //     )

        // }
        // return jsx
    }



    render() {


        return (

            <React.Fragment>

                <h2>SeeDetailedPost </h2>



                <div>



                    <div><h4>Car Details: </h4></div>
                    <div>
                        Name of car poster: {this.props.username}

                    </div>


                    <div>
                        <img src={this.props.image}
                            style={{
                                width: "100%",
                                height: "100%"
                            }} />
                    </div>

                    <div>
                        <p>Year of Launch: {this.props.year_of_launch}</p>
                    </div>

                    <div>
                        <p>Type: {this.props.type}</p>
                    </div>
                    <div>
                        <p>Seat Number: {this.props.
                            seats}</p>
                    </div>
                    <div>
                        <p>Type: {this.props.type}</p>
                    </div>
                    <div>
                        <p>Color: {this.props.colorSpecial}</p>
                    </div>
                    <div>
                        <p>Color Shade: {this.props.colorShadeSpecial}</p>
                    </div>
                    <div>
                        <p>Land Terrain: {this.props.land_terrain}</p>
                    </div>
                    <div>
                        <p>Car Rating: {this.props.rating}
                            <FontAwesomeIcon icon={faStar} />
                        </p>
                    </div>
                    <div>
                        <p>Description: {this.props.description}</p>
                    </div>
                    <div>
                        <p>Price: ${this.props.cost_price}</p>
                    </div>
                    <div>
                        <p>Engine Name: {this.props.engine_id}</p>
                    </div>


                    <div>
                        {this.renderArray()}
                    </div>


                    {/* <div>
                        <p>Comfort Features:
                            
                            
                            
                            {this.props.singleCarObject2.comfort_features_id.map(c =>
                               
                                <span className='badge bg-secondary ms-2'>
                                    {c}</span>)}
                                    
                                    </p>

                    </div> */}


                    {/* <div>
                        <p>Comfort Features:
                            {this.props.comfort_features_id.map(c =>
                                <span className='badge bg-secondary ms-2'>
                                    {c}</span>)}</p>
                    </div> */}







                </div>




            </React.Fragment>
        )

    }


}