import React from 'react';
import { Link } from 'react-router-dom';
import * as ROUTES from '../../constants/routes';
import * as ROLES from '../../constants/roles';
import { AuthUserContext } from '../Session';
import {Col, Row} from 'react-bootstrap'
import facebook from '../../Pics/facebook.svg'
import twitter from '../../Pics/twitter.svg'
import instagram from '../../Pics/instagram.svg'
import pinterest from '../../Pics/pinterest.svg'

const Footer = () => (
  <div className="Footer">
    <AuthUserContext.Consumer>
      {authUser =>
        authUser ? (
        <FooterAuth authUser={authUser} /> ) : ( <FooterNonAuth /> )
      }
    </AuthUserContext.Consumer>
  </div>
);


const FooterAuth = ({ authUser }) => (
  <div>
    <Row>
      <Col lg={4}>
      <div className="footer-left">
      <p>Be2Gether</p>
        <p>Makes alone less lonely</p>
        <p>since 2020</p>
        </div>
      </Col>
         
            <Col lg={2}>
            <div className="footer-middle-list-left">
                <ul >
                <li>
                  <Link to={ROUTES.LANDING} className="footer-item">Landing</Link>
                </li>
                <li>
                  <Link to={ROUTES.HOME} className="footer-item">Home</Link>
                </li>
                <li>
                  <Link to={ROUTES.ACCOUNT} className="footer-item">Account</Link>
                </li>
                <li>
                  <Link to={ROUTES.CHATS} className="footer-item">Chats</Link>
                </li>
                </ul>
                </div>
            </Col>
            <Col lg={2}>
            <div className="footer-middle-list-right"> 
              <ul >
                <li>
                  <Link to={ROUTES.MAP} className="footer-item">Map</Link>
                </li>
                <li>
                  <Link to={ROUTES.TRAVELWINDOW} className="footer-item">Travel-Blog</Link>
                </li>
                {!!authUser.roles[ROLES.ADMIN] && (
                  <li>
                    <Link to={ROUTES.ADMIN} className="footer-item">Admin</Link>
                  </li>
                )}
              </ul>
              </div>
            </Col>
         
      <Col lg={4}>
        <div >
          <p className="footer-text"> Follow us on:</p>
          <ul className="footer-right">
            <li className="footer-icon">
            <Link to='http://www.facebook.com'><img  src={facebook} alt="facebook"></img></Link>
            </li>
            <li className="footer-icon">
              <Link to='http://www.instagram.com'><img  src={instagram} alt="facebook"></img></Link>
            </li>
            <li className="footer-icon">
              <Link to='http://www.pinterest.com'><img  src={pinterest} alt="facebook"></img></Link>
            </li>
            <li className="footer-icon">
              <Link to='http://www.instagram.com'><img  src={twitter} alt="facebook"></img></Link>
            </li>
          </ul>
        </div>
      </Col>
   </Row>
   </div>


 
);

const FooterNonAuth = () => (
  <div>
    <Row>
      <Col lg={4}>
        <div className="footer-left">
        <p>Be2Gether</p>
        <p>Makes alone less loney</p>
        <p>since 2020</p>
        </div>
        
      </Col>
      <Col lg={4}>
        <div className="footer-middle">
        <ul className="footer-middle-list">
          <li>
            <Link to={ROUTES.LANDING} className="footer-item">Landing</Link>
          </li>
          <li>
            <Link to={ROUTES.SIGN_IN} className="footer-item">Sign In</Link>
          </li >
         </ul>
        </div>
        
      </Col>
      <Col lg={4}>
        <div >
          <p className="footer-text"> Follow us on:</p>
        <ul className="footer-right">
        <li className="footer-icon">
        <Link to='http://www.facebook.com'><img  src={facebook} alt="facebook"></img></Link>
        </li>
        <li className="footer-icon">
           <Link to='http://www.instagram.com'><img  src={instagram} alt="facebook"></img></Link>
        </li>
        <li className="footer-icon">
           <Link to='http://www.pinterest.com'><img  src={pinterest} alt="facebook"></img></Link>
        </li>
        <li className="footer-icon">
           <Link to='http://www.instagram.com'><img  src={twitter} alt="facebook"></img></Link>
        </li>
      </ul>
        </div>
      
      </Col>
    </Row>
  </div>
  
);
 
export default Footer;