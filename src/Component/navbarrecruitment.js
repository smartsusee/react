import { Link, Outlet} from "react-router-dom";
// import img1 from './images/img1.jpg'
import img4 from './images/logoHR.jpg'
 

 let Recruitment=()=>{
  return(<>

    <div className="container1">
              
                    <li><Link to="/home" className='li' >Home</Link></li>   
                    <li><Link to="/aboutus" className='li'>About Us</Link></li>
                    <li><Link to="/recruitment" className='li'>Recruitment</Link></li>
                    <li><Link to="/hrconsulting" className='li'>HR Consulting</Link></li>
                    <li><Link to="/viewjob" className='li'>View Job</Link></li>
                    <li><Link to="/clients" className='li'>Clients</Link></li>
                    <li><Link to="/contactus" className='li'>Contact Us</Link></li>
                    <li><Link to="/blog" className='li'>Blog</Link></li>             
                    
             <Outlet/>
        
             </div>
    
             <div className='img1'>
            
            <img src={img4}  />
           </div>
        
       <div  className='contact'>
    
       <li> <i class="fa fa-phone"></i>+91-7899623388 </li>
           <div className='FIT'>
           <a href="https://www.instagram.com/" target="_blank"><i class="fa fa-instagram" id='fit'></i></a>
           <a href="https://www.facebook.com/" target="_blank"><i class="fa fa-facebook" id='fit'></i></a>
           <a href="https://twitter.com/" target="_blank"><i class="fa fa-twitter"  id='fit'></i></a>
   
   </div> 
       </div>
       
       <div className="backimg">
   

    </div>
        
      <div className="containers">
        
          <div className="listEl_1">
                
                <ul className="ul">
                  
                  <p className="pEl_1">Candidates    </p>
                
                    <div className="li">
                     <h1>Search Jobs</h1>
                      <p className="desicion">Decision to change job could be a life changing one as it touches all aspects of your life, be it work life balance, Job satisfaction and sense of achievement. Consultants at Delight HR will help you at every step to make right career move.</p>

                      <div className="li1">
                      <p className="pEl_3">Send Resume</p>
                        <div className="Three_input">
                      <input placeholder="your name" /><br/>
                      <br/><input placeholder="you mail"/><br/>
                      <br/><input placeholder="message"/><br/>
                      <br/> <button className="Add" >Add Resume</button><br/>
                      <br/><button className="send">Send</button>
                      </div>

                      </div>

                </div>
              
                
                  
                
                 </ul>

             </div>
       
        
          <div className="listEl_2">

             <ul>
                 <p className="pEl_2">Compaines</p>
               </ul>
            
          </div>


      </div>








    </>)
     

}

 export{

   Recruitment,
 }


