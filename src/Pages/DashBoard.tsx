import DashBoardLayout from "../layout/DashBoardLayout"



const Dashboard =()=>{

    return (
        <DashBoardLayout>
      <div className="dashboard__main pl0-md">
        <div className="dashboard__content hover-bgc-color">
          <div className="row pb40">
            <div className="col-lg-12">
              <div className="dashboard_navigationbar d-block d-lg-none">
                <div className="dropdown">
                  <button
                //    onclick="myFunction()" 
                   className="dropbtn"><i className="fa fa-bars pr10"></i> Dashboard Navigation</button>
                  <ul id="myDropdown" className="dropdown-content">
                    <li><p className="fz15 fw400 ff-heading mt30 pl30">Start</p></li>
                    <li><a href="page-dashboard.html"><i className="flaticon-home mr10"></i>Dashboard</a></li>
                    <li><a href="page-dashboard-proposal.html"><i className="flaticon-document mr10"></i>My Proposals</a></li>
                    <li><a href="page-dashboard-save.html"><i className="flaticon-like mr10"></i>Saved</a></li>
                    <li><a href="page-dashboard-message.html"><i className="flaticon-chat mr10"></i>Message</a></li>
                    <li><a href="page-dashboard-reviews.html"><i className="flaticon-review-1 mr10"></i>Reviews</a></li>
                    <li><a href="page-dashboard-invoice.html"><i className="flaticon-receipt mr10"></i>Invoice</a></li>
                    <li><a href="page-dashboard-payouts.html"><i className="flaticon-dollar mr10"></i>Payouts</a></li>
                    <li><a href="page-dashboard-statement.html"><i className="flaticon-web mr10"></i>Statements</a></li>
                    <li><p className="fz15 fw400 ff-heading mt30 pl30">Organize and Manage</p></li>
                    <li><a href="page-dashboard-manage-service.html"><i className="flaticon-presentation mr10"></i>Manage Services</a></li>
                    <li><a href="page-dashboard-manage-jobs.html"><i className="flaticon-briefcase mr10"></i>Manage Jobs</a></li>
                    <li><a href="page-dashboard-manage-project.html"><i className="flaticon-content mr10"></i>Manage Project</a></li>
                    <li><p className="fz15 fw400 ff-heading mt30 pl30">Account</p></li>
                    <li className="active"><a href="page-dashboard-profile.html"><i className="flaticon-photo mr10"></i>My Profile</a></li>
                    <li><a href="page-login.html"><i className="flaticon-logout mr10"></i>Logout</a></li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-9">
              <div className="dashboard_title_area">
                <h2>My Profile</h2>
                <p className="text">Lorem ipsum dolor sit amet, consectetur.</p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-12">
              <div className="ps-widget bgc-white bdrs4 p30 mb30 overflow-hidden position-relative">
                <div className="bdrb1 pb15 mb25">
                  <h5 className="list-title">Profile Details</h5>
                </div>
                <div className="col-xl-7">
                  <div className="profile-box d-sm-flex align-items-center mb30">
                    <div className="profile-img mb20-sm">
                      <img className="w-100 rounded-circle wa-xs" src="images/team/fl-1.png" alt="" />
                    </div>
                    <div className="profile-content ml20 ml0-xs">
                      <div className="d-flex align-items-center my-3">
                        <a href="#" className="tag-delt text-thm2"><span className="flaticon-delete text-thm2"></span></a>
                        <a href="#" className="upload-btn ml10">Upload Images</a>
                      </div>
                      <p className="text mb-0">Max file size is 1MB, Minimum dimension: 330x300 And Suitable files are .jpg & .png</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-7">
                  <form className="form-style1">
                    <div className="row">
                      <div className="col-sm-6">
                        <div className="mb20">
                          <label className="heading-color ff-heading fw500 mb10">Username</label>
                          <input type="text" className="form-control" placeholder="i will"/>
                        </div>
                      </div>
                      <div className="col-sm-6">
                        <div className="mb20">
                          <label className="heading-color ff-heading fw500 mb10">Email Address</label>
                          <input type="email" className="form-control" placeholder="i will"/>
                        </div>
                      </div>
                      <div className="col-sm-6">
                        <div className="mb20">
                          <label className="heading-color ff-heading fw500 mb10">Phone Number</label>
                          <input type="text" className="form-control" placeholder="i will"/>
                        </div>
                      </div>
                      <div className="col-sm-6">
                        <div className="mb20">
                          <label className="heading-color ff-heading fw500 mb10">Tagline</label>
                          <input type="text" className="form-control" placeholder="i will" />
                        </div>
                      </div>
                      <div className="col-sm-6">
                        <div className="mb20">
                          <div className="form-style1">
                            <label className="heading-color ff-heading fw500 mb10">Hourly Rate</label>
                            <div className="bootselect-multiselect">
                              <select className="selectpicker">
                                <option>Select</option>
                                <option>$50</option>
                                <option>$60</option>
                                <option>$70</option>
                                <option>$80</option>
                                <option>$90</option>
                                <option>$100</option>
                              </select>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-sm-6">
                        <div className="mb20">
                          <div className="form-style1">
                            <label className="heading-color ff-heading fw500 mb10">Gender</label>
                            <div className="bootselect-multiselect">
                              <select className="selectpicker">
                                <option>Select</option>
                                <option>Male</option>
                                <option>Female</option>
                                <option>Other</option>
                              </select>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-sm-6">
                        <div className="mb20">
                          <div className="form-style1">
                            <label className="heading-color ff-heading fw500 mb10">Specialization</label>
                            <div className="bootselect-multiselect">
                              <select className="selectpicker">
                                <option>Select</option>
                                <option>Male</option>
                                <option>Female</option>
                                <option>Other</option>
                              </select>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-sm-6">
                        <div className="mb20">
                          <div className="form-style1">
                            <label className="heading-color ff-heading fw500 mb10">Type</label>
                            <div className="bootselect-multiselect">
                              <select className="selectpicker">
                                <option>Select</option>
                                <option>Type One</option>
                                <option>Type Two</option>
                                <option>Type Three</option>
                              </select>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-sm-6">
                        <div className="mb20">
                          <div className="form-style1">
                            <label className="heading-color ff-heading fw500 mb10">Country</label>
                            <div className="bootselect-multiselect">
                              <select className="selectpicker">
                                <option>Turkey</option>
                                <option>United Kingdom</option>
                                <option>United State</option>
                                <option>Ukraine</option>
                                <option>Uruguay</option>
                                <option>UK</option>
                                <option>Uzbekistan</option>
                              </select>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-sm-6">
                        <div className="mb20">
                          <div className="form-style1">
                            <label className="heading-color ff-heading fw500 mb10">City</label>
                            <div className="bootselect-multiselect">
                              <select className="selectpicker">
                                <option data-tokens="California">California</option>
                                <option data-tokens="Chicago">Chicago</option>
                                <option data-tokens="LosAngeles">Los Angeles</option>
                                <option data-tokens="Manhattan">Manhattan</option>
                                <option data-tokens="NewJersey">New Jersey</option>
                                <option data-tokens="NewYork">New York</option>
                                <option data-tokens="SanDiego">San Diego</option>
                                <option data-tokens="SanFrancisco">San Francisco</option>
                                <option data-tokens="Texas">Texas</option>
                              </select>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-sm-6">
                        <div className="mb20">
                          <div className="form-style1">
                            <label className="heading-color ff-heading fw500 mb10">Languages</label>
                            <div className="bootselect-multiselect">
                              <select className="selectpicker" multiple>
                                <option>English</option>
                                <option>Spanish</option>
                                <option>Greek</option>
                                <option>Tarkish</option>
                              </select>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-sm-6">
                        <div className="mb20">
                          <div className="form-style1">
                            <label className="heading-color ff-heading fw500 mb10">Languages Level</label>
                            <div className="bootselect-multiselect">
                              <select className="selectpicker">
                                <option>Select</option>
                                <option>Fluent</option>
                                <option>Mid Level</option>
                                <option>Conversational</option>
                                <option>Other</option>
                              </select>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className="mb10">
                          <label className="heading-color ff-heading fw500 mb10">Introduce Yourself</label>
                          <textarea cols={30} rows={6} placeholder="Description"></textarea>
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className="text-start">
                          <a className="ud-btn btn-thm" href="page-contact.html">Save<i className="fal fa-arrow-right-long"></i></a>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
              <div className="ps-widget bgc-white bdrs4 p30 mb30 overflow-hidden position-relative">
                <div className="bdrb1 pb15 mb25">
                  <h5 className="list-title">Skills</h5>
                </div>
                <div className="col-lg-7">
                  <div className="row">
                    <form className="form-style1">
                      <div className="row">
                        <div className="col-sm-6">
                          <div className="mb20">
                            <div className="form-style1">
                              <label className="heading-color ff-heading fw500 mb10">Skills 1</label>
                              <div className="bootselect-multiselect">
                                <select className="selectpicker">
                                  <option>Designer</option>
                                  <option>UI/UX</option>
                                </select>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-sm-6">
                          <div className="mb20">
                            <div className="form-style1">
                              <label className="heading-color ff-heading fw500 mb10">Point</label>
                              <div className="bootselect-multiselect">
                                <select className="selectpicker">
                                  <option>90</option>
                                  <option>80</option>
                                </select>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-sm-6">
                          <div className="mb20">
                            <div className="form-style1">
                              <label className="heading-color ff-heading fw500 mb10">Skills 2</label>
                              <div className="bootselect-multiselect">
                                <select className="selectpicker">
                                  <option>Developer</option>
                                  <option>Programmer</option>
                                </select>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-sm-6">
                          <div className="mb20">
                            <div className="form-style1">
                            <label className="heading-color ff-heading fw500 mb10">Point</label>
                              <div className="bootselect-multiselect">
                                <select className="selectpicker">
                                  <option>60</option>
                                  <option>70</option>
                                </select>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-sm-6">
                          <div className="mb20">
                            <div className="form-style1">
                              <label className="heading-color ff-heading fw500 mb10">Skills 3</label>
                              <div className="bootselect-multiselect">
                                <select className="selectpicker">
                                  <option>Video Editor</option>
                                  <option>Audio & Music</option>
                                </select>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-sm-6">
                          <div className="mb20">
                            <div className="form-style1">
                              <label className="heading-color ff-heading fw500 mb10">Point</label>
                              <div className="bootselect-multiselect">
                                <select className="selectpicker">
                                  <option>75</option>
                                  <option>80</option>
                                </select>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-12">
                          <div className="text-start">
                            <a className="ud-btn btn-thm" href="page-contact.html">Save<i className="fal fa-arrow-right-long"></i></a>
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
              <div className="ps-widget bgc-white bdrs4 p30 mb30 overflow-hidden position-relative">
                <div className="bdrb1 pb15 mb30 d-sm-flex justify-content-between">
                  <h5 className="list-title">Education</h5>
                  <a href="#" className="add-more-btn text-thm"><i className="icon far fa-plus mr10"></i>Add Aducation</a>
                </div>
                <div className="position-relative">
                  <div className="educational-quality">
                    <div className="m-circle text-thm">M</div>
                    <div className="wrapper mb40 position-relative">
                      <div className="del-edit">
                        <div className="d-flex">
                          <a href="#" className="icon me-2" data-bs-toggle="tooltip" data-bs-placement="top" title="" data-bs-original-title="Edit" aria-label="Edit"><span className="flaticon-pencil"></span></a>
                          <a href="#" className="icon" data-bs-toggle="tooltip" data-bs-placement="top" title="" data-bs-original-title="Delete" aria-label="Delete"><span className="flaticon-delete"></span></a>
                        </div>
                      </div>
                      <span className="tag">2012 - 2014</span>
                      <h5 className="mt15">Bachlors in Fine Arts</h5>
                      <h6 className="text-thm">Modern College</h6>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin a ipsum tellus. Interdum et malesuada fames ac ante ipsum <br className="d-none d-lg-block"/> primis in faucibus.</p>
                    </div>
                    <div className="m-circle before-none text-thm">M</div>
                    <div className="wrapper mb30 position-relative">
                      <div className="del-edit">
                        <div className="d-flex">
                          <a href="#" className="icon me-2" data-bs-toggle="tooltip" data-bs-placement="top" title="" data-bs-original-title="Edit" aria-label="Edit"><span className="flaticon-pencil"></span></a>
                          <a href="#" className="icon" data-bs-toggle="tooltip" data-bs-placement="top" title="" data-bs-original-title="Delete" aria-label="Delete"><span className="flaticon-delete"></span></a>
                        </div>
                      </div>
                      <span className="tag">2008 - 2012</span>
                      <h5 className="mt15">Computer Science</h5>
                      <h6 className="text-thm">Harvartd University</h6>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin a ipsum tellus. Interdum et malesuada fames ac ante ipsum <br className="d-none d-lg-block"/> primis in faucibus.</p>
                    </div>
                  </div>
                  <div className="text-start">
                    <a className="ud-btn btn-thm" href="#">Save<i className="fal fa-arrow-right-long"></i></a>
                  </div>
                </div>
              </div>
              <div className="ps-widget bgc-white bdrs4 p30 mb30 overflow-hidden position-relative">
                <div className="bdrb1 pb15 mb30 d-sm-flex justify-content-between">
                  <h5 className="list-title">Work & Experience</h5>
                  <a href="#" className="add-more-btn text-thm"><i className="icon far fa-plus mr10"></i>Add Experience</a>
                </div>
                <div className="position-relative">
                  <div className="educational-quality">
                    <div className="m-circle text-thm">M</div>
                    <div className="wrapper mb40 position-relative">
                      <div className="del-edit">
                        <div className="d-flex">
                          <a href="#" className="icon me-2" data-bs-toggle="tooltip" data-bs-placement="top" title="" data-bs-original-title="Edit" aria-label="Edit"><span className="flaticon-pencil"></span></a>
                          <a href="#" className="icon" data-bs-toggle="tooltip" data-bs-placement="top" title="" data-bs-original-title="Delete" aria-label="Delete"><span className="flaticon-delete"></span></a>
                        </div>
                      </div>
                      <span className="tag">2012 - 2014</span>
                      <h5 className="mt15">UX Designer</h5>
                      <h6 className="text-thm">Dropbox</h6>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin a ipsum tellus. Interdum et malesuada fames ac ante ipsum <br className="d-none d-lg-block"/> primis in faucibus.</p>
                    </div>
                    <div className="m-circle before-none text-thm">M</div>
                    <div className="wrapper mb30 position-relative">
                      <div className="del-edit">
                        <div className="d-flex">
                          <a href="#" className="icon me-2" data-bs-toggle="tooltip" data-bs-placement="top" title="" data-bs-original-title="Edit" aria-label="Edit"><span className="flaticon-pencil"></span></a>
                          <a href="#" className="icon" data-bs-toggle="tooltip" data-bs-placement="top" title="" data-bs-original-title="Delete" aria-label="Delete"><span className="flaticon-delete"></span></a>
                        </div>
                      </div>
                      <span className="tag">2008 - 2012</span>
                      <h5 className="mt15">Art Director</h5>
                      <h6 className="text-thm">amazon</h6>
                      <p className="mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin a ipsum tellus. Interdum et malesuada fames ac ante ipsum <br className="d-none d-lg-block"/> primis in faucibus.</p>
                    </div>
                  </div>
                  <div className="text-start">
                    <a className="ud-btn btn-thm" href="#">Save<i className="fal fa-arrow-right-long"></i></a>
                  </div>
                </div>
              </div>
              <div className="ps-widget bgc-white bdrs4 p30 mb30 overflow-hidden position-relative">
                <div className="bdrb1 pb15 mb30 d-sm-flex justify-content-between">
                  <h5 className="list-title">Awards</h5>
                  <a href="#" className="add-more-btn text-thm"><i className="icon far fa-plus mr10"></i>Add Awards</a>
                </div>
                <div className="position-relative">
                  <div className="educational-quality ps-0">
                    <div className="wrapper mb40 position-relative">
                      <div className="del-edit">
                        <div className="d-flex">
                          <a href="#" className="icon me-2" data-bs-toggle="tooltip" data-bs-placement="top" title="" data-bs-original-title="Edit" aria-label="Edit"><span className="flaticon-pencil"></span></a>
                          <a href="#" className="icon" data-bs-toggle="tooltip" data-bs-placement="top" title="" data-bs-original-title="Delete" aria-label="Delete"><span className="flaticon-delete"></span></a>
                        </div>
                      </div>
                      <span className="tag">2012 - 2014</span>
                      <h5 className="mt15">UI UX Design</h5>
                      <h6 className="text-thm">Udemy</h6>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin a ipsum tellus. Interdum et malesuada fames ac ante ipsum <br className="d-none d-lg-block"/> primis in faucibus.</p>
                    </div>
                    <div className="wrapper mb40 position-relative">
                      <div className="del-edit">
                        <div className="d-flex">
                          <a href="#" className="icon me-2" data-bs-toggle="tooltip" data-bs-placement="top" title="" data-bs-original-title="Edit" aria-label="Edit"><span className="flaticon-pencil"></span></a>
                          <a href="#" className="icon" data-bs-toggle="tooltip" data-bs-placement="top" title="" data-bs-original-title="Delete" aria-label="Delete"><span className="flaticon-delete"></span></a>
                        </div>
                      </div>
                      <span className="tag">2008 - 2012</span>
                      <h5 className="mt15">App Design</h5>
                      <h6 className="text-thm">Google</h6>
                      <p className="mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin a ipsum tellus. Interdum et malesuada fames ac ante ipsum <br className="d-none d-lg-block"/> primis in faucibus.</p>
                    </div>
                  </div>
                  <div className="text-start">
                    <a className="ud-btn btn-thm" href="#">Save<i className="fal fa-arrow-right-long"></i></a>
                  </div>
                </div>
              </div>
              <div className="ps-widget bgc-white bdrs4 p30 mb30 overflow-hidden position-relative">
                <div className="bdrb1 pb15 mb25">
                  <h5 className="list-title">Change password</h5>
                </div>
                <div className="col-lg-7">
                  <div className="row">
                    <form className="form-style1">
                      <div className="row">
                        <div className="col-sm-6">
                          <div className="mb20">
                            <label className="heading-color ff-heading fw500 mb10">Old Password</label>
                            <input type="text" className="form-control" placeholder="********"/>
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-sm-12">
                          <div className="mb20">
                            <label className="heading-color ff-heading fw500 mb10">New Password</label>
                            <input type="text" className="form-control" placeholder="********"/>
                          </div>
                        </div>
                        <div className="col-sm-12">
                          <div className="mb20">
                            <label className="heading-color ff-heading fw500 mb10">Confirm New Password</label>
                            <input type="text" className="form-control" placeholder="********"/>
                          </div>
                        </div>
                        <div className="col-md-12">
                          <div className="text-start">
                            <a className="ud-btn btn-thm" href="page-contact.html">Change Password<i className="fal fa-arrow-right-long"></i></a>
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
              <div className="ps-widget bgc-white bdrs4 p30 mb30 overflow-hidden position-relative">
                <div className="col-lg-7">
                  <div className="row">
                    <div className="bdrb1 pb15 mb25">
                      <h5 className="list-title">Change password</h5>
                    </div>
                    <form className="form-style1">
                      <div className="row">
                        <div className="col-sm-12">
                          <h6>Close account</h6>
                          <p className="text">Warning: If you close your account, you will be unsubscribed from all your 5 courses, and will lose access forever.</p>
                        </div>
                        <div className="col-sm-6">
                          <div className="mb20">
                            <label className="heading-color ff-heading fw500 mb10">Enter Password</label>
                            <input type="text" className="form-control" placeholder="********"/>
                          </div>
                          <div className="text-start">
                            <a className="ud-btn btn-thm" href="page-contact.html">Change Password<i className="fal fa-arrow-right-long"></i></a>
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
        </DashBoardLayout>
    )
}

export default Dashboard;