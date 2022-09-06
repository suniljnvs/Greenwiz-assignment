import React from "react";
import axios from 'axios';
import { useState, useEffect } from "react"

function Home() {

    // const [error, setError] = useState(null);
    // const [isLoaded, setIsLoaded] = useState(false);
    const [userData, setData] = useState([]);
    const [q, setQ] = useState("");

    const getData = async () => {
        try{
            let data = await axios.get(`https://thecocktaildb.com/api/json/v1/1/search.php?f=o`)    
        setData(data.data.drinks)
        }catch(error){
            console.log(error)
        }
    }

    useEffect(() => {
        getData();
    }, [])
   
    return (
        <>
            <div className="jumbotron-fluid jumbo-color">
                <div className="container">
                    <div className="img-center">
                        <img src="https://d1uxq5uu95as1y.cloudfront.net/covers/3bd8570f2d74094c_Screen-Shot-2021-03-10-at-3.08.11-PM.png" className="w-50" alt="img"></img>
                    </div>
                    <div className="lead p-2">
                        <a className="btn bg-white" href="Jumbo action link" role="button"> time: 9:00AM - 10:00PM</a>
                    </div>
                </div>
            </div>

            <div className="container p-5">
                <div className="row">
                    <div className="col-xl-6 col-12">
                        <div className="card shadow border-0" style={{ width: '20rem', }}>
                            <div className="card-header text-center font-weight-bold">Menu</div>
                            <ul className="list-group list-group-flush">
                                <button type="button" className="btn btn-outline-primary border-0">Soup</button>
                                <button type="button" className="btn btn-outline-primary border-0">Tea</button>
                                <button type="button" className="btn btn-outline-primary border-0">Coffee</button>
                                <button type="button" className="btn btn-outline-primary border-0">Pizza and Pasta</button>
                                <button type="button" className="btn btn-outline-primary border-0">Racommended</button>
                            </ul>
                        </div>
                    </div>
                    <div className="col-xl-6 col-12">
                        <div className="input-group mb-3">
                            <input type="text" className="form-control" placeholder="Search....."  onChange={(e) => setQ(e.target.value)} pattern="https://.*" size={30} name="longUrl" required />
                            <button type="submit" className="btn btn-primary border-0">Search</button>
                        </div>
                        {userData.map((item, index) => {
                            return (
                                <div className="card" style={{ width: '50rem' }}>
                                    <img src={item.strDrinkThumb} className='w-25' alt='img'></img>
                                    <div className="card-body">
                                        <h3 className="card-title">{item.strDrink}</h3>
                                        <p className="card-text">{item.strInstructions}</p>
                                        <p className="card-text"><small className="text-muted">{item.dateModified}</small></p>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </>
    )
}


export default Home;