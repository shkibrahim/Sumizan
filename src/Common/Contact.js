import React from 'react'
import AOS from 'aos';
import images from '../Images/images';
import SkewImg from './SkewImg';
import { Button, Col, Form, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom'
import '../CSS/Main.css'
import '../CSS/Common.css'
import '../CSS/Contact.css'
import '../CSS/Responsive.css'

const Contact = () => {
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

    //Email Updated
    const [result, setResult] = React.useState(false);

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult(true);
    const formData = new FormData();
      formData.append("first_name", event.target.elements.firstName.value);
      formData.append("last_name", event.target.elements.lastName.value);
      formData.append("email", event.target.elements.email.value);
      formData.append("message", event.target.elements.message.value);
      formData.append("access_key", process.env.REACT_APP_API_KEY);


    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult(false);
      alert("Form Submitted Successfully")
      event.target.reset();
    } else {
      setResult(false);
      alert("Try Again")
    }
  };

  return (
    <React.Fragment>
        <div className="section1" data-aos='fade-right'>
                <div className="sectionData">

                    <h1 style={{fontSize: '5.8rem', width: '35vw', marginTop: '0px'}}>
                        <span className="red">Contact </span>Us
                    </h1>
                    <span className='first_span'>Our work performs as it sees</span>
                        <br/><br/><br/>
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
                    <SkewImg image={images.contactSkew}/>
                </div>  
            </div>

            <div className='form_div' data-aos="fade-left">
                <Form className='contactForm mt-5' onSubmit={onSubmit}>
                     <Row className="mb-3">
                        <Form.Group as={Col} controlId="formGridName">
                            <Form.Control type="text" name="firstName" placeholder="First Name" className='field name' required/>
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridName">
                            <Form.Control type="text" name="lastName" placeholder="Last Name" className='field name'/>
                        </Form.Group>
                    </Row>

                    <Form.Group className="mb-3" controlId="formGridAddress1">
                        <Form.Control placeholder="Email" name="email" className='field' required/>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                        <Form.Control as="textarea" name="message" placeholder='Message' rows={3} className='field textArea' required/>
                    </Form.Group>

                    <Form.Group className='sub_btn_div'>
                        <Button variant="primary" type="submit" className='sub_btn'>
                            {result ? 'Sending...' : 'Send Message'}
                        </Button>
                    </Form.Group>
                </Form>
            </div>

            <div className="section1 mt-5" data-aos="fade-right">
                <div className="sectionData">
                    <h1 style={{fontSize: '5.8rem', marginTop: '0px',width: '200%'}} className="m-0">
                        Rescue Your <span className="red">Company’s Growth!</span>
                    </h1>
                        <br/><br/>
                    <span className='sec_span' style={{width: '200%'}}>
                        Let us know about your business plans on an introductory call, and we’ll lead the matching process.
                    </span>

                    <div className="btnGroup">
                        <Link to='/contact'>
                            <button className="btn1">Hire A Pro</button>
                        </Link>
                    </div>
                </div>
            </div>
    </React.Fragment>
  )
}

export default Contact