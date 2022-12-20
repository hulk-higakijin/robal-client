import Paginations from "components/Layout/Paginations";
import Link from "next/link";

const MyJobLists = () => {
  return (
    <>
      <h3 className="mt-0 color-brand-1 mb-50">My Jobs</h3>
      <div className="row display-list">
        <div className="col-xl-12 col-12">
          <div className="card-grid-2 hover-up">
            <span className="flash" />
            <div className="row">
              <div className="col-lg-6 col-md-6 col-sm-12">
                <div className="card-grid-2-image-left">
                  <div className="image-box">
                    <img src="assets/imgs/brands/brand-5.png" alt="jobBox" />
                  </div>
                  <div className="right-info">
                    <Link legacyBehavior href="#">
                      <a className="name-job">Linkedin</a>
                    </Link>
                    <span className="location-small">New York, US</span>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 text-start text-md-end pr-60 col-md-6 col-sm-12">
                <div className="pl-15 mb-15 mt-30">
                  <Link legacyBehavior href="#">
                    <a className="btn btn-grey-small mr-5">Adobe XD</a>
                  </Link>

                  <Link legacyBehavior href="#">
                    <a className="btn btn-grey-small mr-5">Figma</a>
                  </Link>
                </div>
              </div>
            </div>
            <div className="card-block-info">
              <h4>
                <Link legacyBehavior href="/job-details">
                  <a>React Native Web Developer</a>
                </Link>
              </h4>
              <div className="mt-5">
                <span className="card-briefcase">Fulltime</span>
                <span className="card-time">
                  <span>4</span>
                  <span> mins ago</span>
                </span>
              </div>
              <p className="font-sm color-text-paragraph mt-10">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Recusandae architecto eveniet, dolor quo repellendus pariatur
              </p>
              <div className="card-2-bottom mt-20">
                <div className="row">
                  <div className="col-lg-7 col-7">
                    <span className="card-text-price">$500</span>
                    <span className="text-muted">/Hour</span>
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
        <div className="col-xl-12 col-12">
          <div className="card-grid-2 hover-up">
            <span className="flash" />
            <div className="row">
              <div className="col-lg-6 col-md-6 col-sm-12">
                <div className="card-grid-2-image-left">
                  <div className="image-box">
                    <img src="assets/imgs/brands/brand-6.png" alt="jobBox" />
                  </div>
                  <div className="right-info">
                    <Link legacyBehavior href="#">
                      <a className="name-job">Quora JSC</a>
                    </Link>
                    <span className="location-small">New York, US</span>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 text-start text-md-end pr-60 col-md-6 col-sm-12">
                <div className="pl-15 mb-15 mt-30">
                  <Link legacyBehavior href="#">
                    <a className="btn btn-grey-small mr-5">Adobe XD</a>
                  </Link>

                  <Link legacyBehavior href="#">
                    <a className="btn btn-grey-small mr-5">Figma</a>
                  </Link>
                </div>
              </div>
            </div>
            <div className="card-block-info">
              <h4>
                <Link legacyBehavior href="/job-details">
                  <a>Senior System Engineer</a>
                </Link>
              </h4>
              <div className="mt-5">
                <span className="card-briefcase">Part time</span>
                <span className="card-time">
                  <span>5</span>
                  <span> mins ago</span>
                </span>
              </div>
              <p className="font-sm color-text-paragraph mt-10">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Recusandae architecto eveniet, dolor quo repellendus pariatur.
              </p>
              <div className="card-2-bottom mt-20">
                <div className="row">
                  <div className="col-lg-7 col-7">
                    <span className="card-text-price">$800</span>
                    <span className="text-muted">/Hour</span>
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
        <div className="col-xl-12 col-12">
          <div className="card-grid-2 hover-up">
            <span className="flash" />
            <div className="row">
              <div className="col-lg-6 col-md-6 col-sm-12">
                <div className="card-grid-2-image-left">
                  <div className="image-box">
                    <img src="assets/imgs/brands/brand-7.png" alt="jobBox" />
                  </div>
                  <div className="right-info">
                    <Link legacyBehavior href="#">
                      <a className="name-job">Nintendo</a>
                    </Link>
                    <span className="location-small">New York, US</span>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 text-start text-md-end pr-60 col-md-6 col-sm-12">
                <div className="pl-15 mb-15 mt-30">
                  <Link legacyBehavior href="#">
                    <a className="btn btn-grey-small mr-5">Adobe XD</a>
                  </Link>

                  <Link legacyBehavior href="#">
                    <a className="btn btn-grey-small mr-5">Figma</a>
                  </Link>
                </div>
              </div>
            </div>
            <div className="card-block-info">
              <h4>
                <Link legacyBehavior href="/job-details">
                  <a>Products Manager</a>
                </Link>
              </h4>
              <div className="mt-5">
                <span className="card-briefcase">Full time</span>
                <span className="card-time">
                  <span>6</span>
                  <span> mins ago</span>
                </span>
              </div>
              <p className="font-sm color-text-paragraph mt-10">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Recusandae architecto eveniet, dolor quo repellendus pariatur.
              </p>
              <div className="card-2-bottom mt-20">
                <div className="row">
                  <div className="col-lg-7 col-7">
                    <span className="card-text-price">$250</span>
                    <span className="text-muted">/Hour</span>
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
        <div className="col-xl-12 col-12">
          <div className="card-grid-2 hover-up">
            <span className="flash" />
            <div className="row">
              <div className="col-lg-6 col-md-6 col-sm-12">
                <div className="card-grid-2-image-left">
                  <div className="image-box">
                    <img src="assets/imgs/brands/brand-8.png" alt="jobBox" />
                  </div>
                  <div className="right-info">
                    <Link legacyBehavior href="#">
                      <a className="name-job">Periscope</a>
                    </Link>
                    <span className="location-small">New York, US</span>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 text-start text-md-end pr-60 col-md-6 col-sm-12">
                <div className="pl-15 mb-15 mt-30">
                  <Link legacyBehavior href="#">
                    <a className="btn btn-grey-small mr-5">Adobe XD</a>
                  </Link>

                  <Link legacyBehavior href="#">
                    <a className="btn btn-grey-small mr-5">Figma</a>
                  </Link>
                </div>
              </div>
            </div>
            <div className="card-block-info">
              <h4>
                <Link legacyBehavior href="/job-details">
                  <a>Lead Quality Control QA</a>
                </Link>
              </h4>
              <div className="mt-5">
                <span className="card-briefcase">Full time</span>
                <span className="card-time">
                  <span>6</span>
                  <span> mins ago</span>
                </span>
              </div>
              <p className="font-sm color-text-paragraph mt-10">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Recusandae architecto eveniet, dolor quo repellendus pariatur.
              </p>
              <div className="card-2-bottom mt-20">
                <div className="row">
                  <div className="col-lg-7 col-7">
                    <span className="card-text-price">$250</span>
                    <span className="text-muted">/Hour</span>
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
      </div>
      <Paginations />
    </>
  );
};
export default MyJobLists;
