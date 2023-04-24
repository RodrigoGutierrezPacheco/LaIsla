import "./HomePage.css";
import { Button } from "react-bootstrap";
import { motion } from "framer-motion";
import React,{Component} from 'react'
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';


function HomePage() {

	const handleDragStart = (e) => e.preventDefault();

	const items = [
		<div className='flex'>
		<img className='imgResponsive' src="images/img1.jpg" onDragStart={handleDragStart} role="presentation" />
		<h1 className='text'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias, voluptatum odio facere non debitis perspiciatis minima accusamus officiis sed distinctio tempora, facilis sunt ut aperiam aliquam mollitia! Vero, quisquam perspiciatis!</h1>
		</div>,
	
		<div className='flex0'>
		<img className='imgResponsive' src="images/img2.jpg" onDragStart={handleDragStart} role="presentation" />
		<h1 className='text1'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias, voluptatum odio facere non debitis perspiciatis minima accusamus officiis sed distinctio tempora, facilis sunt ut aperiam aliquam mollitia! Vero, quisquam perspiciatis!</h1>
		</div>,
	
		<div className='flex'>
		<img className='imgResponsive' src="images/img1.jpg" onDragStart={handleDragStart} role="presentation" />
		<h1 className='text'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias, voluptatum odio facere non debitis perspiciatis minima accusamus officiis sed distinctio tempora, facilis sunt ut aperiam aliquam mollitia! Vero, quisquam perspiciatis!</h1>
		</div>,
	
		<div className='flex0'>
		<img className='imgResponsive' src="images/img4.jpg" onDragStart={handleDragStart} role="presentation" />
		<h1 className='text1'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias, voluptatum odio facere non debitis perspiciatis minima accusamus officiis sed distinctio tempora, facilis sunt ut aperiam aliquam mollitia! Vero, quisquam perspiciatis!</h1>
		</div>,
	
		<div className='flex'>
		<img className='imgResponsive' src="images/img1.jpg" onDragStart={handleDragStart} role="presentation" />
		<h1 className='text'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias, voluptatum odio facere non debitis perspiciatis minima accusamus officiis sed distinctio tempora, facilis sunt ut aperiam aliquam mollitia! Vero, quisquam perspiciatis!</h1>
		</div>,
			
	];
	

	function nosotros(){
		window.location.href="/nosotros"
	}


  return (
    <div>
			<img className="logo1" src="images/logo3.png" alt="" />
			<div>
				<h1 className="title margint">Agropecuaria - La Isla</h1>
				<p className="title1 margint">Tracicion y produccion apicola familiar desde el 2012, con procesos naturales Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium ab consequuntur, alias quo pariatur amet magnam. Eos quam tenetur dolorem dignissimos aut aliquid officia fugit? Distinctio non atque dicta in?</p>
			</div>
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
				<h3 className="yourProducts margint">Tus productos favoritos hechos con los ingredientes de la mas alta calidad.</h3>
			</div>
			<img className="honeyCumb" src="images/honeyCumb.png" alt="" />
			<div>
				<h1 className="title">Venta de productos naturales online</h1>
				<div className="tienda-online">
				<div className="box1">
					<img className="png marginl marginr" src="images/miel.png" alt="" />
					<h1 className="title">Miel</h1>
					<h1 className="title">100% Natural</h1>
					<h1 className="title">1Lt</h1>
					<h1 className="title price">$299.00MXN</h1>
					<button className="button1">
						<div className="flex">
						<img className="carrito" src="images/carrito.png" alt="" /> Comprar
						</div>
					</button>
				</div>
				<div className="box1">
					<img className="png marginl marginr" src="images/limon.png" alt="" />
					<h1 className="title">Limon</h1>
					<h1 className="title">100% Natural</h1>
					<h1 className="title">1kg</h1>
					<h1 className="title">$199.00MXN</h1>
					<button className="button1">
						<div className="flex">
						<img className="carrito" src="images/carrito.png" alt="" /> Comprar
						</div>
					</button>
				 </div>
				</div>
			</div>
			<img className="honeyCumb" src="images/honeyCumb.png" alt="" />
			<h1 className="productosLaIsla">Productos La Isla, de Guerrero para todo Mexico</h1>
			<h3 className="son">Son cosechados con los mas altos estandades de calidad, nos encargamos de todo el proceso desde el principio hasta el fin.</h3>
			<div>
			<div className='padding'>
			<div>
				<img className='honeyCumb' src="images/honeyCumb.png" alt="" />
				<h1 className='title'>La Isla</h1>
			</div>
			<div>
			  <h1 className='justify ourHoney'>Agropecuaria La isla es un proyecto familiar creado por Jaime Pacheco Figueroa, Apicultor de Guerrero.La Isla, lugar donde cosechamos todos nuestros productos con la mas alta calidad e higiene para llevar todos los productos directo a tu mesa.</h1>
			</div>
			</div>
			<div className='center'>
			 <AliceCarousel 
			 animationType="fadeout"  
			 controlsStrategy={"alternates"} 
			 autoPlay={"ltr"} 
			 autoPlayInterval={2000}
			 keyboardNavigation={true} 
			 disableButtonsControls={true} 
			 infinite={true} 
			 mouseTracking items={items}
			 />
			</div>
		</div>
      <motion.button  whileTap={{scale:1.2}} className="buttonConocenos">!Conocenos¡</motion.button>
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
					<h1 className="footer1 grey">Agropecuaria La Isla 2023 </h1>
			</div>
    </div>
  );
}

export default HomePage;
