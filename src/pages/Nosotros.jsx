import React,{Component} from 'react'
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';


const Nosotros = () => {
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


	return (
		<div>
			<img className="logo1" src="images/nosotros.png" alt="" />
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
			 <AliceCarousel controlsStrategy={"alternates"} autoPlay={"ltr"} autoPlayInterval={200000} className="imgResponsive" keyboardNavigation={true} disableButtonsControls={true} infinite={true} mouseTracking items={items} />
			</div>
		</div>
	)
}

export default Nosotros