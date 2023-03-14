import "./HomePage.css";
import { Button } from "react-bootstrap";
import { motion } from "framer-motion";

function HomePage() {
  return (
    <div>
			<img className="logo1" src="images/logo1.png" alt="" />
      <div>
				<img className="nature" src="images/nature.png" alt="" />
				<h2 className="title">Productos</h2>
				<div className="flex productos">
				 <div>
					 <img className="product" src="images/miel.png" alt="" />
					 <h3 className="title1">Miel</h3>
				 </div>
				 <div>
					 <img className="product" src="images/limon.png" alt="" />
					 <h3 className="title1">Limon</h3>
				 </div>
				 <div>
					 <img className="product" src="images/dulces.png" alt="" />
					 <h3 className="title1">Dulces</h3>
				 </div>
				</div>
				<h3 className="yourProducts">Tus productos favoritos hechos con los ingredientes de la mas alta calidad.</h3>
			</div>
			<img className="honeyCumb" src="images/honeyCumb.png" alt="" />
			<div className="miel">
				<h1 className="titleMiel">Miel</h1>
				<div className="flex2">
					<img className="miel1" src="images/miel1.png" alt="" />
					<div className="">
						<div className="flex1">
							<img className="check" src="images/check.png" alt="" />
							<h5>Miel 100% Natural</h5>
						</div>
						<div className="flex1">
							<img className="check" src="images/check.png" alt="" />
							<h5>De la mas alta calidad</h5>
						</div>
					</div>
				</div>
				<h3 className="ourHoney">Nuestra miel es la mas dulce y saludable de todo Mexico.</h3>
				<h1 className="titleLimon">Limon</h1>
				<div className="flex2">
					<img className="miel1" src="images/limon1.png" alt="" />
					<div className="">
						<div className="flex1">
							<img className="check" src="images/check.png" alt="" />
							<h5>Limon 100% Natural</h5>
						</div>
						<div className="flex1">
							<img className="check" src="images/check.png" alt="" />
							<h5>De la mas alta calidad</h5>
						</div>
					</div>
				</div>
				<h3 className="ourHoney">Nuestros Limones son de la mas alta calidad</h3>
			</div>
			<img className="honeyCumb" src="images/honeyCumb.png" alt="" />
			<h1 className="productosLaIsla">Productos La Isla, de Guerrero para todo Mexico</h1>
			<h3 className="son">Son cosechados con los mas altos estandades de calidad, nos encargamos de todo el proceso desde el principio hasta el fin.</h3>
      <motion.button whileTap={{scale:1.2}} className="buttonConocenos">!Conocenos¡</motion.button>
			<div className="footer">
				<div className="flex pagos center">
					<div>
						<img className="icon" src="images/tarjeta.png" alt="" />
					</div>
					<div className="box">
						<h1 className="title start">Pagos</h1>
						<h2 className="start grey">Aceptamos pagos con Paypal, depositos, transferencias.</h2>
					</div>
				</div>
				<div className="flex envios">
					<div>
						<img className="icon" src="images/caja.png" alt="" />
					</div>
					<div className="box">
						<h1 className="title start">Envios</h1>
						<h2 className="start grey">Envio seguro con diferentes paqueterias.</h2>
					</div>
				</div>
				<div className="flex entregas">
					<div>
						<img className="icon" src="images/ubicacion.png" alt="" />
					</div>
					<div className="box">
						<h1 className="title start">Entregas</h1>
						<h2 className="start grey">Contactanos para ver la mejor opcion de tu entrega.</h2>
					</div>
				</div>
				<div className="flex isla">
					<div>
						<img className="icon" src="images/red.png" alt="" />
					</div>
					<div className="box">
						<h1 className="title start">La Isla</h1>
						<h2 className="start grey"> Siguenos en nuestras diferentes redes sociales.</h2>
						<div className="redesFlex">
						 <img className="redes" src="images/fb.png" alt="" />
						 <img className="redes" src="images/instagram.png" alt="" />
						 <img className="redes" src="images/tiktok.png" alt="" />
						</div>
					</div>
				</div>
				<div className="flex contacto">
					<div>
						<img className="icon" src="images/contacto.png" alt="" />
					</div>
					<div className="box">
						<h1  className="title start">Contacto</h1>
						<h2 className="start grey">Whatsapp, Telefono, Correo Electronico.</h2>
						<div className="redesFlex1">
							<img className="contact" src="images/whatsapp.png" alt="" />
							<img className="contact" src="images/telefono.png" alt="" />
							<img className="contact" src="images/correo.png" alt="" />
						</div>
					</div>
				</div>
					<h1 className="footer1">Agropecuaria La Isla 2023 </h1>
			</div>
    </div>
  );
}

export default HomePage;
