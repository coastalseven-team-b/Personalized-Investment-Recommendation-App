import React from "react";
import styled from "styled-components";
import NavBar from "../components/NavBar";
import { motion } from "framer-motion";

const Container = styled.div`
  background: ${({ theme }) => theme.background};
  color: black;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

function NotFound() {
  return (
    <>
      <NavBar />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7 }}
      >
        <Container>
          <h2>404 - Page Not Found</h2>
        </Container>
      </motion.div>
    </>
  );
}

export default NotFound; 