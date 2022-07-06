import React from 'react';
import {Link} from 'react-router-dom';

function Navbar() {
    return (

                   <nav className="navbar navbar-expand-lg navbar-light bg-white font-f">
                 <div className='container p-4 fw-bold font-f'> 
               <Link to="/" class="navbar-brand">Evernote</Link>
             <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
           <span class="navbar-toggler-icon"></span>
         </button>
      
           <div class="collapse navbar-collapse" id="navbarSupportedContent">
             <ul class='navbar-nav mr-auto' >
             
                 <li class="nav-item">
                  <Link to="/about" class="nav-link">WHY EVERNOTE </Link>
                   </li>
    
                  <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                      FEATURES
                       </a>
                        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                          <a class="dropdown-item" href="/">Action</a>
                            <a class="dropdown-item" href="/">Another action</a>
                             <div class="dropdown-divider"></div>
                              <a class="dropdown-item" href="/">Something else here</a>
                               </div>
                                 </li>
                          
                  <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                      PLANS
                       </a>
                        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                          <a class="dropdown-item" href="/">Action</a>
                            <a class="dropdown-item" href="/">Another action</a>
                             <div class="dropdown-divider"></div>
                              <a class="dropdown-item" href="/">Something else here</a>
                               </div>
                                 </li>
                              </ul>
    
    <div class='collapse navbar-collapse navbar-nav mr-auto' id='navbarSupportedContent'> 
    <ul class='navbar-nav ms-auto'>
    
                   <li class="nav-item">
                     <Link to="/contact" class="nav-link">Help</Link>
                       </li>
    
                    <li class="nav-item">
                      <a class="nav-link disabled" href="/"> Log In</a>
                        </li>
    
                        
                    <li class="nav-item">
                     <div className='container'> 
                     <div class=''>
                     <button type="button" class="btn btn-outline-success" data-mdb-ripple-color="dark">Download</button>
                     </div>
                     </div>
                        </li>
         </ul>               
  
                    </div>  
                  </div>
                </div>
         </nav>
        
      );
}

export default Navbar;