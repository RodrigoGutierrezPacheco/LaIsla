import "./Navbar.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/auth.context";
import React from 'react';
import ReactDOM from 'react-dom';
import { Modal } from "react-bootstrap";
import { motion } from "framer-motion";

function Navbar() {
  const { isLoggedIn, user, logOutUser } = useContext(AuthContext);


  const [cartModalIsOpen, setCartModalIsOpen] = React.useState(false);

  function openCartModal() {
    setCartModalIsOpen(true);
  }

  function closeCartModal() {
    setCartModalIsOpen(false);
  }

  function home() {
    window.location.href = "/";
  }

  return (
    <nav>
      <div className="flex">
        <motion.img whileTap={{ scale: 1.2 }} className="logo2" src="images/logo2.png" alt="" />
        <motion.h1 whileTap={{ scale: 1.2 }} className="laIsla">La Isla</motion.h1>
        <div className="menu1 flex0">
          <motion.img  onClick={openCartModal} className="menu" src="images/menu.png" alt="" />
        </div>
		 <Modal 
		 	show={cartModalIsOpen} 
			onHide={closeCartModal} 
			contentLabel="Cart Modal"
			className="animate__animated animate__backInRight"
		>
    	<motion.img whileTap={{ scale: 1.2 }} onClick={closeCartModal} className="x" src="images/x.png" alt="" />
      <motion.h1 className="textoMenu center">Menu</motion.h1>
      <motion.img whileTap={{ scale: 1.1 }} className="logo3 marginr marginl" src="images/logo3.png" alt="" />
			<motion.h1 whileTap={{scale:1.1}} className="title start">Nosotros</motion.h1>
			<motion.h1 whileTap={{scale:1.1}} className="title start">Productos</motion.h1>
			<motion.h1 whileTap={{scale:1.1}} className="title start">Entregas</motion.h1>
    </Modal>
      </div>
    </nav>
  );
}

export default Navbar;
