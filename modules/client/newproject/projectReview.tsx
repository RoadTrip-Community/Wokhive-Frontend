const ProjectReview = () => {
  return (
    <div className='flex flex-col gap-12 max-w-[500px] w-full'>
      <div className='flex flex-col gap-4'>
        <p className='text-gray-900 text-Text-lg font-semibold'>Project name/title</p>
        <p className='text-gray-700 text-Text-lg'>Web Design Project</p>
      </div>

      <div className='flex flex-col gap-4'>
        <p className='text-gray-900 text-Text-lg font-semibold'>Project Description</p>
        <p className='text-gray-700 text-Text-lg'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque dictum ut velit at pretium. Aenean lobortis
          ante nec dapibus semper. Sed varius rhoncus odio, id consequat lectus luctus eu. Curabitur tristique rhoncus
          iaculis. Curabitur erat libero, egestas et tempus vitae, pharetra vel dui. Ut at sem ac neque hendrerit
          convallis
        </p>
      </div>

      <div className='flex flex-col gap-4'>
        <p className='text-gray-900 text-Text-lg font-semibold'>Project Industry/Category</p>
        <p className='text-gray-700 text-Text-lg'>FIntech/Payment processing</p>
      </div>
      <div className='flex flex-col gap-4'>
        <p className='text-gray-900 text-Text-lg font-semibold'>Freelancer Name</p>
        <p className='text-gray-700 text-Text-lg'>John Doe</p>
      </div>
      <div className='flex flex-col gap-4'>
        <p className='text-gray-900 text-Text-lg font-semibold'>Freelancer Email</p>
        <p className='text-gray-700 text-Text-lg'>johndoe@yopmail.com</p>
      </div>
      <div className='flex flex-col gap-4'>
        <p className='text-gray-900 text-Text-lg font-semibold'>Project Budget</p>
        <p className='text-gray-700 text-Text-lg'>₦{Number(150000).toLocaleString()}</p>
      </div>
      <div className='flex flex-col gap-4'>
        <p className='text-gray-900 text-Text-lg font-semibold'>Project Timeline</p>
        <p className='text-gray-700 text-Text-lg'>July 16 - September 12 (2 months)</p>
      </div>
    </div>
  );
};

export default ProjectReview;
