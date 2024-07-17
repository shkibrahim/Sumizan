import React from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import SkewImg from "./SkewImg";
import images from "../Images/images";
import web from '../Images/Logo SVG/web_11264265.svg'
import Apps from '../Images/Logo SVG/Apps.svg'
import Ai from '../Images/Logo SVG/Ai.svg'
import devops from '../Images/Logo SVG/devops_16954963.svg'
import Tab from "./Tabs";
import '../CSS/Main.css'
import '../CSS/Common.css'
import '../CSS/Responsive.css'
import { Link } from "react-router-dom";


const MainPage = ()=>{
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
            once: true, 
            mirror: true,
            anchorPlacement: 'top-bottom',
          }
    );
    const tabsData = [
        {
            tabTitle: 'Mobile',
            categories:['IOS App Development', 'Android App Development', 'React Native App Development',
            'Kotlin App Development','Swift App Development','Flutter App Development',
            ],
            width: '3.2rem',
          },
          {
            tabTitle: 'Web',
            categories:['PHP Development', 'Ruby Development','C++ Development','Ruby on Rails Development','.Net Development','Node.JS Development','Wordpress Development','Shopify Development'],
            width: '3.2rem',
          },
          {
            tabTitle: 'Backend',
            categories:['Node.js', 'Php', 'Django', 'Elixir', 'Ruby on Rails'],
            width: '3.2rem',
          },
          {
            tabTitle: 'Cloud',
            categories:['Cloud Solutions Expertise: AWS, Azure, and GCP', 'Salesforce Integration and Optimization', 'Cloud Operations and Migration Strategies', 'DevOps Leadership and Engineering' , 'Cloud Architecture and Engineering',
            'Infrastructure Design and Implementation', 'Expert Infrastructure Monitoring'],
            width: '3.2rem',
          },
          {
            tabTitle: 'Artificial Intelligence',
            categories:['Generative AI', 'Machine Learning', 'Neural Networks', 'AR-VR',],
            width: '3.2rem',
          },
          {
            tabTitle: 'MVP Development',
            categories:['Strategic MVP Development for Startups', 'Focused on creating impactful Minimum Viable Products (MVPs) to propel startup growth and success.'],
            width: '3.2rem',
          },
          {
            

            tabTitle: 'Game Development',
            categories:['2D Game Development', '3D Game Development', 'Card Game Development', 'Digital Strategical Game Development', 'AR-VR Games'],
            width: '3.2rem',
          },
          {
            tabTitle: 'Staffing Solutions',
            categories:['We offer IT staffing solutions to help you find the right talent for your organization. Our team of recruiters can help you find highly skilled IT professionals for full-time, part-time, or contract positions on fix or hourly rate.',],
            width: '3.2rem',
          },
      ];
      const services = [
        {
            link: '#web_dev',
            image: web,
            title: 'Web Development',
            description: 'Empowering businesses with bespoke web solutions, expertly tailored to optimize processes across all platforms..',
        },
        {
            link: '#app_dev',
            image: Apps,
            title: 'App Development',
            description: 'Empowering businesses with custom app solutions, tailored to enhance user experience and optimize processes across all platforms.',
        },
        {
            link: '#Ai',
            image: Ai,
            title: 'Artificial Inteligence',
            description: 'Transforming businesses with advanced AI solutions, tailored to automate and optimize processes across all platforms.',
        },
        {
            link: '#devops',
            image: devops,
            title: 'Devops',
            description: 'Enhancing business efficiency with DevOps solutions, designed to streamline and optimize workflows across all platforms .',
        },
      ]
    return(
        <React.Fragment>
            <div className="section1" data-aos="fade-right">
                <div className="sectionData">
                    <span className="first_span">We Design and improve</span>

                    <h1 style={{fontSize: '5.8rem'}} className="full_width">
                        Smart <span className="red">Web & App Solutions </span>and  
                        <span className="red"> Build</span> Them
                    </h1>

                    <span className="sec_span">
                        Our site design, development, and marketing services are top-notch.
                    </span>

                    <div className="btnGroup">
                        <Link to='/portfolio'>
                            <button className="btn1">Portfolio</button>
                        </Link>
                        <Link to='/contact'>
                            <button className="btn2">Contact Us</button>
                        </Link>
                    </div>
                </div>

                <div className="sectionGraphics">
                    <SkewImg image={images.skewImg1}/>
                </div>  
            </div>

            <div className="section1" data-aos="fade-left">
                <div className="sectionData">
                    <h1 style={{fontSize: '5.8rem'}} className="full_width">
                        <span className="red">Digitalize </span>your business
                    </h1>

                    <span style={{display: 'flex'}} className="sec_span">
                        With agility, devotion, and high-quality IT services, we support businesses by offering custom and specialized business solutions.
                    </span>

                    <div className="btnGroup">
                        <Link to='/about'>
                            <button className="btn1">Who we are ?</button>
                        </Link>
                        <Link to='/portfolio'>
                            <button className="btn2">Portfolio</button>
                        </Link>
                    </div>
                </div>

                <div className="sectionGraphics">
                    <SkewImg image={images.skewImg2}/>
                </div>
            </div>

            <div className="section1" data-aos="fade-right">
                <div className="sectionData">
                    <span className="first_span">Our Services</span>

                    <h1 style={{fontSize: '5.8rem'}} className="full_width">
                        <span className="red">Innovative Solutions </span> for Your Business Success
                    </h1>

                    <span className="sec_span">
                    Our top-notch services include Mobile Development, Web Development, Backend Development, Cloud Solutions, Artificial Intelligence, MVP Development, Game Development, and Staffing Solutions to meet all your business needs.
                    </span>
                </div>

                <div className="sectionGraphics">
                    <SkewImg image={images.skewImg3}/>
                </div>
            </div>

            <div className="services" data-aos="fade-left">
                {
                    services.map((service, index)=>(
                    <a href={service.link} style={{textDecoration: 'none'}} key={index}>
                        <div className="cus_card sm_ser_card" key={index}>
                            <img src={service.image} alt={"Sumizan"}className="img" style={{fill: '#FFFF'}}></img>
                            <span className="cardHeading red">{service.title}</span>
                            <span className="cardText">
                                {service.description}
                            </span>
                        </div>
                    </a>
                    ))
                }
            </div>

            <div className="sectionData" style={{marginTop:'5.0rem'}} data-aos="fade-right"> 
                <h1 style={{fontSize: '5.8rem'}} className="full_width">
                    Expertise
                </h1>

                <span className="sec_span">
                    We use IT expertise to develop cutting-edge software solutions.
                </span>
            </div>

            <div className="section1" id="web_dev" data-aos="fade-right">
                <div className="sectionData">
                    <span className="first_span">Web Design & Development</span>

                    <h1 style={{fontSize: '5.8rem'}} className="full_width">
                        Custom<span className="red"> Website </span>Solutions
                    </h1>

                    <span className="sec_span" style={{width: '96%', display: 'block'}}>
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
                        <Link to="/portfolio">
                            <button className="btn1">More Details</button>
                        </Link>
                    </div>
                </div>

                <div className="sectionGraphics">
                    <SkewImg image={images.webSkew}/>
                </div>
            </div>

            <div className="section1" id="app_dev" data-aos="fade-right">
                <div className="sectionData">
                    <span className="first_span">App Design & Development</span>

                    <h1 style={{fontSize: '5.8rem'}} className="full_width">
                        Customized<span className="red"> Mobile </span>Solutions
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
                    
                    <div className="list">
                    </div>
                    <div className="btnGroup">
                    <Link to="/portfolio">
                            <button className="btn1">More Details</button>
                        </Link>
                    </div>
                </div>

                <div className="sectionGraphics">
                    <SkewImg image={images.appSkew}/>
                </div>
            </div>

            <div className="section1" id="Ai">
                <div className="sectionData">
                    <span className="first_span">We work with</span>

                    <h1 style={{fontSize: '5.8rem'}} className="full_width">
                        AI Software <span className="red"> Development </span> Services
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
                    <Link to="/portfolio">
                            <button className="btn1">More Details</button>
                        </Link>
                    </div>
                </div>
                        <div className="sectionGraphics">
                            <SkewImg image={images.skewImg4}/>
                        </div>
            </div>

            <div className="section1" id="devops" data-aos="fade-right">
                <div className="sectionData">
                    <span className="first_span">We formulate ideas</span>

                    <h1 style={{fontSize: '5.8rem'}} className="full_width">
                        DevOps<span className="red"> Solutions</span>
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
                    <Link to="/portfolio">
                            <button className="btn1">More Details</button>
                        </Link>
                    </div>
                </div>

                <div className="sectionGraphics">
                    <SkewImg image={images.devopSkew}/>
                </div>
            </div>

            <div className="section1" data-aos="fade-left" id="custom_sol">
                <div className="sectionData">
                    <div className="coreTechs">
                        <div className="data">
                            <h1 style={{fontSize: '5.8rem'}} className="full_width">
                                Custom<span className="red"> Website & App </span>Solutions
                            </h1>
                            <span className="sec_span">
                                SumizanWebs uses a variety of contemporary technologies
                                for efficient, scalable, and long-lasting customized
                                software development.
                            </span>
                        </div>

                        <img src={images.simpleLogo} alt={"Sumizan"}style={{marginRight: '15rem'}}></img>
                    </div>

                </div>
            </div>

            <div className="servicesTabs"  data-aos="fade-right" id="services">
                <Tab tabs={{tabsData}} />      
            </div>

            <div className="sectionData">
                <h1 style={{fontSize: '5.8rem'}} className="full_width">
                    The<span className="red"> Ideal Engagement Model </span>Should Be
                    <span className="red"> Chosen</span>
                </h1>
                <span className="sec_span">
                    Based on the project needs and your company specifications
                </span>
            </div>

            <div className="services" data-aos="fade-left">
                <div className="cus_card lg_cus_card">
                    <img src={images.tickSearch} alt={"Sumizan"} className="img"/>
                    <span className="cardHeading red">Product Development</span>
                    <span className="cardText">
                        The project-based model is designed to help you to get your product built ideation to development by a team of expert software engineering consultants.
                    </span>
                    <div className="btnGroup">
                        <a href="#custom_sol">
                            <button className="btn1" style={{marginTop: '4rem'}}>More Details</button>
                        </a>
                    </div>
                </div>
                <div className="cus_card lg_cus_card">
                    <img src={images.coinsBag} alt={"Sumizan"}className="img"/>
                    <span className="cardHeading red">Dedicated Development Team</span>
                    <span className="cardText">
                        Our team of developers is highly qualified and dedicated to delivering quality development services to clients.
                    </span>
                    <div className="btnGroup">
                        <Link to='/contact'>
                            <button className="btn1" style={{marginTop: '4rem'}}>Contact Us</button>
                        </Link>
                    </div>
                </div>
            </div>

        </React.Fragment>
    );
}

export default MainPage