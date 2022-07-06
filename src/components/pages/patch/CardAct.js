import React from 'react';
import Card from "./Card";
import {Link} from 'react-router-dom';


function CardAdd( ) {
     return (
   <div className='mt-5 mb-5'>
     <section className='section'>
        <div className='container mt-5 '>
          <div class=" card col-md-9 mx-auto container lft shadow">
            
             <h5 className='mt-4'>EVERNOTE TEAMS</h5>
             <div className='deck'>
        <h1>NGN 2,300.00 </h1><p> / USER / MONTH</p>
</div>
           <div className='deck '>  
                  <div>
             <p> Collaborate and share knowledge to keep your team on the same page.</p>
          </div> 
            <div className=' ms-auto'> 
       <Link to="/" className='L-text '>Get-started</Link>
          </div>  

              </div>       
                     
                     </div>
         
        </div>
      </section>
      <div>
        <Card/> 
          </div>

   </div>
      )
}

export default CardAdd;