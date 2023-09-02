import React from "react";
import { Link } from "wouter";
import Brand from 'BrandTransparentMD.png'

export default function PlatformHeader() {

    return (
        <header className="adminHeader">
            <div className="adminBrand">
                <Link to="/platform">
                    <img src={Brand} alt="brand arnaizDev" />
                    <h1>TuManga</h1>
                </Link>
            </div>
            <Link to="/"><button className="btn btn-danger" id="goBack">VOLVER</button></Link>
        </header>
    )

}