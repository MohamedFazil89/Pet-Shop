import React from 'react'
import "../styles/ImageSilder.css"
import Dog from "../../assets/dog-4494554.jpg"
import Cat from "../../assets/cat-8612685.jpg"
import Woman from "../../assets/happyWoman.png"
import Cats from "../../assets/cat-8575641.jpg"

export default function ImageSlide() {
  return (
    <section className="container">
		<p>updates</p>

	<div className="slider-wrapper">
		<div className="slider">
			<img id="slide-1" src={Dog} alt="3D rendering of an imaginary orange planet in space" />
			<img id="slide-2" src={Cat} alt="3D rendering of an imaginary orange planet in space" />
			<img id="slide-3" src={Woman} alt="3D rendering of an imaginary orange planet in space" />
			<img id="slide-4" src={Cats} alt="3D rendering of an imaginary orange planet in space" />


		</div>
		<div className="slider-nav">
			<a href="#slide-1"></a>
			<a href="#slide-2"></a>
			<a href="#slide-3"></a>
			<a href="#slide-4"></a>

		</div>
	</div>
</section>
  )
}
