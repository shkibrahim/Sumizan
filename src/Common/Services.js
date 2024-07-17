import React from 'react'
import AOS from 'aos';
import images from '../Images/images';
import SkewImg from './SkewImg';
import LazyLoad from 'react-lazy-load';
import Web_Dev_Svg from '../Images/Logo SVG/Web Development.svg'
import App_Dev_Svg from '../Images/Logo SVG/App Development.svg'
import Ai_Svg from '../Images/Logo SVG/ai2.svg'
import Devops_Svg from '../Images/Logo SVG/Devops.svg'
import '../CSS/Main.css'
import '../CSS/Common.css'
import '../CSS/Services.css'
import '../CSS/Responsive.css'
import { Link } from 'react-router-dom';

const Services = () => {
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
                <div className="sectionData">

                    <h1 style={{fontSize: '5.8rem', width: '35vw'}}>
                        Services
                    </h1>
                    <span className='d-flex mt-3 mb-1 first_span'> What We Do?</span>
                        <br/>
                    <span className='sec_span'>
                        With our top-notch IT services, you may create your own
                        success stories. See below for a list of our primary
                        areas of expertise.
                    </span>
                    <div className="btnGroup">
                        <Link to='/contact'>
                            <button className="btn1">Free Quote</button>
                        </Link>
                        <Link to='/contact'>
                            <button className="btn2">Contact Us</button>
                        </Link>
                    </div>
                </div>
                <div className='sectionGraphics'>
                    
                    <SkewImg image={images.serviceSkew}/>
                </div>
            </div>

        <div className="section1" data-aos="fade-left">
                <div className="sectionData">

                    <h1 style={{fontSize: '5.8rem', width: '35vw'}}>
                        Our<span className='red'> Services</span>
                    </h1>
                    <span className='sec_span' style={{width: '200%'}}>
                        All of your software development needs are met under one roof at SumizanWebs thanks to our top-notch technical expertise and proactive attitude.
                        With the appropriate mix of designers, developers, QA engineers, and marketers, we can provide the best for you.
                    </span>
                </div>
            </div>


        <div className="section1" data-aos="fade-right">
                <div className="sectionData" style={{width: '61%'}}>
                    <h1 style={{width: '35vw'}} className='first_span'>
                        <span className='red'>Web </span>Development
                    </h1>
                        <span className="sec_span" style={{width: '100%', display: 'block'}}>
                        We specialize in creating web solutions that ensure the swift, efficient, and smooth operation of your business. Leveraging our deep understanding of the latest technologies, we deliver everything from web apps and MVPs to portals, websites, and bespoke software development. Whether you're a blue-chip corporate customer, a fresh-faced start-up, or a local SME, we dedicate our expertise to designing and executing cutting-edge solutions.
                        <br/><br/>
                        Our areas of expertise include, but are not limited to:
                        <br/><br/>
                        <ul style={{paddingLeft: "12px"}}>
                            <li>Programming Languages: PHP, JavaScript, Ruby on Rails</li>
                            <li>Frameworks and Libraries: .Net, Laravel, React, Angular, Node.js, Express.js, Next.js</li>
                            <li>Content Management Systems: WordPress, Magento</li>
                            <li>Database Technologies: MongoDB</li>
                            <li>Front-End Technologies: AJAX, jQuery, Angular.JS, Laxar</li>
                        </ul>
                        <br/>
                        Trust us to invest our time and energy into crafting solutions that work for you.
                        </span>
                    <div className="btnGroup">
                        <Link to='/contact'>
                            <button className="btn1">Contact Us</button>
                        </Link>
                    </div>
                </div>
                <div>
                    <LazyLoad>
                        <img src={Web_Dev_Svg}alt={"Sumizan"} className="services_img"/>
                    </LazyLoad>
                </div>
            </div>

        <div className="section1" data-aos="fade-left">
                <div className="sectionData" style={{width: '61%'}}>
                    <h1 style={{width: '35vw'}} className="first_span">
                        <span className='red'>App </span> Development
                    </h1>
                        <span className="sec_span" style={{width: '96%', display: 'block'}}>
                            Empower your business with our flexible iOS and Android app development services. From initial design through to launch and marketing, we excel in delivering solutions for simple to complex mobile applications. Our proactive IT professionals collaborate closely with clients to enhance their ideas and plans, ensuring successful project execution. We stay ahead by leveraging the latest technological advancements and trends. Our expertise includes cross-platform technologies such as Java, Swift, React, Ionic, and Flutter, ensuring versatile and cutting-edge solutions.
                            <br/><br/>
                            <ul style={{paddingLeft: "12px"}}>
                                <li>Programming Languages: Java, Kotlin, Swift, Flutter, React Native </li>
                                <li>Platforms: Android, iOS.</li>
                            </ul>
                            Trust us to invest our time and energy into crafting solutions that work for you.
                        </span>
                        <div className="btnGroup">
                        <Link to='/contact'>
                            <button className="btn1">Contact Us</button>
                        </Link>
                    </div>
                </div>
                <div>
                    <LazyLoad>
                        <img src={App_Dev_Svg} alt={"Sumizan"}className="services_img"/>
                    </LazyLoad>
                </div>
            </div>

        <div className="section1" data-aos="fade-right">
                <div className="sectionData" style={{width: '61%'}}>
                    <h1 style={{width: '35vw'}} className="first_span">
                        <span className='red'>Artificial </span>Inteligence
                    </h1>
                    <span className="sec_span" style={{width: '96%', display: 'block'}}>
                    Transform your AI vision into reality with Step Tech's expert AI software development services. Our seasoned AI developers specialize in artificial intelligence (AI), chatbot development, web AI, NLP, deep learning, and more. Partner with our dedicated AI development company for comprehensive AI-based software solutions—from initial consultation through development and ongoing maintenance. Drive business growth and stay ahead of the competition with our innovative development solutions.
                    <br/><br/>
                    Our AI Development Services
                    <br/><br/>
                    For over a decade, Step Tech has optimized business operations with advanced AI technologies. As a trusted artificial intelligence development company, we enable businesses to achieve exponential success by leveraging the latest advancements in AI.
                    <br/><br/>
                        
                        <ul style={{paddingLeft: "12px"}}>
                            <li>
                                Machine Learning: Harness the power of data-driven insights and ongoing improvements facilitated by our skilled ML engineers.
                            </li>
                            <br/>
                            <li>
                                Neural Networks: Create and optimize neural networks using intensive learning techniques inspired by the human brain.
                            </li>
                            <br/>
                        </ul>
                            
                        Choose Step Tech for AI-driven solutions that revolutionize your business and elevate customer satisfaction.
                                                        
                    </span>
                    <div className="btnGroup">
                        <Link to='/contact'>
                            <button className="btn1">Contact Us</button>
                        </Link>
                    </div>
                </div>
                <div>
                    <LazyLoad>
                        <img src={Ai_Svg} alt={"Sumizan"} className="services_img"/>
                    </LazyLoad>
                </div>
            </div>

        <div className="section1" data-aos="fade-left">
                <div className="sectionData" style={{width: '61%'}}>
                    <h1 style={{width: '35vw'}} className="first_span">
                        <span className='red'>Devops </span> Solutions
                    </h1>
                    <span className="sec_span" style={{width: '96%', display: 'block'}}>
                    We specialize in DevOps solutions tailored to optimize infrastructure management and application delivery across leading cloud platforms:
                    <br/><br/>
                    We excel in DevOps solutions across leading cloud platforms:
                    <br/><br/>
                    <ul style={{paddingLeft: "12px"}}>
                        <li>Cloud Platforms: AWS, Azure, GCP</li>
                        <li>AWS Services: EC2, Lambda, S3, VPC, ECS, EKS</li>
                        <li>Infrastructure as Code: CloudFormation, Terraform, Ansible</li>
                        <li>Operating Systems: Linux, Windows</li>
                        <li>Scripting Languages: Bash, Python, Ruby, Perl, YAML</li>
                        <li>Monitoring: Datadog, Prometheus, Grafana, New Relic</li>
                        <li>Containerization: Kubernetes, Docker, AWS ECS</li>
                        <li>CI/CD: Jenkins, GitHub Actions, GitLab CI</li>
                        <li>Version Control: GitHub, GitLab</li>
                        <li>Project Management: Jira</li>
                        <li>Documentation: Confluence</li>
                        <li>Incident Management: ServiceNow, PagerDuty</li>
                        <li>Communication: Slack, Microsoft Teams</li>
                        <li>Active Directory: Windows AD, IPA, IAM</li>
                    </ul>
                    <br/>
                    Our expertise ensures streamlined operations and scalable solutions for your business.
                    </span>
                    <div className="btnGroup">
                        <Link to='/contact'>
                            <button className="btn1">Contact Us</button>
                        </Link>
                    </div>
                </div>
                <div>
                    <LazyLoad>
                        <img src={Devops_Svg} alt={"Sumizan"} className="services_img"/>
                    </LazyLoad>
                </div>
            </div>
    </React.Fragment>
  )
}

export default Services