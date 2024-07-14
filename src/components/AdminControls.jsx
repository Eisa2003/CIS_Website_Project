import React, { useEffect, useState, useContext } from 'react'
import { NavLink } from 'react-router-dom';
import TokenContext from './TokenContext'; // Importing the created context

// idea - when fetching the event cards, we will perform a token validation at the backend
export default function AdminControls() {

    const [errorMsg, setErrorMsg] = useState('');
    const [eventsData, setEventsData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [editFormOpen, setEditFormOpen] = useState({});
    const [isCreateFormOpen, setIsCreateFormOpen] = useState(false);
    const { token } = useContext(TokenContext);
    const [formData, setFormData] = useState({
        _id: '',
        title: '',
        desc: '',
        date: '',
        address: '',
        imageUrl: '',
    });
    const [rerender, setRerender] = useState(0);

    // for fetching event data
    useEffect(() => {
        fetchEventsData();
    }, [rerender]) // end hook useEffect

    // for mapping the event data into cards
    useEffect(() => {
        setIsLoading(false)
    }, [eventsData])

    const changeRender = () => {
        if (rerender === 1) {
            setRerender(0)
        }
        else {
            setRerender(1)
        }
    } // end function changeRender

    const fetchEventsData = async () => {
        let authToken = token;
        console.log("This is from the AdminControls: " + authToken)
        try {
            const response = await fetch('http://emanagerapp-env.eba-eqcsmp9h.ap-south-1.elasticbeanstalk.com/api/events/admin',
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
            setErrorMsg('');
            console.log(data);
        }
        catch (err) {
            setEventsData([]);
            setErrorMsg(err.message); // As we know that the err object always has property called message attached to it
        } // end try/catch block
    } // end function fetchEventsData

    const handleSubmit = async (e) => {
        e.preventDefault();
        let editedEventId = e.target.id.value; // The hidden element for the id. The `id` over here comes from the name attr
        let selectedFormData;
        // console.log("This is the target object: " + e.target + " And this is the value :" +value);

        for (let index in eventsData) {
            if (eventsData[index]._id === editedEventId) {
                selectedFormData = eventsData[index] // Basically separating and storing the required event
            } // end if
        } // end for

        // console.log(selectedFormData);

        // Loop through each element in the object and then replace the empty ones with the original data that is already stored in the database
        for (let key in formData) {
            if (!(formData[key] === '')) { // If no changes were made then..
                selectedFormData[key] = formData[key].toString() // let the value of the key be the changed value from the formData 
            } // end if
        } // end for

        try {
            let authToken = token;
            const response = await fetch(`http://emanagerapp-env.eba-eqcsmp9h.ap-south-1.elasticbeanstalk.com/api/events/${selectedFormData._id}`,
                {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${authToken}`
                    },
                    body: JSON.stringify(selectedFormData)
                }
            )
            if (!response.ok) {
                let error = await response.json();
                throw new Error(error.message);
            } // end if

            let data = await response.json();
            changeRender(); // To redisplay the events
            setErrorMsg(''); // To clear the error msg buffer(technically)
            setFormData({
                _id: '',
                title: '',
                desc: '',
                date: '',
                address: '',
                imageUrl: '',
            }); // To clear the form data
            console.log(data)


        }
        catch (err) {
            // setEventsData([]);
            setErrorMsg(err.message); // As we know that the err object always has property called message attached to it
        } // end try/catch block

        // console.log(selectedFormData);

    } // end function handleSubmit

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData((prevData) => (
            {
                ...prevData,
                [id]: [value]
            }
        ))
    } // end fucntion handleChange

    const handleToggle = (e) => {
        e.preventDefault();
        const eventId = e.target.dataset.toggle; // Storing event ID from button's data-toggle attribute
        setEditFormOpen((prevOpenState) => ({
            ...prevOpenState,
            [eventId]: !prevOpenState[eventId], // Toggling state for clicked event's form
        }));
    };// end function handleToggle

    const handleDelete = async (e) => {
        const eventId = e.target.dataset.delete;
        try {

            let authToken = token;
            const response = await fetch(`http://emanagerapp-env.eba-eqcsmp9h.ap-south-1.elasticbeanstalk.com/api/events/${eventId}`,
                {
                    method: 'DELETE',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${authToken}`
                    }
                }
            )
            if (!response.ok) {
                let error = await response.json();
                throw new Error(error.message);
            } // end if

            //let data = await response.json();
            changeRender();
            setErrorMsg('');
            // console.log(eventId)


        }
        catch (err) {
            setErrorMsg(err.message);
        } // end try/catch block
    } // end function handleDelete

    const handleCreate = async (e) => {
        e.preventDefault();

        const newEventData = {
            title: formData.title.toString(),
            desc: formData.desc.toString(),
            date: formData.date.toString(),
            address: formData.address.toString(),
            imageUrl: formData.imageUrl.toString()
        };
        console.log(newEventData);
        
        try {
            const response = await fetch('http://emanagerapp-env.eba-eqcsmp9h.ap-south-1.elasticbeanstalk.com/api/events', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`,
                },
                body: JSON.stringify(newEventData),
            });

            if (!response.ok) {
                throw new Error(await response.json().message);
            }

            //const data = await response.json();
            //setErrorMsg(data) // This actually is a success msg

            setIsCreateFormOpen(false); // Close form after success
            changeRender(); // Update event list
            setFormData({
                _id: '',
                title: '',
                desc: '',
                date: '',
                address: '',
                imageUrl: '',
            }); // To clear the form data
        } catch (err) {
            setErrorMsg(err.message);
        }
    } // end function handleCreate

    return (
        <>
            <br />

            <div className='container'>
                <h2 className="text-center">{errorMsg}</h2>
                {errorMsg === "Unauthorized to access this data" ? // if statement 
                    (<div className="text-center"><br /><NavLink to='/Admin/Access/'>Login Instead</NavLink></div>) // end condition one
                    : (

                        <div className="row mb-3">
                            {isLoading ? (
                                <div>Loading events...</div>
                            ) : (<div style={{ marginInline: 'auto', width: '100%' }}> {eventsData.map((event, index) => (
                                <div class="card mb-3" key={index}>
                                    <img class="card-img-top" style={{ width: "100%", height: "18em", objectFit: "cover" }} src={event.imageUrl} alt={event.title} />
                                    <div class="card-body">
                                        <h5 class="card-title"><strong>{event.title}</strong></h5>
                                        <p class="card-text">{event.desc}</p>
                                        <p className="card-text">{event.date}</p>
                                        <p className="card-text">{event.address}</p>
                                        <a href="/" class="btn btn-primary mr-2" data-toggle={event._id} onClick={handleToggle}>Edit</a>
                                        <a href="/" class="btn btn-primary" data-delete={event._id} onClick={handleDelete}>Delete</a>

                                        <form onSubmit={handleSubmit} id={event._id} className={editFormOpen[event._id] ? 'd-block' : 'd-none'}>{/* check which ones are false */}


                                            <div class="form-group d-none"> {/* Really important in case of the whole update process */}
                                                <label for="email">Title:</label>
                                                <input type="text" class="form-control" id="title" name='id' value={event._id} />
                                            </div>

                                            <br />
                                            <div class="form-group">
                                                <label for="email">Title:</label>
                                                <input type="text" class="form-control" id="title" value={formData.title} onChange={handleChange} />
                                            </div>
                                            <div class="form-group">
                                                <label for="pwd">Description:</label>
                                                <input type="text" class="form-control" id="desc" value={formData.desc} onChange={handleChange} />
                                            </div>
                                            <div class="form-group">
                                                <label for="pwd">Date:</label>
                                                <input type="date" class="form-control" id="date" value={formData.date} onChange={handleChange} />
                                            </div>
                                            <div class="form-group">
                                                <label for="pwd">Address:</label>
                                                <input type="text" class="form-control" id="address" value={formData.address} onChange={handleChange} />
                                            </div>
                                            <div class="form-group">
                                                <label for="pwd">Image URL:</label>
                                                <input type="url" class="form-control" id="imageUrl" value={formData.imageUrl} onChange={handleChange} />
                                            </div>
                                            <button type="submit" class="btn btn-primary">Submit</button>
                                        </form>

                                    </div>
                                </div>
                            ))} </div>)} {/* End of the ternary mapping of event cards */}

                            <button
                                className="fixed-create-btn"
                                onClick={() => setIsCreateFormOpen(true)}
                            >
                                Create +
                            </button>

                            {/* Create Form (conditionally rendered) */}
                            {isCreateFormOpen && (
                                <div className="create-form-container">
                                    <form onSubmit={handleCreate}>
                                        {/* Form fields (similar to existing form) */}
                                        <div class="form-group">
                                            <label for="email">Title:</label>
                                            <input type="text" class="form-control" id="title" value={formData.title} onChange={handleChange} />
                                        </div>
                                        <div class="form-group">
                                            <label for="pwd">Description:</label>
                                            <input type="text" class="form-control" id="desc" value={formData.desc} onChange={handleChange} />
                                        </div>
                                        <div class="form-group">
                                            <label for="pwd">Date:</label>
                                            <input type="date" class="form-control" id="date" value={formData.date} onChange={handleChange} />
                                        </div>
                                        <div class="form-group">
                                            <label for="pwd">Address:</label>
                                            <input type="text" class="form-control" id="address" value={formData.address} onChange={handleChange} />
                                        </div>
                                        <div class="form-group">
                                            <label for="pwd">Image URL:</label>
                                            <input type="url" class="form-control" id="imageUrl" value={formData.imageUrl} onChange={handleChange} />
                                        </div>
                                        <div className="d-flex justify-content-end mt-3">
                                            <button type="submit" class="btn btn-primary">
                                                Create Event
                                            </button>
                                            <button
                                                type="button"
                                                class="btn btn-secondary ml-2"
                                                onClick={() => setIsCreateFormOpen(false)}
                                            >
                                                Cancel
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            )}

                        </div>

                    )// end conditon two
                } {/* end ternary operator for authorization */}





            </div>
            <br />
        </>
    )
}