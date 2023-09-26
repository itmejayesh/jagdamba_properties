import Image from "next/image";
import React from "react";

const Testimonials = () => {
	return (
		<>
			<div className="grid gap-10 lg:grid-cols-2 xl:grid-cols-3 text-gray-800">
				<div className="lg:col-span-2 xl:col-auto">
					<div className="flex flex-col justify-between w-full h-full bg-gray-100 px-14 rounded-2xl py-14 ">
						<p className="text-xl leading-normal">
							Excellent construction company in Delhi! They delivered a flawless
							construction project, paying attention to every detail. Their team
							of professionals ensured smooth execution and timely completion.
							Highly satisfied with their services.
						</p>

						<div className="flex items-center gap-5 mt-8">
							<img
								src="https://lh3.googleusercontent.com/a-/ALV-UjWHh1baKAKeKwdR11L7s0yarosvnQ0-63FdO9APHYyW2V0=w60-h60-p-rp-mo-br100"
								alt=""
								width={50}
								height={50}
							/>
							<h3 className=" font-medium">Gagandeep Singh Sethi</h3>
						</div>
					</div>
				</div>
				<div className="">
					<div className="flex flex-col justify-between w-full h-full bg-gray-100 px-14 rounded-2xl py-14 ">
						<p className="text-2xl leading-normal ">
							Highly reliable property dealer in West Delhi! They assisted me in
							finding the perfect property that met all my requirements. Their
							contact number in Delhi made it easy to reach out and get prompt
							assistance at all times.
						</p>

						<div className="flex items-center gap-5 mt-8">
							<img
								src="https://lh3.googleusercontent.com/a-/ALV-UjV671BoUq49psQGW9MWMy-UNJ65h8zg6I6z1hWOHtpRCs8=w60-h60-p-rp-mo-br100"
								alt=""
								width={50}
								height={50}
							/>
							<h3 className=" font-medium">Madhurpreet Singh</h3>
						</div>
					</div>
				</div>
				<div className="">
					<div className="flex flex-col justify-between w-full h-full bg-gray-100 px-14 rounded-2xl py-14 ">
						<p className="text-2xl leading-normal ">
							Professional and trustworthy builder! I entrusted them with my
							dream project, and they exceeded my expectations. Their expertise
							and attention to detail were evident in every aspect of the
							construction. Best builder in the west delhi area!
						</p>

						<div className="flex items-center gap-5 mt-8">
							<img
								src="https://lh3.googleusercontent.com/a-/ALV-UjVnjcTv1cAFiESfgJUq_31M0rzM2o3cicn_BZZ-03hoqcTQ=w60-h60-p-rp-mo-ba3-br100"
								alt=""
								width={50}
								height={50}
							/>
							<h3 className=" font-medium">Rohit Thiaria</h3>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Testimonials;
