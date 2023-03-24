import React from "react";
import logo from '../src/Images/Salz Logo.jpg'
import image from '../src/Images/jay shetty-image.jpg';
import image2 from '../src/Images/rebecca-e1498234731154.jpg'
import image3 from '../src/Images/Ray Dalio-image.jpg';
import image4 from '../src/Images/alicia-keys.jpg';
import image5 from '../src/Images/kobe-bryant.jpg';
import image6 from '../src/Images/Precious.jpg';
import { useNavigate } from "react-router-dom";

const App = () => {
    
    const navigate = useNavigate()

    return (
        <>
            <div className=" container-fluid  col-12 col-md-12">
                <div className="text-center" >
                    <img src={logo} alt="" className="img-fluid logo" />
                    <h5 className="font"> <b>Salz Podcast</b></h5>
                    <h1 className=" bg-blue font2 "><b>Millions of shows.</b></h1>
                    <h1 className="bg-blue font2 "><b>Different types of Podcast to listen.</b></h1>
                </div>

                <div className=" d-block d-md-flex py-3">
                    <div className="zoom">
                        <img src={image} alt=" " className="img-fluid image2" />
                        <h2 className="h2">Jay shetty</h2>
                    </div>
                    <div className="zoom ">
                        <img src={image2} alt="" className="img-fluid image2 " />
                        <h2 className="h2"> Rebecca Enonchong</h2>
                    </div>
                    <div className="zoom  ">
                        <img src={image3} alt="" className="img-fluid image2" />
                        <h2 className="h2">Ray Dalio</h2>
                    </div>
                    <div className="zoom ">
                        <img src={image4} alt="" className="img-fluid image2" />
                        <h2 className="h2">Alicia Keys</h2>
                    </div>
                    <div className="zoom ">
                        <img src={image5} alt="" className="img-fluid image2" />
                        <h2 className="h2">kobe Bryant</h2>
                    </div>
                    <div className="zoom ">
                        <img src={image6} alt="" className="img-fluid image2" />
                        <h2 className="h2">Precious Natang</h2>
                    </div>
                </div>
                <h1 className=" py-4 text-center font2">Now we're talking.</h1>
                <div>
                    <button className="btn border text-primary px-4 py-2 visit button " onClick={() => {
                        navigate("/Hero")
                    }}><b> Explore Features</b></button>
                </div>
            </div>
        </>
        
    );
}


export default App;



