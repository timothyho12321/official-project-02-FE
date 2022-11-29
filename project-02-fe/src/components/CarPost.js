import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { render } from 'react-dom';
import './CarPost.css'
import CarPostDetails from './CarPostDetails'

export default class CarPost extends React.Component {

    state = {
        page: "general"
    }




    render() {
        return (


            <React.Fragment>


                <Card
                    bg={"secondary"}
                    text={"white"}
                    className="car-card-style mt-3 col-12
                       col-lg-4 col-md-6"
                //    style={{ width: '50vw' }}
                >
                    <Card.Img variant="top" src={this.props.car.image} />
                    <Card.Body>
                        <Card.Title>Brand: {this.props.car.brand}</Card.Title>
                        <Card.Text>
                            <p>Model: {this.props.car.name_of_model}</p>
                            <p>Type: {this.props.car.type}</p>

                            <p>Year of Launch: {this.props.car.year_of_launch}</p>
                            <p>Rating: {this.props.car.rating} Stars</p>
                            <p>Price: $ {this.props.car.cost_price} </p>
                        </Card.Text>


                        <div>
                            <CarPostDetails carStore={this.props.car} />


                            {/* NEED TO DEBUG HERE HOW TO PASS INTO A NEW PAGE ON BUTTON CLICK  */}
                            <Button variant='light'
                                carStore={this.props.car}
                                // onClick={this.props.changeMainStateDetailedPost()}

                                onClick={() => this.props.changeSearchStateDetailedPost(this.props.car._id)}


                            >
                            See Detailed Post</Button>
                    </div>

                </Card.Body>
            </Card>





            </React.Fragment >



        )



    }




}