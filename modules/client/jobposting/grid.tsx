import Image from "next/image";
import Link from 'next/link';
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import { ROUTES } from "@/constants/routes";
import slugify from "slugify";
interface Job {
  id: string;
  image: string | StaticImport;
  title: string ;
  date: string ;
  amount: number | string;
  type: string ;
}

interface ListViewProps {
  filteredJobs: Job[];
}
const GridView = ({ filteredJobs }: ListViewProps) => {
    return  <div>
        {filteredJobs.length > 0 ? (
                  <div className="flex gap-5 flex-wrap">
                    {filteredJobs.map((job, index) => (
                      <Link href={`${ROUTES.CLIENT_JOB_POSTINGS}/${slugify(job.id)}`}  key={index} className="relative w-[400px] h-[400px] rounded-lg shadow-sm overflow-hidden">
                        {/* Job Image */}
                        <Image src={job.image} alt={job.title} layout="fill" objectFit="cover" />
        
                        {/* Text Overlay */}
                        <div className="absolute bottom-0 w-full bg-[#FFF6EE33] bg-opacity-50 text-white p-4">
                          <h2 className="text-lg font-semibold">{job.title}</h2>
                          <div className="flex gap-3 text-gray-25 text-Text-sm font-normal font-whyte">
                          {job.type} {job.date} ₦{Number(job.amount).toLocaleString()}
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                ) : (
                  <div className="flex flex-col justify-center items-center my-72 gap-4">
                    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="none">
                    <path d="M40 21V13.6C40 10.2397 40 8.55953 39.346 7.27606C38.7708 6.14708 37.8529 5.2292 36.7239 4.65396C35.4405 4 33.7603 4 30.4 4H17.6C14.2397 4 12.5595 4 11.2761 4.65396C10.1471 5.2292 9.2292 6.14708 8.65396 7.27606C8 8.55953 8 10.2397 8 13.6V34.4C8 37.7603 8 39.4405 8.65396 40.7239C9.2292 41.8529 10.1471 42.7708 11.2761 43.346C12.5595 44 14.2397 44 17.6 44H24M28 22H16M20 30H16M32 14H16M36 42V30M30 36H42" stroke="#423366" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>

                    <h1 className="text-gray-900 text-Text-lg font-semibold">
                      No posts yet
                    </h1>

                    <p className="text-center text-gray-900 opacity-70">
                    Showcase your projects and attract clients who need your expertise. Whether you&apos;re a writer, <br/> designer, developer, or have any other skill to offer, this is your platform to shine. 
                    </p>
                  </div>
                )}
    </div>;
}
 
export default GridView;