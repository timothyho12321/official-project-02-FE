import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';

export default function OffCanvas(props) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Button variant="primary" onClick={handleShow}>
                Detailed Search
            </Button>

            <Offcanvas show={show} onHide={handleClose}>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>Detailed Search</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    Detailed search terms
                    <label>Brand</label>
                    <input type="text"
                        className='form-control'
                        value={props.searchBrand}
                        name="searchBrand"
                        onChange={props.updateFormField} />



                    <label>Price</label>
                    <input type="text"
                        className='form-control'
                        value={props.searchPrice}  
                        name="searchPrice"
                        onChange={props.updateFormField} />



                    <label>Year Launch or after</label>
                    <input type="text"
                        className='form-control'
                        value={props.searchYear} 
                        name="searchYear"
                        onChange={props.updateFormField} />

                    <button className='btn btn-primary mt-3'
                    // onClick={this.filterSearch}

                    >Detailed Search</button>

                </Offcanvas.Body>
            </Offcanvas>
        </>
    );
}