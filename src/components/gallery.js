import React, { Fragment } from 'react';

const GalleryComponent = ({ state }) => {

    return (
        <Fragment>
            {
                state.newdata && state.newdata.map((d, i) => (
                    <div className="popular_titles-dynamic">
                        <div key={i}>
                            <div className=' text-white'
                                style={{ backgroundImage: `url(${d.images.PosterArt.url})`, backgroundSize: 'contain', backgroundRepeat: 'no-repeat', height: "250px", width: "200px" }} />
                            <p className='text-black'>{d.title}</p>
                        </div>
                    </div>
                ))
            }
        </Fragment>

    )
}

export default GalleryComponent;
