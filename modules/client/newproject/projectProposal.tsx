import { Input } from '@/components/UI/Input';

const ProjectProposal = () => {
  return (
    <div className='flex flex-col gap-10 max-w-[500px] w-full'>
      <Input name='budget' label='Project budget (how much are you spending?)' placeholder='Enter your budget' />
      <Input name='flexible' label='Is this flexible?' placeholder='' />
      <Input
        name='timeline'
        label='Project timeline (how long does this project lasts?)'
        placeholder="What's the timeline of the project"
      />
      <div className='flex flex-col gap-4'>
        <p className='text-gay-900 text-Text-sm'>Project timeline (project start date and deadline)</p>
        <div className='flex gap-4 items-center justify-between'>
          <Input name='start_date' placeholder='Start Date' type='date' />
          <p className='text-gay-900 text-Text-sm'>-</p>
          <Input name='end_date' placeholder='End Date' type='date' />
        </div>
      </div>
    </div>
  );
};

export default ProjectProposal;
