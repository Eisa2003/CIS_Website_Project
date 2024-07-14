import React, { useState, useEffect } from 'react';

const NewEventsCr = () => {
    const [events, setEvents] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        fetchData();
    }, []); // No dependency array implies -> Should only run once after the initial render

    const fetchData = async () => {
        setIsLoading(true);
        try {
            const response = await fetch('http://emanagerapp-env.eba-eqcsmp9h.ap-south-1.elasticbeanstalk.com/api/events/');
            const data = await response.json();
            setEvents(data);
            arrayToBeDisplayed();
        } catch (error) {
            console.error('Error fetching events:', error);
        } finally {
            setIsLoading(false);
        }
    };

    // Cards funcitoning logic
    const [currentPage, setCurrentPage] = useState(1);
    const [cardsPerPage, setCardsPerPage] = useState(3);
    const [currentEvents, setCurrentEvents] = useState([]); // This array is just to display
    // Events for the corresponding page no.                          


    useEffect(() => {
         arrayToBeDisplayed();
        
          window.addEventListener('resize', handleResize);

          return () => { // We remove it as it attaches again as soon as we resize the window. and return to perform proper cleanup
            window.removeEventListener('resize', handleResize);
          };
    }, [currentPage, cardsPerPage]); // Displaying the required cards for the initial render

    /*
    const convertToMulOfThree = (arrayLength) => {
        const remainder = arrayLength % 3;

        setFakeArrayLength(arrayLength + (remainder === 0 ? 0 : 3 - remainder)) // Returning the nearest greater multiple of three
        //console.log(fakeArrayLength)
    } // end function convertToMulOfThree*/

    const handleResize = () => {
        const newCardsPerPage = window.innerWidth < 768 ? 1 : 3; // Adjust breakpoint as needed
        setCardsPerPage(newCardsPerPage);
      };

    const arrayToBeDisplayed = () => {
        const newArray = events.slice(
            (cardsPerPage * currentPage) - cardsPerPage, // Here three is the constant that we are using to shift the card values
            Math.min(currentPage * cardsPerPage, events.length) // This is smart. When we reach the end, It has to be the current page * 3 to be greater
        );
        setCurrentEvents(newArray);
        /* The below logic of mine was still relevant
                if(currentPage === maxPageCount){ // if it is going to be the last page, then...
                    let cardsLeft = -1 * (events.length % 3)
                    for(let i=-1; i>=cardsLeft; i--){
                        newArray.push(events[i]);
                    } // end inner for
                }
                else{
                    
                    newArray = events.slice(
                        (3 * currentPage) - 3, (3 * currentPage) // from - to. Slice => [ , )
                    )*/


    } // end function arrayToBeDisplayed

    // Updating the page
    const handleNext = () => {
        const maxPageCount = Math.ceil(events.length / cardsPerPage);
        setCurrentPage((currentPage) => Math.min(currentPage + 1, maxPageCount)); // will always get stucj at maxPageCount
    } // end function handleNext

    const handlePrevious = () => {
        const maxPageCount = Math.ceil(events.length / cardsPerPage);
        setCurrentPage((currentPage) => Math.max(currentPage - 1, 1)); // The same as above. 1-1=0, 1 => 1
    }// end function handlePrevious

    return (
        <div className="container">
            {isLoading ? (
                <div>Loading events...</div>
            ) : (
                <div className="eventCardsContainer">
                    {currentEvents.map((event) => (
                        <div className='indCards'>
                            <img class="card-img-top" style={{ objectFit: "cover", height: '50vh', borderTopLeftRadius: '20px', borderTopRightRadius: '20px' }} src={event.imageUrl} alt={event.title} />
                            <div class="card-body indCardBody" >
                                <h5 class="card-title"><strong>{event.title}</strong></h5>
                                <p class="card-text">{event.desc}</p>
                                <p className="card-text">{event.date}</p>
                                <p className="card-text">{event.address}</p>
                            </div>
                        </div>
                    ))}
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
