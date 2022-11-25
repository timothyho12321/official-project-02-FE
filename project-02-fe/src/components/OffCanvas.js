import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import css from './OffCanvas.css';

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
                    <div>Please fill in the form before clicking submit.</div>
                    <div className='search-brand-div mt-3'>
                        <label>Brand</label>
                        <input type="text"
                            className='form-control'
                            value={props.searchBrand}
                            name="searchBrand"
                            onChange={props.updateFormField} />
                    </div>


                    <div className='search-type-div mt-3'>  <label >Type</label>
                        <select className="search-type-dropdown-list"
                            name="searchType"
                            value={props.searchType}
                            onChange={props.updateFormField}>
                            <option value="please-select" >Choose one type</option>


                            <option value="S" >SUV</option>

                            <option value="SUV" >SUV</option>
                            <option value="Sports Car" >Sports Car</option>
                            <option value="Sedan">Sedan</option>
                            <option value="Hatchback">Hatchback</option>
                        </select></div>


                    <div className='search-year-div mt-3'>
                        <label>Year Launch or after</label>
                        <input type="number"
                            className='form-control'
                            value={props.searchYear}
                            name="searchYear"
                            onChange={props.updateFormField} />
                    </div>

                    {props.yearError ? <p className='error-message-style'>Enter less than 2022</p> : null}

                    <label>Price</label>
                    <input type="text"
                        className='form-control'
                        value={props.searchPrice}
                        name="searchPrice"
                        onChange={props.updateFormField} />

                    <div className='search-rating-div mt-3'>
                        <label>Rating</label>
                        <select className="search-type-dropdown-list"
                            name="searchRating"
                            value={parseInt(props.searchRating)}
                            onChange={props.updateFormField}>
                            <option value="please-select" >Choose one type</option>
                            <option value="1">1</option>
                            <option value="2" >2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                        </select></div>


                    <button className='btn btn-primary mt-3'
                        onClick={props.filterSearch}

                    >Submit Search</button>

                </Offcanvas.Body>
            </Offcanvas>
        </>
    );
}