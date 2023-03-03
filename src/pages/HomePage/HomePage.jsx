import "./HomePage.css";

function HomePage() {
  return (
    <div>
			<img className="logo1" src="images/logo1.png" alt="" />
      <div>
				<img className="nature" src="images/nature.png" alt="" />
				<h2>Productos</h2>
				<div className="flex productos">
				 <div>
					 <img className="product" src="images/miel.png" alt="" />
					 <h3 className="title">Miel</h3>
				 </div>
				 <div>
					 <img className="product" src="images/limon.png" alt="" />
					 <h3 className="title">Limon</h3>
				 </div>
				 <div>
					 <img className="product" src="images/dulces.png" alt="" />
					 <h3 className="title">Dulces</h3>
				 </div>
				</div>
				<h3 className="yourProducts">Tus productos favoritos hechos con los ingredientes de la mas alta calidad.</h3>
			</div>
			<img className="honeyCumb" src="images/honeyCumb.png" alt="" />
			<div className="miel">
				<h1>Miel</h1>
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
			</div>
    </div>
  );
}

export default HomePage;
