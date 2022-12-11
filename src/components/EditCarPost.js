import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './EditCarPost.css'
import EditCarPostForm from './EditCarPostForm'

export default class EditCarPost extends React.Component {

    state = {

    }





    render() {

        return (

            <React.Fragment>
                <Card
                    bg={"secondary"}
                    text={"dark"}
                    className="car-card-style mt-3 col-12
                       col-lg-5 col-md-5 shadow"
                
                >
                    <Card.Img variant="top"
                        src={this.props.car.image}
                        className="card-image-edit-style"

                    />
                    <Card.Body>
                        <Card.Title>{this.props.car.brand} {this.props.car.name_of_model} </Card.Title>
                        <Card.Text>
                            <p><i className="bi bi-stars"></i> Rated: {this.props.car.rating} <i className="bi bi-star-fill me-2"></i> |<i className="bi bi-pencil ms-2"></i> Post by : {this.props.car.username}</p>

                            <p><i className="bi bi-car-front-fill"></i>  {this.props.car.type}</p>

                            <p><i className="bi bi-rocket-takeoff-fill"></i> Launched: {this.props.car.year_of_launch}</p>

                            <p><i className="bi bi-currency-dollar"></i> {this.props.car.cost_price} </p>
                        </Card.Text>

                        <div>
                            <EditCarPostForm
                                key={this.props.car._id}
                                carStore={this.props.car}
                                searchEmailPost={this.props.searchEmailPost}
                                changeStateToRender={this.props.changeStateToRender}




                            />



                            <Button variant="light"
                                onClick={this.props.deleteCar}
                            >
                                Delete car
                            </Button>


                        </div>



                    </Card.Body>
                </Card>


                <div className='col-1'></div>

            </React.Fragment>




        )






    }









}