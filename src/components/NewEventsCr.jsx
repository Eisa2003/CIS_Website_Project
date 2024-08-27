import React, { useState, useEffect } from 'react';

const NewEventsCr = () => {
    const [events, setEvents] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    // Cards funcitoning logic
    const [currentPage, setCurrentPage] = useState(1);
    const [cardsPerPage, setCardsPerPage] = useState(3);
    const [currentEvents, setCurrentEvents] = useState([]); // This array is just to display
    // Events for the corresponding page no.    

    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true);
            try {
                const response = await fetch('https://api.hamptoncountyresourcecenter.org/api/events');
                const data = await response.json();
                setEvents(data);
            } catch (error) {
                console.error('Error fetching events:', error);
            } finally {
                setIsLoading(false);
            }
        };

        fetchData();
    }, []); // No dependency array implies -> Should only run once after the initial render

    useEffect(() => {
        const calculateCurrentEvents = () => {
            const startIndex = (currentPage - 1) * cardsPerPage;
            const endIndex = Math.min(currentPage * cardsPerPage, events.length);
            const newCurrentEvents = events.slice(startIndex, endIndex);
            setCurrentEvents(newCurrentEvents);
        };

        if (events.length > 0) { // Only calculate after events are fetched
            calculateCurrentEvents();
        }

        // Debounce or throttle window resize event if needed
        const handleResize = () => {
            const newCardsPerPage = window.innerWidth < 768 ? 1 : 3;
            setCardsPerPage(newCardsPerPage);
            calculateCurrentEvents(); // Recalculate on resize
        };

        const resizeTimeout = setTimeout(handleResize, 200); // Debounce for 200ms

        return () => {
            clearTimeout(resizeTimeout); // Cleanup timeout on unmount
            window.removeEventListener('resize', handleResize);
        };
    }, [events, currentPage, cardsPerPage]); // Update on events, page, or cards change

    /*
    const convertToMulOfThree = (arrayLength) => {
        const remainder = arrayLength % 3;

        setFakeArrayLength(arrayLength + (remainder === 0 ? 0 : 3 - remainder)) // Returning the nearest greater multiple of three
        //console.log(fakeArrayLength)
    } // end function convertToMulOfThree*/

    /* Another logic of mine
    const arrayToBeDisplayed = async() => {
        const newArray = events.slice(
            (cardsPerPage * currentPage) - cardsPerPage, // Here three is the constant that we are using to shift the card values
            Math.min(currentPage * cardsPerPage, events.length) // This is smart. When we reach the end, It has to be the current page * 3 to be greater
        );
        return newArray;
        //console.log(currentEvents);
        // The below logic of mine was still relevant
                if(currentPage === maxPageCount){ // if it is going to be the last page, then...
                    let cardsLeft = -1 * (events.length % 3)
                    for(let i=-1; i>=cardsLeft; i--){
                        newArray.push(events[i]);
                    } // end inner for
                }
                else{
                    
                    newArray = events.slice(
                        (3 * currentPage) - 3, (3 * currentPage) // from - to. Slice => [ , )
                    )


    } // end function arrayToBeDisplayed */

    // Updating the page
    const handleNext = () => {
        const maxPageCount = Math.ceil(events.length / cardsPerPage);
        setCurrentPage((currentPage) => Math.min(currentPage + 1, maxPageCount));
    };

    const handlePrevious = () => {
        const maxPageCount = Math.ceil(events.length / cardsPerPage);
        setCurrentPage((currentPage) => Math.max(currentPage - 1, 1));
    };

    return (
        <div className="container">
            {isLoading ? (
                <div>Loading events...</div>
            ) : (
                <div className="eventCardsContainer" style={{ padding: '10px' }}>
                    {currentEvents.length > 0 ? (
                        currentEvents.map((event) => (
                            <div className="indCards" key={event.id}> {/* Add a unique key for each event */}
                                <img
                                    className="card-img-top"
                                    style={{ objectFit: "cover", height: '42vh', maxHeight: '350px', borderTopLeftRadius: '20px', borderTopRightRadius: '20px' }}
                                    src={event.imageUrl}
                                    alt={event.title}
                                />
                                <div className="card-body indCardBody">
                                    <h5 className="card-title"><strong>{event.title}</strong></h5>
                                    <p className="card-text">{event.desc}</p>
                                    <p className="card-text">{event.date}</p>
                                    <p className="card-text">{event.address}</p>
                                </div>
                            </div>
                        ))
                    ) : (
                        <div>No events found.</div>
                    )}
                </div>
            )}

            <div style={{ display: 'flex', justifyContent: 'center', marginTop: '10px' }}>
                <button onClick={handlePrevious} className='indCardsbtn'>Previous</button>
                <button onClick={handleNext} className='indCardsbtn'>Next</button>
            </div>

        </div>
    );
};

export default NewEventsCr;
