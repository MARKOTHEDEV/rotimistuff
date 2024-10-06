import DashBoardLayout from "../layout/DashBoardLayout"





const Proposals = ()=>{


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
                    <li className="active"><a href="page-dashboard-proposal.html"><i className="flaticon-document mr10"></i>My Proposals</a></li>
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
                    <li><a href="page-dashboard-profile.html"><i className="flaticon-photo mr10"></i>My Profile</a></li>
                    <li><a href="page-login.html"><i className="flaticon-logout mr10"></i>Logout</a></li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-12">
              <div className="dashboard_title_area">
                <h2>My Proposals</h2>
                <p className="text">Lorem ipsum dolor sit amet, consectetur.</p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-12">
              <div className="ps-widget bgc-white bdrs4 p30 mb30 overflow-hidden position-relative">
                <div className="packages_table table-responsive">
                  <table className="table-style3 table at-savesearch">
                    <thead className="t-head">
                      <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Cost / Delivery</th>
                        <th scope="col">Action</th>
                      </tr>
                    </thead>
                    <tbody className="t-body">
                      <tr>
                        <th className="ps-0" scope="row">
                          <div className="freelancer-style1 p-0 mb-0 box-shadow-none">
                            <div className="d-lg-flex align-items-lg-center">
                              <div className="thumb w60 position-relative rounded-circle mb15-md">
                                <img className="rounded-circle mx-auto" src="/images/team/client-1.png" alt=""/>
                                <span className="online-badge2"></span>
                              </div>
                              <div className="details ml15 ml0-md mb15-md">
                                <h5 className="title mb-2">Food Delviery Mobile App</h5>
                                <p className="mb-0 fz14 list-inline-item mb5-sm pe-1"><i className="flaticon-place fz16 vam text-thm2 me-1"></i> London, UK</p>
                                <p className="mb-0 fz14 list-inline-item mb5-sm pe-1"><i className="flaticon-30-days fz16 vam text-thm2 me-1 bdrl1 pl15 pl0-xs bdrn-xs"></i> April 01, 2023</p>
                                <p className="mb-0 fz14 list-inline-item mb5-sm"><i className="flaticon-contract fz16 vam text-thm2 me-1 bdrl1 pl15 pl0-xs bdrn-xs"></i> 1 Received</p>
                              </div>
                            </div>
                          </div>
                        </th>
                        <td className="vam"><h5 className="mb-0">$100 - $150 <span className="fz14 fw400">Hourly Rate</span></h5></td>
                        <td>
                          <div className="d-flex">
                            <a href="#" className="icon me-2" data-bs-toggle="tooltip" data-bs-placement="top" title="Edit"><span className="flaticon-pencil"></span></a>
                            <a href="#" className="icon" data-bs-toggle="tooltip" data-bs-placement="top" title="Delete"><span className="flaticon-delete"></span></a>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <th className="ps-0" scope="row">
                          <div className="freelancer-style1 p-0 mb-0 box-shadow-none">
                            <div className="d-lg-flex align-items-lg-center">
                              <div className="thumb w60 position-relative rounded-circle mb15-md">
                                <img className="rounded-circle mx-auto" src="/images/team/client-2.png" alt=""/>
                              </div>
                              <div className="details ml15 ml0-md mb15-md">
                                <h5 className="title mb-2">Video animator to bring some illustrations to life</h5>
                                <p className="mb-0 fz14 list-inline-item mb5-sm pe-1"><i className="flaticon-place fz16 vam text-thm2 me-1"></i> London, UK</p>
                                <p className="mb-0 fz14 list-inline-item mb5-sm pe-1"><i className="flaticon-30-days fz16 vam text-thm2 me-1 bdrl1 pl15 pl0-xs bdrn-xs"></i> April 01, 2023</p>
                                <p className="mb-0 fz14 list-inline-item mb5-sm"><i className="flaticon-contract fz16 vam text-thm2 me-1 bdrl1 pl15 pl0-xs bdrn-xs"></i> 1 Received</p>
                              </div>
                            </div>
                          </div>
                        </th>
                        <td><h5>$100 - $150 <span className="fz14 fw400">Hourly Rate</span></h5></td>
                        <td>
                          <div className="d-flex">
                            <a href="#" className="icon me-2" data-bs-toggle="tooltip" data-bs-placement="top" title="Edit"><span className="flaticon-pencil"></span></a>
                            <a href="#" className="icon" data-bs-toggle="tooltip" data-bs-placement="top" title="Delete"><span className="flaticon-delete"></span></a>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <th className="ps-0" scope="row">
                          <div className="freelancer-style1 p-0 mb-0 box-shadow-none">
                            <div className="d-lg-flex align-items-lg-center">
                              <div className="thumb w60 position-relative rounded-circle mb15-md">
                                <img className="rounded-circle mx-auto" src="/images/team/client-3.png" alt=""/>
                              </div>
                              <div className="details ml15 ml0-md mb15-md">
                                <h5 className="title mb-2">Swift / SwiftUI Developer for B2B iOS apps</h5>
                                <p className="mb-0 fz14 list-inline-item mb5-sm pe-1"><i className="flaticon-place fz16 vam text-thm2 me-1"></i> London, UK</p>
                                <p className="mb-0 fz14 list-inline-item mb5-sm pe-1"><i className="flaticon-30-days fz16 vam text-thm2 me-1 bdrl1 pl15 pl0-xs bdrn-xs"></i> April 01, 2023</p>
                                <p className="mb-0 fz14 list-inline-item mb5-sm"><i className="flaticon-contract fz16 vam text-thm2 me-1 bdrl1 pl15 pl0-xs bdrn-xs"></i> 1 Received</p>
                              </div>
                            </div>
                          </div>
                        </th>
                        <td><h5>$100 - $150 <span className="fz14 fw400">Hourly Rate</span></h5></td>
                        <td>
                          <div className="d-flex">
                            <a href="#" className="icon me-2" data-bs-toggle="tooltip" data-bs-placement="top" title="Edit"><span className="flaticon-pencil"></span></a>
                            <a href="#" className="icon" data-bs-toggle="tooltip" data-bs-placement="top" title="Delete"><span className="flaticon-delete"></span></a>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <th className="ps-0" scope="row">
                          <div className="freelancer-style1 p-0 mb-0 box-shadow-none">
                            <div className="d-lg-flex align-items-lg-center">
                              <div className="thumb w60 position-relative rounded-circle mb15-md">
                                <img className="rounded-circle mx-auto" src="/images/team/client-4.png" alt=""/>
                              </div>
                              <div className="details ml15 ml0-md mb15-md">
                                <h5 className="title mb-2">English content writer for Fintech</h5>
                                <p className="mb-0 fz14 list-inline-item mb5-sm pe-1"><i className="flaticon-place fz16 vam text-thm2 me-1"></i> London, UK</p>
                                <p className="mb-0 fz14 list-inline-item mb5-sm pe-1"><i className="flaticon-30-days fz16 vam text-thm2 me-1 bdrl1 pl15 pl0-xs bdrn-xs"></i> April 01, 2023</p>
                                <p className="mb-0 fz14 list-inline-item mb5-sm"><i className="flaticon-contract fz16 vam text-thm2 me-1 bdrl1 pl15 pl0-xs bdrn-xs"></i> 1 Received</p>
                              </div>
                            </div>
                          </div>
                        </th>
                        <td><h5>$100 - $150 <span className="fz14 fw400">Hourly Rate</span></h5></td>
                        <td>
                          <div className="d-flex">
                            <a href="#" className="icon me-2" data-bs-toggle="tooltip" data-bs-placement="top" title="Edit"><span className="flaticon-pencil"></span></a>
                            <a href="#" className="icon" data-bs-toggle="tooltip" data-bs-placement="top" title="Delete"><span className="flaticon-delete"></span></a>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <th className="ps-0" scope="row">
                          <div className="freelancer-style1 p-0 mb-0 box-shadow-none">
                            <div className="d-lg-flex align-items-lg-center">
                              <div className="thumb w60 position-relative rounded-circle mb15-md">
                                <img className="rounded-circle mx-auto" src="/images/team/client-5.png" alt=""/>
                              </div>
                              <div className="details ml15 ml0-md mb15-md">
                                <h5 className="title mb-2">Full-stack Developer to help us to build our</h5>
                                <p className="mb-0 fz14 list-inline-item mb5-sm pe-1"><i className="flaticon-place fz16 vam text-thm2 me-1"></i> London, UK</p>
                                <p className="mb-0 fz14 list-inline-item mb5-sm pe-1"><i className="flaticon-30-days fz16 vam text-thm2 me-1 bdrl1 pl15 pl0-xs bdrn-xs"></i> April 01, 2023</p>
                                <p className="mb-0 fz14 list-inline-item mb5-sm"><i className="flaticon-contract fz16 vam text-thm2 me-1 bdrl1 pl15 pl0-xs bdrn-xs"></i> 1 Received</p>
                              </div>
                            </div>
                          </div>
                        </th>
                        <td><h5>$100 - $150 <span className="fz14 fw400">Hourly Rate</span></h5></td>
                        <td>
                          <div className="d-flex">
                            <a href="#" className="icon me-2" data-bs-toggle="tooltip" data-bs-placement="top" title="Edit"><span className="flaticon-pencil"></span></a>
                            <a href="#" className="icon" data-bs-toggle="tooltip" data-bs-placement="top" title="Delete"><span className="flaticon-delete"></span></a>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <th className="ps-0" scope="row">
                          <div className="freelancer-style1 p-0 mb-0 box-shadow-none">
                            <div className="d-lg-flex align-items-lg-center">
                              <div className="thumb w60 position-relative rounded-circle mb15-md">
                                <img className="rounded-circle mx-auto" src="/images/team/client-6.png" alt=""/>
                              </div>
                              <div className="details ml15 ml0-md mb15-md">
                                <h5 className="title mb-2">Looking for team members for web agency</h5>
                                <p className="mb-0 fz14 list-inline-item mb5-sm pe-1"><i className="flaticon-place fz16 vam text-thm2 me-1"></i> London, UK</p>
                                <p className="mb-0 fz14 list-inline-item mb5-sm pe-1"><i className="flaticon-30-days fz16 vam text-thm2 me-1 bdrl1 pl15 pl0-xs bdrn-xs"></i> April 01, 2023</p>
                                <p className="mb-0 fz14 list-inline-item mb5-sm"><i className="flaticon-contract fz16 vam text-thm2 me-1 bdrl1 pl15 pl0-xs bdrn-xs"></i> 1 Received</p>
                              </div>
                            </div>
                          </div>
                        </th>
                        <td><h5>$100 - $150 <span className="fz14 fw400">Hourly Rate</span></h5></td>
                        <td>
                          <div className="d-flex">
                            <a href="#" className="icon me-2" data-bs-toggle="tooltip" data-bs-placement="top" title="Edit"><span className="flaticon-pencil"></span></a>
                            <a href="#" className="icon" data-bs-toggle="tooltip" data-bs-placement="top" title="Delete"><span className="flaticon-delete"></span></a>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <th className="ps-0" scope="row">
                          <div className="freelancer-style1 p-0 mb-0 box-shadow-none">
                            <div className="d-lg-flex align-items-lg-center">
                              <div className="thumb w60 position-relative rounded-circle mb15-md">
                                <img className="rounded-circle mx-auto" src="/images/team/client-7.png" alt=""/>
                              </div>
                              <div className="details ml15 ml0-md mb15-md">
                                <h5 className="title mb-2">Food Delviery Mobile App</h5>
                                <p className="mb-0 fz14 list-inline-item mb5-sm pe-1"><i className="flaticon-place fz16 vam text-thm2 me-1"></i> London, UK</p>
                                <p className="mb-0 fz14 list-inline-item mb5-sm pe-1"><i className="flaticon-30-days fz16 vam text-thm2 me-1 bdrl1 pl15 pl0-xs bdrn-xs"></i> April 01, 2023</p>
                                <p className="mb-0 fz14 list-inline-item mb5-sm"><i className="flaticon-contract fz16 vam text-thm2 me-1 bdrl1 pl15 pl0-xs bdrn-xs"></i> 1 Received</p>
                              </div>
                            </div>
                          </div>
                        </th>
                        <td><h5>$100 - $150 <span className="fz14 fw400">Hourly Rate</span></h5></td>
                        <td>
                          <div className="d-flex">
                            <a href="#" className="icon me-2" data-bs-toggle="tooltip" data-bs-placement="top" title="Edit"><span className="flaticon-pencil"></span></a>
                            <a href="#" className="icon" data-bs-toggle="tooltip" data-bs-placement="top" title="Delete"><span className="flaticon-delete"></span></a>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <div className="mbp_pagination text-center mt30">
                    <ul className="page_navigation">
                      <li className="page-item">
                        <a className="page-link" href="#"> <span className="fas fa-angle-left"></span></a>
                      </li>
                      <li className="page-item"><a className="page-link" href="#">1</a></li>
                      <li className="page-item active" aria-current="page">
                        <a className="page-link" href="#">2 <span className="sr-only">(current)</span></a>
                      </li>
                      <li className="page-item"><a className="page-link" href="#">3</a></li>
                      <li className="page-item"><a className="page-link" href="#">4</a></li>
                      <li className="page-item"><a className="page-link" href="#">5</a></li>
                      <li className="page-item"><a className="page-link" href="#">...</a></li>
                      <li className="page-item"><a className="page-link" href="#">20</a></li>
                      <li className="page-item">
                        <a className="page-link" href="#"><span className="fas fa-angle-right"></span></a>
                      </li>
                    </ul>
                    <p className="mt10 mb-0 pagination_page_count text-center">1 – 20 of 300+ property available</p>
                  </div>
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

export default Proposals;