import React, { useState, useEffect } from 'react'
import { Container } from 'react-bootstrap';
import { storeEntries } from '../feed/sample';

const Movies = () => {
    const [state, setState] = useState([]);
    const [loading, setloading] = useState(false);
    const [error, setError] = useState(false);

    const loadValues = () => {
        try
        {
            setloading(true);
            const newdata = storeEntries.filter((d) => d.programType === "movie");
            // console.log({ ...state, newdata });
            setState({ ...state, newdata });
            setloading(false);
        } catch (error)
        {
            setError(true);
        }
    }

    useEffect(() => {
        loadValues();
        return () => {
            loadValues();
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    return (
        <div>
            <div className='bg-dark text-white p-2'>
                <Container>
                    <h5>Popular Movies</h5>
                </Container>
            </div>

            <div className='popular_titles-dynamic'>
                {error ? 'Oops, something went wrong...' : loading ? "Loading..." :
                    (
                        state.newdata && state.newdata.map((d, i) => (
                            <div key={i} className=''>
                                <div className=' text-white'
                                    style={{ backgroundImage: `url(${d.images.PosterArt.url})`, backgroundSize: 'contain', backgroundRepeat: 'no-repeat', height: "250px", width: "200px" }} />
                                <p className='text-black'>{d.title}</p>
                            </div>
                        ))
                    )
                }

            </div>
        </div>
    )
}

export default Movies;
