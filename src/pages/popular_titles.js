import React from 'react';
import { Container } from 'react-bootstrap';
import { withRouter } from 'react-router-dom';
// import Bg from '../images/placeholder.png';

const PopularTitles = ({ history }) => {
    return (
        <div className=''>
            <div className='bg-dark text-white p-2'>
                <Container>
                    <h5>Popular Titles</h5>
                </Container>
            </div>
            <div className='popular_titles '>
                <div onClick={() => history.push('/series')} style={{ cursor: 'pointer' }}>
                    <div className='popular_titles-items text-white'>series</div>
                    <p>Popular Series</p>
                </div>
                <div onClick={() => history.push('/movies')} style={{ cursor: 'pointer' }}>
                    <div className='popular_titles-items text-white'>movies</div>
                    <p>Popular Movies</p>
                </div>
            </div>
        </div>
    )
}

export default withRouter(PopularTitles);
