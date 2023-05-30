import "./Navbar.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/auth.context";
import React,{useRef} from 'react';
import ReactDOM from 'react-dom';
import { Modal } from "react-bootstrap";
import { motion } from "framer-motion";

function Navbar() {
	const modalRef = useRef(null);
	const sectionRef = useRef(null);
  const { isLoggedIn, user, logOutUser } = useContext(AuthContext);


  const [cartModalIsOpen, setCartModalIsOpen] = React.useState(false);

  function openCartModal() {
    setCartModalIsOpen(true);
		const modal = document.querySelector('.modal');
		modal.classList.add('animate__animated', 'animate__fadeIn');
  }

  function closeCartModal() {
		setCartModalIsOpen(false);
		const modal = document.querySelector('.modal');
    modal.classList.add('animate__animated', 'animate__fadeOut');
    setTimeout(() => {
      setCartModalIsOpen(false);
    }, 500); // Ajusta el tiempo según la duración de la animación en milisegundos  
	}

  function home() {
    window.location.href = "/";
  }
	function handleNosotrosClick() {
    window.location.href = '#nosotros';

    setTimeout(() => {
      closeCartModal();
    }, 100); // Ajusta el tiempo según la duración de la animación de desplazamiento
  }
	function handleProductosClick() {
    window.location.href = '#productos';

    setTimeout(() => {
      closeCartModal();
    }, 100); // Ajusta el tiempo según la duración de la animación de desplazamiento
  }
	function handleEntregasClick() {
    window.location.href = '#entregas';

    setTimeout(() => {
      closeCartModal();
    }, 100); // Ajusta el tiempo según la duración de la animación de desplazamiento
  }
	function handleMayoreoClick() {
    window.location.href = '#mayoreo';

    setTimeout(() => {
      closeCartModal();
    }, 100); // Ajusta el tiempo según la duración de la animación de desplazamiento
  }

	function home() {
    window.location.href = "/";
  }

  return (
    <nav>
      <div className="flex">
        <motion.img whileTap={{ scale: 1.2 }} className="logo2" src="images/logo2.png" alt="" />
        <motion.h1 whileTap={{ scale: 1.2 }} className="laIsla">
          La Isla
        </motion.h1>
        <div className="menu1 flex0">
          <motion.img onClick={openCartModal} className="menu" src="images/menu.png" alt="" />
        </div>
        <Modal show={cartModalIsOpen} onHide={closeCartModal} contentLabel="Cart Modal" className="animate__animated animate__backInRight">
          <motion.img whileTap={{ scale: 1.2 }} onClick={closeCartModal} className="x" src="images/x.png" alt="" />
          <motion.h1 className="textoMenu center">Menu</motion.h1>
          <motion.img whileTap={{ scale: 1.1 }} className="logo3 marginr marginl" src="images/logo3.png" alt="" />
          <motion.h1 onClick={handleNosotrosClick} whileTap={{ scale: 1.1 }} className="title start">
            Nosotros
          </motion.h1>
          <motion.h1 onClick={handleProductosClick} whileTap={{ scale: 1.1 }} className="title start">
            Productos
          </motion.h1>
					<motion.h1 onClick={handleMayoreoClick} whileTap={{ scale: 1.1 }} className="title start">
            Mayoreo
          </motion.h1>
        </Modal>
      </div>
    </nav>
  );
}

export default Navbar;
