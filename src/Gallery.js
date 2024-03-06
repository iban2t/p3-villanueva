import * as React from "react";
import {
    MDBContainer,
    MDBCol,
    MDBRow,
  } from 'mdb-react-ui-kit';
  
function Gallery() {
    return (
        <div className="gallery">
            <h2>Gallery</h2>
            <div className="spacer"></div>
            <div className="spacer"></div>
            <MDBContainer>
                <MDBRow>
                    {/* Col 1 */}
                    <MDBCol lg={4} md={12} className='mb-4 mb-lg-0'>
                    <img
                        src='/images/gallery1.jpg'
                        className='w-100 shadow-1-strong rounded mb-4'
                        alt='Boat on Calm Water'
                    />
                    <img
                        src='/images/gallery3.jpg'
                        className='w-100 shadow-1-strong rounded mb-4'
                        alt='Wintry Mountain Landscape'
                    />
                    <img
                        src='/images/gallery8.jpeg'
                        className='w-100 shadow-1-strong rounded mb-4'
                        alt='Waves at Sea'
                    />
                    <img
                        src='/images/gallery10.jpeg'
                        className='w-100 shadow-1-strong rounded mb-4'
                        alt='Waves at Sea'
                    />
                    <img
                        src='/images/gallery17.jpeg'
                        className='w-100 shadow-1-strong rounded mb-4'
                        alt='Waves at Sea'
                    />
                    <img
                        src='/images/gallery12.jpeg'
                        className='w-100 shadow-1-strong rounded mb-4'
                        alt='Yosemite National Park'
                    />
                    <img
                        src='/images/gallery13.jpeg'
                        className='w-100 shadow-1-strong rounded mb-4'
                        alt='Yosemite National Park'
                    />
                    </MDBCol>
                    
                    <MDBCol lg={4} className='mb-4 mb-lg-0'>
                        {/* Col 2 */}
                    <img
                        src='/images/gallery5.jpg'
                        className='w-100 shadow-1-strong rounded mb-4'
                        alt='Mountains in the Clouds'
                    />
            
                    <img
                        src='/images/gallery2.jpg'
                        className='w-100 shadow-1-strong rounded mb-4'
                        alt='Boat on Calm Water'
                    />
                    <img
                        src='/images/gallery6.jpg'
                        className='w-100 shadow-1-strong rounded mb-4'
                        alt='Yosemite National Park'
                    />
                    <img
                        src='/images/gallery11.jpeg'
                        className='w-100 shadow-1-strong rounded mb-4'
                        alt='Yosemite National Park'
                    />
                    <img
                        src='/images/gallery16.jpeg'
                        className='w-100 shadow-1-strong rounded mb-4'
                        alt='Yosemite National Park'
                    />
                    </MDBCol>
            
                    <MDBCol lg={4} className='mb-4 mb-lg-0'>
                        {/* Col 3 */}
                    <img
                        src='/images/gallery7.jpeg'
                        className='w-100 shadow-1-strong rounded mb-4'
                        alt='Waves at Sea'
                    />
                    <img
                        src='/images/gallery4.jpg'
                        className='w-100 shadow-1-strong rounded mb-4'
                        alt='Yosemite National Park'
                    />
                    <img
                        src='/images/gallery9.jpeg'
                        className='w-100 shadow-1-strong rounded mb-4'
                        alt='Yosemite National Park'
                    />
                    <img
                        src='/images/gallery14.jpeg'
                        className='w-100 shadow-1-strong rounded mb-4'
                        alt='Yosemite National Park'
                    />
                    <img
                        src='/images/gallery15.jpeg'
                        className='w-100 shadow-1-strong rounded mb-4'
                        alt='Yosemite National Park'
                    />
                    <img
                        src='/images/gallery18.jpeg'
                        className='w-100 shadow-1-strong rounded mb-4'
                        alt='Yosemite National Park'
                    />
                    
                    </MDBCol>
                    
                </MDBRow>
            </MDBContainer>
        </div>
    );
  }

  export default Gallery;