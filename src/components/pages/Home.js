import React from 'react';
import About from '../pages/About';
import Contact from '../pages/Contact';
import {Link} from 'react-router-dom';

function Home() {
    return (
        <div>
                          <div className='py-3 font-f'>
                        <div className='container text-center pt-5'>
                      <h1 className='text-center p-3 display-4 fw-bold'> Tame your work, organize your life </h1>
                         <h5>Remember everything and tackle any project with your notes, tasks, 
                          and schedule all in one place.</h5>
                          <div className='dl'>   
             
              < a href="/" className=" bc "> sign up for free </a>

                          </div>
                         
                          <div   className='fs-5' >
                            <a href='/' className='hp'> Already have an account? Log in</a>
                          
                          </div>
                     
                   </div>
                 </div>
             
                   <About/>
                 
                  <Contact/>
                 
                 
     </div>         

              
      );
}

export default Home;