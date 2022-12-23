import { BrowserRouter, Routes, Route } from "react-router-dom";
import '../Component/navbar.css'
import {Layout} from './navbarlink'
import {Home} from'./navbarhome'
import { AboutUS } from "./navbaraboutus";
import {Recruitment} from './navbarrecruitment'
import {HRConsulting} from './navbarhrconsulting'
import {ViewJob} from'./navbarviewjob'
import {Clients} from './navbarclients'
import {ContactUs} from './navbarcontactus'
import {Blog} from './navbarblog'


let ParentWrapper =()=>{

return (<>
<div className="box">
<div className="navbar">
    <BrowserRouter>
        <Routes>
           <Route path='/' element={<Layout />} />
              {/* <Route path="/Nike" element={<Nike/>} /> */}
              <Route path="/home" element={<Home />} />
              <Route path="/aboutus" element={<AboutUS />} />
              <Route path="/recruitment" element={<Recruitment />} />
              <Route path="/hrconsulting" element={<HRConsulting />} />
              <Route path="/viewjob" element={<ViewJob />} />
              <Route path="/clients" element={<Clients/>} />
              <Route path="/contactus" element={<ContactUs/>} />
              <Route path="/blog" element={<Blog/>} />
            
        </Routes>
      </BrowserRouter>

      </div>
      </div>    

</>)

}


export{

  ParentWrapper,
}