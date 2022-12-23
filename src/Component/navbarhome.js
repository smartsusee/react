import { Link, Outlet} from "react-router-dom";
import img4 from './images/logoHR.jpg'

import pos1 from './images/passpot1.jpg'
import pos2 from './images/passpot2.jpg'
import img3 from './images/banner8.webp'



let Home =()=>{
    
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
   
  
          <div className="bg_slider">

</div>
 
 <div className="btn">
      
        <button>Get In Touch </button>

 </div>

  <div className="drapdowns">
     
     <ul className="dropdown"> <button>Quick Enquiry <ul className="list"> <br/>
      
      Name:<input placeholder="enter your name"/><br/><br/>
      Phone:<input placeholder="enter your phone"/><br/><br/>
      Email:<input placeholder="enter your mail" /><br/><br/>
      Msg: <input className="msg" placeholder="enter your msg"/>

      </ul> </button></ul>

  </div>



  <div className="welcome">
  
      <h1>Welcome to Delight HR</h1>
<p>Delight HR is leading recruitment process outsourcing and consulting organization located in Bangalore. The company is managed by an experienced team of professionals who have served leading organizations worldwide. Established in 2011, Delight HR has helped more than 300+ clients in finding the right talent and helped more than 1200+ candidates to find their dream jobs since inception. Working across Industry Verticals and Functional Areas, we are trusted to deliver fast, efficient and caring service to clients and candidates alike.

</p>

  </div>


<div className="grid">

 <img src={pos1}/>
 <p className='para1'><h1>Recruitment</h1>   
Delight HR is leading recruitment process outsourcing and consulting organization. Consultants at Delight HR will help you at every step to make right career move.</p>
 <img src={pos2}/>
 <p className='para2'><h1>HR Consulting</h1> 
Whether you want to improve your performance in Sales, Leadership, Interpersonal Skills, Communications, Presentations or Customer Service you’ll find a resource here.

How to make a successful CV?</p>

</div>

<div className='btnEl'>

<button className='El1'>Learn more</button>
<button className='El2'> Learn more</button>

</div>


<div className='banner1'>

<img src={img3} />

</div>

<div className='buttEl'>
<p><h1>How to make a successful CV?</h1> 
We will help you to create a successful CV in industrial standard</p>
<button className='bt1'>Learn more</button>
<button className='bt2' > Click Here To Get Our Cv Creation Tips</button>

</div>

<div className='test'>

 <h1>testimonials</h1>

</div>


<div className='paragraph1'>
<marquee>
<div  className='wordslide' >
<p className='p1'>We are delighted to work with Delight HR as our Manpower consultant and very satisfied with their Professional Services.<br/> Their team woks very closely to our specific requirements and we receive the right candidates with right skills.<br/> Their services are on time and we could depend on their experience from different sectors. Overall we are glad to have Delight<br/> HR for all our Manpower support.

Rajnish Agrawal
Director, ERAI-Bangalore</p>
</div>
</marquee>
{/* <p className='p2'>I would like to thank Delight HR for their professionalism and support while searching specific profiles for us. They make sure to find the candidates who suit our requirements. It was very beneficial for us to rely on them for our hiring needs."

Alexis de Lassat
Technical Director Nicomatic India Electronics Pvt. Ltd.

</p>

<p className='p3'> 
Timken has been associated with Delight HR for close to 2 years now & they have been a great support in filling up some of our critical positions. Apart from supporting us in our Bangalore requirements, Delight is also capable of providing profiles for some of our locations like Raipur, Chengelpet & Jamshedpur which definitely adds value for us. Owing to their diligent follow up, their candidates turn out is also good.

Prathima Ravindranath
Deputy Manager – OA/HR, Timken India R & D Pvt Ltd.

</p> */}
</div>
<div className='view1'>
<button> <a href=''>View All</a> </button> 
</div>


{/* <div className="footer">
   
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
 */}


</>)
  
}


export{

    Home
}