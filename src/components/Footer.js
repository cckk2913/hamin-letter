import { Container, Row, Col } from "react-bootstrap";
import logo from "../assets/img/logo.svg";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          
          <Col size={12} sm={6} className="text-center text-sm-start">
          
          <p>All rights reserved by PLAVE and VLAST Co., Ltd.</p>
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
          <p>Created by Una (Plurk: @cckk2913)</p>
            {/* <p>This page is for record-keeping purposes only</p> */}

          </Col>
        </Row>
      </Container>
    </footer>
  )
}
