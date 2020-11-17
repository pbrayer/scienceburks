import React from "react";
import { connect, styled } from "frontity";
// import Link from "./link";

const Sidebar = ({ state }) => {
    return (
      <>
        <Container className = "sidebar">
            <img style = {{resizeMode: "contain", height: 200, width:200, borderRadius: 100}} src= {require("../assets/welcomebit.png")}></img>
            <h1 style = {{color: "white"}}>Ms. Burks'</h1><br></br>
            <h3 style = {{color: "white"}}>8th Grade Science</h3>
        </Container>
      </>
    );
  };

  export default connect(Sidebar);

  const Container = styled.div`
  width: 15%;
  color: black;
  height: 100%;
  position: fixed;
  padding-top: 100px;
  overflow: visible;
  left: 0;
  background-color: DarkCyan;
  display: flex;
  align-items: center;
  flex-direction: column;
`;
