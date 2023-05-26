import "./HomePage.css";
import { Button } from "react-bootstrap";
import { motion, delay } from "framer-motion";
import React, { useEffect, useRef, useState } from 'react';
import { Link } from "react-router-dom";
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import Swal from 'sweetalert2'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import SwiperCore, { Autoplay } from 'swiper';
import emailjs from '@emailjs/browser';
import { Modal } from "react-bootstrap";


import 'swiper/swiper-bundle.css';
import 'swiper/swiper-bundle.min.css';

function HomePage() {
  const [carrito, setCarrito] = useState([]);
  const [bodyOverflow, setBodyOverflow] = useState('auto');

  const agregarProducto = (nombre, precio) => {
    const productoExistente = carrito.find((producto) => producto.nombre === nombre);

    if (productoExistente) {
      productoExistente.cantidad += 1;
      productoExistente.precio = productoExistente.precioUnitario * productoExistente.cantidad;
      setCarrito([...carrito]);
    } else {
      const productoNuevo = {
        nombre: nombre,
        precioUnitario: precio,
        cantidad: 1,
        precio: precio
      };
      setCarrito([...carrito, productoNuevo]);
    }
  };

  const agregarMiel = (event) => {
    event.preventDefault();
    agregarProducto("Miel Natural", 299);
  };

  const agregarLimon = (event) => {
    event.preventDefault();
    agregarProducto("Limón Natural", 199);
  };

  function nosotros() {
    window.location.href = "/nosotros";
  }

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm("service_a3iwfaq", "template_nq34ag7", form.current, "Q-9E7qPt5U-kBqC9P")
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

  SwiperCore.use([Autoplay]);

  const [cartModalIsOpen, setCartModalIsOpen] = useState(false);

  function openCartModal() {
    setCartModalIsOpen(true);
    setBodyOverflow('hidden');
  }

  function closeCartModal() {
    setCartModalIsOpen(false);
    setBodyOverflow('auto');
  }

  useEffect(() => {
    const botonCarrito = document.getElementById('carrito');
    if (botonCarrito) {
      botonCarrito.addEventListener('click', openCartModal);
    }
  }, []);

  return (
    <div>
			<div>
      <motion.img whileTap={{ scale: 1.2 }} className="carrito" id="carrito" src="images/carrito.png" onClick={openCartModal} />
			<h1 className="carrito-length">{carrito.reduce((total, producto) => total + producto.cantidad, 0)}</h1>
			</div>
      <Modal
        show={cartModalIsOpen}
        onHide={closeCartModal}
        contentLabel="Cart Modal"
        style={{ overflow: bodyOverflow }}
      >
        <motion.img whileTap={{ scale: 1.2 }} onClick={closeCartModal} className="x" src="images/x.png" alt="" />
        <motion.h1 className="textoMenu center">Carrito</motion.h1>
        <motion.img whileTap={{ scale: 1.1 }} className="logo3 marginr marginl" src="images/logo3.png" alt="" />
        <img className="honeyCumb1 marginl marginr margint marginb" src="images/honeyCumb.png" alt="" />
        {carrito.length === 0 ? (
          <h1 className="title">Aún no tienes productos agregados</h1>
        ) : (
          <div>
            <ul className="flex">
              {carrito.map((producto, index) => (
                <li key={index}>
                  <p>{producto.nombre}</p>
									<div className="flex-reverse">
										<h1>+</h1>
                  	<p>Cantidad: {producto.cantidad}</p>
										<h1>-</h1>
									</div>
                  <p>Precio: {producto.precio}</p>
                </li>
              ))}
            </ul>
          </div>
        )}
      </Modal>
      <img className="logo1 marginr marginl" src="images/logo3.png" alt="" />
      <img className="honeyCumb" src="images/honeyCumb.png" alt="" />
      <div className="marginb">
        <h1 className="title margint width marginl marginr marginb">¡Bienvenido a nuestra página web! Espacio virtual dedicado a la venta de productos naturales cultivados de manera responsable y sostenible.</h1>
      </div>
      <div>
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={50}
          slidesPerView={1}
          navigation={false}
          pagination={{ clickable: true }}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          className="custom-swiper"
        >
          <SwiperSlide>
            <img className="png marginl marginr" src="images/planta.png" alt="" />
            <p className="subtitle margint">Productos siempre frescos.</p>
          </SwiperSlide>
          <SwiperSlide>
            <img className="png marginl marginr" src="images/naturalesa.png" alt="" />
            <p className="subtitle margint">Mejor alternativa para el planeta.</p>
          </SwiperSlide>
          <SwiperSlide>
            <img className="png marginl marginr" src="images/naturaleza2.png" alt="" />
            <p className="subtitle margint">Cultivados por Profesionales en el campo.</p>
          </SwiperSlide>
          <SwiperSlide>
            <img className="png marginl marginr" src="images/naturaleza3.png" alt="" />
            <p className="subtitle margint">Expertos en el campo de la Apicultura.</p>
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
            <button className="buttonAgregar" onClick={agregarMiel}>Agregar al Carrito</button>
          </div>
          <div className="boxProductos">
            <img className="marginl marginr pngProductos" src="images/limon.png" alt="" />
            <h1 className="title1">Limón Natural</h1>
            <p className="subtitle">$299.00 / 1 kilo</p>
            <hr className="hr" />
            <button className="buttonAgregar" onClick={agregarLimon}>Agregar al Carrito</button>
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
              <h1 className="title1">Té de Limón</h1>
              <p className="subtitle1">El té de limón es muy bueno para la salud, ya que aporta diferentes beneficios.</p>
              <hr className="hr" />
              <button className="buttonAgregar">¡Conoce Más!</button>
            </div>
            <div className="boxProductos">
              <img className="marginl marginr pngProductos" src="images/miel.png" alt="" />
              <h1 className="title1">Endulzar con Miel</h1>
              <p className="subtitle1">Endulzar tus bebidas y alimentos es mejor que usar azúcar procesada.</p>
              <hr className="hr" />
              <button className="buttonAgregar">¡Conoce más!</button>
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
          <h1 className="title3">¿Buscas comprar productos a precio de mayoreo? ¡Los mejores ingredientes que puedes tener en tu negocio!</h1>
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
                <label className="subtitle">Cuánto necesitas?</label>
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
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
            }}
            className="custom-swiper1 mb"
          >
            <SwiperSlide>
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
        <h1 className="title w-2/3 marginr marginl marginb">Todos nuestros productos se hacen con los más altos estándares de calidad para que los puedas consumir en tu hogar día con día.</h1>
      </div>
    </div>
  );
}

export default HomePage;
