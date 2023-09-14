"use client";
import React from "react";
import {FaRupeeSign} from "react-icons/fa";
import {BiSolidTimer} from "react-icons/bi";
import {BsUiChecksGrid} from "react-icons/bs";
import Image from "next/image";
import Faq from "@/components/Faq";
import Testimonials from "@/components/Testimonials";

function Page() {
	return (
		<main className="overflow-hidden">
			<section className="h-screen w-screen relative">
				{/* Hero section content (background image, headline, CTA) */}
				<div className="w-full">
					<h1
						className="z-10 absolute top-1/2 left-1/2 text-center
						transform -translate-x-1/2 -translate-y-1/2 text-white text-lg font-bold md:text-3xl lg:text-4xl"
					>
						Jagdamba Properties and Constructions
					</h1>
					<p className="z-10 absolute top-1/2 left-1/2 transform -translate-x-1/2 translate-y-[3em] text-center text-white text-sm md:text-base lg:text-lg overflow-hidden w-[40rem] mx-auto hidden md:block">
						We're a leading Real Estate, Property, and Construction Company in
						West Delhi, offering comprehensive services. Our team of experienced
						professionals, including Agents, Builders, Architects, and
						Designers, collaborates closely with clients to ensure projects meet
						their specs. Specializing in buying/selling properties, Investment,
						Management, Design, Contracting, Construction, Renovation, and
						Improvement. Trusted Property Dealer and Broker with deep market
						knowledge.
					</p>
				</div>
				<video
					src="/video.mp4"
					autoPlay
					muted
					loop
					className="absolute top-0 left-0 h-full w-full object-cover opacity-30"
				></video>
			</section>

			<section className="h-full md:h-screen w-screen flex justify-center items-center my-10">
				{/* Featured properties grid or carousel */}
				<div className="py-10 px-10">
					<h1 className="md:text-3xl font-semibold text-center text-xl">
						Trusted by 1000+ Customers
					</h1>

					<h1 className="text-center py-14 text-3xl font-bold uppercase md:text-5xl lg:text-6xl">
						Why Should <br />
						Choose Us
					</h1>
					{/* Add your featured properties grid/carousel here */}
					<div className="flex gap-6 justify-center items-center flex-col md:flex-row flex-wrap">
						<div className="border w-[20rem] h-[20rem] rounded-lg">
							<div className="flex items-center justify-center flex-col text-center gap-10 py-5">
								<FaRupeeSign className="text-4xl mt-4" />
								<h2 className="font-bold text-2xl">Best Price</h2>
								<p>
									we will provide the best price for you, from the best quailty
									we will give you a special price compared to other places and
									we will give you other bonuses.
								</p>
							</div>
						</div>
						<div className="border w-[20rem] h-[20rem] rounded-lg">
							<div className="flex items-center justify-center flex-col text-center gap-10 py-5">
								<BiSolidTimer className="text-4xl mt-4" />
								<h2 className="font-bold text-2xl">Qucik Process</h2>
								<p>
									we will provide the best price for you, from the best quailty
									we will give you a special price compared to other places and
									we will give you other bonuses.
								</p>
							</div>
						</div>
						<div className="border w-[20rem] h-[20rem] rounded-lg">
							<div className="flex items-center justify-center flex-col text-center gap-10 py-5">
								<BsUiChecksGrid className="text-4xl mt-4" />
								<h2 className="font-bold text-2xl">Quailty First</h2>
								<p>
									we will provide the best price for you, from the best quailty
									we will give you a special price compared to other places and
									we will give you other bonuses.
								</p>
							</div>
						</div>
					</div>
				</div>
			</section>

			<section className="h-screen w-screen bg-white px-24">
				<div className="flex flex-col lg:flex-row justify-between px-10 py-28 items-center">
					<div className="p-5 mx-7 -rotate-1">
						<Image
							src={`/image-2.png`}
							width="521"
							height="521"
							alt="property"
							className=""
						/>
					</div>
					<div className="text-black">
						<h1 className="max-w-2xl mt-3 text-3xl font-bold leading-snug tracking-tight text-gray-800 lg:leading-tight lg:text-4xl">
							We Specialize In Quality <br /> Home Constructions
						</h1>
						<p className="max-w-2xl py-4 text-sm leading-normal text-gray-500 lg:text-xl xl:text-xl">
							At Jagdamba Properties, we are experts in crafting exceptional
							homes that redefine living. With a focus on quality and
							innovation, we specialize in creating distinctive real estate
							projects that cater to your aspirations. Our dedication to
							excellence ensures that each construction we undertake is a
							testament to our commitment to delivering exceptional living
							spaces.
						</p>
						<ul className="flex flex-col items-start mt-3 gap-4 text-gray-500 list-disc">
							<li>Craftsmanship</li>
							<li>Innovative Designs</li>
							<li>Premium Materials</li>
							<li>Client-Centric Approach</li>
							<li>Modern Amenities</li>
						</ul>
					</div>
				</div>
			</section>
			<section className=" w-screen px-10 py-28 bg-gray-200">
				<Testimonials />
			</section>
			<section className="h-full w-screen bg-white py-28">
				<Faq />
			</section>
		</main>
	);
}

export default Page;
