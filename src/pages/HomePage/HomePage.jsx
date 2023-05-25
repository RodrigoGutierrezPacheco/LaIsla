import "./HomePage.css";
import { Button } from "react-bootstrap";
import { motion,delay } from "framer-motion";
import React, { Component, useEffect, useRef } from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import Swal from 'sweetalert2'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import emailjs from '@emailjs/browser';

// Import Swiper styles
import 'swiper/swiper-bundle.css';
import 'swiper/swiper-bundle.min.css';

function HomePage() {

	function nosotros(){
		window.location.href="/nosotros"
	}

	const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm("service_a3iwfaq","template_nq34ag7", form.current,"Q-9E7qPt5U-kBqC9P")
      .then((result) => {
				Swal.fire(
					'Gracias por contactarnos!',
					'En breve nos pondremos en contacto contigo al correo proporcionado!',
					'success'
				)
      }, (error) => {
          console.log(error.text);
      });
  };


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
					<h1 className="title1">Limón Natural</h1>
					<p className="subtitle">$299.00 / 1 kilo</p>
					<hr className="hr" />
					<button className="buttonAgregar">Agregar al Carrito</button>
				</div>
				<div className="column boxProductos">
				<div className="row">
					<div className="flex4 marginr marginl">
						<img className="png1 marginl marginr" src="images/calidad.png" alt="" />
						<h1 className="title">Excelente Calidad</h1>
					</div>
					<div className="flex4 marginl marginr">
						<img className="png1 marginl marginr " src="images/servicio.png" alt="" />
						<h1 className="title2">Servicio al Cliente</h1>
					</div>
				</div>
					<div className="flex41 center">
						<img className="png1 marginr marginl" src="images/envios.png" alt="" />
						<h1 className="title">Envíos a toda la república</h1>
					</div>
				</div>
			</div>
			</div>
			<hr className="hr" />
			<div>
			<div className="flex3 marginb">
				<h1 className="title marginr">Recetas</h1>
				<img className="honeyCumb1 marginl start" src="images/honeyCumb.png" alt="" />
			</div>
			<div className="productos">
				<div>
				<div className="boxProductos">
					<img className="marginl marginr pngProductos" src="images/limon.png" alt="" />
					<h1 className="title1">Te de Limón</h1>
					<p className="subtitle1">El te de limón es muy bueno para la salud, ya que aporta diferentes beneficios.</p>
					<hr className="hr" />
					<button className="buttonAgregar">¡Conoce Mas!</button>
				</div>
				<div className="boxProductos">
					<img className="marginl marginr pngProductos" src="images/miel.png" alt="" />
					<h1 className="title1">Endulzar con Miel</h1>
					<p className="subtitle1">Endulzar tus bebidas y alimentos es mejor que usar azúcar procesada.</p>
					<hr className="hr" />
					<button className="buttonAgregar">¡Conoce mas!</button>
				</div>
			</div>
				</div>
			</div>
			<hr className="hr" />
			<div>
			<div className="flex3 marginb">
				<h1 className="title marginr">Mayoreo</h1>
				<img className="honeyCumb1 marginl start" src="images/honeyCumb.png" alt="" />
			</div>

			<div className="productos">
				<h1 className="title3">¿Buscas comprar productos a precio de mayoreo? !Los mejores ingredientes que puedes tener en tu negocio¡</h1>
			<div className="contac marginb">
				<h1 className="title w-2/3 marginr marginl start marginb pt">Déjanos tus datos y nos pondremos en contacto contigo.</h1>
			<form ref={form} onSubmit={sendEmail} className="form marginl marginr w-3/4">
				<div className="label">
      		<label className="subtitle">Nombre</label>
      		<input className="input" type="text" name="user_name" required/>
				</div>
				<div className="label">
      		<label className="subtitle">Correo Electrónico</label>
      		<input className="input" type="email" name="user_email" id="email" required/>
				</div>
				<div className="label">
      		<label className="subtitle">Cuanto necesitas?</label>
      		<textarea className="input1 marginb" name="message" required/>
				</div>
      <input className="buttonEnviar marginb" type="submit" value="Enviar" />
    </form>

			</div>
			</div>
			<img className="mayoreoImg marginl marginr" src="images/mayoreo.jpg" alt="" />
			</div>
			<hr className="hr" />
			<div>
			<div className="flex3 marginb">
				<h1 className="title marginr">Nosotros</h1>
				<img className="honeyCumb1 marginl start" src="images/honeyCumb.png" alt="" />
			</div>
				<div>
				<Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={50}
          slidesPerView={1}
          navigation={false}
          pagination={{ clickable: true }}
          autoplay={{ delay: 1000 }}
          className="custom-swiper1 mb"
        >
			<SwiperSlide >
			  <img className="imgNosotros marginl marginr mb1" src="images/img1.jpg" alt="" />
			</SwiperSlide>
			<SwiperSlide>
			  <img className="imgNosotros marginl marginr" src="images/img2.jpg" alt="" />
			</SwiperSlide>
			<SwiperSlide>
			  <img className="imgNosotros marginl marginr" src="images/img3.jpg" alt="" />
			</SwiperSlide>
			<SwiperSlide>
			  <img className="imgNosotros marginl marginr" src="images/img4.jpg" alt="" />
			</SwiperSlide>
    </Swiper>
				</div>
				<h1 className="title w-2/3 marginl marginr marginb">Somos una empresa dedicada al cultivo de miel, limones y demás productos 100% naturales dentro del estado de Guerrero.</h1>
				<img className="honeyCumb1 marginl marginr margint marginb" src="images/honeyCumb1.png" alt="" />
				<h1 className="title w-2/3 marginr marginl marginb">Todos nuestros productos se hacen con los mas altos estándares de calidad para que los puedas consumir en tu hogar dia con dia.</h1>
			</div>
    </div>
  );
}

export default HomePage;
