import Link from "next/link";
import currentUserHashId from "util/currentUserHashId";

type InitialProps = { user: User };

const ImageContainer = ({ user }: InitialProps) => {
  return (
    <div className="container">
      <div className="banner-hero banner-image-single">
        <img src="assets/imgs/page/candidates/img.png" alt="jobbox" />
        <a className="btn-editor" href="#" />
      </div>
      <div className="box-company-profile">
        <div className="image-compay">
          <img
            src="assets/imgs/page/candidates/candidate-profile.png"
            alt="jobbox"
          />
        </div>
        <div className="row mt-10">
          <div className="col-lg-8 col-md-12">
            <h5 className="f-18">
              {user.name ? user.name : "Anonymous User"}
              <span className="card-location font-regular ml-20">
                {user.country || user.city
                  ? `${user.city} | ${user.country}`
                  : "unknown"}
              </span>
            </h5>
            {user.position && (
              <p className="mt-0 font-md color-text-paragraph-2 mb-15">
                {user.position}
              </p>
            )}
          </div>
          <div className="col-lg-4 col-md-12 text-lg-end">
            <Link legacyBehavior href={`/candidates/${currentUserHashId}`}>
              <a className="btn btn-preview-icon btn-apply btn-apply-big">
                Preview
              </a>
            </Link>
          </div>
        </div>
      </div>
      <div className="border-bottom pt-10 pb-10" />
    </div>
  );
};

export default ImageContainer;
