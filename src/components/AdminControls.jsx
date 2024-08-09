import React, { useEffect, useState, useContext } from 'react'
import { NavLink } from 'react-router-dom';
import TokenContext from './TokenContext'; // Importing the created context

// idea - when fetching the event cards, we will perform a token validation at the backend
export default function AdminControls() {

    const [errorMsg, setErrorMsg] = useState('');
    const { adminControlPage } = useContext(TokenContext);
    const [resourceName, setResourceName] = useState('EmpAndEdu');
    const [eventsData, setEventsData] = useState([]);
    const [resourcesData, setResourcesData] = useState([]);
    const [filteredData, setFilteredData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [eventsEditFormOpen, setEventsEditFormOpen] = useState({});
    const [resEditFormOpen, setResEditFormOpen] = useState({});
    const [isCreateFormOpen, setIsCreateFormOpen] = useState(false);
    const { token } = useContext(TokenContext);
    const [eventsFormData, setEventsFormData] = useState({
        _id: '',
        title: '',
        desc: '',
        date: '',
        address: '',
        imageUrl: '',
    });
    const [resourcesFormData, setResourcesFormData] = useState({
        _id: '',
        resource: '',
        title: '',
        imageUrl: '',
        address: '',
        phone: '',
        contactName: '',
        website: '',
        email: '',
        mission: '',
        approach: '',
        services: '',
        hoursOfOperation: '',
        locations: '',
        socialMedia: '',
        additionalInfo: '',
        resourceName: '',
    });
    const [rerender, setRerender] = useState(0);

    // for fetching the data depending on the page
    useEffect(() => {
        console.log("Token fromm admin controls " + token)
        if (adminControlPage === "eventsPage") {
            fetchEventsData();
        }
        else {
            fetchResourceData();
        } // end if/else
    }, [rerender, adminControlPage, resourceName]) // end hook useEffect

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
        //console.log("This is from the AdminControls: " + authToken)
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
            // console.log(data);
        }
        catch (err) {
            setEventsData([]);
            setErrorMsg(err.message); // As we know that the err object always has property called message attached to it
        } // end try/catch block
    } // end function fetchEventsData

    const fetchResourceData = async () => {
        let authToken = token;
        // console.log("This is from the AdminControls: " + authToken)
        try {
            const response = await fetch('http://emanagerapp-env.eba-eqcsmp9h.ap-south-1.elasticbeanstalk.com/api/resources/admin',
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
            setResourcesData(data);
            console.log(data)
            setErrorMsg('');

            const filtered = data.filter((resource) => resource.resource === resourceName);
            setFilteredData(filtered);
            // console.log("These are the filtered data: " + filteredData[0].phone)
        }
        catch (err) {
            setResourcesData([]);
            setErrorMsg(err.message); // As we know that the err object always has property called message attached to it
        } // end try/catch block
    } // end function fetchResourceData

    const handleSubmit = async (e) => { // Submit for both have been dealt with. {events, and resources}
        e.preventDefault();

        if (adminControlPage === "eventsPage") {
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
            for (let key in eventsFormData) {
                if (!(eventsFormData[key] === '')) { // If no changes were made then..
                    selectedFormData[key] = eventsFormData[key].toString() // let the value of the key be the changed value from the eventsFormData 
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
                setEventsFormData({
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
        } // The above is the submission for the events data
        else {
            let editedResourceId = e.target.id.value; // The hidden element for the id. The `id` over here comes from the name attr
            let selectedFormData;
            // console.log("This is the target object: " + e.target + " And this is the value :" +value);

            for (let index in eventsData) {
                if (resourcesData[index]._id === editedResourceId) {
                    selectedFormData = resourcesData[index] // Basically separating and storing the required event
                } // end if
            } // end for

            // console.log(selectedFormData);

            // Loop through each element in the object and then replace the empty ones with the original data that is already stored in the database
            for (let key in resourcesFormData) {
                if (!(resourcesFormData[key] === '')) { // If no changes were made then..
                    selectedFormData[key] = resourcesFormData[key].toString() // let the value of the key be the changed value from the eventsFormData 
                } // end if
            } // end for

            try {
                let authToken = token;
                const response = await fetch(`http://emanagerapp-env.eba-eqcsmp9h.ap-south-1.elasticbeanstalk.com/api/resources/${selectedFormData._id}`,
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
                setResourcesFormData({
                    _id: '',
                    resource: '',
                    title: '',
                    imageUrl: '',
                    address: '',
                    phone: '',
                    contactName: '',
                    website: '',
                    email: '',
                    mission: '',
                    approach: '',
                    services: '',
                    hoursOfOperation: '',
                    locations: '',
                    socialMedia: '',
                    additionalInfo: '',
                }); // To clear the form data
                console.log(data)


            }
            catch (err) {
                // setEventsData([]);
                setErrorMsg(err.message); // As we know that the err object always has property called message attached to it
            } // end try/catch block

            // console.log(selectedFormData);
        } // end if/else .The above is the submission for the resources data

    } // end function handleSubmit

    const handleChange = (e) => {
        if (adminControlPage === 'eventsPage') {
            const { id, value } = e.target;
            setEventsFormData((prevData) => (
                {
                    ...prevData,
                    [id]: [value]
                }
            ))
        }
        else {
            const { id, value } = e.target;
            setResourcesFormData((prevData) => (
                {
                    ...prevData,
                    [id]: [value]
                }
            ))
        }

    } // end fucntion handleChange

    // Handles the array that stores the boolean values for the forms that are open/close. Then on call, Toggles the required one
    const handleToggle = (e) => {
        e.preventDefault();
        if (adminControlPage === 'eventsPage') {
            const eventId = e.target.dataset.toggle; // Storing event ID from button's data-toggle attribute
            setEventsEditFormOpen((prevOpenState) => ({
                ...prevOpenState,
                [eventId]: !prevOpenState[eventId], // Toggling state for clicked event's form
            }));
        }
        else {
            const resourceId = e.target.dataset.toggle; // Storing resource ID from button's data-toggle attribute
            setResEditFormOpen((prevOpenState) => ({
                ...prevOpenState,
                [resourceId]: !prevOpenState[resourceId], // Toggling state for clicked resource's form
            }));
        } // end function toggle


    };// end function handleToggle

    const handleDelete = async (e) => {
        const deletionId = e.target.dataset.delete; // The ID of the element that's responsible for this function call
        try {

            let authToken = token;
            if (adminControlPage === 'eventsPage') {
                const response = await fetch(`http://emanagerapp-env.eba-eqcsmp9h.ap-south-1.elasticbeanstalk.com/api/events/${deletionId}`,
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
            }
            else {
                const response = await fetch(`http://emanagerapp-env.eba-eqcsmp9h.ap-south-1.elasticbeanstalk.com/api/resources/${deletionId}`,
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
            } // end outter if/else


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

        if (adminControlPage === 'eventsPage') {
            const newEventData = {
                title: eventsFormData.title.toString(),
                desc: eventsFormData.desc.toString(),
                date: eventsFormData.date.toString(),
                address: eventsFormData.address.toString(),
                imageUrl: eventsFormData.imageUrl.toString()
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
                setEventsFormData({
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
        }
        else {
            const newResourceData = {
                resource: resourcesFormData.resource.toString(),
                title: resourcesFormData.title.toString(),
                imageUrl: resourcesFormData.imageUrl.toString(),
                address: resourcesFormData.address.toString(),
                phone: resourcesFormData.phone.toString().split(","),
                contactName: resourcesFormData.contactName.toString().split(","),
                website: resourcesFormData.website.toString().split(","),
                email: resourcesFormData.email.toString().split(","),
                mission: resourcesFormData.mission.toString(),
                approach: resourcesFormData.approach.toString(),
                services: resourcesFormData.services.toString().split(","),
                hoursOfOperation: resourcesFormData.hoursOfOperation.toString().split(","),
                locations: resourcesFormData.locations.toString().split(","),
                socialMedia: resourcesFormData.socialMedia.toString(),
                additionalInfo: resourcesFormData.additionalInfo.toString(),
                resourceName: resourcesFormData.resourceName.toString()
            };
            console.log(newResourceData);

            try {
                const response = await fetch('http://emanagerapp-env.eba-eqcsmp9h.ap-south-1.elasticbeanstalk.com/api/resources', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        Authorization: `Bearer ${token}`,
                    },
                    body: JSON.stringify(newResourceData),
                });

                if (!response.ok) {
                    throw new Error(await response.json().message);
                }

                //const data = await response.json();
                //setErrorMsg(data) // This actually is a success msg

                console.log("The data is created");

                setIsCreateFormOpen(false); // Close form after success
                changeRender(); // Update resources list
                setResourcesFormData({
                    _id: '',
                    resource: '',
                    title: '',
                    imageUrl: '',
                    address: '',
                    phone: '',
                    contactName: '',
                    website: '',
                    email: '',
                    mission: '',
                    approach: '',
                    services: '',
                    hoursOfOperation: '',
                    locations: '',
                    socialMedia: '',
                    additionalInfo: '',
                    resourceName: '',
                }); // To clear the form data
            } catch (err) {
                if (err) {
                    setErrorMsg(err.message);
                    console.log("This is from the catch statement error");
                } // end if
            }
        } // end outter if/else for data creation

    } // end function handleCreate

    return (
        <>

            <div className='container' style={{ padding: '30px' }}>
                <h2 className="text-center">{errorMsg}</h2>
                {errorMsg === "Unauthorized to access this data" ? // if statement 
                    (<div className="text-center"><br /><NavLink to='/Admin/Access/'>Login Instead</NavLink></div>) // end condition one
                    : (

                        <div className="row mb-3">
                            {isLoading ? (
                                <div>Loading events...</div>
                            ) : adminControlPage === "eventsPage" ? // if the admin wants to edit the events
                                (<div style={{ marginInline: 'auto', width: '100%' }}> {eventsData.map((event, index) => (
                                    <div class="card mb-3" key={index}>
                                        <img class="card-img-top" style={{ width: "100%", height: "18em", objectFit: "cover" }} src={event.imageUrl} alt={event.title} />
                                        <div class="card-body">
                                            <h5 class="card-title"><strong>{event.title}</strong></h5>
                                            <p class="card-text">{event.desc}</p>
                                            <p className="card-text">{event.date}</p>
                                            <p className="card-text">{event.address}</p>
                                            <a href="/" class="btn btn-primary mr-2" data-toggle={event._id} onClick={handleToggle}>Edit</a>
                                            <a href="/" class="btn btn-primary" data-delete={event._id} onClick={handleDelete}>Delete</a>

                                            <form onSubmit={handleSubmit} id={event._id} className={eventsEditFormOpen[event._id] ? 'd-block' : 'd-none'}>{/* check which ones are false */}


                                                <div class="form-group d-none"> {/* Really important in case of the whole update process <- Once we submit */}
                                                    <label for="_id">ID:</label>
                                                    <input type="text" class="form-control" id="_id" name='id' value={event._id} />
                                                </div>

                                                <br />
                                                <div class="form-group">
                                                    <label for="title">Title:</label>
                                                    <input type="text" class="form-control" id="title" value={eventsFormData.title} onChange={handleChange} required/>
                                                </div>
                                                <div class="form-group">
                                                    <label for="pwd">Description:</label>
                                                    <input type="text" class="form-control" id="desc" value={eventsFormData.desc} onChange={handleChange} />
                                                </div>
                                                <div class="form-group">
                                                    <label for="pwd">Date:</label>
                                                    <input type="date" class="form-control" id="date" value={eventsFormData.date} onChange={handleChange} />
                                                </div>
                                                <div class="form-group">
                                                    <label for="pwd">Address:</label>
                                                    <input type="text" class="form-control" id="address" value={eventsFormData.address} onChange={handleChange} />
                                                </div>
                                                <div class="form-group">
                                                    <label for="pwd">Image URL:</label>
                                                    <input type="url" class="form-control" id="imageUrl" value={eventsFormData.imageUrl} onChange={handleChange} />
                                                </div>
                                                <button type="submit" class="btn btn-primary">Submit</button>
                                            </form>

                                        </div>
                                    </div>
                                ))} </div>) // End of the ternary mapping of event cards

                                :

                                (
                                    <div style={{ maxWidth: 'fit-content', marginInline: 'auto' }}>
                                        <div class="dropdown show" >
                                            <a class="btn btn-secondary dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                Select a Resource
                                            </a>

                                            <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                                                <a class="dropdown-item" onClick={(e) => { e.preventDefault(); setResourceName('EmpAndEdu') }} href="#">Employment and Education</a>
                                                <a class="dropdown-item" onClick={(e) => { e.preventDefault(); setResourceName('MentalHAndSubAbuse') }} href="#">Mental Health and Substance Abuse</a>
                                                <a class="dropdown-item" onClick={(e) => { e.preventDefault(); setResourceName('Housing') }} href="#">Housing</a>
                                                <a class="dropdown-item" onClick={(e) => { e.preventDefault(); setResourceName('FoodAsst') }} href="#">Food Assit</a>
                                                <a class="dropdown-item" onClick={(e) => { e.preventDefault(); setResourceName('UtilAndBasicNeeds') }} href="#">Utilities and Basic Needs</a>
                                                <a class="dropdown-item" onClick={(e) => { e.preventDefault(); setResourceName('Health') }} href="#">Health</a>
                                                <a class="dropdown-item" onClick={(e) => { e.preventDefault(); setResourceName('LegalAid') }} href="#">Legal Aid</a>
                                                <a class="dropdown-item" onClick={(e) => { e.preventDefault(); setResourceName('CrisisHotlines') }} href="#">Crisis Hotlines</a>
                                                <a class="dropdown-item" onClick={(e) => { e.preventDefault(); setResourceName('Trafficking') }} href="#">Trafficking</a>
                                                <a class="dropdown-item" onClick={(e) => { e.preventDefault(); setResourceName('SeniorAndDisab') }} href="#">Senior And Disability</a>
                                                <a class="dropdown-item" onClick={(e) => { e.preventDefault(); setResourceName('Other') }} href="#">Other</a>
                                            </div>
                                        </div>

                                        <br />

                                        <div style={{ width: '80vw' }}> {filteredData.map((resource, index) => (
                                            <div class="card mb-3" key={index}>
                                                <img class="card-img-top" style={{ width: "100%", height: "300px", objectFit: "contain", borderBottom: '2px solid' }} src={resource.imageUrl} alt={resource.title} />
                                                <iframe
                                                    class="card-img-top"
                                                    style={{ border: "0", height: "300px", borderBottom: '2px solid' }}
                                                    src={resource.locations[0]}
                                                    width="600"
                                                    height="450"
                                                    allowfullscreen=""
                                                    loading="lazy"
                                                    referrerpolicy="no-referrer-when-downgrade"
                                                    frameborder="0">
                                                </iframe>

                                                <div class="card-body" style={{ overflow: 'scroll' }}>
                                                    <h5 class="card-title"><strong>{resource.title}</strong></h5>
                                                    <p class="card-text">Resource Name: {resource.resourceName}</p>
                                                    <p className="card-text">Hours Of Operation: {resource.hoursOfOperation}</p>
                                                    <p className="card-text">Address: {resource.address}</p>
                                                    <p className="card-text">Phone:
                                                        {resource.phone.length !== 0 && resource.phone.map((number) =>
                                                            number + ' '
                                                        )}
                                                    </p>
                                                    <p className="card-text">Contact:
                                                        {resource.contactName && resource.contactName.map((contact) =>
                                                            contact + ' '
                                                        )}
                                                    </p>
                                                    <p className="card-text">Website:
                                                        {resource.website && resource.website.map((web) =>
                                                            web + ' '
                                                        )}
                                                    </p>
                                                    <p className="card-text">Email: {resource.email && resource.email.map((mail) => mail + ' ')} </p>
                                                    <p className="card-text">Mission: {resource.mission}</p>
                                                    <p className="card-text">Approach: {resource.approach}</p>
                                                    <p className="card-text">Services: {resource.services && resource.services.map((serv) => serv + ' ')} </p>
                                                    <p className="card-text">Social Media: {resource.socialMedia && resource.socialMedia.map((media) => media + ' ')}</p>
                                                    <p className="card-text">{resource.additionalInfo}</p>
                                                    <a href="/" class="btn btn-primary mr-2" data-toggle={resource._id} onClick={handleToggle}>Edit</a>
                                                    <a href="/" class="btn btn-primary" data-delete={resource._id} onClick={handleDelete}>Delete</a>

                                                    <form onSubmit={handleSubmit} id={resource._id} className={resEditFormOpen[resource._id] ? 'd-block' : 'd-none'}>{/* check which ones are false */}


                                                        <div class="form-group d-none"> {/* Really important in case of the whole update process <- Once we submit the form*/}
                                                            <label for="_id">ID:</label>
                                                            <input type="text" class="form-control" id="_id" name='id' value={resource._id} />
                                                        </div>

                                                        <br />
                                                        <div className="form-group">
                                                            <label htmlFor="resource">Resource Type:</label> {/* Changed label for clarity */}
                                                            <input type="text" className="form-control" id="resource" value={resourcesFormData.resource} onChange={handleChange} required/>
                                                        </div>
                                                        <div className="form-group">
                                                            <label htmlFor="resourceName">Resource Name:</label> {/* Changed label for clarity */}
                                                            <input type="text" className="form-control" id="resourceName" value={resourcesFormData.resourceName} onChange={handleChange} required/>
                                                        </div>
                                                        <div className="form-group">
                                                            <label htmlFor="title">Title:</label>
                                                            <input type="text" className="form-control" id="title" value={resourcesFormData.title} onChange={handleChange} required/>
                                                        </div>
                                                        <div className="form-group">
                                                            <label htmlFor="imageUrl">Image URL:</label>
                                                            <input type="url" className="form-control" id="imageUrl" value={resourcesFormData.imageUrl} onChange={handleChange} />
                                                        </div>
                                                        <div className="form-group">
                                                            <label htmlFor="address">Address:</label>
                                                            <input type="text" className="form-control" id="address" value={resourcesFormData.address} onChange={handleChange} />
                                                        </div>
                                                        <div className="form-group">
                                                            <label htmlFor="phone">Phone Number:</label>
                                                            <input type="tel" className="form-control" id="phone" value={resourcesFormData.phone} onChange={handleChange} /> {/* Changed input type to tel for phone number */}
                                                        </div>
                                                        <div className="form-group">
                                                            <label htmlFor="contactName">Contact Name:</label>
                                                            <input type="text" className="form-control" id="contactName" value={resourcesFormData.contactName} onChange={handleChange} />
                                                        </div>
                                                        <div className="form-group">
                                                            <label htmlFor="website">Website:</label>
                                                            <input type="url" className="form-control" id="website" value={resourcesFormData.website} onChange={handleChange} />
                                                        </div>
                                                        <div className="form-group">
                                                            <label htmlFor="email">Email:</label>
                                                            <input type="email" className="form-control" id="email" value={resourcesFormData.email} onChange={handleChange} />
                                                        </div>
                                                        {/* Additional fields can be added here following the same pattern */}
                                                        <div className="form-group">
                                                            <label htmlFor="mission">Mission Statement:</label>
                                                            <textarea id="mission" className="form-control" value={resourcesFormData.mission} onChange={handleChange} /> {/* Changed input to textarea for longer text */}
                                                        </div>
                                                        <div className="form-group">
                                                            <label htmlFor="approach">Approach Description:</label>
                                                            <textarea id="approach" className="form-control" value={resourcesFormData.approach} onChange={handleChange} /> {/* Changed input to textarea for longer text */}
                                                        </div>
                                                        <div className="form-group">
                                                            <label htmlFor="services">Services Offered:</label>
                                                            <textarea id="services" className="form-control" value={resourcesFormData.services} onChange={handleChange} /> {/* Changed input to textarea for longer text */}
                                                        </div>
                                                        <div className="form-group">
                                                            <label htmlFor="hoursOfOperation">Hours Of Operation:</label>
                                                            <textarea id="hoursOfOperation" className="form-control" value={resourcesFormData.hoursOfOperation} onChange={handleChange} /> {/* Changed input to textarea for longer text */}
                                                        </div>
                                                        <div className="form-group">
                                                            <label htmlFor="locations">Locations embedding:</label>
                                                            <textarea id="locations" className="form-control" value={resourcesFormData.locations} onChange={handleChange} /> {/* Changed input to textarea for longer text */}
                                                        </div>
                                                        <div className="form-group">
                                                            <label htmlFor="socialMedia">Social Media:</label>
                                                            <textarea id="socialMedia" className="form-control" value={resourcesFormData.socialMedia} onChange={handleChange} /> {/* Changed input to textarea for longer text */}
                                                        </div>
                                                        <div className="form-group">
                                                            <label htmlFor="additionalInfo">Additional Info:</label>
                                                            <textarea id="additionalInfo" className="form-control" value={resourcesFormData.additionalInfo} onChange={handleChange} /> {/* Changed input to textarea for longer text */}
                                                        </div>
                                                        <button type="submit" class="btn btn-primary">Submit</button>
                                                    </form>

                                                </div>
                                            </div>
                                        ))} </div>
                                    </div>
                                )

                            } {/* End of the ternary mapping of resource cards */}

                            <button
                                className="fixed-create-btn"
                                onClick={() => setIsCreateFormOpen(true)}
                            >
                                Create +
                            </button>

                            {/* Create Form (conditionally rendered) */}
                            {isCreateFormOpen && adminControlPage === "eventsPage" && (
                                <div className="create-form-container">
                                    <form onSubmit={handleCreate}>
                                        {/* Form fields (similar to existing form) */}
                                        <div class="form-group">
                                            <label for="email">Title:</label>
                                            <input type="text" class="form-control" id="title" value={eventsFormData.title} onChange={handleChange} />
                                        </div>
                                        <div class="form-group">
                                            <label for="pwd">Description:</label>
                                            <input type="text" class="form-control" id="desc" value={eventsFormData.desc} onChange={handleChange} />
                                        </div>
                                        <div class="form-group">
                                            <label for="pwd">Date:</label>
                                            <input type="date" class="form-control" id="date" value={eventsFormData.date} onChange={handleChange} />
                                        </div>
                                        <div class="form-group">
                                            <label for="pwd">Address:</label>
                                            <input type="text" class="form-control" id="address" value={eventsFormData.address} onChange={handleChange} />
                                        </div>
                                        <div class="form-group">
                                            <label for="pwd">Image URL:</label>
                                            <input type="url" class="form-control" id="imageUrl" value={eventsFormData.imageUrl} onChange={handleChange} />
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
                            )} {/* End creation form for events */}

                            {isCreateFormOpen && adminControlPage === "resourcesPage" && (
                                <div className="create-form-container">
                                    <form onSubmit={handleCreate}>
                                        {/* Form fields */}
                                        <div className="form-group">
                                            <label htmlFor="resource">Resource Type:</label> {/* Changed label for clarity */}
                                            <input type="text" className="form-control" id="resource" value={resourcesFormData.resource} onChange={handleChange} />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="resourceName">Resource Name:</label> {/* Changed label for clarity */}
                                            <input type="text" className="form-control" id="resourceName" value={resourcesFormData.resourceName} onChange={handleChange} />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="title">Title:</label>
                                            <input type="text" className="form-control" id="title" value={resourcesFormData.title} onChange={handleChange} />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="imageUrl">Image URL:</label>
                                            <input type="url" className="form-control" id="imageUrl" value={resourcesFormData.imageUrl} onChange={handleChange} />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="address">Address:</label>
                                            <input type="text" className="form-control" id="address" value={resourcesFormData.address} onChange={handleChange} />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="phone">Phone Number:</label>
                                            <input type="tel" className="form-control" id="phone" value={resourcesFormData.phone} onChange={handleChange} /> {/* Changed input type to tel for phone number */}
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="contactName">Contact Name:</label>
                                            <input type="text" className="form-control" id="contactName" value={resourcesFormData.contactName} onChange={handleChange} />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="website">Website:</label>
                                            <input type="url" className="form-control" id="website" value={resourcesFormData.website} onChange={handleChange} />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="email">Email:</label>
                                            <input type="email" className="form-control" id="email" value={resourcesFormData.email} onChange={handleChange} />
                                        </div>
                                        {/* Additional fields can be added here following the same pattern */}
                                        <div className="form-group">
                                            <label htmlFor="mission">Mission Statement:</label>
                                            <textarea id="mission" className="form-control" value={resourcesFormData.mission} onChange={handleChange} /> {/* Changed input to textarea for longer text */}
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="approach">Approach Description:</label>
                                            <textarea id="approach" className="form-control" value={resourcesFormData.approach} onChange={handleChange} /> {/* Changed input to textarea for longer text */}
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="services">Services Offered:</label>
                                            <textarea id="services" className="form-control" value={resourcesFormData.services} onChange={handleChange} /> {/* Changed input to textarea for longer text */}
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="hoursOfOperation">Hours Of Operation:</label>
                                            <textarea id="hoursOfOperation" className="form-control" value={resourcesFormData.hoursOfOperation} onChange={handleChange} /> {/* Changed input to textarea for longer text */}
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="locations">Locations embedding:</label>
                                            <textarea id="locations" className="form-control" value={resourcesFormData.locations} onChange={handleChange} /> {/* Changed input to textarea for longer text */}
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="socialMedia">Social Media:</label>
                                            <textarea id="socialMedia" className="form-control" value={resourcesFormData.socialMedia} onChange={handleChange} /> {/* Changed input to textarea for longer text */}
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="additionalInfo">Additional Info:</label>
                                            <textarea id="additionalInfo" className="form-control" value={resourcesFormData.additionalInfo} onChange={handleChange} /> {/* Changed input to textarea for longer text */}
                                        </div>
                                        <div className="d-flex justify-content-end mt-3">
                                            <button type="submit" className="btn btn-primary">
                                                Create Resource
                                            </button>
                                            <button type="button" className="btn btn-secondary ml-2" onClick={() => setIsCreateFormOpen(false)}>
                                                Cancel
                                            </button>
                                        </div>
                                    </form>
                                </div>

                            )} {/* End creation form for resources */}

                        </div>

                    )// end conditon two
                } {/* end ternary operator for authorization */}





            </div>
        </>
    )
}