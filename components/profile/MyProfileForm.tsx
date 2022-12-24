import Link from "next/link";
import { FormEvent, useState } from "react";
import updateUser from "service/user/updateUser";

type InitialProps = { user: User };

const MyProfileForm = ({ user }: InitialProps) => {
  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);
  const [position, setPosition] = useState(user.position);
  const [bio, setBio] = useState(user.bio);
  const [webUrl, setWebUrl] = useState(user.web_url);
  const [country, setCountry] = useState(user.country);
  const [city, setCity] = useState(user.city);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const params = {
      name,
      email,
      position,
      bio,
      web_url: webUrl,
      country,
      city,
    };
    updateUser(params);
  };

  const mySkills = [
    { name: "Figma" },
    { name: "AdobeDX" },
    { name: "NextJs" },
    { name: "React" },
    { name: "App" },
    { name: "NodeJs" },
  ];

  return (
    <>
      <h3 className="mt-0 mb-15 color-brand-1">My Account</h3>
      <Link legacyBehavior href="#">
        <a className="font-md color-text-paragraph-2">Update your profile</a>
      </Link>

      <div className="mt-35 mb-40 box-info-profie">
        <div className="image-profile">
          <img
            src="assets/imgs/page/candidates/candidate-profile.png"
            alt="jobbox"
          />
        </div>
        <a className="btn btn-apply">Upload Avatar</a>
        <a className="btn btn-link">Delete</a>
      </div>
      <form onSubmit={(e) => handleSubmit(e)} className="row form-contact">
        <div className="col-lg-6 col-md-12">
          <div className="form-group">
            <label className="font-sm color-text-mutted mb-10">Name</label>
            <input
              className="form-control"
              type="text"
              onChange={(e) => setName(e.target.value)}
              defaultValue={user.name}
            />
          </div>
          <div className="form-group">
            <label className="font-sm color-text-mutted mb-10">Email *</label>
            <input
              className="form-control"
              type="text"
              defaultValue={user.email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label className="font-sm color-text-mutted mb-10">Position</label>
            <input
              className="form-control"
              type="text"
              defaultValue={user.position}
              onChange={(e) => setPosition(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label className="font-sm color-text-mutted mb-10">Bio</label>
            <textarea
              className="form-control"
              rows={4}
              defaultValue={user.bio}
              onChange={(e) => setBio(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label className="font-sm color-text-mutted mb-10">
              Personal website
            </label>
            <input
              className="form-control"
              type="url"
              defaultValue={user.web_url}
              onChange={(e) => setWebUrl(e.target.value)}
            />
          </div>
          <div className="row">
            <div className="col-lg-6">
              <div className="form-group">
                <label className="font-sm color-text-mutted mb-10">
                  Country
                </label>
                <input
                  className="form-control"
                  type="text"
                  defaultValue={user.country}
                  onChange={(e) => setCountry(e.target.value)}
                />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="form-group">
                <label className="font-sm color-text-mutted mb-10">City</label>
                <input
                  className="form-control"
                  type="text"
                  defaultValue={user.city}
                  onChange={(e) => setCity(e.target.value)}
                />
              </div>
            </div>
          </div>
          <div className="border-bottom pt-10 pb-10 mb-30" />
          <h6 className="color-orange mb-20">Change your password</h6>
          <div className="row">
            <div className="col-lg-6">
              <div className="form-group">
                <label className="font-sm color-text-mutted mb-10">
                  Password
                </label>
                <input className="form-control" type="password" />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="form-group">
                <label className="font-sm color-text-mutted mb-10">
                  Re-Password *
                </label>
                <input className="form-control" type="password" />
              </div>
            </div>
          </div>
          <div className="border-bottom pt-10 pb-10" />
          <div className="box-agree mt-30">
            <label className="lbl-agree font-xs color-text-paragraph-2">
              <input
                className="lbl-checkbox"
                type="checkbox"
                defaultValue={1}
              />
              Available for freelancers
            </label>
          </div>
          <div className="box-button mt-15">
            <button
              type="submit"
              className="btn btn-apply-big font-md font-bold"
            >
              Save All Changes
            </button>
          </div>
        </div>
        <div className="col-lg-6 col-md-12">
          <div className="box-skills">
            <h5 className="mt-0 color-brand-1">Skills</h5>
            <div className="form-contact">
              <div className="form-group">
                <input
                  className="form-control search-icon"
                  type="text"
                  placeholder="E.g. Angular, Laravel..."
                />
              </div>
            </div>
            <div className="box-tags mt-30">
              {mySkills.map((mySkill, index) => (
                <a key={index} className="btn btn-grey-small mr-10">
                  {mySkill.name}
                  <span className="close-icon" />
                </a>
              ))}
            </div>
            <div className="mt-40">
              <span className="card-info font-sm color-text-paragraph-2">
                You can add up to 15 skills
              </span>
            </div>
          </div>
        </div>
      </form>
    </>
  );
};

export default MyProfileForm;
