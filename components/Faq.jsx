import React from "react";
import {Disclosure} from "@headlessui/react";
import {ChevronUpIcon} from "@heroicons/react/24/solid";

const Faq = () => {
	return (
		<div className="w-full max-w-2xl p-2 mx-auto rounded-2xl py-4">
			<h3 className="text-sm mt-4 font-bold tracking-wider text-yellow-600 uppercase text-center">
				FAQ
			</h3>
			<h2 className="max-w-2xl mt-3 text-3xl text-center font-bold leading-snug tracking-tight text-gray-800 lg:leading-tight lg:text-4xl">
				Frequently Asked Questions
			</h2>
			<p className="max-w-2xl py-8 text-lg text-center leading-normal mb-16 text-gray-500 lg:text-xl xl:text-xl">
				Answer your customers possible questions here, it will increase the
				conversion rate as well as support or chat requests.
			</p>
			{faqdata.map((item, index) => (
				<div key={item.question} className="mb-5">
					<Disclosure>
						{({open}) => (
							<>
								<Disclosure.Button className="flex items-center justify-between w-full px-4 py-4 text-lg text-left text-gray-800 rounded-lg bg-gray-50 hover:bg-gray-100 focus:outline-none focus-visible:ring focus-visible:ring-indigo-100 focus-visible:ring-opacity-75">
									<span>{item.question}</span>
									<ChevronUpIcon
										className={`${
											open ? "transform rotate-180" : ""
										} w-5 h-5 text-indigo-500`}
									/>
								</Disclosure.Button>
								<Disclosure.Panel className="px-4 pt-4 pb-2 text-gray-500">
									{item.answer}
								</Disclosure.Panel>
							</>
						)}
					</Disclosure>
				</div>
			))}
		</div>
	);
};

const faqdata = [
	{
		question:
			"What services does your real estate business offer in West Delhi?",
		answer:
			"We provide a wide range of services, including buying and selling properties, real estate investment consulting, property management, building design, general contracting, construction management, home renovation, and improvement.",
	},
	{
		question: "Can you tell me more about your team and their expertise?",
		answer:
			"Our team comprises experienced professionals such as real estate agents, builders, architects, and interior designers. They work closely with clients to ensure that every project is tailored to meet their specific needs and preferences.",
	},
	{
		question:
			"How do you assist clients in the property buying and selling process? ",
		answer:
			"As real estate agents, we have a deep understanding of the local market and regulations. We help clients find the right properties to buy and ensure a smooth selling process for those looking to sell their properties.",
	},
	{
		question:
			"Why should clients trust you as a property dealer and real estate broker?",
		answer:
			"We have a solid reputation in West Delhi, backed by our in-depth knowledge of the local real estate market and regulations. Our commitment to client satisfaction and ethical practices sets us apart.",
	},
];

export default Faq;
