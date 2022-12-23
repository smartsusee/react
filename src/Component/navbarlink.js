import { Link, Outlet} from "react-router-dom";
import {DarkVariantExample} from './slider'
import {Img} from './img'

let Layout =()=>{


return(<>

         <div className="container1">
      
            <li><Link to="/home" className='li'>Home</Link></li>   
            <li><Link to="/aboutus" className='li'>About Us</Link></li>
            <li><Link to="/recruitment" className='li'>Recruitment</Link></li>
            <li><Link to="/hrconsulting" className='li'>HR Consulting</Link></li>
            <li><Link to="/viewjob" className='li'>View Job</Link></li>
            <li><Link to="/clients" className='li'>Clients</Link></li>
            <li><Link to="/contactus" className='li'>Contact Us</Link></li>
            <li><Link to="/blog" className='li'>Blog</Link></li>             
            
     <Outlet/>

     </div>
     <Img />
     <DarkVariantExample/>
  
  </>)


}


export{

  Layout,
}