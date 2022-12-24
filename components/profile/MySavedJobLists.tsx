import Paginations from "components/Layout/Paginations";
import JobCard from "components/job/JobCard";

const MySavedJobLists = () => {
  const jobs: Job[] = [
    {
      hashId: "hogehoge",
      title: "UI / UX Designer fulltime",
      createdAt: "4 minutes ago",
      updatedAt: "11 days ago",
      commitment: "full_time",
      salaryValue: 500,
      salaryUnit: "hour",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit Recusandae architecto eveniet, dolor quo repellendus pariatur",
      skills: [
        { name: "Adobe XD", hashId: "hogehoge" },
        { name: "Figma", hashId: "hogehoge"  },
        { name: "Photoshop", hashId: "hogehoge"  },
      ],
      company: {
        name: "LinkedIn",
        hashId: "companyNameHogehoge",
        city: "New York",
        country: "US",
        imageSrc: "assets/imgs/brands/brand-1.png",
      },
    },
  ];

  return (
    <>
      <h3 className="mt-0 color-brand-1 mb-50">Saved Jobs</h3>
      <div className="row">
        {jobs.map((job) => (
          <JobCard job={job} key={job.hashId} />
        ))}
      </div>
      <Paginations />
    </>
  );
};

export default MySavedJobLists;
