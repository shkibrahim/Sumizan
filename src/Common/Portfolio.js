import React from 'react'
import AOS from 'aos';
import images from '../Images/images';
import SkewImg from './SkewImg';
import Tab from './Tabs';
import LazyLoad from 'react-lazy-load';
import '../CSS/Main.css'
import '../CSS/Common.css'
import '../CSS/Portfolio.css'
import '../CSS/Responsive.css'
import { Link } from 'react-router-dom';

const Portfolio = () => {
  AOS.init(
    {
        disable: false,
        startEvent: 'DOMContentLoaded',
        initClassName: 'aos-init', 
        animatedClassName: 'aos-animate', 
        useClassNames: false,
        disableMutationObserver: false,
        debounceDelay: 50, throttleDelay: 99,
        
        offset: 100, 
        delay: 100,
        duration: 500,
        easing: 'ease-in-out', 
        once: false, 
        mirror: true,
        anchorPlacement: 'top-bottom',
      }
);
    const tabsData = [
      {
        tabTitle: 'Web',
        categories:['webDev1', 'webDev2', 'webDev3',
        'webDev4', 
        ],
        width: '35vw',
      },
      {
        tabTitle: 'Mobile',
        categories:['appDev1', 'appDev2', 'appDev3',
        'appDev4'
        ],
        width: '35vw',
      },
      {
        tabTitle: 'Backend',
        categories:['backend_1', 'backend_2', 'backend_3',
        'backend_4'
        ],
        width: '35vw',
      },
      {
        tabTitle: 'Cloud',
        categories:['cloud_1', 'cloud_2', 'cloud_3',
        'cloud_4'
        ],
        width: '35vw',
      },
      {
        tabTitle: 'Artificial Intelligence',
        categories:['Ai_1', 'Ai_2', 'Ai_3',
        'Ai_4', 
        ],
        width: '35vw',
      },
      {
        tabTitle: 'MVP Development',
        categories:['mvp1', 'mvp2', 'mvp3',
        'mvp4'
        ],
        width: '35vw',
      },
      {
        tabTitle: 'Game Development',
        categories:['gameDev1', 'gameDev2', 'gameDev3',
        'gameDev4'
        ],
        width: '35vw',
      },
      {
        tabTitle: 'Staffing Solutions',
        categories:['stafSol1', 'stafSol2', 'stafSol3',
        'stafSol4'
        ],
        width: '35vw',
      }
      ];
  return (
    <React.Fragment>
         <div className="section1" data-aos="fade-right">
                <div className="sectionData">

                    <h1 style={{fontSize: '5.8rem', width: '35vw'}}>
                        Portfolio
                    </h1>
                    <br/>
                    <span className='d-flex mt-3 mb-1 first_span'>Our work performs as it sees</span>
                    <br/>
                    <span className='sec_span'>
                      We create beautiful, interesting, and responsive web and mobile applications
                    </span>
                    <div className="btnGroup">
                      <Link to='/contact'>
                        <button className="btn1">Contact Us</button>
                      </Link>
                    </div>
                </div>
                <div className="sectionGraphics">
                  <SkewImg image={images.portfolioSkew}/>
                </div>
            </div>

            <div className="servicesTabs" data-aos="fade-left">
                <Tab tabs={{tabsData, constIdea}} />      
            </div>
    </React.Fragment>
  )
}

export default Portfolio

const constIdea = () => {
  return (
    <React.Fragment>
        <div className="section1 porfoIdeasSection" data-aos="fade-right">
            <div className="sectionData">
                <span style={{fontSize: '4rem', fontWeight: 'bold'}} className='mt-3 mb-1'>
                    We <span className='red'>Construct</span> Ideas
                </span>
                <div className="btnGroup">
                  <Link to='/contact'>
                    <button className="btn1" style={{width: '34.5rem'}}>Let’s Talk About Your Project</button>
                  </Link>
                </div>
            </div>

            <div>
              <LazyLoad>
                <img src={images.bulbs} alt={"Sumizan"} className='porfolio_bulbs_img' style={{width: '40rem', marginRight:'10rem'}}/>
              </LazyLoad>
            </div>
        </div>
    </React.Fragment>
  )
}