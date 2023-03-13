import "./Navbar.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/auth.context";
import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';

function Navbar() {
  // Subscribe to the AuthContext to gain access to
  // the values from AuthContext.Provider's `value` prop
  const { isLoggedIn, user, logOutUser } = useContext(AuthContext);

	const customStyles = {
		content: {
			top: '30%',
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
				<img className="logo2" src="images/logo2.png" alt="" />
				<h1 className="laIsla">La Isla</h1>
				<img onClick={openModal} className="menu" src="images/menu.png" alt="" />
				<Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
					<img className="logo3" src="images/logo1.png" alt="" />
				<div>
         <h1 className="textoMenu">Menu</h1>
			   <h1 className="textoMenu">Productos</h1>
			   <h1 className="textoMenu">Contactos</h1>
			   <h1 className="textoMenu">Puntos de Venta</h1>
			   <h1 className="textoMenu">Agenda tu Entrega</h1>
				</div>
      </Modal>
			</div>
		</nav>
  );
}

export default Navbar;
