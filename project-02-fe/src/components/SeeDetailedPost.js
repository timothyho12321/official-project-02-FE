import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar, faChair, faDroplet, faBrush, faHillRockslide, faNoteSticky, faPlug, faPlus } from '@fortawesome/free-solid-svg-icons'
import Button from 'react-bootstrap/Button';
import CommentPost from './CommentPost';


export default class SeeDetailedPost extends React.Component {

    state = {
        data: [],
        comfort_features_id: []
    }




    render() {


        return (

            <React.Fragment>


                <div>



                    <div><h4> {this.props.brand} {this.props.name_of_model}  </h4></div>
                    <div>
                        <i className="bi bi-pencil ms-2"></i> Post by: {this.props.username}

                    </div>


                    <div>
                        <img src={this.props.image}
                            style={{
                                width: "100%",
                                height: "100%"
                            }} />
                    </div>

                    <div>
                        <p><i className="bi bi-rocket-takeoff-fill"></i> Launch year: {this.props.year_of_launch}</p>
                    </div>

                    <div>
                        <p><i className="bi bi-car-front-fill"></i> Type: {this.props.type}</p>
                    </div>
                    <div>
                        <p>
                            <FontAwesomeIcon icon={faChair} />
                            Seat Number: {this.props.
                                seats}</p>
                    </div>
                    <div>
                        <p><i className="bi bi-car-front-fill"></i>Type: {this.props.type}</p>
                    </div>
                    <div>
                        <p> <FontAwesomeIcon icon={faDroplet} />Color: {this.props.colorSpecial && this.props.colorSpecial}</p>
                    </div>
                    <div>
                        <p><FontAwesomeIcon icon={faBrush} />Color Shade: {this.props.colorShadeSpecial && this.props.colorShadeSpecial}</p>
                    </div>
                    <div>
                        <p><FontAwesomeIcon icon={faHillRockslide} />Land Terrain: {this.props.land_terrain}</p>
                    </div>
                    <div>
                        <p><i className="bi bi-stars"></i>  Rated: {this.props.rating}
                            <FontAwesomeIcon icon={faStar} />
                        </p>
                    </div>
                    <div>
                        <p> <FontAwesomeIcon icon={faNoteSticky} />Description: {this.props.description}</p>
                    </div>
                    <div>
                        <p><i className="bi bi-currency-dollar"></i>Price: ${this.props.cost_price}</p>
                    </div>
                    <div>
                        <p><FontAwesomeIcon icon={faPlug} />Engine Name: {this.props.engine_id}</p>
                    </div>




                    <div>
                        <p><FontAwesomeIcon icon={faPlus} />Comfort Features:

                            {Array.isArray(this.props.comfortFeaturesProp?.comfort_features_id
                            ) && this.props.comfortFeaturesProp.comfort_features_id.map(c => {
                                return <span className='badge bg-secondary ms-2'>
                                    {c}</span>
                            })}</p>
                    </div>

                    <div>



                        <CommentPost />
                    </div>

                    <div> Add new comments</div>


                    <Button variant='light'
                        onClick={this.props.changePreviousPage}
                    >Back Page</Button>




                </div>




            </React.Fragment>
        )

    }


}