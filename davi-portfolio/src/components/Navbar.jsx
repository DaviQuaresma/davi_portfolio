import React from 'react';

export default function Navbar() {
	return (
		<>
			<div className="flex justify-between p-5">
				<div>
					<img className='w-10' src="/275836-1.webp" alt="" />
				</div>

				<div className='pt-1.5'>
					<nav className='flex gap-6'>
						<a href="">Intro</a>
						<a href="">Tecnologia</a>
						<a href="">Projects</a>
						<a href="">Contact</a>
					</nav>
				</div>
					<div className='pt-1.5'>
							<p><span><strong>ENG</strong></span> | <span>ESP</span></p>
					</div>

					<div className='flex gap-4'>
							<img className='stroke-1 w-7' src="/icons8-github.svg" alt="" />
							<img className='stroke-1 w-7' src="/icons8-linkedin.svg" alt="" />
					</div>
			</div>
		</>
	);
}
