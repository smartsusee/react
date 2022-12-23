import { Link, Outlet} from "react-router-dom";
import img1 from './images/img1.jpg'

let ContactUs =()=>{
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
                
                <img src={img1}  />
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

           
        
        </>)
         

}

export {

    ContactUs
}