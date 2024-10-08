import DashBoardLayout from "../layout/DashBoardLayout";



const ManageService =()=>{

    return (
        <DashBoardLayout>
                  <div className="dashboard__main pl0-md">
        <div className="dashboard__content hover-bgc-color">
          <div className="row pb40">
            <div className="col-lg-12">
              <div className="dashboard_navigationbar d-block d-lg-none">
                <div className="dropdown">
                  <button 
                //   onclick="myFunction()" 
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
                    <li className="active"><a href="page-dashboard-manage-service.html"><i className="flaticon-presentation mr10"></i>Manage Services</a></li>
                    <li><a href="page-dashboard-manage-jobs.html"><i className="flaticon-briefcase mr10"></i>Manage Jobs</a></li>
                    <li><a href="page-dashboard-manage-project.html"><i className="flaticon-content mr10"></i>Manage Project</a></li>
                    <li><p className="fz15 fw400 ff-heading mt30 pl30">Account</p></li>
                    <li><a href="page-dashboard-profile.html"><i className="flaticon-photo mr10"></i>My Profile</a></li>
                    <li><a href="page-login.html"><i className="flaticon-logout mr10"></i>Logout</a></li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-9">
              <div className="dashboard_title_area">
                <h2>Manage Services</h2>
                <p className="text">Lorem ipsum dolor sit amet, consectetur.</p>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="text-lg-end">
                <a href="page-dashboard-add-service.html" className="ud-btn btn-dark default-box-shadow2">Add Service<i className="fal fa-arrow-right-long"></i></a>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-12">
              <div className="ps-widget bgc-white bdrs4 p30 mb30 overflow-hidden position-relative">
                <div className="navtab-style1">
                  <nav>
                    <div className="nav nav-tabs mb30" id="nav-tab2" role="tablist">
                      <button className="nav-link active fw500 ps-0" id="nav-item1-tab" data-bs-toggle="tab" data-bs-target="#nav-item1" type="button" role="tab" aria-controls="nav-item1" aria-selected="true">Active Services</button>
                      <button className="nav-link fw500" id="nav-item2-tab" data-bs-toggle="tab" data-bs-target="#nav-item2" type="button" role="tab" aria-controls="nav-item2" aria-selected="false">Pending Services</button>
                      <button className="nav-link fw500" id="nav-item3-tab" data-bs-toggle="tab" data-bs-target="#nav-item3" type="button" role="tab" aria-controls="nav-item3" aria-selected="false">Ongoing Services</button>
                      <button className="nav-link fw500" id="nav-item4-tab" data-bs-toggle="tab" data-bs-target="#nav-item4" type="button" role="tab" aria-controls="nav-item4" aria-selected="false">Completed Services</button>
                      <button className="nav-link fw500" id="nav-item5-tab" data-bs-toggle="tab" data-bs-target="#nav-item5" type="button" role="tab" aria-controls="nav-item5" aria-selected="false">Canceled Services</button>
                    </div>
                  </nav>
                  <div className="tab-content" id="nav-tabContent">
                    <div className="tab-pane fade show active" id="nav-item1" role="tabpanel" aria-labelledby="nav-item1-tab">
                      <div className="packages_table table-responsive">
                        <table className="table-style3 table at-savesearch">
                          <thead className="t-head">
                            <tr>
                              <th scope="col">Title</th>
                              <th scope="col">Category</th>
                              <th scope="col">Type/Cost</th>
                              <th scope="col">Actions</th>
                            </tr>
                          </thead>
                          <tbody className="t-body">
                            <tr>
                              <th className="dashboard-img-service" scope="row">
                                <div className="listing-style1 list-style d-block d-xl-flex align-items-start border-0 mb-0">
                                  <div className="list-thumb flex-shrink-0 bdrs4 mb10-lg">
                                    <img className="w-100" src="/images/listings/g-1.jpg" alt="" />
                                  </div>
                                  <div className="list-content flex-grow-1 py-0 pl15 pl0-lg">
                                    <h6 className="list-title mb-0"><a href="page-services-single.html">I will design modern websites in figma or adobe xd</a></h6>
                                    <ul className="list-style-type-bullet ps-3 dashboard-style mb-0">
                                      <li>Delievred with in a day</li>
                                      <li>Delievry Time Descreased</li>
                                      <li>Upload apps to Stores</li>
                                    </ul>
                                  </div>
                                </div>
                              </th>
                              <td className="align-top"><span className="fz15 fw400">Web & App Design</span></td>
                              <td className="align-top"><span className="fz14 fw400">$500.00/Fixed</span></td>
                              <td className="align-top">
                                <div className="d-flex">
                                  <a href="#" className="icon me-2" data-bs-toggle="tooltip" data-bs-placement="top" title="Edit"><span className="flaticon-pencil"></span></a>
                                  <a href="#" className="icon" data-bs-toggle="tooltip" data-bs-placement="top" title="Delete"><span className="flaticon-delete"></span></a>
                                </div>
                              </td>
                            </tr>
                            <tr>
                              <th className="dashboard-img-service" scope="row">
                                <div className="listing-style1 list-style d-block d-xl-flex align-items-start border-0 mb-0">
                                  <div className="list-thumb flex-shrink-0 bdrs4 mb10-lg">
                                    <img className="w-100" src="/images/listings/g-2.jpg" alt="" />
                                  </div>
                                  <div className="list-content flex-grow-1 py-0 pl15 pl0-lg">
                                    <h6 className="list-title mb-0"><a href="page-services-single.html">I will design modern websites in figma or adobe xd</a></h6>
                                    <ul className="list-style-type-bullet ps-3 dashboard-style mb-0">
                                      <li>Delievred with in a day</li>
                                      <li>Delievry Time Descreased</li>
                                      <li>Upload apps to Stores</li>
                                    </ul>
                                  </div>
                                </div>
                              </th>
                              <td className="align-top"><span className="fz15 fw400">Web & App Design</span></td>
                              <td className="align-top"><span className="fz14 fw400">$500.00/Fixed</span></td>
                              <td className="align-top">
                                <div className="d-flex">
                                  <a href="#" className="icon me-2" data-bs-toggle="tooltip" data-bs-placement="top" title="Edit"><span className="flaticon-pencil"></span></a>
                                  <a href="#" className="icon" data-bs-toggle="tooltip" data-bs-placement="top" title="Delete"><span className="flaticon-delete"></span></a>
                                </div>
                              </td>
                            </tr>
                            <tr>
                              <th className="dashboard-img-service" scope="row">
                                <div className="listing-style1 list-style d-block d-xl-flex align-items-start border-0 mb-0">
                                  <div className="list-thumb flex-shrink-0 bdrs4 mb10-lg">
                                    <img className="w-100" src="/images/listings/g-3.jpg" alt="" />
                                  </div>
                                  <div className="list-content flex-grow-1 py-0 pl15 pl0-lg">
                                    <h6 className="list-title mb-0"><a href="page-services-single.html">I will design modern websites in figma or adobe xd</a></h6>
                                    <ul className="list-style-type-bullet ps-3 dashboard-style mb-0">
                                      <li>Delievred with in a day</li>
                                      <li>Delievry Time Descreased</li>
                                      <li>Upload apps to Stores</li>
                                    </ul>
                                  </div>
                                </div>
                              </th>
                              <td className="align-top"><span className="fz15 fw400">Web & App Design</span></td>
                              <td className="align-top"><span className="fz14 fw400">$500.00/Fixed</span></td>
                              <td className="align-top">
                                <div className="d-flex">
                                  <a href="#" className="icon me-2" data-bs-toggle="tooltip" data-bs-placement="top" title="Edit"><span className="flaticon-pencil"></span></a>
                                  <a href="#" className="icon" data-bs-toggle="tooltip" data-bs-placement="top" title="Delete"><span className="flaticon-delete"></span></a>
                                </div>
                              </td>
                            </tr>
                            <tr>
                              <th className="dashboard-img-service" scope="row">
                                <div className="listing-style1 list-style d-block d-xl-flex align-items-start border-0 mb-0">
                                  <div className="list-thumb flex-shrink-0 bdrs4 mb10-lg">
                                    <img className="w-100" src="/images/listings/g-4.jpg" alt="" />
                                  </div>
                                  <div className="list-content flex-grow-1 py-0 pl15 pl0-lg">
                                    <h6 className="list-title mb-0"><a href="page-services-single.html">I will design modern websites in figma or adobe xd</a></h6>
                                    <ul className="list-style-type-bullet ps-3 dashboard-style mb-0">
                                      <li>Delievred with in a day</li>
                                      <li>Delievry Time Descreased</li>
                                      <li>Upload apps to Stores</li>
                                    </ul>
                                  </div>
                                </div>
                              </th>
                              <td className="align-top"><span className="fz15 fw400">Web & App Design</span></td>
                              <td className="align-top"><span className="fz14 fw400">$500.00/Fixed</span></td>
                              <td className="align-top">
                                <div className="d-flex">
                                  <a href="#" className="icon me-2" data-bs-toggle="tooltip" data-bs-placement="top" title="Edit"><span className="flaticon-pencil"></span></a>
                                  <a href="#" className="icon" data-bs-toggle="tooltip" data-bs-placement="top" title="Delete"><span className="flaticon-delete"></span></a>
                                </div>
                              </td>
                            </tr>
                            <tr>
                              <th className="dashboard-img-service" scope="row">
                                <div className="listing-style1 list-style d-block d-xl-flex align-items-start border-0 mb-0">
                                  <div className="list-thumb flex-shrink-0 bdrs4 mb10-lg">
                                    <img className="w-100" src="/images/listings/g-5.jpg" alt="" />
                                  </div>
                                  <div className="list-content flex-grow-1 py-0 pl15 pl0-lg">
                                    <h6 className="list-title mb-0"><a href="page-services-single.html">I will design modern websites in figma or adobe xd</a></h6>
                                    <ul className="list-style-type-bullet ps-3 dashboard-style mb-0">
                                      <li>Delievred with in a day</li>
                                      <li>Delievry Time Descreased</li>
                                      <li>Upload apps to Stores</li>
                                    </ul>
                                  </div>
                                </div>
                              </th>
                              <td className="align-top"><span className="fz15 fw400">Web & App Design</span></td>
                              <td className="align-top"><span className="fz14 fw400">$500.00/Fixed</span></td>
                              <td className="align-top">
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
                    <div className="tab-pane fade" id="nav-item2" role="tabpanel" aria-labelledby="nav-item2-tab">
                      <div className="packages_table table-responsive">
                        <table className="table-style3 table at-savesearch">
                          <thead className="t-head">
                            <tr>
                              <th scope="col">Title</th>
                              <th scope="col">Category</th>
                              <th scope="col">Type/Cost</th>
                              <th scope="col">Actions</th>
                            </tr>
                          </thead>
                          <tbody className="t-body">
                            <tr>
                              <th className="dashboard-img-service" scope="row">
                                <div className="listing-style1 list-style d-block d-xl-flex align-items-start border-0 mb-0">
                                  <div className="list-thumb flex-shrink-0 bdrs4 mb10-lg">
                                    <img className="w-100" src="/images/listings/g-1.jpg" alt="" />
                                  </div>
                                  <div className="list-content flex-grow-1 py-0 pl15 pl0-lg">
                                    <h6 className="list-title mb-0"><a href="page-services-single.html">I will design modern websites in figma or adobe xd</a></h6>
                                    <ul className="list-style-type-bullet ps-3 dashboard-style mb-0">
                                      <li>Delievred with in a day</li>
                                      <li>Delievry Time Descreased</li>
                                      <li>Upload apps to Stores</li>
                                    </ul>
                                  </div>
                                </div>
                              </th>
                              <td className="align-top"><span className="fz15 fw400">Web & App Design</span></td>
                              <td className="align-top"><span className="fz14 fw400">$500.00/Fixed</span></td>
                              <td className="align-top">
                                <div className="d-flex">
                                  <a href="#" className="icon me-2" data-bs-toggle="tooltip" data-bs-placement="top" title="Edit"><span className="flaticon-pencil"></span></a>
                                  <a href="#" className="icon" data-bs-toggle="tooltip" data-bs-placement="top" title="Delete"><span className="flaticon-delete"></span></a>
                                </div>
                              </td>
                            </tr>
                            <tr>
                              <th className="dashboard-img-service" scope="row">
                                <div className="listing-style1 list-style d-block d-xl-flex align-items-start border-0 mb-0">
                                  <div className="list-thumb flex-shrink-0 bdrs4 mb10-lg">
                                    <img className="w-100" src="/images/listings/g-2.jpg" alt="" />
                                  </div>
                                  <div className="list-content flex-grow-1 py-0 pl15 pl0-lg">
                                    <h6 className="list-title mb-0"><a href="page-services-single.html">I will design modern websites in figma or adobe xd</a></h6>
                                    <ul className="list-style-type-bullet ps-3 dashboard-style mb-0">
                                      <li>Delievred with in a day</li>
                                      <li>Delievry Time Descreased</li>
                                      <li>Upload apps to Stores</li>
                                    </ul>
                                  </div>
                                </div>
                              </th>
                              <td className="align-top"><span className="fz15 fw400">Web & App Design</span></td>
                              <td className="align-top"><span className="fz14 fw400">$500.00/Fixed</span></td>
                              <td className="align-top">
                                <div className="d-flex">
                                  <a href="#" className="icon me-2" data-bs-toggle="tooltip" data-bs-placement="top" title="Edit"><span className="flaticon-pencil"></span></a>
                                  <a href="#" className="icon" data-bs-toggle="tooltip" data-bs-placement="top" title="Delete"><span className="flaticon-delete"></span></a>
                                </div>
                              </td>
                            </tr>
                            <tr>
                              <th className="dashboard-img-service" scope="row">
                                <div className="listing-style1 list-style d-block d-xl-flex align-items-start border-0 mb-0">
                                  <div className="list-thumb flex-shrink-0 bdrs4 mb10-lg">
                                    <img className="w-100" src="/images/listings/g-3.jpg" alt="" />
                                  </div>
                                  <div className="list-content flex-grow-1 py-0 pl15 pl0-lg">
                                    <h6 className="list-title mb-0"><a href="page-services-single.html">I will design modern websites in figma or adobe xd</a></h6>
                                    <ul className="list-style-type-bullet ps-3 dashboard-style mb-0">
                                      <li>Delievred with in a day</li>
                                      <li>Delievry Time Descreased</li>
                                      <li>Upload apps to Stores</li>
                                    </ul>
                                  </div>
                                </div>
                              </th>
                              <td className="align-top"><span className="fz15 fw400">Web & App Design</span></td>
                              <td className="align-top"><span className="fz14 fw400">$500.00/Fixed</span></td>
                              <td className="align-top">
                                <div className="d-flex">
                                  <a href="#" className="icon me-2" data-bs-toggle="tooltip" data-bs-placement="top" title="Edit"><span className="flaticon-pencil"></span></a>
                                  <a href="#" className="icon" data-bs-toggle="tooltip" data-bs-placement="top" title="Delete"><span className="flaticon-delete"></span></a>
                                </div>
                              </td>
                            </tr>
                            <tr>
                              <th className="dashboard-img-service" scope="row">
                                <div className="listing-style1 list-style d-block d-xl-flex align-items-start border-0 mb-0">
                                  <div className="list-thumb flex-shrink-0 bdrs4 mb10-lg">
                                    <img className="w-100" src="/images/listings/g-4.jpg" alt="" />
                                  </div>
                                  <div className="list-content flex-grow-1 py-0 pl15 pl0-lg">
                                    <h6 className="list-title mb-0"><a href="page-services-single.html">I will design modern websites in figma or adobe xd</a></h6>
                                    <ul className="list-style-type-bullet ps-3 dashboard-style mb-0">
                                      <li>Delievred with in a day</li>
                                      <li>Delievry Time Descreased</li>
                                      <li>Upload apps to Stores</li>
                                    </ul>
                                  </div>
                                </div>
                              </th>
                              <td className="align-top"><span className="fz15 fw400">Web & App Design</span></td>
                              <td className="align-top"><span className="fz14 fw400">$500.00/Fixed</span></td>
                              <td className="align-top">
                                <div className="d-flex">
                                  <a href="#" className="icon me-2" data-bs-toggle="tooltip" data-bs-placement="top" title="Edit"><span className="flaticon-pencil"></span></a>
                                  <a href="#" className="icon" data-bs-toggle="tooltip" data-bs-placement="top" title="Delete"><span className="flaticon-delete"></span></a>
                                </div>
                              </td>
                            </tr>
                            <tr>
                              <th className="dashboard-img-service" scope="row">
                                <div className="listing-style1 list-style d-block d-xl-flex align-items-start border-0 mb-0">
                                  <div className="list-thumb flex-shrink-0 bdrs4 mb10-lg">
                                    <img className="w-100" src="/images/listings/g-5.jpg" alt="" />
                                  </div>
                                  <div className="list-content flex-grow-1 py-0 pl15 pl0-lg">
                                    <h6 className="list-title mb-0"><a href="page-services-single.html">I will design modern websites in figma or adobe xd</a></h6>
                                    <ul className="list-style-type-bullet ps-3 dashboard-style mb-0">
                                      <li>Delievred with in a day</li>
                                      <li>Delievry Time Descreased</li>
                                      <li>Upload apps to Stores</li>
                                    </ul>
                                  </div>
                                </div>
                              </th>
                              <td className="align-top"><span className="fz15 fw400">Web & App Design</span></td>
                              <td className="align-top"><span className="fz14 fw400">$500.00/Fixed</span></td>
                              <td className="align-top">
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
                    <div className="tab-pane fade" id="nav-item3" role="tabpanel" aria-labelledby="nav-item3-tab">
                      <div className="packages_table table-responsive">
                        <table className="table-style3 table at-savesearch">
                          <thead className="t-head">
                            <tr>
                              <th scope="col">Title</th>
                              <th scope="col">Category</th>
                              <th scope="col">Type/Cost</th>
                              <th scope="col">Actions</th>
                            </tr>
                          </thead>
                          <tbody className="t-body">
                            <tr>
                              <th className="dashboard-img-service" scope="row">
                                <div className="listing-style1 list-style d-block d-xl-flex align-items-start border-0 mb-0">
                                  <div className="list-thumb flex-shrink-0 bdrs4 mb10-lg">
                                    <img className="w-100" src="/images/listings/g-1.jpg" alt="" />
                                  </div>
                                  <div className="list-content flex-grow-1 py-0 pl15 pl0-lg">
                                    <h6 className="list-title mb-0"><a href="page-services-single.html">I will design modern websites in figma or adobe xd</a></h6>
                                    <ul className="list-style-type-bullet ps-3 dashboard-style mb-0">
                                      <li>Delievred with in a day</li>
                                      <li>Delievry Time Descreased</li>
                                      <li>Upload apps to Stores</li>
                                    </ul>
                                  </div>
                                </div>
                              </th>
                              <td className="align-top"><span className="fz15 fw400">Web & App Design</span></td>
                              <td className="align-top"><span className="fz14 fw400">$500.00/Fixed</span></td>
                              <td className="align-top">
                                <div className="d-flex">
                                  <a href="#" className="icon me-2" data-bs-toggle="tooltip" data-bs-placement="top" title="Edit"><span className="flaticon-pencil"></span></a>
                                  <a href="#" className="icon" data-bs-toggle="tooltip" data-bs-placement="top" title="Delete"><span className="flaticon-delete"></span></a>
                                </div>
                              </td>
                            </tr>
                            <tr>
                              <th className="dashboard-img-service" scope="row">
                                <div className="listing-style1 list-style d-block d-xl-flex align-items-start border-0 mb-0">
                                  <div className="list-thumb flex-shrink-0 bdrs4 mb10-lg">
                                    <img className="w-100" src="/images/listings/g-2.jpg" alt="" />
                                  </div>
                                  <div className="list-content flex-grow-1 py-0 pl15 pl0-lg">
                                    <h6 className="list-title mb-0"><a href="page-services-single.html">I will design modern websites in figma or adobe xd</a></h6>
                                    <ul className="list-style-type-bullet ps-3 dashboard-style mb-0">
                                      <li>Delievred with in a day</li>
                                      <li>Delievry Time Descreased</li>
                                      <li>Upload apps to Stores</li>
                                    </ul>
                                  </div>
                                </div>
                              </th>
                              <td className="align-top"><span className="fz15 fw400">Web & App Design</span></td>
                              <td className="align-top"><span className="fz14 fw400">$500.00/Fixed</span></td>
                              <td className="align-top">
                                <div className="d-flex">
                                  <a href="#" className="icon me-2" data-bs-toggle="tooltip" data-bs-placement="top" title="Edit"><span className="flaticon-pencil"></span></a>
                                  <a href="#" className="icon" data-bs-toggle="tooltip" data-bs-placement="top" title="Delete"><span className="flaticon-delete"></span></a>
                                </div>
                              </td>
                            </tr>
                            <tr>
                              <th className="dashboard-img-service" scope="row">
                                <div className="listing-style1 list-style d-block d-xl-flex align-items-start border-0 mb-0">
                                  <div className="list-thumb flex-shrink-0 bdrs4 mb10-lg">
                                    <img className="w-100" src="/images/listings/g-3.jpg" alt="" />
                                  </div>
                                  <div className="list-content flex-grow-1 py-0 pl15 pl0-lg">
                                    <h6 className="list-title mb-0"><a href="page-services-single.html">I will design modern websites in figma or adobe xd</a></h6>
                                    <ul className="list-style-type-bullet ps-3 dashboard-style mb-0">
                                      <li>Delievred with in a day</li>
                                      <li>Delievry Time Descreased</li>
                                      <li>Upload apps to Stores</li>
                                    </ul>
                                  </div>
                                </div>
                              </th>
                              <td className="align-top"><span className="fz15 fw400">Web & App Design</span></td>
                              <td className="align-top"><span className="fz14 fw400">$500.00/Fixed</span></td>
                              <td className="align-top">
                                <div className="d-flex">
                                  <a href="#" className="icon me-2" data-bs-toggle="tooltip" data-bs-placement="top" title="Edit"><span className="flaticon-pencil"></span></a>
                                  <a href="#" className="icon" data-bs-toggle="tooltip" data-bs-placement="top" title="Delete"><span className="flaticon-delete"></span></a>
                                </div>
                              </td>
                            </tr>
                            <tr>
                              <th className="dashboard-img-service" scope="row">
                                <div className="listing-style1 list-style d-block d-xl-flex align-items-start border-0 mb-0">
                                  <div className="list-thumb flex-shrink-0 bdrs4 mb10-lg">
                                    <img className="w-100" src="/images/listings/g-4.jpg" alt="" />
                                  </div>
                                  <div className="list-content flex-grow-1 py-0 pl15 pl0-lg">
                                    <h6 className="list-title mb-0"><a href="page-services-single.html">I will design modern websites in figma or adobe xd</a></h6>
                                    <ul className="list-style-type-bullet ps-3 dashboard-style mb-0">
                                      <li>Delievred with in a day</li>
                                      <li>Delievry Time Descreased</li>
                                      <li>Upload apps to Stores</li>
                                    </ul>
                                  </div>
                                </div>
                              </th>
                              <td className="align-top"><span className="fz15 fw400">Web & App Design</span></td>
                              <td className="align-top"><span className="fz14 fw400">$500.00/Fixed</span></td>
                              <td className="align-top">
                                <div className="d-flex">
                                  <a href="#" className="icon me-2" data-bs-toggle="tooltip" data-bs-placement="top" title="Edit"><span className="flaticon-pencil"></span></a>
                                  <a href="#" className="icon" data-bs-toggle="tooltip" data-bs-placement="top" title="Delete"><span className="flaticon-delete"></span></a>
                                </div>
                              </td>
                            </tr>
                            <tr>
                              <th className="dashboard-img-service" scope="row">
                                <div className="listing-style1 list-style d-block d-xl-flex align-items-start border-0 mb-0">
                                  <div className="list-thumb flex-shrink-0 bdrs4 mb10-lg">
                                    <img className="w-100" src="/images/listings/g-5.jpg" alt="" />
                                  </div>
                                  <div className="list-content flex-grow-1 py-0 pl15 pl0-lg">
                                    <h6 className="list-title mb-0"><a href="page-services-single.html">I will design modern websites in figma or adobe xd</a></h6>
                                    <ul className="list-style-type-bullet ps-3 dashboard-style mb-0">
                                      <li>Delievred with in a day</li>
                                      <li>Delievry Time Descreased</li>
                                      <li>Upload apps to Stores</li>
                                    </ul>
                                  </div>
                                </div>
                              </th>
                              <td className="align-top"><span className="fz15 fw400">Web & App Design</span></td>
                              <td className="align-top"><span className="fz14 fw400">$500.00/Fixed</span></td>
                              <td className="align-top">
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
                    <div className="tab-pane fade" id="nav-item4" role="tabpanel" aria-labelledby="nav-item4-tab">
                      <div className="packages_table table-responsive">
                        <table className="table-style3 table at-savesearch">
                          <thead className="t-head">
                            <tr>
                              <th scope="col">Title</th>
                              <th scope="col">Category</th>
                              <th scope="col">Type/Cost</th>
                              <th scope="col">Actions</th>
                            </tr>
                          </thead>
                          <tbody className="t-body">
                            <tr>
                              <th className="dashboard-img-service" scope="row">
                                <div className="listing-style1 list-style d-block d-xl-flex align-items-start border-0 mb-0">
                                  <div className="list-thumb flex-shrink-0 bdrs4 mb10-lg">
                                    <img className="w-100" src="/images/listings/g-1.jpg" alt="" />
                                  </div>
                                  <div className="list-content flex-grow-1 py-0 pl15 pl0-lg">
                                    <h6 className="list-title mb-0"><a href="page-services-single.html">I will design modern websites in figma or adobe xd</a></h6>
                                    <ul className="list-style-type-bullet ps-3 dashboard-style mb-0">
                                      <li>Delievred with in a day</li>
                                      <li>Delievry Time Descreased</li>
                                      <li>Upload apps to Stores</li>
                                    </ul>
                                  </div>
                                </div>
                              </th>
                              <td className="align-top"><span className="fz15 fw400">Web & App Design</span></td>
                              <td className="align-top"><span className="fz14 fw400">$500.00/Fixed</span></td>
                              <td className="align-top">
                                <div className="d-flex">
                                  <a href="#" className="icon me-2" data-bs-toggle="tooltip" data-bs-placement="top" title="Edit"><span className="flaticon-pencil"></span></a>
                                  <a href="#" className="icon" data-bs-toggle="tooltip" data-bs-placement="top" title="Delete"><span className="flaticon-delete"></span></a>
                                </div>
                              </td>
                            </tr>
                            <tr>
                              <th className="dashboard-img-service" scope="row">
                                <div className="listing-style1 list-style d-block d-xl-flex align-items-start border-0 mb-0">
                                  <div className="list-thumb flex-shrink-0 bdrs4 mb10-lg">
                                    <img className="w-100" src="/images/listings/g-2.jpg" alt="" />
                                  </div>
                                  <div className="list-content flex-grow-1 py-0 pl15 pl0-lg">
                                    <h6 className="list-title mb-0"><a href="page-services-single.html">I will design modern websites in figma or adobe xd</a></h6>
                                    <ul className="list-style-type-bullet ps-3 dashboard-style mb-0">
                                      <li>Delievred with in a day</li>
                                      <li>Delievry Time Descreased</li>
                                      <li>Upload apps to Stores</li>
                                    </ul>
                                  </div>
                                </div>
                              </th>
                              <td className="align-top"><span className="fz15 fw400">Web & App Design</span></td>
                              <td className="align-top"><span className="fz14 fw400">$500.00/Fixed</span></td>
                              <td className="align-top">
                                <div className="d-flex">
                                  <a href="#" className="icon me-2" data-bs-toggle="tooltip" data-bs-placement="top" title="Edit"><span className="flaticon-pencil"></span></a>
                                  <a href="#" className="icon" data-bs-toggle="tooltip" data-bs-placement="top" title="Delete"><span className="flaticon-delete"></span></a>
                                </div>
                              </td>
                            </tr>
                            <tr>
                              <th className="dashboard-img-service" scope="row">
                                <div className="listing-style1 list-style d-block d-xl-flex align-items-start border-0 mb-0">
                                  <div className="list-thumb flex-shrink-0 bdrs4 mb10-lg">
                                    <img className="w-100" src="/images/listings/g-3.jpg" alt="" />
                                  </div>
                                  <div className="list-content flex-grow-1 py-0 pl15 pl0-lg">
                                    <h6 className="list-title mb-0"><a href="page-services-single.html">I will design modern websites in figma or adobe xd</a></h6>
                                    <ul className="list-style-type-bullet ps-3 dashboard-style mb-0">
                                      <li>Delievred with in a day</li>
                                      <li>Delievry Time Descreased</li>
                                      <li>Upload apps to Stores</li>
                                    </ul>
                                  </div>
                                </div>
                              </th>
                              <td className="align-top"><span className="fz15 fw400">Web & App Design</span></td>
                              <td className="align-top"><span className="fz14 fw400">$500.00/Fixed</span></td>
                              <td className="align-top">
                                <div className="d-flex">
                                  <a href="#" className="icon me-2" data-bs-toggle="tooltip" data-bs-placement="top" title="Edit"><span className="flaticon-pencil"></span></a>
                                  <a href="#" className="icon" data-bs-toggle="tooltip" data-bs-placement="top" title="Delete"><span className="flaticon-delete"></span></a>
                                </div>
                              </td>
                            </tr>
                            <tr>
                              <th className="dashboard-img-service" scope="row">
                                <div className="listing-style1 list-style d-block d-xl-flex align-items-start border-0 mb-0">
                                  <div className="list-thumb flex-shrink-0 bdrs4 mb10-lg">
                                    <img className="w-100" src="/images/listings/g-4.jpg" alt="" />
                                  </div>
                                  <div className="list-content flex-grow-1 py-0 pl15 pl0-lg">
                                    <h6 className="list-title mb-0"><a href="page-services-single.html">I will design modern websites in figma or adobe xd</a></h6>
                                    <ul className="list-style-type-bullet ps-3 dashboard-style mb-0">
                                      <li>Delievred with in a day</li>
                                      <li>Delievry Time Descreased</li>
                                      <li>Upload apps to Stores</li>
                                    </ul>
                                  </div>
                                </div>
                              </th>
                              <td className="align-top"><span className="fz15 fw400">Web & App Design</span></td>
                              <td className="align-top"><span className="fz14 fw400">$500.00/Fixed</span></td>
                              <td className="align-top">
                                <div className="d-flex">
                                  <a href="#" className="icon me-2" data-bs-toggle="tooltip" data-bs-placement="top" title="Edit"><span className="flaticon-pencil"></span></a>
                                  <a href="#" className="icon" data-bs-toggle="tooltip" data-bs-placement="top" title="Delete"><span className="flaticon-delete"></span></a>
                                </div>
                              </td>
                            </tr>
                            <tr>
                              <th className="dashboard-img-service" scope="row">
                                <div className="listing-style1 list-style d-block d-xl-flex align-items-start border-0 mb-0">
                                  <div className="list-thumb flex-shrink-0 bdrs4 mb10-lg">
                                    <img className="w-100" src="/images/listings/g-5.jpg" alt="" />
                                  </div>
                                  <div className="list-content flex-grow-1 py-0 pl15 pl0-lg">
                                    <h6 className="list-title mb-0"><a href="page-services-single.html">I will design modern websites in figma or adobe xd</a></h6>
                                    <ul className="list-style-type-bullet ps-3 dashboard-style mb-0">
                                      <li>Delievred with in a day</li>
                                      <li>Delievry Time Descreased</li>
                                      <li>Upload apps to Stores</li>
                                    </ul>
                                  </div>
                                </div>
                              </th>
                              <td className="align-top"><span className="fz15 fw400">Web & App Design</span></td>
                              <td className="align-top"><span className="fz14 fw400">$500.00/Fixed</span></td>
                              <td className="align-top">
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
                    <div className="tab-pane fade" id="nav-item5" role="tabpanel" aria-labelledby="nav-item5-tab">
                      <div className="packages_table table-responsive">
                        <table className="table-style3 table at-savesearch">
                          <thead className="t-head">
                            <tr>
                              <th scope="col">Title</th>
                              <th scope="col">Category</th>
                              <th scope="col">Type/Cost</th>
                              <th scope="col">Actions</th>
                            </tr>
                          </thead>
                          <tbody className="t-body">
                            <tr>
                              <th className="dashboard-img-service" scope="row">
                                <div className="listing-style1 list-style d-block d-xl-flex align-items-start border-0 mb-0">
                                  <div className="list-thumb flex-shrink-0 bdrs4 mb10-lg">
                                    <img className="w-100" src="/images/listings/g-1.jpg" alt="" />
                                  </div>
                                  <div className="list-content flex-grow-1 py-0 pl15 pl0-lg">
                                    <h6 className="list-title mb-0"><a href="page-services-single.html">I will design modern websites in figma or adobe xd</a></h6>
                                    <ul className="list-style-type-bullet ps-3 dashboard-style mb-0">
                                      <li>Delievred with in a day</li>
                                      <li>Delievry Time Descreased</li>
                                      <li>Upload apps to Stores</li>
                                    </ul>
                                  </div>
                                </div>
                              </th>
                              <td className="align-top"><span className="fz15 fw400">Web & App Design</span></td>
                              <td className="align-top"><span className="fz14 fw400">$500.00/Fixed</span></td>
                              <td className="align-top">
                                <div className="d-flex">
                                  <a href="#" className="icon me-2" data-bs-toggle="tooltip" data-bs-placement="top" title="Edit"><span className="flaticon-pencil"></span></a>
                                  <a href="#" className="icon" data-bs-toggle="tooltip" data-bs-placement="top" title="Delete"><span className="flaticon-delete"></span></a>
                                </div>
                              </td>
                            </tr>
                            <tr>
                              <th className="dashboard-img-service" scope="row">
                                <div className="listing-style1 list-style d-block d-xl-flex align-items-start border-0 mb-0">
                                  <div className="list-thumb flex-shrink-0 bdrs4 mb10-lg">
                                    <img className="w-100" src="/images/listings/g-2.jpg" alt="" />
                                  </div>
                                  <div className="list-content flex-grow-1 py-0 pl15 pl0-lg">
                                    <h6 className="list-title mb-0"><a href="page-services-single.html">I will design modern websites in figma or adobe xd</a></h6>
                                    <ul className="list-style-type-bullet ps-3 dashboard-style mb-0">
                                      <li>Delievred with in a day</li>
                                      <li>Delievry Time Descreased</li>
                                      <li>Upload apps to Stores</li>
                                    </ul>
                                  </div>
                                </div>
                              </th>
                              <td className="align-top"><span className="fz15 fw400">Web & App Design</span></td>
                              <td className="align-top"><span className="fz14 fw400">$500.00/Fixed</span></td>
                              <td className="align-top">
                                <div className="d-flex">
                                  <a href="#" className="icon me-2" data-bs-toggle="tooltip" data-bs-placement="top" title="Edit"><span className="flaticon-pencil"></span></a>
                                  <a href="#" className="icon" data-bs-toggle="tooltip" data-bs-placement="top" title="Delete"><span className="flaticon-delete"></span></a>
                                </div>
                              </td>
                            </tr>
                            <tr>
                              <th className="dashboard-img-service" scope="row">
                                <div className="listing-style1 list-style d-block d-xl-flex align-items-start border-0 mb-0">
                                  <div className="list-thumb flex-shrink-0 bdrs4 mb10-lg">
                                    <img className="w-100" src="/images/listings/g-3.jpg" alt="" />
                                  </div>
                                  <div className="list-content flex-grow-1 py-0 pl15 pl0-lg">
                                    <h6 className="list-title mb-0"><a href="page-services-single.html">I will design modern websites in figma or adobe xd</a></h6>
                                    <ul className="list-style-type-bullet ps-3 dashboard-style mb-0">
                                      <li>Delievred with in a day</li>
                                      <li>Delievry Time Descreased</li>
                                      <li>Upload apps to Stores</li>
                                    </ul>
                                  </div>
                                </div>
                              </th>
                              <td className="align-top"><span className="fz15 fw400">Web & App Design</span></td>
                              <td className="align-top"><span className="fz14 fw400">$500.00/Fixed</span></td>
                              <td className="align-top">
                                <div className="d-flex">
                                  <a href="#" className="icon me-2" data-bs-toggle="tooltip" data-bs-placement="top" title="Edit"><span className="flaticon-pencil"></span></a>
                                  <a href="#" className="icon" data-bs-toggle="tooltip" data-bs-placement="top" title="Delete"><span className="flaticon-delete"></span></a>
                                </div>
                              </td>
                            </tr>
                            <tr>
                              <th className="dashboard-img-service" scope="row">
                                <div className="listing-style1 list-style d-block d-xl-flex align-items-start border-0 mb-0">
                                  <div className="list-thumb flex-shrink-0 bdrs4 mb10-lg">
                                    <img className="w-100" src="/images/listings/g-4.jpg" alt="" />
                                  </div>
                                  <div className="list-content flex-grow-1 py-0 pl15 pl0-lg">
                                    <h6 className="list-title mb-0"><a href="page-services-single.html">I will design modern websites in figma or adobe xd</a></h6>
                                    <ul className="list-style-type-bullet ps-3 dashboard-style mb-0">
                                      <li>Delievred with in a day</li>
                                      <li>Delievry Time Descreased</li>
                                      <li>Upload apps to Stores</li>
                                    </ul>
                                  </div>
                                </div>
                              </th>
                              <td className="align-top"><span className="fz15 fw400">Web & App Design</span></td>
                              <td className="align-top"><span className="fz14 fw400">$500.00/Fixed</span></td>
                              <td className="align-top">
                                <div className="d-flex">
                                  <a href="#" className="icon me-2" data-bs-toggle="tooltip" data-bs-placement="top" title="Edit"><span className="flaticon-pencil"></span></a>
                                  <a href="#" className="icon" data-bs-toggle="tooltip" data-bs-placement="top" title="Delete"><span className="flaticon-delete"></span></a>
                                </div>
                              </td>
                            </tr>
                            <tr>
                              <th className="dashboard-img-service" scope="row">
                                <div className="listing-style1 list-style d-block d-xl-flex align-items-start border-0 mb-0">
                                  <div className="list-thumb flex-shrink-0 bdrs4 mb10-lg">
                                    <img className="w-100" src="/images/listings/g-5.jpg" alt="" />
                                  </div>
                                  <div className="list-content flex-grow-1 py-0 pl15 pl0-lg">
                                    <h6 className="list-title mb-0"><a href="page-services-single.html">I will design modern websites in figma or adobe xd</a></h6>
                                    <ul className="list-style-type-bullet ps-3 dashboard-style mb-0">
                                      <li>Delievred with in a day</li>
                                      <li>Delievry Time Descreased</li>
                                      <li>Upload apps to Stores</li>
                                    </ul>
                                  </div>
                                </div>
                              </th>
                              <td className="align-top"><span className="fz15 fw400">Web & App Design</span></td>
                              <td className="align-top"><span className="fz14 fw400">$500.00/Fixed</span></td>
                              <td className="align-top">
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

export default ManageService;