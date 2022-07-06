import React from 'react';
import Note from './Note';


function Display() {
    return (

         <div className='container' > 
      <section className='section'>
        <div class="mt-5 mb-5">
           <div class="card-body">
              <img src='https://evernote.com/c/assets/homepage-repackaging/task_hero_image@2x__en.png?b5afe30ef59efef5'
                className='vid'/>
                    </div>
                     </div>
               </section>
            <Note/>
         </div> 
      ); 
}

export default Display;