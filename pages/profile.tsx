import { useState } from "react";
import Layout from "../components/Layout/Layout";
import { GetServerSideProps, NextPage } from "next";
import axios from "axios";
import isNotFoundCode from "util/isNotFoundCode";
import nookies from "nookies";
import ImageContainer from "components/profile/ImageContainer";
import SettingsMenu from "components/profile/SettingsMenu";
import MyProfileForm from "components/profile/MyProfileForm";
import MyJobLists from "components/profile/MyJobLists";
import MySavedJoLists from "components/profile/MySavedJobLists";

export const getServerSideProps: GetServerSideProps = async (context) => {
  const cookies = nookies.get(context);
  try {
    const res = await axios.get(
      `${process.env.NEXT_PUBLIC_API_URL}/users/${cookies.hash_id}`
    );
    const user = await res.data;
    return {
      props: { user },
    };
  } catch (error) {
    return {
      props: {},
      notFound: isNotFoundCode(error),
    };
  }
};

type InitialProps = { user: User };

const CandidateProfile: NextPage<InitialProps> = ({ user }) => {

  const [activeIndex, setActiveIndex] = useState(1);

  const handleOnClick = (index: number) => {
    setActiveIndex(index); // remove the curly braces
  };

  const renderComponents = [
    { id: 1, element: <MyProfileForm user={user} /> },
    { id: 2, element: <MyJobLists /> },
    { id: 3, element: <MySavedJoLists /> },
  ];

  return (
    <>
      <Layout>
        <div>
          <section className="section-box-2">
            <ImageContainer user={user} />
          </section>
          <section className="section-box mt-50">
            <div className="container">
              <div className="row">
                <div className="col-lg-3 col-md-4 col-sm-12">
                  <SettingsMenu handleOnClick={handleOnClick} activeIndex={activeIndex} />
                </div>
                <div className="col-lg-9 col-md-8 col-sm-12 col-12 mb-50">
                  <div className="content-single">
                    <div className="tab-content">
                      {renderComponents.map((component, index) => (
                        <div
                          className={`tab-pane fade ${
                            activeIndex === component.id && "show active"
                          }`}
                          key={index}
                        >
                          { component.element }
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </Layout>
    </>
  );
};

export default CandidateProfile;
