/** @format */

export default function ButtonWhite({ buttonText }) {
	return (
		<button className='bg-transparent border-text_graydark text-text_graydark font-elegant w-48 h-12 px-3 py-3 rounded-lg font-semibold border-2 transition-all duration-300 ease-in-out hover:text-background_strong hover:bg-text_graydark hover:border-background_strong hover:text-background_medium hover:shadow-lg hover:scale-105'>
			{buttonText}
		</button>
	);
}
