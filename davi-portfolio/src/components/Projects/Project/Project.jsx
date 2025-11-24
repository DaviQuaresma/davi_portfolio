export default function Project({
	projectTitle,
	techsList,
	projectResume,
	imageProject,
	githubLink,
	githubLink2,
}) {
	return (
		<div className='group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 bg-white border border-gray-200 hover:border-blue_elegant'>
			{/* Image Container with Overlay */}
			<div className='relative h-40 overflow-hidden'>
				<img
					className='w-full h-full object-cover transition-transform duration-500 group-hover:scale-110'
					src={imageProject}
					alt={projectTitle}
				/>
				<div className='absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500'></div>
				
				{/* GitHub Buttons on Hover */}
				{githubLink && (
					<a
						href={githubLink}
						target='_blank'
						rel='noopener noreferrer'
						className='absolute top-3 right-3 p-2 bg-white/90 backdrop-blur-sm rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-white hover:scale-110 shadow-lg'
						aria-label='View on GitHub'
					>
						<svg
							className='w-5 h-5 text-gray-900'
							fill='currentColor'
							viewBox='0 0 24 24'
						>
							<path d='M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z' />
						</svg>
					</a>
				)}
				{githubLink2 && (
					<a
						href={githubLink2}
						target='_blank'
						rel='noopener noreferrer'
						className='absolute top-14 right-3 p-2 bg-white/90 backdrop-blur-sm rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-white hover:scale-110 shadow-lg'
						aria-label='View on GitHub 2'
					>
						<svg
							className='w-5 h-5 text-gray-900'
							fill='currentColor'
							viewBox='0 0 24 24'
						>
							<path d='M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z' />
						</svg>
					</a>
				)}
			</div>
			
			{/* Content */}
			<div className='p-4'>
				<h2 className='text-lg font-bold text-gray-900 mb-2 line-clamp-2 group-hover:text-blue_elegant transition-colors duration-300'>
					{projectTitle}
				</h2>
				
				<div className='flex flex-wrap gap-1.5 mb-2.5'>
					{techsList.split('|').map((tech, index) => (
						<span
							key={index}
							className='inline-block px-2 py-0.5 text-xs font-medium bg-blue_elegant/10 text-blue_elegant rounded-full border border-blue_elegant/20'
						>
							{tech.trim()}
						</span>
					))}
				</div>
				
				<p className='text-sm text-gray-600 line-clamp-3 leading-relaxed'>
					{projectResume}
				</p>
			</div>
			
			{/* Accent Border */}
			<div className='absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue_elegant via-green_light to-blue_elegant transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500'></div>
		</div>
	);
}
