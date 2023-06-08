import React, { useState } from "react";
import {
  Button,
  Container,
  Nav,
  Navbar,
  NavDropdown,
  Offcanvas,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import AboutImg from "../img/Ny4iiftVJis.jpg";

interface HeaderProps {}

const Header: React.FC<HeaderProps> = ({}) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <Navbar bg="dark" expand="lg">
      <Container>
        <Button variant="primary" onClick={handleShow}>
          Меню
        </Button>
        <Offcanvas show={show} onHide={handleClose} bg="dark">
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>Меню</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav.Link className="burger__link">
            <Link  onClick={handleClose} to={"/"}> Список постов</Link>
            </Nav.Link>
            <Nav.Link className="burger__link"><Link onClick={handleClose} to={"/about"}>Обо мне</Link></Nav.Link>
            <div className="about__burger">
              <img className="about__burger-img" src={AboutImg} alt="" />
              <p>
                <span>Имя: </span> Филипп
              </p>
              <p>
                <span>email: </span>
                <a
                  target={"_blank"}
                  href="https://mail.google.com/mail/u/0/?fs=1&tf=cm&source=mailto&to=feelising@gmail.com"
                >
                  {" "}
                  feelising@gmail.com
                </a>
              </p>
            </div>
          </Offcanvas.Body>
        </Offcanvas>
      </Container>
    </Navbar>
  );
};
export default Header;
