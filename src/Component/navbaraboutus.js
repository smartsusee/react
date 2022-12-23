import { Link, Outlet} from "react-router-dom";
// import img1 from './images/img1.jpg'
import img4 from './images/logoHR.jpg'

import face from './images/face.png'
import face1 from './images/face1.png'

import { useState } from "react";



let AboutUS =()=>{

const [age,setAge] = useState("' hi welcome '")

let btn =()=>{
   setTimeout( function (){
    alert("hi")
    setAge("For the last one decade a professional turned Entrepreneur. Successfully built and running businesses in Retail and HR and other Services.")
   },1000)
    
}



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
   
      <h2>To be the best in class recruitment and<br/>
staffing services provider in the country</h2>

     
     <h1>
     About Us
     </h1>

   </div>

<div className="company">
 
 <h1>Company Overview</h1>
 <p>Delight HR has won accolades and business from existing and new clients for our consultative recruitment approach.We have been helping our clients to improve their recruitment process in terms of Quality-of-Hire, Time-to-Fill and Cost-per-Hire. We specialize in providing customized hiring solutions to our clients so that they can achieve greater efficiency and business performance.Through our collaborative approach and flawless execution we help our clients achieve their strategic talent acquisition goals. Our passion, integrity and work ethics set us apart and make us a preferred hiring partner with our ever expanding client base. We seek to deliver excellent value to our clients and candidates alike with our highly professional services. We are proud to call ourselves recruiters…a job that changes people’s lives and improves business performance.</p>


</div>

<div className="our">
<h1>our values</h1> 
<input type="text" placeholder="philoshophy"/>
<input type="text" placeholder="our mission"/>
<input type="text" placeholder="our vision"/>

<p>We believe that recruitment is more than helping candidates change jobs and filling open positions for an employer. To us, it is about empowerment. Empowering candidates with sound career choices and building strong, stable and productive teams for an organization.
</p>
</div>


<div className="ourbg">
    

</div>
<div className="drapdowns">
       
       <ul className="dropdown"> <button>Quick Enquiry <ul className="list"> <br/>
        
        Name:<input  className="msg1" placeholder="enter your name"/><br/><br/>
        Phone:<input  className="msg1" placeholder="enter your phone"/><br/><br/>
        Email:<input  className="msg1" placeholder="enter your mail" /><br/><br/>
        Msg: <input className="msg" placeholder="enter your msg"/>

        </ul> </button></ul>
 
    </div>

    <div className="team">

       <h1>Our Team</h1>

      </div>

      <div className="face"> 
        <img src={face} />
         <h3>Arvind Kumar</h3>
         <h3 className="h3">Founder</h3>
   
       </div>

       <div className="facepara">
       
       <p>An Engineering Graduate (B.E. Mech.) from NIT Trichy and MBA from Punjab University Chandigarh. Senior Management professional with over 25 years of rich corporate experience with MNC’s of repute like Bosch Ltd. (formerly MICO), SKF Bearings and Black & Decker-Dubai. Held several Business Leadership Roles in these organizations.</p>

       <p>Areas of expertise are Business Strategy, Setting up Business Operations. Business Development and Sales & Marketing. Other areas of interests are Human Development, Leadership Development, mentoring and building high performance teams.</p>
       
       <p>
       For the last one decade a professional turned Entrepreneur. Successfully built and running businesses in Retail and HR and other Services.
       </p>
       </div>

    
<div className="usestate" >
      <button onClick={()=>btn()}>Click</button>
        
      <p>
        <marquee>
        {age}
        </marquee>
        </p>
            
  </div>

<div className="face" id="face1">
<img src={face1} />
<h3>Tamil Rajen</h3>
<h3 className="h3">Founder</h3>

</div>

<div className="facepara" id="face2">
       
       <p>An Engineering Graduate (B.E. Mech.) from NIT Trichy and MBA from Punjab University Chandigarh. Senior Management professional with over 25 years of rich corporate experience with MNC’s of repute like Bosch Ltd. (formerly MICO), SKF Bearings and Black & Decker-Dubai. Held several Business Leadership Roles in these organizations.</p>
       
       <p>Areas of expertise are Business Strategy, Setting up Business Operations. Business Development and Sales & Marketing. Other areas of interests are Human Development, Leadership Development, mentoring and building high performance teams.</p>

       <p>
       For the last one decade a professional turned Entrepreneur. Successfully built and running businesses in Retail and HR and other Services.
       </p>
     


   </div>    



 

    <div className="footer">
   
       <p>CORPORATE OFFICE <br/>
Delight HR Services Pvt. Ltd.<br/>
#14, AJR Pride, 2nd Floor, 27th Main,<br/>
Sector 1, HSR Layout, Bangalore-560102
</p>
      

    </div>

    <div className="footerbg">

<li className="phone1"> <i class="fa fa-phone"></i>+91-7899623388 </li>
        <div className='FIT'>
        <a href="https://www.instagram.com/" target="_blank"><i class="fa fa-instagram" id='fit'></i></a>
        <a href="https://www.facebook.com/" target="_blank"><i class="fa fa-facebook" id='fit'></i></a>
        <a href="https://twitter.com/" target="_blank"><i class="fa fa-twitter"  id='fit'></i></a>

</div>
       </div>

  <div className="footerpara">
           <p>All rights reserved delight hr services 2015 | Privacy policy <br/>
Powered by BLS Software Pvt. Ltd.</p>
  </div>

</>)

}


export{

    AboutUS,
}
