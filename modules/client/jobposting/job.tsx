"use client";
import { ROUTES } from "@/constants/routes";
import Link from "next/link";
import { useState } from "react";
import GridView from "./grid";
import ListView from "./list";

interface Job {
  image: string;
  title: string;
  type: string;
  date: string;
  amount: string;
  status: string;
}

const jobs: Job[] = [
  {
    image: "/assets/images/twitter.png",
    title: "Web Designer needed for a contract role",
    type: "contract",
    date: "3 months",
    amount: "130000",
    status: "active",
  },
  // {
  //   image: "/assets/images/twitter.png",
  //   title: "Web Designer needed for a contract role",
  //   type: "contract",
  //   date: "3 months",
  //   amount: "130000",
  //   status: "closed",
  // },
  // {
  //   image: "/assets/images/twitter.png",
  //   title: "Web Designer needed for a contract role",
  //   type: "contract",
  //   date: "3 months",
  //   amount: "130000",
  //   status: "closed",
  // },
  // {
  //   image: "/assets/images/twitter.png",
  //   title: "Web Designer needed for a contract role",
  //   type: "contract",
  //   date: "3 months",
  //   amount: "130000",
  //   status: "active",
  // },
];




const Jobposting = () => {
  const [activeTab, setActiveTab] = useState("all");
  const [viewType, setViewType] = useState("grid"); // Default to grid view

  const filteredJobs: Job[] = jobs?.filter(
    (job) => activeTab === "all" || job.status === activeTab
  );

  return (
    <div className="p-5">
      <div className="flex justify-between items-center">
      <select
          className=""
          style={{
            color: "#101828",
            fontFamily: "Whyte Inktrap",
            fontSize: "30px",
            fontStyle: "normal",
            fontWeight: 500,
            lineHeight: "38px",
          }}
          onChange={(e) => setActiveTab(e.target.value)}
          value={activeTab}
        >
          <option value="all">All postings</option>
          <option value="active">Active postings</option>
          <option value="closed">Closed postings</option>
        </select>

        <Link
          href={ROUTES.CLIENT_NEW_PROJECT}
          className="rounded-lg px-4 py-3 bg-primary-purple-60 text-white"
        >
          Post a new project
        </Link>
      </div>

      {/* Toggle View (Grid/List) */}
      <div className="flex justify-end gap-5 mt-5">
        {/* Grid View Icon */}
        <button onClick={() => setViewType("grid")}>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
<rect x="1" y="1.5" width="22" height="22" rx="4" stroke="#423366" strokeWidth="2"/>
<path d="M9.3 5.5H6.27407C5.82811 5.5 5.60512 5.5 5.43479 5.58679C5.28495 5.66313 5.16313 5.78495 5.08679 5.93479C5 6.10512 5 6.32811 5 6.77407V9.8C5 10.246 5 10.469 5.08679 10.6393C5.16313 10.7891 5.28495 10.9109 5.43479 10.9873C5.60512 11.0741 5.82811 11.0741 6.27407 11.0741H9.3C9.74597 11.0741 9.96895 11.0741 10.1393 10.9873C10.2891 10.9109 10.4109 10.7891 10.4873 10.6393C10.5741 10.469 10.5741 10.246 10.5741 9.8V6.77407C10.5741 6.32811 10.5741 6.10512 10.4873 5.93479C10.4109 5.78495 10.2891 5.66313 10.1393 5.58679C9.96895 5.5 9.74597 5.5 9.3 5.5Z" stroke="#423366" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M18.0593 5.5H15.0333C14.5874 5.5 14.3644 5.5 14.194 5.58679C14.0442 5.66313 13.9224 5.78495 13.8461 5.93479C13.7593 6.10512 13.7593 6.32811 13.7593 6.77407V9.8C13.7593 10.246 13.7593 10.469 13.8461 10.6393C13.9224 10.7891 14.0442 10.9109 14.194 10.9873C14.3644 11.0741 14.5874 11.0741 15.0333 11.0741H18.0593C18.5052 11.0741 18.7282 11.0741 18.8985 10.9873C19.0484 10.9109 19.1702 10.7891 19.2465 10.6393C19.3333 10.469 19.3333 10.246 19.3333 9.8V6.77407C19.3333 6.32811 19.3333 6.10512 19.2465 5.93479C19.1702 5.78495 19.0484 5.66313 18.8985 5.58679C18.7282 5.5 18.5052 5.5 18.0593 5.5Z" stroke="#423366" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M18.0593 14.2593H15.0333C14.5874 14.2593 14.3644 14.2593 14.194 14.3461C14.0442 14.4224 13.9224 14.5442 13.8461 14.694C13.7593 14.8644 13.7593 15.0874 13.7593 15.5333V18.5593C13.7593 19.0052 13.7593 19.2282 13.8461 19.3985C13.9224 19.5484 14.0442 19.6702 14.194 19.7465C14.3644 19.8333 14.5874 19.8333 15.0333 19.8333H18.0593C18.5052 19.8333 18.7282 19.8333 18.8985 19.7465C19.0484 19.6702 19.1702 19.5484 19.2465 19.3985C19.3333 19.2282 19.3333 19.0052 19.3333 18.5593V15.5333C19.3333 15.0874 19.3333 14.8644 19.2465 14.694C19.1702 14.5442 19.0484 14.4224 18.8985 14.3461C18.7282 14.2593 18.5052 14.2593 18.0593 14.2593Z" stroke="#423366" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M9.3 14.2593H6.27407C5.82811 14.2593 5.60512 14.2593 5.43479 14.3461C5.28495 14.4224 5.16313 14.5442 5.08679 14.694C5 14.8644 5 15.0874 5 15.5333V18.5593C5 19.0052 5 19.2282 5.08679 19.3985C5.16313 19.5484 5.28495 19.6702 5.43479 19.7465C5.60512 19.8333 5.82811 19.8333 6.27407 19.8333H9.3C9.74597 19.8333 9.96895 19.8333 10.1393 19.7465C10.2891 19.6702 10.4109 19.5484 10.4873 19.3985C10.5741 19.2282 10.5741 19.0052 10.5741 18.5593V15.5333C10.5741 15.0874 10.5741 14.8644 10.4873 14.694C10.4109 14.5442 10.2891 14.4224 10.1393 14.3461C9.96895 14.2593 9.74597 14.2593 9.3 14.2593Z" stroke="#423366" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
</svg>
        </button>

        {/* List View Icon */}
        <button onClick={() => setViewType("list")}>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
<rect y="0.5" width="24" height="24" rx="5" fill="#423366"/>
<path d="M18 12.5L9.33333 12.5M18 8.21429L9.33333 8.21429M18 16.7857L9.33333 16.7857M6.44444 12.5C6.44444 12.8945 6.12109 13.2143 5.72222 13.2143C5.32335 13.2143 5 12.8945 5 12.5C5 12.1055 5.32335 11.7857 5.72222 11.7857C6.12109 11.7857 6.44444 12.1055 6.44444 12.5ZM6.44444 8.21429C6.44444 8.60877 6.12109 8.92857 5.72222 8.92857C5.32335 8.92857 5 8.60877 5 8.21429C5 7.8198 5.32335 7.5 5.72222 7.5C6.12109 7.5 6.44444 7.8198 6.44444 8.21429ZM6.44444 16.7857C6.44444 17.1802 6.12109 17.5 5.72222 17.5C5.32335 17.5 5 17.1802 5 16.7857C5 16.3912 5.32335 16.0714 5.72222 16.0714C6.12109 16.0714 6.44444 16.3912 6.44444 16.7857Z" stroke="#FCFCFD" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
</svg>
        </button>
      </div>

      {/* Render View */}
      <div className="mt-5">
        {viewType === "grid" ? <GridView filteredJobs={filteredJobs} /> : <ListView filteredJobs={filteredJobs} />}
      </div>
    </div>
  );
};

export default Jobposting;
