import React from 'react'

const Footer = () => {
	return (
		<div className="footer">
<div className="flex pagos center">
	<div>
		<img className="icon" src="images/tarjeta.png" alt="" />
	</div>
	<div className="box">
		<h1 className="title start">Pagos</h1>
		<h2 className="start grey">Aceptamos pagos con Paypal, depósitos, transferencias.</h2>
	</div>
</div>
<div className="flex envios">
	<div>
		<img className="icon" src="images/caja.png" alt="" />
	</div>
	<div className="box">
		<h1 className="title start">Envíos</h1>
		<h2 className="start grey">Envió seguro con diferentes paqueterías.</h2>
	</div>
</div>
<div className="flex entregas">
	<div>
		<img className="icon" src="images/ubicacion.png" alt="" />
	</div>
	<div className="box">
		<h1 className="title start">Entregas</h1>
		<h2 className="start grey">Contactanos para ver la mejor opción de tu entrega.</h2>
	</div>
</div>
<div className="flex isla">
	<div>
		<img className="icon" src="images/red.png" alt="" />
	</div>
	<div className="box">
		<h1 className="title start">La Isla</h1>
		<h2 className="start grey"> Síguenos en nuestras diferentes redes sociales.</h2>
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
		<h2 className="start grey">Whatsapp, Teléfono, Correo Electrónico.</h2>
		<div className="redesFlex1">
			<img className="contact" src="images/whatsapp.png" alt="" />
			<img className="contact" src="images/telefono.png" alt="" />
			<img className="contact" src="images/correo.png" alt="" />
		</div>
	</div>
</div>
	<h1 className="footer1 grey">Agropecuaria La Isla 2023 </h1>
</div>
	)
}

export default Footer