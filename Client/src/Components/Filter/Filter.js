import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { filiter } from "../../JS/Actions/filterActions";
import { FormControl, Button } from 'react-bootstrap';
import './Filter.css'

const Filter = () => {
    const filter = useSelector(
        (state) => state.filiterReducer.nameProduct
    );
    const dispatch = useDispatch();
    const [nameProduct, setNameProduct] = useState("");

    const handleChange = (e) => {
        setNameProduct(e.target.value);
    };
    return (
        <div className="filter">

            
            <FormControl
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
                onChange={handleChange}
                value={nameProduct}
            />
            <Button variant="outline-success" onClick={() => dispatch(filiter(nameProduct))}
                type="button">Search</Button>

        </div >
    )
}

export default Filter

