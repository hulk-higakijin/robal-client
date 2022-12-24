import Link from "next/link";

type InitialProps = { job: Job }

const JobCard = ({ job }: InitialProps) => {
  return (
    <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
      <div className="card-grid-2 hover-up">
        <div className="card-grid-2-image-left">
          <span className="flash" />
          <div className="image-box">
            <img src={job.company.imageSrc} alt="jobBox" />
          </div>
          <div className="right-info">
            <Link legacyBehavior href="#">
              <a className="name-job">{job.company.name}</a>
            </Link>
            <span className="location-small">
              {job.company.city}, {job.company.country}
            </span>
          </div>
        </div>
        <div className="card-block-info">
          <h6>
            <Link legacyBehavior href="/job-details">
              <a>{job.title}</a>
            </Link>
          </h6>
          <div className="mt-5">
            <span className="card-briefcase">{job.commitment}</span>
            <span className="card-time">{job.createdAt}</span>
          </div>
          <p className="font-sm color-text-paragraph mt-15">
            {job.description}
          </p>
          <div className="mt-30">
            {job.skills.map((skill, index) => (
              <Link key={index} legacyBehavior href="/job-details">
                <a className="btn btn-grey-small mr-5">{skill.name}</a>
              </Link>
            ))}
          </div>
          <div className="card-2-bottom mt-30">
            <div className="row">
              <div className="col-lg-7 col-7">
                <span className="card-text-price">¥{job.salaryValue}</span>
                <span className="text-muted">/{job.salaryUnit}</span>
              </div>
              <div className="col-lg-5 col-5 text-end">
                <div
                  className="btn btn-apply-now"
                  data-bs-toggle="modal"
                  data-bs-target="#ModalApplyJobForm"
                >
                  Apply now
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobCard;
