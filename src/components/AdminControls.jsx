import React, { useEffect, useState, useContext } from 'react'
import { NavLink } from 'react-router-dom';
import Cookies from 'js-cookie';
import TokenContext from './TokenContext'; // Importing the created context

// idea - when fetching the event cards, we will perform a token validation at the backend
export default function AdminControls() {

    const [errorMsg, setErrorMsg] = useState('')
    const [eventsData, setEventsData] = useState([])
    const [isLoading, setIsLoading] = useState(true);
    const { token } = useContext(TokenContext)

    const fetchEventsData = async () => {
        let authToken = token;
        console.log("This is from the AdminControls: " + authToken)
        try {
            const response = await fetch('http://localhost:5001/api/events/admin',
                {
                    method: 'GET',
                    headers: {
                        'Authorization': `Bearer ${authToken}` // We write Bearer to signify the type of token it is
                    }
                }
            )
            if (!response.ok) {
                let error = await response.json();
                throw new Error(error.message);
            } // end if

            let data = await response.json();
            setEventsData(data);
            console.log(data);


        }
        catch (err) {
            setEventsData([]);
            setErrorMsg(err.message); // As we know that the err object always has property called message attached to it
        } // end try/catch block
    } // end function fetchEventsData

    // for fetching event data
    useEffect(() => {
        fetchEventsData();
    }, []) // end hook useEffect

    // for mapping the event data into cards
    useEffect(() => {
        setIsLoading(false)
    }, [eventsData])

    return (
        <>
            <br />

            <div className='container'>
                <h2 className="text-center">{errorMsg}</h2>
                {errorMsg === "Unauthorized to access this data" ? // if statement 
                (<div className="text-center"><br /><NavLink to='/Admin/Access/'>Login Instead</NavLink></div>) // end condition one
                :(

                <div className="row mb-3">
                    {isLoading ? (
                        <div>Loading events...</div>
                    ) : (<div style={{marginInline: 'auto', width:'100%'}}> {eventsData.map((event, index) => (
                        <div class="card mb-3" key={index}>
                            <img class="card-img-top" style={{ width: "100%", height: "18em", objectFit: "cover" }} src={event.imageUrl} alt="Card image cap" />
                            <div class="card-body">
                                <h5 class="card-title">{event.title}</h5>
                                <p class="card-text">{event.desc}</p>
                                <a href="#" class="btn btn-primary mr-2">Edit</a>
                                <a href="#" class="btn btn-primary">Delete</a>
                            </div>
                        </div>
                    ))} </div>)}

                </div>

                )// end conditon two
                } {/* end ternary operator for authorization */}

                



            </div>
            <br />
        </>
    )
}

{/* Start of the col 
                    <div class="card col-sm mr-3" style={{ width: "18rem" }} >
                        <img class="card-img-top" src="..." alt="Card image cap" />
                        <div class="card-body">
                            <h5 class="card-title">Card title</h5>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" class="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>

                    <div class="card col-sm mr-3" style={{ width: "18rem" }}>
                        <img class="card-img-top" src="..." alt="Card image cap" />
                        <div class="card-body">
                            <h5 class="card-title">Card title</h5>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" class="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>

                    <div class="card col-sm" style={{ width: "18rem" }}>
                        <img class="card-img-top" src="..." alt="Card image cap" />
                        <div class="card-body">
                            <h5 class="card-title">Card title</h5>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" class="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>*/}
