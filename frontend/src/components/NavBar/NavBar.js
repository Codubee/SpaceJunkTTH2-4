import React from 'react';
import './Navbar.css';
function App(){
    return(
       <div>
           <nav>
               <div class="container">
                <div class="row">
                    <div className=" logo col-md-6 col-sm-12">   Space Junk  </div>
                         <ul className="nav-links col-md-6 col-sm-12">
                            <li>
                                <a>Home</a>
                            </li>
                            <li>
                                <a>About</a>
                            </li>
                            <li>
                                <a>Project</a>
                            </li>
                            <li>
                                <a>Contact</a>
                            </li>
                        </ul> 
                    </div>
                </div>
                
            </nav>
          
        </div>
    );
}
export default App;
