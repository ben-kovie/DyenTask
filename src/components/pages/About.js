import React from 'react';
import {Link} from 'react-router-dom';
import Display from './patch/Display';
import Video from './patch/Video';

function AboutUs() {
    return (

         <div > 
          
          <Display/>
            <Video/>
        <section className='section'>
            
          <div className='container'>
            <div className='row'>
              <div className='col-md-9 mx-auto container text-center mt-5 mb-5 '>
                <h2> Find your Evernote </h2>
                <h4> Whether you want to get organized, keep your personal life on track, 
                  or boost workplace productivity, Evernote has the right plan for you.</h4>
                  <Link to="/" className='L-text'>COMPARE PLANS →</Link>
              </div>
            </div>
          </div>
             
               </section>
       
        
         </div> 
      ); 
}

export default AboutUs;