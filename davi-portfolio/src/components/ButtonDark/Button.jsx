/** @format */

export default function ButtonDark({ buttonText }) {
	return (
		<button className='bg-text_graydark text-white font-elegant w-48 h-12 px-3 py-3 rounded-lg font-semibold transition-all duration-300 ease-in-out hover:bg-blue_elegant hover:border-white hover:shadow-lg hover:scale-105'>
			{buttonText}
		</button>
	);
}
