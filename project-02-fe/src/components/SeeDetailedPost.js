import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'


export default class SeeDetailedPost extends React.Component {



    render() {

        return (

            <React.Fragment>

                <h2>SeeDetailedPost </h2>


                <h3><div>
                    Name of car poster: {this.props.carStore.username}

                </div> </h3>


                {/* <div>



                    <div><h4>Car Details: </h4></div>
                    <div>
                        Name of car poster: {this.props.carStore.username}

                    </div>


                    <div>
                        <img src={this.props.carStore.image}
                            style={{
                                width: "100%",
                                height: "100%"
                            }} />
                    </div>

                    <div>
                        <p>Year of Launch: {this.props.carStore.year_of_launch}</p>
                    </div>

                    <div>
                        <p>Type: {this.props.carStore.type}</p>
                    </div>
                    <div>
                        <p>Seat Number: {this.props.carStore.
                            seats}</p>
                    </div>
                    <div>
                        <p>Type: {this.props.carStore.type}</p>
                    </div>
                    <div>
                        <p>Color: {this.props.carStore.color.name}</p>
                    </div>
                    <div>
                        <p>Color Shade: {this.props.carStore.color.shade}</p>
                    </div>
                    <div>
                        <p>Land Terrain: {this.props.carStore.land_terrain}</p>
                    </div>
                    <div>
                        <p>Car Rating: {this.props.carStore.rating}
                            <FontAwesomeIcon icon={faStar} />
                        </p>
                    </div>
                    <div>
                        <p>Description: {this.props.carStore.description}</p>
                    </div>
                    <div>
                        <p>Price: ${this.props.carStore.cost_price}</p>
                    </div>
                    <div>
                        <p>Engine Name: {this.props.carStore.engine_id}</p>
                    </div>
                    <div>
                        <p>Comfort Features:
                            {this.props.carStore.comfort_features_id.map(c =>
                                <span className='badge bg-secondary ms-2'>
                                    {c}</span>)}</p>
                    </div>




                    <div></div>

                </div> */}




            </React.Fragment>
        )

    }


}