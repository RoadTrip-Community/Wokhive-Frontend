'use client';
import { ROUTES } from '@/constants/routes';
import { NextPage } from 'next';
import Image from 'next/image';
import Link from 'next/link';


const tags = [
    "Illustration", "Wireframing", "Branding", "Branding"
]

const applicants = [
    {
        name: 'John Doe',
        image: '/assets/images/avatar.png',
        profile: "Web Designer and illustrator",
        attachments:  "2 attachments"
    },
    {
        name: 'Bob Fraser',
        image: '/assets/images/bob.png',
        profile: "Product Designer",
        attachments:  "2 attachments"
    },
]


const JobDetails: NextPage = () => {
    
    return <div className='flex flex-col gap-3 items-stretch mb-6'>
        <div className='self-stretch'>
            <Image src="/assets/images/jobs.png" alt='image' width={1400} height={400} className='rounded-lg'/>
        </div>
        
        <h1 className='text-gray-700 text-Text-xl font-bold'>Web Designer needed</h1>
        <h3 className='text-gray-500 text-Text-lg font-semibold'>₦ {(150000).toLocaleString()} 3 Months</h3>
        <p className='text-gray-500 text-Text-lg'>post made 15h ago</p>


        <div className='flex gap-5 items-center'>
            <div className='flex flex-col gap-2'>
                <h3 className='text-gray-700 text-Text-md font-semibold'>Project description</h3>
                <p className='self-stretch text-gray-500 text-Text-lg'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque dictum ut velit at pretium. Aenean lobortis ante nec dapibus semper. Sed varius rhoncus odio, id consequat lectus luctus eu. Curabitur tristique rhoncus iaculis. Curabitur erat libero, egestas et tempus vitae, pharetra vel dui. Ut at sem ac neque hendrerit convallis</p>
            </div>
            <div className='flex flex-col gap-2'>
                <h3 className='text-gray-700 text-Text-md font-semibold'>Tags</h3>
                <div className='flex flex-wrap gap-5'>
                    {tags.map((tag, index) => 
                        <p key={index} className='bg-secondary-purple-10 rounded-full py-2 px-4 text-Text-lg text-primary-purple-60 font-normal'>{tag}</p>
                    )}
                </div>
            </div>

            
        </div>
        <div>
            <h3 className='text-gray-700 text-2xl font-bold'>Proposals</h3>

            <div className='flex flex-col gap-5 mt-5'>
                {applicants.map((applicants, index) =>
                <div key={index} className='flex justify-between items-center'>
                    <div className='flex gap-3 items-center'>
                        <Image  src={applicants.image} alt={applicants.name} width={70} height={70} />
                        <div>
                            <h4 className='text-gray-700 text-Text-md font-semibold'>{applicants.name}</h4>
                            <p className='text-gray-500 text-Text-sm font-semibold'>{applicants.profile} <span className='text-gray-500 text-sm'>{applicants.attachments}</span></p>
                        </div>
                    </div>
                    <div className='flex gap-5 items-center'>
                        <Link href={ROUTES.VIEW_APPLICANT_PROFILE} className='bg-primary-purple-60 rounded-lg px-4 py-2 shadow-sm border border-primary-purple-60 text-white font-inter font-semibold transition-all duration-500 hover:scale-95'>
                        view profile</Link>
                        <div className='bg-primary-50 rounded-lg px-4 py-2 shadow-sm border border-primary-200 text-primary-purple-70 font-inter font-semibold cursor-pointer transition-all duration-500 hover:scale-95'>Accept</div>
                        <div className='text-error-700 cursor-pointer rounded-lg font-inter font-semibold transition-all duration-500 hover:scale-95'>Decline</div>
                    </div>
                </div>
                )}
            </div>
        </div>
    </div>;
}
 
export default JobDetails;