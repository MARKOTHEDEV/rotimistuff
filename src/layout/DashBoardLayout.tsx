

type Prop = React.PropsWithChildren<object>
const DashBoardLayout = ({children}:Prop)=>{

    return (
        <div>
<div className="wrapper">
  {/* <div className="preloader"></div> */}
  
  {/* <!-- Main Header Nav --> */}
  <header className="header-nav nav-innerpage-style menu-home4 dashboard_header main-menu">
    {/* <!-- Ace Responsive Menu --> */}
    <nav className="posr"> 
      <div className="container-fluid pr30 pr15-xs pl30 posr menu_bdrt1">
        <div className="row align-items-center justify-content-between">
          <div className="col-6 col-lg-auto">
            <div className="text-center text-lg-start d-flex align-items-center">
              <div className="dashboard_header_logo position-relative me-2 me-xl-5">
                <a href="index.html" className="logo"><img src="/images/header-logo-dark.svg" alt="" /></a>
              </div>
              <div className="fz20 ml90">
                <a href="#" className="dashboard_sidebar_toggle_icon vam"><img src="/images/dashboard-navicon.svg" alt="" /></a>
              </div>
              <a className="login-info d-block d-xl-none ml40 vam" data-bs-toggle="modal" href="#exampleModalToggle" role="button"><span className="flaticon-loupe"></span></a>
              <div className="ml40 d-none d-xl-block">
                <div className="search_area dashboard-style">
                  <input type="text" className="form-control border-0" placeholder="What service are you looking for today?" />
                  <label><span className="flaticon-loupe"></span></label>
                </div>
              </div>
            </div>
          </div>
          <div className="col-6 col-lg-auto">
            <div className="text-center text-lg-end header_right_widgets">
              <ul className="dashboard_dd_menu_list d-flex align-items-center justify-content-center justify-content-sm-end mb-0 p-0">
                <li className="d-none d-sm-block">
                  <a className="text-center mr5 text-thm2 dropdown-toggle fz20" type="button" data-bs-toggle="dropdown" href="#"><span className="flaticon-notification"></span></a>
                  <div className="dropdown-menu">
                    <div className="dboard_notific_dd px30 pt10 pb15">
                      <div className="notif_list d-flex align-items-center bdrb1 pb15 mb10">
                        <img src="/images/resource/notif-1.png" alt="" />
                        <div className="details ml10">
                          <p className="text mb-0">Your resume</p>
                          <p className="text mb-0">updated!</p>
                        </div>
                      </div>
                      <div className="notif_list d-flex align-items-center bdrb1 pb15 mb10">
                        <img src="/images/resource/notif-2.png" alt="" />
                        <div className="details ml10">
                          <p className="text mb-0">You changed</p>
                          <p className="text mb-0">password</p>
                        </div>
                      </div>
                      <div className="notif_list d-flex align-items-center bdrb1 pb15 mb10">
                        <img src="/images/resource/notif-3.png" alt="" />
                        <div className="details ml10">
                          <p className="text mb-0">Your account has been</p>
                          <p className="text mb-0">created successfully</p>
                        </div>
                      </div>
                      <div className="notif_list d-flex align-items-center bdrb1 pb15 mb10">
                        <img src="/images/resource/notif-4.png" alt="" />
                        <div className="details ml10">
                          <p className="text mb-0">You applied for a job </p>
                          <p className="text mb-0">Front-end Developer</p>
                        </div>
                      </div>
                      <div className="notif_list d-flex align-items-center">
                        <img src="/images/resource/notif-5.png" alt="" />
                        <div className="details ml10">
                          <p className="text mb-0">Your course uploaded</p>
                          <p className="text mb-0">successfully</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="d-none d-sm-block">
                  <a className="text-center mr5 text-thm2 dropdown-toggle fz20" type="button" data-bs-toggle="dropdown" href="#"><span className="flaticon-mail"></span></a>
                  <div className="dropdown-menu">
                    <div className="dboard_notific_dd px30 pt20 pb15">
                      <div className="notif_list d-flex align-items-start bdrb1 pb25 mb10">
                        <img className="img-2" src="/images/testimonials/testi-1.png" alt="" />
                        <div className="details ml15">
                          <p className="dark-color fw500 mb-2">Ali Tufan</p>
                          <p className="text mb-2">Lorem ipsum dolor sit amet, consectetur adipiscing.</p>
                          <p className="mb-0 text-thm">4 hours ago</p>
                        </div>
                      </div>
                      <div className="notif_list d-flex align-items-start mb25">
                        <img className="img-2" src="/images/testimonials/testi-2.png" alt="" />
                        <div className="details ml15">
                          <p className="dark-color fw500 mb-2">Ali Tufan</p>
                          <p className="text mb-2">Lorem ipsum dolor sit amet, consectetur adipiscing.</p>
                          <p className="mb-0 text-thm">4 hours ago</p>
                        </div>
                      </div>
                      <div className="d-grid">
                        <a href="page-dashboard-message.html" className="ud-btn btn-thm w-100">View All Messages<i className="fal fa-arrow-right-long"></i></a>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="d-none d-sm-block">
                  <a className="text-center mr5 text-thm2 dropdown-toggle fz20" type="button" data-bs-toggle="dropdown" href="#"><span className="flaticon-like"></span></a>
                  <div className="dropdown-menu">
                    <div className="dboard_notific_dd px30 pt10 pb15">
                      <div className="notif_list d-flex align-items-center bdrb1 pb15 mb10">
                        <img src="/images/resource/notif-1.png" alt="" />
                        <div className="details ml10">
                          <p className="text mb-0">Your resume</p>
                          <p className="text mb-0">updated!</p>
                        </div>
                      </div>
                      <div className="notif_list d-flex align-items-center bdrb1 pb15 mb10">
                        <img src="/images/resource/notif-2.png" alt="" />
                        <div className="details ml10">
                          <p className="text mb-0">You changed</p>
                          <p className="text mb-0">password</p>
                        </div>
                      </div>
                      <div className="notif_list d-flex align-items-center bdrb1 pb15 mb10">
                        <img src="/images/resource/notif-3.png" alt="" />
                        <div className="details ml10">
                          <p className="text mb-0">Your account has been</p>
                          <p className="text mb-0">created successfully</p>
                        </div>
                      </div>
                      <div className="notif_list d-flex align-items-center bdrb1 pb15 mb10">
                        <img src="/images/resource/notif-4.png" alt="" />
                        <div className="details ml10">
                          <p className="text mb-0">You applied for a job </p>
                          <p className="text mb-0">Front-end Developer</p>
                        </div>
                      </div>
                      <div className="notif_list d-flex align-items-center">
                        <img src="/images/resource/notif-5.png" alt="" />
                        <div className="details ml10">
                          <p className="text mb-0">Your course uploaded</p>
                          <p className="text mb-0">successfully</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="user_setting">
                  <div className="dropdown">
                    <a className="btn" href="#" data-bs-toggle="dropdown">
                      <img src="/images/resource/user.png" alt="user.png" />  
                    </a>
                    <div className="dropdown-menu">
                      <div className="user_setting_content">
                        <p className="fz15 fw400 ff-heading mb10 pl30">Start</p>
                        <a className="dropdown-item" href="page-dashboard.html"><i className="flaticon-home mr10"></i>Dashboard</a>
                        <a className="dropdown-item" href="page-dashboard-proposal.html"><i className="flaticon-document mr10"></i>My Proposals</a>
                        <a className="dropdown-item" href="page-dashboard-save.html"><i className="flaticon-like mr10"></i>Saved</a>
                        <a className="dropdown-item" href="page-dashboard-message.html"><i className="flaticon-chat mr10"></i>Message</a>
                        <a className="dropdown-item" href="page-dashboard-reviews.html"><i className="flaticon-review-1 mr10"></i>Reviews</a>
                        <a className="dropdown-item" href="page-dashboard-invoice.html"><i className="flaticon-receipt mr10"></i>Invoice</a>
                        <a className="dropdown-item" href="page-dashboard-payouts.html"><i className="flaticon-dollar mr10"></i>Payouts</a>
                        <a className="dropdown-item" href="page-dashboard-statement.html"><i className="flaticon-web mr10"></i>Statements</a>
                        <p className="fz15 fw400 ff-heading mt30 pl30">Organize and Manage</p>
                        <a className="dropdown-item" href="page-dashboard-manage-service.html"><i className="flaticon-presentation mr10"></i>Manage Services</a>
                        <a className="dropdown-item" href="page-dashboard-manage-jobs.html"><i className="flaticon-briefcase mr10"></i>Manage Jobs</a>
                        <a className="dropdown-item" href="page-dashboard-favorites.html"><i className="flaticon-content mr10"></i>Manage Project</a>
                        <p className="fz15 fw400 ff-heading mt30 pl30">Account</p>
                        <a className="dropdown-item active" href="page-dashboard-profile.html"><i className="flaticon-photo mr10"></i>My Profile</a>
                        <a className="dropdown-item" href="page-login.html"><i className="flaticon-logout mr10"></i>Logout</a>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </nav>
  </header>
  {/* <!-- Search Modal --> */}
  <div className="search-modal">
    <div className="modal fade" id="exampleModalToggle" aria-hidden="true" aria-labelledby="exampleModalToggleLabel" tabIndex={-1}>
      <div className="modal-dialog modal-lg">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalToggleLabel"></h5>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"><i className="fal fa-xmark"></i></button>
          </div>
          <div className="modal-body">
            <div className="popup-search-field search_area">
              <input type="text" className="form-control border-0" placeholder="What service are you looking for today?" />
              <label><span className="far fa-magnifying-glass"></span></label>
              <button className="ud-btn btn-thm" type="submit">Search</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  {/* <!-- Mobile Nav  --> */}
  <div id="page" className="mobilie_header_nav stylehome1">
    <div className="mobile-menu">
      <div className="header bdrb1">
        <div className="menu_and_widgets">
          <div className="mobile_menu_bar d-flex justify-content-between align-items-center">
            <a className="mobile_logo" href="#"><img src="/images/header-logo3.svg" alt="" /></a>
            <div className="right-side text-end">
              <a className="" href="page-login.html">join</a>
              <a className="menubar ml30" href="#menu"><img src="/images/mobile-dark-nav-icon.svg" alt="" /></a>
            </div>
          </div>
        </div>
        <div className="posr"><div className="mobile_menu_close_btn"><span className="far fa-times"></span></div></div>
      </div>
    </div>
    {/* <!-- /.mobile-menu --> */}
    <nav id="menu" className="">
      <ul>
        <li><span>Home</span>
          <ul>
            <li><a href="index.html">Home V1</a></li>
            <li><a href="index2.html">Home V2</a></li>
            <li><a href="index3.html">Home V3</a></li>
            <li><a href="index4.html">Home V4</a></li>
            <li><a href="index5.html">Home V5</a></li>
            <li><a href="index6.html">Home V6</a></li>
            <li><a href="index7.html">Home V7</a></li>
            <li><a href="index8.html">Home V8</a></li>
            <li><a href="index9.html">Home V9</a></li>
            <li><a href="index10.html">Home V10</a></li>
            <li><a href="index11.html">Home V11</a></li>
            <li><a href="index12.html">Home V12</a></li>
            <li><a href="index13.html">Home V13</a></li>
            <li><a href="index14.html">Home V14</a></li>
            <li><a href="index15.html">Home V15</a></li>
            <li><a href="index16.html">Home V16</a></li>
            <li><a href="index17.html">Home V17</a></li>
            <li><a href="index18.html">Home V18</a></li>
            <li><a href="index19.html">Home V19</a></li>
            <li><a href="index20.html">Home V20</a></li>
          </ul>
        </li>
        <li><span>Browse Jobs</span>
          <ul>
            <li><span>Services</span>
              <ul>
                <li><a href="page-service-v1.html">Service v1</a></li>
                <li><a href="page-service-v2.html">Service v2</a></li>
                <li><a href="page-service-v3.html">Service v3</a></li>
                <li><a href="page-service-v4.html">Service v4</a></li>
                <li><a href="page-service-v5.html">Service v5</a></li>
                <li><a href="page-service-v6.html">Service v6</a></li>
                <li><a href="page-service-v7.html">Service v7</a></li>
                <li><a href="page-service-all.html">Service All</a></li>
                <li><a href="page-service-single.html">Service Single</a></li>
                <li><a href="page-service-single-v1.html">Single V1</a></li>
                <li><a href="page-service-single-v2.html">Single V2</a></li>
              </ul>
            </li>
            <li><span>Projects</span>
              <ul>
                <li><a href="page-project-v1.html">Project v1</a></li>
                <li><a href="page-project-list-v1.html">List v1</a></li>
                <li><a href="page-project-list-v2.html">List v2</a></li>
                <li><a href="page-project-list-v3.html">List v3</a></li>
                <li><a href="page-project-single.html">Project Single</a></li>
                <li><a href="page-project-single-v1.html">Single V1</a></li>
                <li><a href="page-project-single-v2.html">Single V2</a></li>
              </ul>
            </li>
            <li><span>Job View</span>
              <ul>
                <li><a href="page-job-list-v1.html">Job list v1</a></li>
                <li><a href="page-job-list-v2.html">Job list v2</a></li>
                <li><a href="page-job-list-v3.html">Job list V3</a></li>
                <li><a href="page-job-list-single.html">Job Single</a></li>
              </ul>
            </li>
          </ul>
        </li>
        <li><span>Users</span>
          <ul>
            <li><span>Dashboard</span>
              <ul>
                <li><a href="page-dashboard.html">Dashboard</a></li>
                <li><a href="page-dashboard-proposal.html">Proposal</a></li>
                <li><a href="page-dashboard-save.html">Saved</a></li>
                <li><a href="page-dashboard-message.html">Message</a></li>
                <li><a href="page-dashboard-reviews.html">Reviews</a></li>
                <li><a href="page-dashboard-invoice.html">Invoice</a></li>
                <li><a href="page-dashboard-payouts.html">Payouts</a></li>
                <li><a href="page-dashboard-statement.html">Statement</a></li>
                <li><a href="page-dashboard-manage-service.html">Manage Service</a></li>
                <li><a href="page-dashboard-add-service.html">Add Services</a></li>
                <li><a href="page-dashboard-manage-jobs.html">Manage Jobs</a></li>
                <li><a href="page-dashboard-manage-project.html">Manage Project</a></li>
                <li><a href="page-dashboard-create-project.html">Create Project</a></li>
                <li><a href="page-dashboard-profile.html">My Profile</a></li>
              </ul>
            </li>
            <li><span>Employee</span>
              <ul>
                <li><a href="page-employee-v1.html">Employee V1</a></li>
                <li><a href="page-employee-v2.html">Employee V2</a></li>
                <li><a href="page-employee-single.html">Employee Single</a></li>
              </ul>
            </li>
            <li><span>Freelancer</span>
              <ul>
                <li><a href="page-freelancer-v1.html">Freelancer V1</a></li>
                <li><a href="page-freelancer-v2.html">Freelancer V2</a></li>
                <li><a href="page-freelancer-v3.html">Freelancer V3</a></li>
                <li><a href="page-freelancer-list-v1.html">List V1</a></li>
                <li><a href="page-freelancer-list-v2.html">List V2</a></li>
                <li><a href="page-freelancer-list-v3.html">List V3</a></li>
                <li><a href="page-freelancer-single.html">Freelancer Single</a></li>
                <li><a href="page-freelancer-single-v1.html">Single V1</a></li>
                <li><a href="page-freelancer-single-v2.html">Single V2</a></li>
              </ul>
            </li>
            <li><a href="page-become-seller.html">Become Seller</a></li>
          </ul>
        </li>
        <li><span>Pages</span>
          <ul>
            <li><span>About</span>
              <ul>
                <li><a href="page-about.html">About v1</a></li>
                <li><a href="page-about-v2.html">About v2</a></li>
              </ul>
            </li>
            <li><span>Shop</span>
              <ul>
                <li><a href="page-shop.html">List</a></li>
                <li><a href="page-shop-single.html">Single</a></li>
                <li><a href="page-shop-cart.html">Cart</a></li>
                <li><a href="page-shop-checkout.html">Checkout</a></li>
                <li><a href="page-shop-order.html">Order</a></li>
              </ul>
            </li>
            <li><a href="page-contact.html">Contact</a></li>
            <li><a href="page-error.html">404</a></li>
            <li><a href="page-faq.html">Faq</a></li>
            <li><a href="page-help.html">Help</a></li>
            <li><a href="page-invoice.html">Invoices</a></li>
            <li><a href="page-login.html">Login</a></li>
            <li><a href="page-pricing.html">Pricing</a></li>
            <li><a href="page-register.html">Register</a></li>
            <li><a href="page-terms.html">Terms</a></li>
            <li><a href="page-ui-element.html">UI Elements</a></li>
          </ul>
        </li>
        <li><span>Blog</span>
          <ul>
            <li><a href="page-blog-v1.html">List V1</a></li>
            <li><a href="page-blog-v2.html">List V2</a></li>
            <li><a href="page-blog-v3.html">List V3</a></li>
            <li><a href="page-blog-single.html">Single</a></li>
          </ul>
        </li>
        {/* <!-- Only for Mobile View --> */}
      </ul>
    </nav>
  </div>

  <div className="dashboard_content_wrapper">
    <div className="dashboard dashboard_wrapper pr30 pr0-xl">
      <div className="dashboard__sidebar d-none d-lg-block">
        <div className="dashboard_sidebar_list">
          <p className="fz15 fw400 ff-heading pl30">Start</p>
          <div className="sidebar_list_item">
            <a href="page-dashboard.html" className="items-center"><i className="flaticon-home mr15"></i>Dashboard</a>
          </div>
          <div className="sidebar_list_item">
            <a href="page-dashboard-proposal.html" className="items-center"><i className="flaticon-document mr15"></i>My Proposals</a>
          </div>
          <div className="sidebar_list_item">
            <a href="page-dashboard-save.html" className="items-center"><i className="flaticon-like mr15"></i>Saved</a>
          </div>
          <div className="sidebar_list_item ">
            <a href="page-dashboard-message.html" className="items-center"><i className="flaticon-chat mr15"></i>Message</a>
          </div>
          <div className="sidebar_list_item ">
            <a href="page-dashboard-reviews.html" className="items-center"><i className="flaticon-review-1 mr15"></i>Reviews</a>
          </div>
          <div className="sidebar_list_item">
            <a href="page-dashboard-invoice.html" className="items-center"><i className="flaticon-receipt mr15"></i>Invoice</a>
          </div>
          <div className="sidebar_list_item">
            <a href="page-dashboard-payouts.html" className="items-center"><i className="flaticon-dollar mr15"></i>Payouts</a>
          </div>
          <div className="sidebar_list_item">
            <a href="page-dashboard-statement.html" className="items-center"><i className="flaticon-web mr15"></i>Statements</a>
          </div>
          <p className="fz15 fw400 ff-heading pl30 mt30">Organize and Manage</p>
          <div className="sidebar_list_item ">
            <a href="page-dashboard-manage-service.html" className="items-center"><i className="flaticon-presentation mr15"></i>Manage Services</a>
          </div>
          <div className="sidebar_list_item ">
            <a href="page-dashboard-manage-jobs.html" className="items-center"><i className="flaticon-briefcase mr15"></i>Manage Jobs</a>
          </div>
          <div className="sidebar_list_item ">
            <a href="page-dashboard-manage-project.html" className="items-center"><i className="flaticon-content mr15"></i>Manage Project</a>
          </div>
          <p className="fz15 fw400 ff-heading pl30 mt30">Account</p>
          <div className="sidebar_list_item ">
            <a href="page-dashboard-profile.html" className="items-center -is-active"><i className="flaticon-photo mr15"></i>My Profile</a>
          </div>
          <div className="sidebar_list_item ">
            <a href="page-login.html" className="items-center"><i className="flaticon-logout mr15"></i>Logout</a>
          </div>
        </div>
      </div>



     
        {children}





    </div>
  </div>
  <a className="scrollToHome" href="#"><i className="fas fa-angle-up"></i></a>
</div>
        </div>
    )
}

export default DashBoardLayout;