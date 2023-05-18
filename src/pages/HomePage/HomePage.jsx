import "./HomePage.css";
import { Button } from "react-bootstrap";
import { motion,delay } from "framer-motion";
import React, { Component, useEffect, useRef } from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

// Import Swiper styles
import 'swiper/swiper-bundle.css';
import 'swiper/swiper-bundle.min.css';

function HomePage() {

	function nosotros(){
		window.location.href="/nosotros"
	}


  return (
    <div>
			<img className="logo1" src="images/logo3.png" alt="" />
			<img className="honeyCumb" src="images/honeyCumb.png" alt="" />
			<div className="marginb">
				<h1 className="title margint width marginl marginr marginb">!Bienvenido a nuestra pagina web¡ Espacio virtual dedicado a la venta de productos naturales cultivados de manera responsable y sostenible.</h1>
			</div>
      <div>
		  <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={50}
          slidesPerView={1}
          navigation={false}
          pagination={{ clickable: true }}
          autoplay={{ delay: 1000 }}
          onSlideChange={() => console.log('slide change')}
          className="custom-swiper"
        >
			<SwiperSlide >
			  <img className="png marginl marginr" src="images/planta.png" alt="" />
				<p className="subtitle margint">Productos siempre frescos</p>
			</SwiperSlide>
			<SwiperSlide>
			  <img className="png marginl marginr" src="images/planta.png" alt="" />
				<p className="subtitle margint">Productos siempre frescos</p>
			</SwiperSlide>
			<SwiperSlide>
			  <img className="png marginl marginr" src="images/planta.png" alt="" />
				<p className="subtitle margint">Productos siempre frescos</p>
			</SwiperSlide>
			<SwiperSlide>
			  <img className="png marginl marginr" src="images/planta.png" alt="" />
				<p className="subtitle margint">Productos siempre frescos</p>
			</SwiperSlide>
    </Swiper>
			</div>
			<hr className="hr" />
			<div>
			<div className="flex3 marginb">
				<h1 className="title marginr">Nuestros Productos</h1>
				<img className="honeyCumb1 marginl start" src="images/honeyCumb.png" alt="" />
			</div>
			<div className="productos">
				<div className="boxProductos">
					<img className="marginl marginr pngProductos" src="images/miel.png" alt="" />
					<h1 className="title1">Miel Natural</h1>
					<p className="subtitle">$299.00 / 1 Litro</p>
					<hr className="hr" />
					<button className="buttonAgregar">Agregar al Carrito</button>
				</div>
				<div className="boxProductos">
					<img className="marginl marginr pngProductos" src="images/limon.png" alt="" />
					<h1 className="title1">Limon Natural</h1>
					<p className="subtitle">$299.00 / 1 kilo</p>
					<hr className="hr" />
					<button className="buttonAgregar">Agregar al Carrito</button>
				</div>
				<div className="boxProductos wrap">
					<div className="flex4 marginr marginl">
						<img className="png1 marginl marginr" src="images/calidad.png" alt="" />
						<h1 className="title">Excelente Calidad</h1>
					</div>
					<div className="flex4">
						<img className="png1 marginr marginl" src="images/servicio.png" alt="" />
						<h1 className="title">Servicio al Cliente</h1>
					</div>
					<div className="flex4 marginr marginl">
						<img className="png1 marginr marginl" src="images/envios.png" alt="" />
						<h1 className="title">Envios a toda la republica</h1>
					</div>
				</div>
			</div>
			</div>
			<hr className="hr" />
			<div>
				<div className="flex2">
					<img src="images/honeyCumb.png" alt="" className="honeyCumb1 marginl" />
					<h1 className="title marginr">Recetas</h1>
				</div>
			<div className="productos">
				<div>
				<div className="boxProductos">
					<img className="marginl marginr" src="images/miel.png" alt="" />
					<h1 className="title">Te de Limon</h1>
					<p>El te de limon es mu bueno para la salud por que aporta diferentes beneficios.</p>
					<hr className="hr" />
					<button className="buttonAgregar">Conoce Mas</button>
				</div>
				<div className="boxProductos">
					<img className="marginl marginr" src="images/miel.png" alt="" />
					<h1 className="title">Endulzar con Miel</h1>
					<p>Endulzar tus bebidas y alimentosa con miel es mejor que usar azucar.</p>
					<hr className="hr" />
					<button className="buttonAgregar">Conoce Mas</button>
				</div>
			</div>
				</div>
			</div>
			<hr className="hr" />
			<div>
			<div className="flex1">
				<img className="honeyCumb1 marginl" src="images/honeyCumb.png" alt="" />
				<h1 className="title marginr">Mayoreo</h1>
			</div>
			<div className="productos">
				<h1 className="title">¿Buscas comprar productos a precio de mayoreo? !Los mejores ingreditnes que puedes tener en tu negocio¡</h1>
			<div className="contac">
				<form className="start" action="">
					<h1 className="title">Dejanos tus datos y nos pondremos en contacto contigo.</h1>
					<div>
						<h1 className="title">Nombre</h1>
						<input className="input" type="text" />
					</div>
					<div>
						<h1 className="title">Correo Electronico</h1>
						<input type="text" className="input" />
					</div>
					<div>
						<h1 className="title">Cuentanos que productos necesitas</h1>
						<input type="text" className="input cuentanos" />
					</div>
				</form>
					<button className="enviar marginl marginr">Enviar</button>
			</div>
			</div>
			<img className="mayoreoImg marginl marginr" src="images/mayoreo.jpg" alt="" />
			</div>
			<hr className="hr" />
			<div>
				<div className="flex1">
					<img src="images/honeyCumb.png" alt="" className="honeyCumb1 marginl" />
					<h1 className="title marginr">Nosotros</h1>
				</div>
				<div>
					<img src="images/img1.jpg" alt="" />
				</div>
				<h1 className="title">Somos una empresa dedicada al cultivo de miel, limones y demas productos 100% naturales dentro del estado de Guerrero.</h1>
				<img className="honeyCumb1 marginl marginr" src="images/honeyCumb.png" alt="" />
				<h1 className="title">Todos nuestros productos se hacen con los mas altos estandares de calidad para que los puedas consumir en tu hogar dia con dia.</h1>
			</div>
    </div>
  );
}

export default HomePage;
