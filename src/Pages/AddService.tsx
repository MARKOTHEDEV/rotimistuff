import DashBoardLayout from "../layout/DashBoardLayout"



const AddService = ()=>{


    return(
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
                <h2>Add Services</h2>
                <p className="text">Lorem ipsum dolor sit amet, consectetur.</p>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="text-lg-end">
                <a href="#" className="ud-btn btn-dark">Save & Publish<i className="fal fa-arrow-right-long"></i></a>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-12">
              <div className="ps-widget bgc-white bdrs4 p30 mb30 overflow-hidden position-relative">
                <div className="bdrb1 pb15 mb25">
                  <h5 className="list-title">Basic Information</h5>
                </div>
                <div className="col-xl-8">
                  <form className="form-style1">
                    <div className="row">
                      <div className="col-sm-6">
                        <div className="mb20">
                          <label className="heading-color ff-heading fw500 mb10">Service Title</label>
                          <input type="text" className="form-control" placeholder="i will" />
                        </div>
                      </div>
                      <div className="col-sm-6">
                        <div className="mb20">
                          <label className="heading-color ff-heading fw500 mb10">Price</label>
                          <input type="email" className="form-control" placeholder="$10" />
                        </div>
                      </div>
                      <div className="col-sm-6">
                        <div className="mb20">
                          <div className="form-style1">
                            <label className="heading-color ff-heading fw500 mb10">Category</label>
                            <div className="bootselect-multiselect">
                              <select className="selectpicker">
                                <option>Select</option>
                                <option>Graphics & Design</option>
                                <option>Digital Marketing</option>
                                <option>Writing & Translation</option>
                                <option>Video & Animation</option>
                                <option>Music & Audio</option>
                                <option>Programming & Tech</option>
                                <option>Business</option>
                                <option>Lifestyle</option>
                                <option>Trending</option>
                              </select>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-sm-6">
                        <div className="mb20">
                          <div className="form-style1">
                            <label className="heading-color ff-heading fw500 mb10">English Level</label>
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
                      <div className="col-sm-6">
                        <div className="mb20">
                          <div className="form-style1">
                            <label className="heading-color ff-heading fw500 mb10">Response Time</label>
                            <div className="bootselect-multiselect">
                              <select className="selectpicker">
                                <option>Select</option>
                                <option>Response Time One</option>
                                <option>Response Time Two</option>
                                <option>Response Time Three</option>
                              </select>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-sm-6">
                        <div className="mb20">
                          <div className="form-style1">
                            <label className="heading-color ff-heading fw500 mb10">Delivery Time</label>
                            <div className="bootselect-multiselect">
                              <select className="selectpicker">
                                <option>Select</option>
                                <option>Delivery Time One</option>
                                <option>Delivery Time Two</option>
                                <option>Delivery Time Three</option>
                              </select>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-sm-12">
                        <div className="mb20">
                          <div className="form-style1">
                            <label className="heading-color ff-heading fw500 mb10">Skills</label>
                            <div className="bootselect-multiselect">
                              <select className="selectpicker" multiple>
                                <option>Figma</option>
                                <option>Adobe XD</option>
                                <option>CSS</option>
                                <option>HTML</option>
                                <option>Bootstrap</option>
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
                      <div className="col-md-12">
                        <div className="mb10">
                          <label className="heading-color ff-heading fw500 mb10">Services Detail</label>
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
              <div className="ps-widget bgc-white bdrs12 p30 mb30 overflow-hidden position-relative">
                <div className="bdrb1 pb15 mb30">
                  <h5 className="list-title">Packages</h5>
                </div>
                <div className="col-xl-8">
                  <div className="table-style2 table-responsive bdr1 mb30">
                    <table className="table table-borderless mb-0">
                      <thead className="t-head">
                        <tr>
                          <th className="col" scope="col"></th>
                          <th className="col" scope="col">
                            <span className="h4 mb15">Basic <span className="text-thm2 flaticon-pencil fz16 float-end mt10 me-2"></span></span> <br />
                            <span className="text">I will redesign your current <br className="d-none d-lg-block" /> landing page or create one for <br className="d-none d-lg-block" /> you (upto 4 sections)</span>
                          </th>
                          <th className="col" scope="col">
                            <span className="h4 mb15">Standard <span className="text-thm2 flaticon-pencil fz16 float-end mt10 me-2"></span></span> <br />
                            <span className="text">4 High Quality Desktop <br className="d-none d-lg-block" /> Pages.</span>
                          </th>
                          <th className="col" scope="col">
                            <span className="h4 mb15">Premium <span className="text-thm2 flaticon-pencil fz16 float-end mt10 me-2"></span></span> <br />
                            <span className="text">4 High Quality Desktop and <br className="d-none d-lg-block" /> Mobile Pages.</span>
                          </th>
                        </tr>
                      </thead>
                      <tbody className="t-body">
                        <tr className="bgc-thm3">
                          <th scope="row">Source file</th>
                          <td>
                            <label className="custom_checkbox">
                              <input type="checkbox" />
                              <span className="checkmark"></span>
                            </label>
                          </td>
                          <td>
                            <label className="custom_checkbox">
                              <input type="checkbox" checked />
                              <span className="checkmark"></span>
                            </label>                            
                          </td>
                          <td>
                            <label className="custom_checkbox">
                              <input type="checkbox" checked /> 
                              <span className="checkmark"></span>
                            </label>
                          </td>
                        </tr>
                        <tr>
                          <th scope="row">Prototype</th>
                          <td>
                            <label className="custom_checkbox">
                              <input type="checkbox" />
                              <span className="checkmark"></span>
                            </label>
                          </td>
                          <td>
                            <label className="custom_checkbox">
                              <input type="checkbox" checked />
                              <span className="checkmark"></span>
                            </label>                            
                          </td>
                          <td>
                            <label className="custom_checkbox">
                              <input type="checkbox" checked />
                              <span className="checkmark"></span>
                            </label>
                          </td>
                        </tr>
                        <tr className="bgc-thm3">
                          <th scope="row">Responsive design</th>
                          <td>
                            <label className="custom_checkbox">
                              <input type="checkbox" />
                              <span className="checkmark"></span>
                            </label>
                          </td>
                          <td>
                            <label className="custom_checkbox">
                              <input type="checkbox" checked />
                              <span className="checkmark"></span>
                            </label>                            
                          </td>
                          <td>
                            <label className="custom_checkbox">
                              <input type="checkbox" checked />
                              <span className="checkmark"></span>
                            </label>
                          </td>
                        </tr>
                        <tr>
                          <th scope="row">Number of pages</th>
                          <td>2 <span className="text-thm2 flaticon-pencil fz16 float-end me-3"></span></td>
                          <td>4 <span className="text-thm2 flaticon-pencil fz16 float-end me-3"></span></td>
                          <td>6 <span className="text-thm2 flaticon-pencil fz16 float-end me-3"></span></td>
                        </tr>
                        <tr className="bgc-thm3">
                          <th scope="row">Revisions</th>
                          <td>1 <span className="text-thm2 flaticon-pencil fz16 float-end me-3"></span></td>
                          <td>3 <span className="text-thm2 flaticon-pencil fz16 float-end me-3"></span></td>
                          <td>5 <span className="text-thm2 flaticon-pencil fz16 float-end me-3"></span></td>
                        </tr>
                        <tr>
                          <th scope="row">Delivery Time </th>
                          <td>2 Days <span className="text-thm2 flaticon-pencil fz16 float-end me-3"></span></td>
                          <td>3 Days <span className="text-thm2 flaticon-pencil fz16 float-end me-3"></span></td>
                          <td>4 Days <span className="text-thm2 flaticon-pencil fz16 float-end me-3"></span></td>
                        </tr>
                        <tr className="bgc-thm3">
                          <th scope="row">Total</th>
                          <td>$29 <span className="text-thm2 flaticon-pencil fz16 float-end me-3"></span></td>
                          <td>$49 <span className="text-thm2 flaticon-pencil fz16 float-end me-3"></span></td>
                          <td>$89 <span className="text-thm2 flaticon-pencil fz16 float-end me-3"></span></td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <a href="#" className="ud-btn btn-thm">Save<i className="fal fa-arrow-right-long"></i></a>
                </div>
              </div>
              <div className="ps-widget bgc-white bdrs12 p30 mb30 overflow-hidden position-relative">
                <div className="bdrb1 pb15 mb25">
                  <h5 className="list-title">Add extra services</h5>
                </div>
                <div className="col-xl-8">
                  <div className="extra-service-tab">
                    <nav>
                      <div className="nav flex-column nav-tabs" id="nav-tab" role="tablist">
                        <button className="nav-link" id="nav-home2-tab" data-bs-toggle="tab" data-bs-target="#nav-home2" type="button" role="tab" aria-selected="true">
                          <label className="custom_checkbox fw500 text-start">100 Words (+2 days)
                            <span className="text text-bottom">I will professionally translate english to german</span>
                            <input type="checkbox" />
                            <span className="checkmark"></span>
                          </label>
                          <span className="price">$25</span>
                        </button>
                        <button className="nav-link active" id="nav-profile2-tab" data-bs-toggle="tab" data-bs-target="#nav-profile2" type="button" role="tab" aria-selected="false">
                          <label className="custom_checkbox fw500 text-start">100 Words (+2 days)
                            <span className="text text-bottom">I will professionally translate english to german</span>
                            <input type="checkbox"checked />
                            <span className="checkmark"></span>
                          </label>
                          <span className="price">$45</span>
                        </button>
                        <button className="nav-link" id="nav-contact2-tab" data-bs-toggle="tab" data-bs-target="#nav-contact2" type="button" role="tab" aria-selected="false">
                          <label className="custom_checkbox fw500 text-start">100 Words (+2 days)
                            <span className="text text-bottom">I will professionally translate english to german</span>
                            <input type="checkbox" />
                            <span className="checkmark"></span>
                          </label>
                          <span className="price">$75</span>
                        </button>
                      </div>
                    </nav>
                  </div>
                </div>
              </div>
              <div className="ps-widget bgc-white bdrs12 p30 mb30 overflow-hidden position-relative">
                <div className="bdrb1 pb15 mb30">
                  <h5 className="list-title">Gallery</h5>
                </div>
                <div className="col-xl-9">
                  <div className="d-flex mb30">
                    <div className="gallery-item me-3 bdrs4 overflow-hidden position-relative">
                      <img className="w-100" src="images/gallery/g-1.jpg" alt="" />
                      <div className="del-edit">
                        <div className="d-flex justify-content-center">
                          <a href="#" className="icon me-2" data-bs-toggle="tooltip" data-bs-placement="top" title="" data-bs-original-title="Edit" aria-label="Edit"><span className="flaticon-pencil"></span></a>
                          <a href="#" className="icon" data-bs-toggle="tooltip" data-bs-placement="top" title="" data-bs-original-title="Delete" aria-label="Delete"><span className="flaticon-delete"></span></a>
                        </div>
                      </div>
                    </div>
                    <div className="gallery-item me-3 bdrs4 overflow-hidden position-relative">
                      <img className="w-100" src="images/gallery/g-2.jpg" alt="" />
                      <div className="del-edit">
                        <div className="d-flex justify-content-center">
                          <a href="#" className="icon me-2" data-bs-toggle="tooltip" data-bs-placement="top" title="" data-bs-original-title="Edit" aria-label="Edit"><span className="flaticon-pencil"></span></a>
                          <a href="#" className="icon" data-bs-toggle="tooltip" data-bs-placement="top" title="" data-bs-original-title="Delete" aria-label="Delete"><span className="flaticon-delete"></span></a>
                        </div>
                      </div>
                    </div>
                    <div className="gallery-item me-3 bdrs4 overflow-hidden position-relative">
                      <img className="w-100" src="images/gallery/g-3.jpg" alt="" />
                      <div className="del-edit">
                        <div className="d-flex justify-content-center">
                          <a href="#" className="icon me-2" data-bs-toggle="tooltip" data-bs-placement="top" title="" data-bs-original-title="Edit" aria-label="Edit"><span className="flaticon-pencil"></span></a>
                          <a href="#" className="icon" data-bs-toggle="tooltip" data-bs-placement="top" title="" data-bs-original-title="Delete" aria-label="Delete"><span className="flaticon-delete"></span></a>
                        </div>
                      </div>
                    </div>
                    <div className="gallery-item me-3 bdrs4 overflow-hidden position-relative">
                      <img className="w-100" src="images/gallery/g-4.jpg" alt="" />
                      <div className="del-edit">
                        <div className="d-flex justify-content-center">
                          <a href="#" className="icon me-2" data-bs-toggle="tooltip" data-bs-placement="top" title="" data-bs-original-title="Edit" aria-label="Edit"><span className="flaticon-pencil"></span></a>
                          <a href="#" className="icon" data-bs-toggle="tooltip" data-bs-placement="top" title="" data-bs-original-title="Delete" aria-label="Delete"><span className="flaticon-delete"></span></a>
                        </div>
                      </div>
                    </div>
                    <div className="gallery-item bdrs4 overflow-hidden">
                      <a href="#"><img className="w-100" src="images/gallery/g-1.png" alt="" /></a>
                    </div>
                  </div>
                  <p className="text">Max file size is 1MB, Minimum dimension: 330x300 And Suitable files are .jpg & .png</p>
                  <a href="#" className="ud-btn btn-thm mt-2">Save<i className="fal fa-arrow-right-long"></i></a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <footer className="dashboard_footer pt30 pb30">
          <div className="container">
            <div className="row align-items-center justify-content-center justify-content-md-between">
              <div className="col-auto">
                <div className="copyright-widget">
                  <p className="mb-md-0">© Freeio. 2023 CreativeLayers. All rights reserved.</p>
                </div>
              </div>
              <div className="col-auto">
                <div className="footer_bottom_right_btns at-home8 text-center text-lg-end">
                  <ul className="p-0 m-0">
                    <li className="list-inline-item bg-white">
                      <select className="selectpicker show-tick">
                        <option>US$ USD</option>
                        <option>Euro</option>
                        <option>Pound</option>
                      </select>
                    </li>
                    <li className="list-inline-item bg-white">
                      <select className="selectpicker show-tick">
                        <option>English</option>
                        <option>Frenc</option>
                        <option>Italian</option>
                        <option>Spanish</option>
                        <option>Turkey</option>
                      </select>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
        </DashBoardLayout>
    )
}


export default AddService;