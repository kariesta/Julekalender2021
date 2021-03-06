import React from 'react';
import { Link } from 'react-router-dom';
//import SimpleCrypto from "simple-crypto-js";



interface LukeParams {
    number: number,
    date: Date,
    person: String
}

function url(number:number) {
    //SimpleCrypto seems timebased, need redux to keep instans over entire project
    //const secretKey = "advent";
    //const simpleCrypto = new SimpleCrypto(secretKey);

    return "./"+number.toString();//+simpleCrypto.encrypt(number.toString());
}

function Luke(params: LukeParams) {

    return (
        <Link to={url(params.number)} className="Luke">
        {params.number}
        </Link>
    );
}

export default Luke;