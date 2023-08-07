import React from 'react'
import {Link} from 'react-router-dom'
import aboutImg from '../../assets/images/about.png'
import aboutCardImg from '../../assets/images/about-card.png'
const About = () => {
  return  <section>
    <div className="container">
        <div className='flex justify-between gao-[50px] lg:gap-[130px] xl:gap-0 flex-col lg:flex-row'>
            {/*=============about img=============== */}
            <div className='relative w-3/4 lg:w-1/2 xl:w-[770px] z-10 order-2 lg:order-1'>
                <img src={aboutImg} alt="" />
                <div className='absolute z-20 bottom-4 w-[200px] md:w-[300px] right-[-30%] md:right-[-7%] lg:right-[22%]'>
                    <img src={aboutCardImg} alt="" />
                </div>
            </div>

            {/* ============about content===============*/}
            <div className='w-full lg:w-1/2 al:w-[670px] order-1 lg:order-2'>
                <h2 className='heading '>Proud to be one of the nations best</h2>
                <p className='text__para'>For 30 years in a row, U.S. News & World Reprt has recognized us as 
                    one of the best publics hospitals in the Nation and #1 in Texas.Lorem ipsum
                     dolor sit amet consectetur, adipisicing elit, Quas, mmeo?
                </p>

                <p className="text__para mt-[30px]">
                    Our best is something we strive for each day, caring for Our patients-not looking back at 
                    what we accomplished but towards what we can do tommorrow. Providing the best. Lorem ipsum 
                    dolor sit amet consectetur adipisicing elit. Dicta quia impedit corrupti libero quos quod illum 
                    minus ut nihil porro pariatur rem, laboriosam nisi, ex iusto similique voluptas quo accusantium?
                </p>

                <Link to='/'>
                    <button className='btn'>Learn More</button>
                </Link>


            </div>
        </div>
    </div>
  </section>
}

export default About
