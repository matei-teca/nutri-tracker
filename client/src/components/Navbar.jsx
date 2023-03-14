import React, { useRef, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "./Modal";

import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { searchByName, searchByBarcode } from "./Utils";
import state from "./AtomStates";
import { useAtom } from "jotai";

export default function SearchBar(props) {
  const [modalShow, setModalShow] = useState(false);
  const [isLogin, setIsLogin] = useState(false);
  const inputValue = useRef(null);
  const [searchNames, setSearchNames] = useAtom(state.searchNames);
  const [product, setProduct] = useAtom(state.product);

  const handleLoginClick = () => {
    setModalShow(true);
    setIsLogin(true);
  };

  const handleSignUpClick = () => {
    setModalShow(true);
    setIsLogin(false);
  };

  const handleModalButton = () => {
    setModalShow(false);
    setIsLogin(false);
  };

  return (
    <>
      <Navbar
        bg="secondary"
        variant="dark"
        expand="lg"
        style={{ display: "flex", justifyContent: "center", width: "100vw" }}
      >
        <Container fluid>
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link>Go to</Nav.Link>
          </Nav>
          <Form className="d-flex">
            <div className="search-bar--container">
              <Form.Control
                ref={inputValue}
                list="search-bar--datalist"
                id="search-bar--input"
                type="search"
                placeholder="products search"
                style={{ width: "13vw", marginLeft: "5vw" }}
              />
              <div style={{ display: "flex", flexDirection: "column" }}></div>
              <NavDropdown
                title="Search by"
                id="basic-nav-dropdown"
                style={{ width: "17vw", marginLeft: "1vw" }}
              >
                <NavDropdown.Item>
                  <Button
                    onClick={() =>
                      searchByName(
                        inputValue.current.value,
                        setSearchNames,
                        setProduct
                      )
                    }
                    variant="secondary"
                    style={{ width: "100%" }}
                  >
                    Search by name
                  </Button>
                  <p>{console.log(searchNames)}</p>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <Button
                    onClick={() =>
                      searchByBarcode(
                        inputValue.current.value,
                        setSearchNames,
                        setProduct
                      )
                    }
                    variant="secondary"
                    style={{ width: "100%" }}
                  >
                    Search by barcode
                  </Button>
                </NavDropdown.Item>
              </NavDropdown>
              <Button
                variant="dark"
                style={{ width: "7vw", marginLeft: "15vw" }}
                onClick={handleLoginClick}
              >
                Login
              </Button>
              <Button
                variant="light"
                style={{ width: "7vw", marginLeft: "1vw" }}
                onClick={handleSignUpClick}
              >
                Sign up
              </Button>
            </div>
          </Form>
        </Container>
      </Navbar>

      <datalist id="search-bar--datalist">
        {/* {pokemonCollection?.map((pokemon, index) => (
          <option value={pokemon} key={index}></option>
        ))} */}

        <option value={"test"} key={1}></option>
        <option value={"test2"} key={2}></option>
      </datalist>

      <Modal
        show={modalShow}
        onHide={() => setModalShow(false)}
        handleModalButton={handleModalButton}
        isLogin={isLogin}
      />
    </>
  );
}
