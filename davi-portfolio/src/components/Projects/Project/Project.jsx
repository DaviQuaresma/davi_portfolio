export default function Project({
	projectTitle,
	techsList,
	projectResume,
	imageProject,
}) {
	return (
		<div className='p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 bg-background_strong hover:bg-gray-50'>
			<div className='mb-6'>
				<img
					className='w-full h-56 object-cover rounded-xl'
					src={imageProject}
					alt={projectTitle}
				/>
			</div>
			<div>
				<h2 className='text-2xl font-semibold text-gray-800 mb-2'>
					{projectTitle}
				</h2>
				<div className='text-sm text-gray-500 mb-2'>
					<p className='font-medium text-blue_elegant'>{techsList}</p>
				</div>
				<p className='text-gray-700'>{projectResume}</p>
			</div>
		</div>
	);
}
