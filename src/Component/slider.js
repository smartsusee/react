import pos1 from './images/passpot1.jpg'
import pos2 from './images/passpot2.jpg'
import img1 from './images/banner8.webp'
// import ban1 from './images/banner1.jpg'
// import ban2 from './images/banner2.jpg'
// import ban3 from './images/banner3.jpg'
// import Carousel from 'react-bootstrap/Carousel';
// import Carousel from 'react-bootstrap/Carousel';

// let  NoTransitionExample=()=>{
//   return (<>
//     <Carousel slide={false}>
//       <Carousel.Item>
//         <img
//           className="d-block w-100"
//           src={ban1}
//           alt="First slide"
//         />
//         <Carousel.Caption>
//           <h3>First slide label</h3>
//           <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
//         </Carousel.Caption>
//       </Carousel.Item>
//       <Carousel.Item>
//         <img
//           className="d-block w-100"
//           src={ban2}
//           alt="Second slide"
//         />

//         <Carousel.Caption>
//           <h3>Second slide label</h3>
//           <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
//         </Carousel.Caption>
//       </Carousel.Item>
//       <Carousel.Item>
//         <img
//           className="d-block w-100"
//           src={ban3}
//           alt="Third slide"
//         />

//         <Carousel.Caption>
//           <h3>Third slide label</h3>
//           <p>
//             Praesent commodo cursus magna, vel scelerisque nisl consectetur.
//           </p>
//         </Carousel.Caption>
//       </Carousel.Item>
//     </Carousel>
  
//     </> );
// }

// export { 
//   NoTransitionExample,
// };




// let DarkVariantExample=()=> {
//   return (
//     <Carousel variant="dark">
//       <Carousel.Item>
//         <img
//           className="d-block w-100"
//           src={ban1}
//           alt="First slide"
//         />
//         <Carousel.Caption>
//           <h5>First slide label</h5>
//           <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
//         </Carousel.Caption>
//       </Carousel.Item>
//       <Carousel.Item>
//         <img
//           className="d-block w-100"
//           src={ban2}
//           alt="Second slide"
//         />
//         <Carousel.Caption>
//           <h5>Second slide label</h5>
//           <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
//         </Carousel.Caption>
//       </Carousel.Item>
//       <Carousel.Item>
//         <img
//           className="d-block w-100"
//           src={ban3}
//           alt="Third slide"
//         />
//         <Carousel.Caption>
//           <h5>Third slide label</h5>
//           <p>
//             Praesent commodo cursus magna, vel scelerisque nisl consectetur.
//           </p>
//         </Carousel.Caption>
//       </Carousel.Item>
//     </Carousel>
//   );
// }

  //  let  DarkVariantExample =()=>{
  //  return(<>
  //  <div className='slider'>
  //      <img src={ban1}/>
  //      <img src={ban2}/>
  //      <img src={ban3}/>
  //      </div>
  //      </>)


  //  }
 
  
  
   let DarkVariantExample=()=> {

 return(<>
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

<img src={img1} />

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



</>)
      


  }
  



export {
  
  DarkVariantExample
};