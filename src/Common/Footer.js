import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import '../CSS/Footer.css';
import logo from '../Images/Logo SVG/Sumizan Logo SVG.svg'
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <React.Fragment>
      <div className="footer p-0 ml-0" id='footerDiv'>
        <div className="footerCard1 py-5">
          <img src={logo} alt="SumizanWebs Logo" className="img-fluid mb-4" />
          <p className="text-white font-size-18">
            SumizanWebs excels in software development and data analytics, driving digital transformation with innovative solutions across diverse industries worldwide.
          </p>
          <p className="text-white font-size-18">
            Have a game-changing app idea but don't know where to begin? We're the app alchemists at SumizanWebs. We turn your vision into cutting-edge mobile apps that will take the world by storm.  Let's brainstorm and build something amazing together!
          </p>
        </div>

        <div className="footerCard2 py-5">
          <Container style={{background: 'transparent'}}>
            <Row className="justify-content-center">
              <Col className="footer_col">
                <h3 className="text-white font-size-24 bg_red">Get in Touch</h3>
                <ul className="list-unstyled bg_red">
                  <li><Link href="#" className="text-white bg_red">P.O. Box 11350 Alexandria,</Link></li>
                  <li><Link href="#" className="text-white bg_red">VA, 22312</Link></li>
                  <li><Link href="#" className="text-white bg_red">info@sumizanwebs.com</Link></li>
                  <li><Link href="#" className="text-white bg_red">support@sumizanwebs.com</Link></li>
                  <li><Link href="#" className="text-white bg_red">+1 347-350-0868</Link></li>
                </ul>
              </Col>
              <Col className="footer_col">
                <h3 className="text-white font-size-24 bg_red">Quick Links</h3>
                <ul className="list-unstyled bg_red">
                <li><Link to="/" className="text-white bg_red">Home</Link></li>
                  <li><Link to="/about" className="text-white bg_red">About Us</Link></li>
                  <li><Link to="services" className="text-white bg_red">Our Services</Link></li>
                  <li><Link to="contact" className="text-white bg_red">Contact Us</Link></li>
                  <li><Link to="#" className="text-white bg_red">Terms and Conditions</Link></li>
                  <li><Link to="#" className="text-white bg_red">Privacy Policy</Link></li>
                </ul>
              </Col>
              <Col className='footer_col'>
                <h3 className="text-white font-size-24 footer_col">Popular Links</h3>
                <ul className="list-unstyled bg_red">
                <li><Link style={{textDecoration: 'none'}} to="/#services" className="text-white bg_red">Mobile</Link></li>
                <li><Link style={{textDecoration: 'none'}} to="/#services" className="text-white bg_red">Web</Link></li>
                  <li><Link style={{textDecoration: 'none'}} to="/#services" className="text-white bg_red">Cloud</Link></li>
                  <li><Link style={{textDecoration: 'none'}} to="/#services" className="text-white bg_red">Artificial Inteligence</Link></li>
                  <li><Link style={{textDecoration: 'none'}} to="/#services" className="text-white bg_red">Game Development</Link></li>
                  <li><Link style={{textDecoration: 'none'}} to="/#services" className="text-white bg_red">Staffing Solutions</Link></li>
                </ul>
              </Col>
            </Row>
          </Container>
        <div className="text-center py-3 footer_copyright" style={{background: 'transparent'}}>
          &copy; {new Date().getFullYear()} © <span style={{textDecoration: 'underline', background: 'transparent'}}>SumizanWebs</span>. All Rights Reserved.
        </div>
      </div>
        </div>
    </React.Fragment>
  );
};

export default Footer;