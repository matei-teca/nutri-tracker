import React, { useState } from "react";
import Button from "react-bootstrap/Button";

import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
// import state from "./test";
// import { useAtom } from "jotai";

export default function SearchBar(props) {

  const handleSearchClick = () => {
    // pokemonName = document.querySelector("#search-bar--input");
    // if (pokemonCollection?.includes(pokemonName.value)) {
    //   setPokemon(pokemonName.value);
    //   setModalShow(true);
    // } else {
    //   alert("Please insert a correct pokemon");
    // }
    // pokemonName.value = "";
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
            <Nav.Link >Go to Map</Nav.Link>
          </Nav>
          <Form className="d-flex">
            <div className="search-bar--container">
              <Form.Control
                list="search-bar--datalist"
                id="search-bar--input"
                type="search"
                placeholder="products search"
                style={{ width: "13vw", marginLeft: "20vw" }}
              />

              <Button
                variant="secondary"
                style={{ marginLeft: "1vw" }}
              >
                Search
              </Button>
              <Button
                variant="dark"
                style={{ width: "7vw", marginLeft: "5vw" }}
              >
                
                Login
              </Button>
              <Button
                variant="light"
                style={{ width: "7vw", marginLeft: "1vw" }}
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
    </>
  );
}
