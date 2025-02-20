import { Input } from '@/components/UI/Input';

const ProjectDetails = () => {
  return (
    <div className='flex flex-col gap-10 max-w-[500px] w-full'>
      <Input name='title' label='Project name/title' placeholder='Enter project name' />
      <Input
        name='description'
        label='Project description (what are you looking to do)?'
        placeholder='Enter project description'
      />
      <Input name='industry' label='Project industry' placeholder='Enter project industry' />
      <Input name='category' label='Project category' placeholder='Enter project category' />
      <Input name='freelancer' label='Name of freelancer' placeholder='Enter freelance name' />
      <Input name='email' label='Freelancer email' placeholder='Enter freelance email' />
    </div>
  );
};

export default ProjectDetails;
