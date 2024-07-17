import React from 'react'
import AOS from 'aos';
import '../CSS/Main.css'
import '../CSS/Common.css'
import '../CSS/About.css'
import '../CSS/Responsive.css'
import { Link } from 'react-router-dom'

const About = () => {
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
  return (
    <React.Fragment>
        <div className="section1" data-aos="fade-right">
                <div className="sectionData"  style={{width: '100%'}}>
                    <h1 style={{fontSize: '5.8rem'}} className="m-0 full_width">
                        About<span className="red"> Us</span>
                    </h1>
                    <span className='about_first_span'>The Best SumizanWebs Technology with Ten Years of Experience</span>
                    <br/><br/><br/><br/>
                    <span className='about_sec_span'>
                        At Sumizan Webs, we are the architects of technological innovation, crafting solutions that propel businesses into the digital age with seamless precision. Specializing in a diverse array of technical services, including software and app development, corporate-level IT support, Linux server management, graphics designing, web development, and e-commerce solutions, we are the cornerstone of your digital success. Our team comprises industry trailblazers, each equipped with a wealth of experience garnered from the forefront of tech giants such as Google, Yahoo, and beyond. With over a decade of hands-on expertise and a myriad of achievements under our belt, we stand poised to address your most intricate technological challenges. Whether you're a burgeoning startup or an established enterprise, we tailor our services to suit your unique needs, delivering cutting-edge solutions that redefine industry standards. With a steadfast commitment to excellence, innovation, and client satisfaction, we transcend conventional boundaries to transform your digital vision into reality. Partner with us today and embark on a journey of unparalleled technological prowess. Together, we'll navigate the digital landscape, empowering your business to thrive in an ever-evolving world.
                    </span>
                </div>
            </div>
                <br/><br/>
            <div className='aboutList'>
                <ul>
                    <li>Best in Industry</li>
                    <li>24/7 Support</li>
                    <li>Professional Staff</li>
                    <li>Fair Prices</li>
                </ul>
                <ul>
                <li className='phone'>
                    <span>Call to ask any question</span>
                    <br/>
                    <span className='red'>+1 347-350-0868</span></li>
                </ul>
            </div>
                <br/><br/><br/>
        <div className="section1 m-0 mt-5" data-aos="fade-left">
                <div className="sectionData"  style={{width: '200%'}}>
                    <h1 style={{fontSize: '5.8rem', width: '100%'}} className="full_width">
                        Rescue Your<span className="red"> Company's Growth</span>
                    </h1>
                    <span className='about_sec_span'>
                    Let us know about your business plans on an introductory call, and we’ll lead the matching process.
                    </span>

                    <div className="btnGroup mb-5">
                        <Link to='/contact'>
                            <button className="btn1">Hire a pro</button>
                        </Link>
                    </div>
                </div>
            </div>
    </React.Fragment>
  )
}

export default About