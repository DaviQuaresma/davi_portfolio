import Navbar from "../src/components/Navbar";
import MiddleContent from "./components/MiddleContent/MiddleContent";
import Skillset from "./components/Skillset";
import Projects from "./components/Projects/Projetcts";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";

export default function App() {
	return (
		<>
			<div className='text-text_graydark bg-background_strong pt-6'>
				<Navbar />
				<div
					id='intro'
					className='grid justify-center pt-40'>
					<MiddleContent />
				</div>
				<div
					id='tecnologia'
					className='pt-16'>
					<Skillset />
				</div>
				<div
					id='projetos'
					className='pt-40'>
					<Projects />
				</div>
				<div
					id='contato'
					className='pt-16'>
					<Contact />
				</div>
				<div className='pt-10'>
					<Footer />
				</div>
			</div>
		</>
	);
}
