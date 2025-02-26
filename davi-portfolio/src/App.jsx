/** @format */

import React from "react";
import Navbar from "../src/components/Navbar";
import MiddleContent from "./components/MiddleContent";
import Skillset from "./components/Skillset";

export default function App() {
	return (
		<>
			<div className='text-text_graydark bg-background_medium'>
				<Navbar />
				<div className='grid justify-center pt-24'>
					<MiddleContent />
				</div>
				<div>
					<Skillset />
				</div>
			</div>
		</>
	);
}
