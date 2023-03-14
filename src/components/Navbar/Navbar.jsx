import "./Navbar.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/auth.context";
import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import { motion } from "framer-motion";

function Navbar() {
  // Subscribe to the AuthContext to gain access to
  // the values from AuthContext.Provider's `value` prop
  const { isLoggedIn, user, logOutUser } = useContext(AuthContext);

	const customStyles = {
		content: {
			top: '50%',
			left: '50%',
			right: 'auto',
			bottom: 'auto',
			marginRight: '-50%',
			transform: 'translate(-50%, -50%)',
			backgroundColor:"#efeae3"
		},
	};

	let subtitle;
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = '#f00';
  }

  function closeModal() {
    setIsOpen(false);
  }


  return (
		<nav>
			<div className="flex">
				<motion.img whileTap={{scale:1.2}} className="logo2" src="images/logo2.png" alt="" />
				<motion.h1 whileTap={{scale:1.2}} className="laIsla">La Isla</motion.h1>
				<motion.img whileTap={{scale:1.2}} onClick={openModal} className="menu" src="images/menu.png" alt="" />
				<Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
				  <img onClick={closeModal} className="x" src="images/x.png" alt="" />
					<img className="logo3" src="images/logo1.png" alt="" />
				<div>
         <motion.h1 whileTap={{scale:1.2}} className="textoMenu">Menu</motion.h1>
			   <motion.h1 whileTap={{scale:1.2}} className="textoMenu">Productos</motion.h1>
			   <motion.h1 whileTap={{scale:1.2}} className="textoMenu">Contactos</motion.h1>
			   <motion.h1 whileTap={{scale:1.2}} className="textoMenu">Puntos de Venta</motion.h1>
			   <motion.h1 whileTap={{scale:1.2}} className="textoMenu">Agenda tu Entrega</motion.h1>
				</div>
      </Modal>
			</div>
		</nav>
  );
}

export default Navbar;
