import React ,{useEffect}from 'react'
import './main.css'
import {CiLocationOn} from 'react-icons/ci'
import {BsClipboardCheck} from 'react-icons/bs'


import img from '../../Assets/img1.jpg'
import img2 from '../../Assets/img2.jpg'
import img3 from '../../Assets/img3.jpg'
import img4 from '../../Assets/img4.jpg'
import img5 from '../../Assets/img5.jpg'
import img6 from '../../Assets/img6.jpg'
import img7 from '../../Assets/img7.jpg'
import img8 from '../../Assets/img8.jpg'
import img9 from '../../Assets/img9.jpg'

import Aos from "aos";
import'aos/dist/aos.css'

//import data->

const Data=[
  {
    id:1,
    imgSrc: img,
    destTitle:'Address',
    location:'New Zealand',
    grade:'COLTURAL RELAX',
    fees:'700$',
    description:'New Zealand or New Zealand is an island country.'
  },
  {
    id:2,
    imgSrc: img2,
    destTitle:'Address',
    location:'Switzerland',
    grade:'COLTURAL RELAX',
    fees:'500$',
    description:'Switzerland Switzerland, officially the Swiss Confederation.'
  },
  {
    id:3,
    imgSrc: img3,
    destTitle:'Address',
    location:'ThaiLand',
    grade:'COLTURAL RELAX',
    fees:'200$',
    description:'Thailand is a particularly developed country in the tourism industry'
  },
  {
    id:4,
    imgSrc: img4,
    destTitle:'Address',
    location:'VietNam',
    grade:'COLTURAL RELAX',
    fees:'200$',
    description:'The best website to plan your trip to Vietnam'
  },
  {
    id:5,
    imgSrc: img5,
    destTitle:'Address',
    location:'Spain',
    grade:'COLTURAL RELAX',
    fees:'200$',
    description:'Mainly located on the Iberian peninsula in southwestern Europe'
  },
  {
    id:6,
    imgSrc: img6,
    destTitle:'Address',
    location:'France',
    grade:'COLTURAL RELAX',
    fees:'200$',
    description:'the country largest city and main cultural and commercial centre'
  },
  {
    id:7,
    imgSrc: img7,
    destTitle:'Address',
    location:'Italy',
    grade:'COLTURAL RELAX',
    fees:'200$',
    description:'A country in Southern and Western Europe'
  },
  {
    id:8,
    imgSrc: img8,
    destTitle:'Address',
    location:'ThaiLand',
    grade:'COLTURAL RELAX',
    fees:'200$',
    description:'Thailand is a particularly developed country in the tourism industry'
  },
  {
    id:9,
    imgSrc: img9,
    destTitle:'Address',
    location:'ThaiLand',
    grade:'COLTURAL RELAX',
    fees:'200$',
    description:'Thailand is a particularly developed country in the tourism industry'
  },

]

const Main = () => {

  // hook
  useEffect(()=>(
    Aos.init({duration:2000})
  ),[])

  return (
    <section className='main container section'>
      <div className="secTitle">
        <h3 data-aos="fade-right"className="title">
          Most visited destinations
        </h3>
      </div>

    <div className="secContent grid">
      {/*create array */}

      {
        Data.map(({id, imgSrc, destTitle, location, grade, fees, description})=>{
          return(
            <div key={id} data-aos="fade-up" className="singleDestination">
              
              <div className="imgDiv">
                <img src={imgSrc} alt={destTitle} />
              </div>

              <div className="cardInfo">
                <h4 className="destTitle">
                  {destTitle}
                </h4>
                <span className="continent flex">
                  <CiLocationOn className='icon'/>
                  <span className="name">{location}</span>
                </span>
                <div className="fees flex">
                  <div className="grade">
                    <span>{grade}
                      <small>+1</small>
                    </span>
                   
                  </div>
                  <h5>{fees}</h5>
                </div>

                <div className="desc">
                  <p>{description}</p>
                </div>
                <button className='btn flex'>
                  DETAIL <BsClipboardCheck className='icon'/>
                </button>
              </div>
            </div>
          )
        })
      }


    </div>


    </section>
  )
}
export default Main