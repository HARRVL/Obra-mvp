import React from "react";
import { Link } from "gatsby";
import PageWrapper from "../components/PageWrapper";
import ProfileSidebar from "../components/ProfileSidebar";

import img1 from "../assets/image/l3/png/fimize.png";
import img2 from "../assets/image/svg/icon-shark-2.svg";
import img3 from "../assets/image/svg/icon-thunder.svg";
import img4 from "../assets/image/l3/png/asios.png";
import img5 from "../assets/image/svg/icon-thunder.svg";
import img6 from "../assets/image/l3/png/asios.png";

const CandidateProfile = () => {
  return (
    <>
      <PageWrapper headerConfig={{ button: "profile" }}>
        <div className="bg-default-2 pt-19 pt-lg-22 pb-7 pb-lg-23">
          <div className="container">
            {/* <!-- back Button --> */}
            <div className="row">
              <div className="col-12 mt-13 dark-mode-texts">
                <div className="mb-9">
                  <Link to="/#" className="d-flex align-items-center ml-4">
                    {" "}
                    <i className="icon icon-small-left bg-white circle-40 mr-5 font-size-7 text-black font-weight-bold shadow-8"></i>
                    <span className="text-uppercase font-size-3 font-weight-bold text-gray">
                      Back
                    </span>
                  </Link>
                </div>
              </div>
            </div>
            {/* <!-- back Button End --> */}
            <div className="row">
              <div className="col-12 col-xl-4 col-lg-4 col-md-12 col-xs-10 mb-11 mb-lg-0">
                <ProfileSidebar className="mr-0 mr-xl-17" />
              </div>
              <div className="col-12 col-xl-8 col-lg-8">
                {/* <!-- Top Start --> */}
                <div className="mb-5">
                  <h4 className="font-size-7 mb-9">Applied Jobs</h4>
                  <div className="row justify-content-center">
                    <div className="col-lg-6 col-md-6 col-sm-11 mb-9">
                      {/* <!-- Single Featured Job --> */}
                      <div className="pt-9 px-xl-9 px-lg-7 px-7 pb-7 light-mode-texts bg-white rounded hover-shadow-3">
                        <div className="media align-items-center">
                          <div className="square-52 bg-indigo mr-8 rounded">
                            <Link to="/#">
                              <img src={img1} alt="" />
                            </Link>
                          </div>
                          <div>
                            <Link
                              to="/#"
                              className="font-size-3 text-default-color line-height-2"
                            >
                              Fimize
                            </Link>
                            <h3 className="font-size-6 mb-0">
                              <Link
                                to="/#"
                                className="heading-default-color font-weight-semibold"
                              >
                                Senior Marketing Expert
                              </Link>
                            </h3>
                          </div>
                        </div>
                        <div className="d-flex pt-17">
                          <ul className="list-unstyled mb-1 d-flex flex-wrap">
                            <li>
                              <Link
                                to="/#"
                                className="bg-regent-opacity-15 text-denim font-size-3 rounded-3 min-width-px-100 px-3 flex-all-center mr-6 h-px-33 mt-4"
                              >
                                <i className="icon icon-pin-3 mr-2 font-weight-bold"></i>{" "}
                                London
                              </Link>
                            </li>
                            <li>
                              <Link
                                to="/#"
                                className="bg-regent-opacity-15 text-orange font-size-3 rounded-3 min-width-px-100 px-3 flex-all-center mr-6 h-px-33 mt-4"
                              >
                                <i className="fa fa-briefcase mr-2 font-weight-bold"></i>{" "}
                                Full-time
                              </Link>
                            </li>
                          </ul>
                          <Link
                            to="/#"
                            className="bookmark-button toggle-item font-size-6 ml-auto line-height-reset px-0 mt-6 text-default-color  clicked  "
                          ></Link>
                        </div>
                      </div>
                      {/* <!-- End Single Featured Job --> */}
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-11 mb-9">
                      {/* <!-- Single Featured Job --> */}
                      <div className="pt-9 px-xl-9 px-lg-7 px-7 pb-7 light-mode-texts bg-white rounded hover-shadow-3">
                        <div className="media align-items-center">
                          <div className="square-52 bg-regent mr-8 rounded">
                            <Link to="/#">
                              <img src={img2} alt="" />
                            </Link>
                          </div>
                          <div>
                            <Link
                              to="/#"
                              className="font-size-3 text-default-color line-height-2"
                            >
                              Shark
                            </Link>
                            <h3 className="font-size-6 mb-0">
                              <Link
                                to="/#"
                                className="heading-default-color font-weight-semibold"
                              >
                                3D Artist
                              </Link>
                            </h3>
                          </div>
                        </div>
                        <div className="d-flex pt-17">
                          <ul className="list-unstyled mb-1 d-flex flex-wrap">
                            <li>
                              <Link
                                to="/#"
                                className="bg-regent-opacity-15 text-denim font-size-3 rounded-3 min-width-px-100 px-3 flex-all-center mr-6 h-px-33 mt-4"
                              >
                                <i className="icon icon-pin-3 mr-2 font-weight-bold"></i>{" "}
                                California
                              </Link>
                            </li>
                            <li>
                              <Link
                                to="/#"
                                className="bg-regent-opacity-15 text-orange font-size-3 rounded-3 min-width-px-100 px-3 flex-all-center mr-6 h-px-33 mt-4"
                              >
                                <i className="fa fa-briefcase mr-2 font-weight-bold"></i>{" "}
                                Remote
                              </Link>
                            </li>
                          </ul>
                          <Link
                            to="/#"
                            className="bookmark-button toggle-item font-size-6 ml-auto line-height-reset px-0 mt-6 text-default-color  "
                          ></Link>
                        </div>
                      </div>
                      {/* <!-- End Single Featured Job --> */}
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-11 mb-9">
                      {/* <!-- Single Featured Job --> */}
                      <div className="pt-9 px-xl-9 px-lg-7 px-7 pb-7 light-mode-texts bg-white rounded hover-shadow-3">
                        <div className="media align-items-center">
                          <div className="square-52 bg-orange-2 mr-8 rounded">
                            <Link to="/#">
                              <img src={img3} alt="" />
                            </Link>
                          </div>
                          <div>
                            <Link
                              to="/#"
                              className="font-size-3 text-default-color line-height-2"
                            >
                              Thunder
                            </Link>
                            <h3 className="font-size-6 mb-0">
                              <Link
                                to="/#"
                                className="heading-default-color font-weight-semibold"
                              >
                                Product Manager
                              </Link>
                            </h3>
                          </div>
                        </div>
                        <div className="d-flex pt-17">
                          <ul className="list-unstyled mb-1 d-flex flex-wrap">
                            <li>
                              <Link
                                to="/#"
                                className="bg-regent-opacity-15 text-denim font-size-3 rounded-3 min-width-px-100 px-3 flex-all-center mr-6 h-px-33 mt-4"
                              >
                                <i className="icon icon-pin-3 mr-2 font-weight-bold"></i>{" "}
                                London
                              </Link>
                            </li>
                            <li>
                              <Link
                                to="/#"
                                className="bg-regent-opacity-15 text-orange font-size-3 rounded-3 min-width-px-100 px-3 flex-all-center mr-6 h-px-33 mt-4"
                              >
                                <i className="fa fa-briefcase mr-2 font-weight-bold"></i>{" "}
                                Full-time
                              </Link>
                            </li>
                          </ul>
                          <Link
                            to="/#"
                            className="bookmark-button toggle-item font-size-6 ml-auto line-height-reset px-0 mt-6 text-default-color  "
                          ></Link>
                        </div>
                      </div>
                      {/* <!-- End Single Featured Job --> */}
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-11 mb-9">
                      {/* <!-- Single Featured Job --> */}
                      <div className="pt-9 px-xl-9 px-lg-7 px-7 pb-7 light-mode-texts bg-white rounded hover-shadow-3">
                        <div className="media align-items-center">
                          <div className="square-52 bg-helio mr-8 rounded">
                            <Link to="/#">
                              <img src={img4} alt="" />
                            </Link>
                          </div>
                          <div>
                            <Link
                              to="/#"
                              className="font-size-3 text-default-color line-height-2"
                            >
                              Shark
                            </Link>
                            <h3 className="font-size-6 mb-0">
                              <Link
                                to="/#"
                                className="heading-default-color font-weight-semibold"
                              >
                                Front-end Developer
                              </Link>
                            </h3>
                          </div>
                        </div>
                        <div className="d-flex pt-17">
                          <ul className="list-unstyled mb-1 d-flex flex-wrap">
                            <li>
                              <Link
                                to="/#"
                                className="bg-regent-opacity-15 text-denim font-size-3 rounded-3 min-width-px-100 px-3 flex-all-center mr-6 h-px-33 mt-4"
                              >
                                <i className="icon icon-pin-3 mr-2 font-weight-bold"></i>{" "}
                                Alabama
                              </Link>
                            </li>
                            <li>
                              <Link
                                to="/#"
                                className="bg-regent-opacity-15 text-orange font-size-3 rounded-3 min-width-px-100 px-3 flex-all-center mr-6 h-px-33 mt-4"
                              >
                                <i className="fa fa-briefcase mr-2 font-weight-bold"></i>{" "}
                                Full-time
                              </Link>
                            </li>
                          </ul>
                          <Link
                            to="/#"
                            className="bookmark-button toggle-item font-size-6 ml-auto line-height-reset px-0 mt-6 text-default-color  clicked  "
                          ></Link>
                        </div>
                      </div>
                      {/* <!-- End Single Featured Job --> */}
                    </div>
                  </div>
                </div>
                {/* <!-- Top End --> */}
                {/* <!-- Bottom Start --> */}
                <div className="">
                  <h4 className="font-size-7 mb-9">Saved Jobs</h4>
                  <div className="row justify-content-center">
                    <div className="col-lg-6 col-md-6 col-sm-11 mb-9">
                      {/* <!-- Single Featured Job --> */}
                      <div className="pt-9 px-xl-9 px-lg-7 px-7 pb-7 light-mode-texts bg-white rounded hover-shadow-3">
                        <div className="media align-items-center">
                          <div className="square-52 bg-orange-2 mr-8 rounded">
                            <Link to="/#">
                              <img src={img5} alt="" />
                            </Link>
                          </div>
                          <div>
                            <Link
                              to="/#"
                              className="font-size-3 text-default-color line-height-2"
                            >
                              Thunder
                            </Link>
                            <h3 className="font-size-6 mb-0">
                              <Link
                                to="/#"
                                className="heading-default-color font-weight-semibold"
                              >
                                Product Manager
                              </Link>
                            </h3>
                          </div>
                        </div>
                        <div className="d-flex pt-17">
                          <ul className="list-unstyled mb-1 d-flex flex-wrap">
                            <li>
                              <Link
                                to="/#"
                                className="bg-regent-opacity-15 text-denim font-size-3 rounded-3 min-width-px-100 px-3 flex-all-center mr-6 h-px-33 mt-4"
                              >
                                <i className="icon icon-pin-3 mr-2 font-weight-bold"></i>{" "}
                                New York
                              </Link>
                            </li>
                            <li>
                              <Link
                                to="/#"
                                className="bg-regent-opacity-15 text-orange font-size-3 rounded-3 min-width-px-100 px-3 flex-all-center mr-6 h-px-33 mt-4"
                              >
                                <i className="fa fa-briefcase mr-2 font-weight-bold"></i>{" "}
                                Part-time
                              </Link>
                            </li>
                          </ul>
                          <Link
                            to="/#"
                            className="bookmark-button toggle-item font-size-6 ml-auto line-height-reset px-0 mt-6 text-default-color  "
                          ></Link>
                        </div>
                      </div>
                      {/* <!-- End Single Featured Job --> */}
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-11 mb-9">
                      {/* <!-- Single Featured Job --> */}
                      <div className="pt-9 px-xl-9 px-lg-7 px-7 pb-7 light-mode-texts bg-white rounded hover-shadow-3">
                        <div className="media align-items-center">
                          <div className="square-52 bg-helio mr-8 rounded">
                            <Link to="/#">
                              <img src={img6} alt="" />
                            </Link>
                          </div>
                          <div>
                            <Link
                              to="/#"
                              className="font-size-3 text-default-color line-height-2"
                            >
                              Shark
                            </Link>
                            <h3 className="font-size-6 mb-0">
                              <Link
                                to="/#"
                                className="heading-default-color font-weight-semibold"
                              >
                                Front-end Developer
                              </Link>
                            </h3>
                          </div>
                        </div>
                        <div className="d-flex pt-17">
                          <ul className="list-unstyled mb-1 d-flex flex-wrap">
                            <li>
                              <Link
                                to="/#"
                                className="bg-regent-opacity-15 text-denim font-size-3 rounded-3 min-width-px-100 px-3 flex-all-center mr-6 h-px-33 mt-4"
                              >
                                <i className="icon icon-pin-3 mr-2 font-weight-bold"></i>{" "}
                                Alabama
                              </Link>
                            </li>
                            <li>
                              <Link
                                to="/#"
                                className="bg-regent-opacity-15 text-orange font-size-3 rounded-3 min-width-px-100 px-3 flex-all-center mr-6 h-px-33 mt-4"
                              >
                                <i className="fa fa-briefcase mr-2 font-weight-bold"></i>{" "}
                                Full-time
                              </Link>
                            </li>
                          </ul>
                          <Link
                            to="/#"
                            className="bookmark-button toggle-item font-size-6 ml-auto line-height-reset px-0 mt-6 text-default-color  "
                          ></Link>
                        </div>
                      </div>
                      {/* <!-- End Single Featured Job --> */}
                    </div>
                  </div>
                </div>
                {/* <!-- Bottom End --> */}
              </div>
            </div>
          </div>
        </div>
      </PageWrapper>
    </>
  );
};
export default CandidateProfile;
