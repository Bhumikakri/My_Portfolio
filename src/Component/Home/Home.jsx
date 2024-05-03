import React from 'react';
import image from '../../assets/Image.png';
import './Home.css';
import resume from '../../assets/Resume.pdf';

const Home = () => {

    const downloadResume = () => {
        const resumeUrl = resume;
        const link = document.createElement('a');
    
        link.download = 'BhumikaResume.pdf';
        link.href = resumeUrl;
    
        // Trigger a click on the link to start the download
        link.click();

    };
    
    return (
        <div className='HomePage'>
            <div className='contents'>
                <span>I'm</span>
                <h1 className='heading'>Bhumika Kumari</h1>
                <h2 className='developer' style={{color:"Highlight"}}>Full Stack Developer</h2>

                <div className='Buttons'>
                    <button onClick={downloadResume}>Download cv</button>
                    <button><a href="#Contacts">Contact me</a></button>
                </div>
            </div>
            <div style={{ display:"flex",alignItems:"center", flexDirection:"column"}}>
                <img src={image} className='myImage' />
                <div className='Icons'>
                    
                </div>
            </div>


        </div>
    )
}

export default Home