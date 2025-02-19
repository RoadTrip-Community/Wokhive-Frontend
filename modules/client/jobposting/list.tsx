import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";

interface Job {
  image: string | StaticImport;
  title: string;
  date: string;
  amount: number | string;
  type: string ;
}

interface ListViewProps {
  filteredJobs: Job[];
}

const ListView = ({ filteredJobs }: ListViewProps) => {
  return (
    <div className="flex flex-col gap-4">
      {/* Header */}
      <div className="border-2 border-gray-900 bg-gray-100 rounded-md flex px-5 py-4 w-full justify-between items-center shadow-sm">
        <div className="flex items-center space-x-4 w-1/3">
          <p className="text-gray-600 font-semibold">Job Posting</p>
        </div>
        <div className="flex items-center space-x-6 w-2/3 justify-end text-gray-600 text-base">
         
          <p className="w-1/3 text-center">Date</p>
          <p className="w-1/3 text-center">Type</p>
          
          <p className="w-1/3 text-center">Pay</p>
        </div>
      </div>

      {/* Job List */}
      <div className="mt-5 w-auto">
        {filteredJobs.length > 0 ? (
          filteredJobs.map((job, index) => (
            <div key={index} className="flex justify-between border-b py-4 bg-gray-50 px-5 items-center">
              <div className="flex items-center space-x-4 w-1/3">
                <Image src={job.image} alt="Company Logo" width={64} height={64} className="rounded-md" />
                <p className="text-gray-900 text-lg font-semibold">{job.title}</p>
              </div>
              <div className="flex items-center space-x-6 w-2/3 justify-end text-gray-700 text-base">
                <p className="border-l h-6 border-gray-400"></p>
                <p className="w-1/3 text-center">{job.date}</p>
                <p className="border-l h-6 border-gray-400"></p>
                <p className="w-1/3 text-center">{job.type}</p>
                <p className="border-l h-6 border-gray-400"></p>
                <p className="w-1/3 text-center">₦{Number(job.amount).toLocaleString()}</p>
              </div>
            </div>
          ))
        ) : (
          <div className="flex flex-col justify-center items-center my-52 gap-4">
            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="none">
            <path d="M40 21V13.6C40 10.2397 40 8.55953 39.346 7.27606C38.7708 6.14708 37.8529 5.2292 36.7239 4.65396C35.4405 4 33.7603 4 30.4 4H17.6C14.2397 4 12.5595 4 11.2761 4.65396C10.1471 5.2292 9.2292 6.14708 8.65396 7.27606C8 8.55953 8 10.2397 8 13.6V34.4C8 37.7603 8 39.4405 8.65396 40.7239C9.2292 41.8529 10.1471 42.7708 11.2761 43.346C12.5595 44 14.2397 44 17.6 44H24M28 22H16M20 30H16M32 14H16M36 42V30M30 36H42" stroke="#423366" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>

            <h1 className="text-gray-900 text-Text-lg font-semibold">
              No posts yet
            </h1>

            <p className="text-center">
            Showcase your projects and attract clients who need your expertise. Whether you&apos;re a writer, <br/> designer, developer, or have any other skill to offer, this is your platform to shine. 
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ListView;
