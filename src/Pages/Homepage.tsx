import HomepageLayout from "../layout/HomepageLayout";



const HomePage =()=>{

    return(
        <HomepageLayout>
             <section className="hero-home11 pt60 pb60">
      <div className="container">
        <div className="row align-items-center justify-content-between">
          <div className="col-lg-6 col-xl-6 mb30-md">
            <div className="home11-hero-content">
              <span className="d-inline-block tag animate-up-1 mb15">Get Started</span>
              <h2 className="title animate-up-2">Find the perfect freelance services for your business</h2>
              <p className="text animate-up-3">Work with talented people at the most affordable price to get the most <br className="d-none d-xl-block" /> out of your time and cost</p>
            </div>
            <div className="d-flex align-items-center mt30 animate-up-4">
              <a href="page-job-list-v1.html" className="ud-btn btn-thm4 me-3 bdrs12">Find Work</a>
              <a href="page-freelancer-v1.html" className="ud-btn btn-white bdr1 bdrs12">Find Talent</a>
            </div>
            <p className="text fz15 me-2 mb-0 mt60 mt30-md animate-up-4">Trusted by</p>
            <div className="mt20 animate-up-4">
              <li className="d-inline-block me-3 me-sm-5 mb-3 mb-md-0"><img src="images/partners/19.png" alt=""/></li>
              <li className="d-inline-block me-3 me-sm-5 mb-3 mb-md-0"><img src="images/partners/20.png" alt=""/></li>
              <li className="d-inline-block me-3 me-sm-5 mb-3 mb-md-0"><img src="images/partners/21.png" alt=""/></li>
              <li className="d-inline-block"><img src="images/partners/22.png" alt=""/></li>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="home11-hero-img text-center text-xxl-end">
              <img className="bdrs20" src="images/about/about-13.jpg" alt="" />
              <div className="iconbox-small1 text-start d-flex wow fadeInRight default-box-shadow4 bounce-x animate-up-1">
                <span className="icon flaticon-badge"></span>
                <div className="details pl20">
                  <h6 className="mb-1">Proof of quality</h6>
                  <p className="text fz13 mb-0">Lorem Ipsum Dolar Amet</p>
                </div>
              </div>
              <div className="iconbox-small2 text-start d-flex wow fadeInLeft default-box-shadow4 bounce-y animate-up-2">
                <span className="icon flaticon-security"></span>
                <div className="details pl20">
                  <h6 className="mb-1">Safe and secure</h6>
                  <p className="text fz13 mb-0">Lorem Ipsum Dolar Amet</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* <!-- Funfact --> */}
    <section className="home11-funfact bdrs12 mx-auto maxw1700">
      <div className="container">
        <div className="row">
          <div className="col-xl-10 mx-auto">
            <div className="row justify-content-center wow fadeInUp" data-wow-delay="300ms">
              <div className="col-6 col-md-3">
                <div className="funfact_one mb20-sm text-center">
                  <span className="icon text-white flaticon-working"></span>
                  <div className="details">
                    <ul className="ps-0 mb-1 d-flex justify-content-center">
                      <li><div className="timer text-white">834</div></li>
                      <li><span className="text-white">M</span></li>
                    </ul>
                    <p className="text text-white mb-0">Total Freelancer</p>
                  </div>
                </div>
              </div>
              <div className="col-6 col-md-3">
                <div className="funfact_one mb20-sm text-center">
                  <span className="icon text-white flaticon-star-2"></span>
                  <div className="details">
                    <ul className="ps-0 mb-1 d-flex justify-content-center">
                      <li><div className="timer text-white">732</div></li>
                      <li><span className="text-white">M</span></li>
                    </ul>
                    <p className="text text-white mb-0">Positive Review</p>
                  </div>
                </div>
              </div>
              <div className="col-6 col-md-3">
                <div className="funfact_one mb20-sm text-center">
                  <span className="icon text-white flaticon-file"></span>
                  <div className="details">
                    <ul className="ps-0 mb-1 d-flex justify-content-center">
                      <li><div className="timer text-white">90</div></li>
                      <li><span className="text-white">M</span></li>
                    </ul>
                    <p className="text text-white mb-0">Order recieved</p>
                  </div>
                </div>
              </div>
              <div className="col-6 col-md-3">
                <div className="funfact_one mb20-sm text-center">
                  <span className="icon text-white flaticon-rocket-1"></span>
                  <div className="details">
                    <ul className="ps-0 mb-1 d-flex justify-content-center">
                      <li><div className="timer text-white">236</div></li>
                      <li><span className="text-white">M</span></li>
                    </ul>
                    <p className="text text-white mb-0">Projects Completed</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* <!-- Popular Services --> */}
    <section className="pb90 pb30-md">
      <div className="container">
        <div className="row align-items-center wow fadeInUp" data-wow-delay="00ms">
          <div className="col-lg-9">
            <div className="main-title2">
              <h2 className="title">Popular Services</h2>
              <p className="paragraph">Most viewed and all-time top-selling services</p>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="text-start text-lg-end mb-4 mb-lg-2">
              <a className="ud-btn2" href="page-service-v1.html">All Services<i className="fal fa-arrow-right-long"></i></a>
            </div>
          </div>
        </div>
        <div className="row wow fadeInUp" data-wow-delay="300ms">
          <div className="col-sm-6 col-xl-3">
            <div className="listing-style1 bdrs16">
              <div className="list-thumb">
                <img className="w-100" src="images/listings/g-1.jpg" alt=""/>
                <a href="#" className="listing-fav fz12"><span className="far fa-heart"></span></a>
              </div>
              <div className="list-content">
                <p className="list-text body-color fz14 mb-1">Web & App Design</p>
                <h5 className="list-title"><a href="page-services-single.html">I will design modern websites in figma or adobe xd</a></h5>
                <div className="review-meta d-flex align-items-center">
                  <i className="fas fa-star fz10 review-color me-2"></i>
                  <p className="mb-0 body-color fz14"><span className="dark-color me-2">4.82</span>94 reviews</p>
                </div>
                <hr className="my-2"/>
                <div className="list-meta d-flex justify-content-between align-items-center mt15">
                  <a className="d-flex" href="#">
                    <span className="position-relative mr10">
                      <img className="rounded-circle wa" src="images/team/fl-s-1.png" alt="Freelancer Photo"/>
                      <span className="online-badges"></span>
                    </span>
                    <span className="fz14">Wanda Runo</span>
                  </a>
                  <div className="budget">
                    <p className="mb-0 body-color">Starting at<span className="fz17 fw500 dark-color ms-1">$983</span></p>
                  </div>
                </div>
              </div>
            </div>
            <div className="listing-style1 bdrs16">
              <div className="list-thumb">
                <img className="w-100" src="images/listings/g-5.jpg" alt=""/>
                <a href="#" className="listing-fav fz12"><span className="far fa-heart"></span></a>
              </div>
              <div className="list-content">
                <p className="list-text body-color fz14 mb-1">Web & App Design</p>
                <h5 className="list-title"><a href="page-services-single.html">I will design modern websites in figma or adobe xd</a></h5>
                <div className="review-meta d-flex align-items-center">
                  <i className="fas fa-star fz10 review-color me-2"></i>
                  <p className="mb-0 body-color fz14"><span className="dark-color me-2">4.82</span>94 reviews</p>
                </div>
                <hr className="my-2"/>
                <div className="list-meta d-flex justify-content-between align-items-center mt15">
                  <a className="d-flex" href="#">
                    <span className="position-relative mr10">
                      <img className="rounded-circle" src="images/team/fl-s-1.png" alt="Freelancer Photo"/>
                      <span className="online-badges"></span>
                    </span>
                    <span className="fz14">Wanda Runo</span>
                  </a>
                  <div className="budget">
                    <p className="mb-0 body-color">Starting at<span className="fz17 fw500 dark-color ms-1">$983</span></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-xl-3">
            <div className="listing-style1 default-box-shadow1 bdrs16">
              <div className="list-thumb">
                <div className="listing-thumbIn-slider position-relative navi_pagi_bottom_center slider-1-grid owl-carousel owl-theme">
                  <div className="item">
                    <img className="w-100" src="images/listings/g-2.jpg" alt=""/>
                    <a href="#" className="listing-fav fz12"><span className="far fa-heart"></span></a>
                  </div>
                  <div className="item">
                    <img className="w-100" src="images/listings/g-3.jpg" alt=""/>
                    <a href="#" className="listing-fav fz12"><span className="far fa-heart"></span></a>
                  </div>
                  <div className="item">
                    <img className="w-100" src="images/listings/g-4.jpg" alt=""/>
                    <a href="#" className="listing-fav fz12"><span className="far fa-heart"></span></a>
                  </div>
                  <div className="item">
                    <img className="w-100" src="images/listings/g-5.jpg" alt=""/>
                    <a href="#" className="listing-fav fz12"><span className="far fa-heart"></span></a>
                  </div>
                </div>
              </div>
              <div className="list-content">
                <p className="list-text body-color fz14 mb-1">Art & Illustration</p>
                <h5 className="list-title"><a href="page-services-single.html">I will create modern flat design illustration</a></h5>
                <div className="review-meta d-flex align-items-center">
                  <i className="fas fa-star fz10 review-color me-2"></i>
                  <p className="mb-0 body-color fz14"><span className="dark-color me-2">4.82</span>94 reviews</p>
                </div>
                <hr className="my-2"/>
                <div className="list-meta d-flex justify-content-between align-items-center mt15">
                  <a href="#">
                    <span className="position-relative mr10">
                      <img className="rounded-circle" src="images/team/fl-s-2.png" alt="Freelancer Photo" />
                      <span className="online-badge"></span>
                    </span>
                    <span className="fz14">Ali Tufan</span>
                  </a>
                  <div className="budget">
                    <p className="mb-0 body-color">Starting at<span className="fz17 fw500 dark-color ms-1">$983</span></p>
                  </div>
                </div>
              </div>
            </div>
            <div className="listing-style1 bdrs16">
              <div className="list-thumb">
                <img className="w-100" src="images/listings/g-6.jpg" alt="" />
                <a href="#" className="listing-fav fz12"><span className="far fa-heart"></span></a>
              </div>
              <div className="list-content">
                <p className="list-text body-color fz14 mb-1">Web & App Design</p>
                <h5 className="list-title"><a href="page-services-single.html">I will design modern websites in figma or adobe xd</a></h5>
                <div className="review-meta d-flex align-items-center">
                  <i className="fas fa-star fz10 review-color me-2"></i>
                  <p className="mb-0 body-color fz14"><span className="dark-color me-2">4.82</span>94 reviews</p>
                </div>
                <hr className="my-2"/>
                <div className="list-meta d-flex justify-content-between align-items-center mt15">
                  <a className="d-flex" href="#">
                    <span className="position-relative mr10">
                      <img className="rounded-circle" src="images/team/fl-s-2.png" alt="Freelancer Photo" />
                      <span className="online-badges"></span>
                    </span>
                    <span className="fz14">Wanda Runo</span>
                  </a>
                  <div className="budget">
                    <p className="mb-0 body-color">Starting at<span className="fz17 fw500 dark-color ms-1">$983</span></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-xl-3">
            <div className="listing-style1 bdrs16">
              <div className="list-thumb">
                <img className="w-100" src="images/listings/g-3.jpg" alt=""/>
                <a href="#" className="listing-fav fz12"><span className="far fa-heart"></span></a>
              </div>
              <div className="list-content">
                <p className="list-text body-color fz14 mb-1">Design & Creative</p>
                <h5 className="list-title line-clamp2"><a href="page-services-single.html">I will build a fully responsive design in HTML,CSS, bootstrap, and javascript</a></h5>
                <div className="review-meta d-flex align-items-center">
                  <i className="fas fa-star fz10 review-color me-2"></i>
                  <p className="mb-0 body-color fz14"><span className="dark-color me-2">4.82</span>94 reviews</p>
                </div>
                <hr className="my-2" />
                <div className="list-meta d-flex justify-content-between align-items-center mt15">
                  <a className="d-flex" href="#">
                    <span className="position-relative mr10">
                      <img className="rounded-circle" src="images/team/fl-s-3.png" alt="Freelancer Photo" />
                      <span className="online-badges"></span>
                    </span>
                    <span className="fz14">Wanda Runo</span>
                  </a>
                  <div className="budget">
                    <p className="mb-0 body-color">Starting at<span className="fz17 fw500 dark-color ms-1">$983</span></p>
                  </div>
                </div>
              </div>
            </div>
            <div className="listing-style1 bdrs16">
              <div className="list-thumb">
                <img className="w-100" src="images/listings/g-7.jpg" alt="" />
                <a href="#" className="listing-fav fz12"><span className="far fa-heart"></span></a>
              </div>
              <div className="list-content">
                <p className="list-text body-color fz14 mb-1">Design & Creative</p>
                <h5 className="list-title line-clamp2"><a href="page-services-single.html">I will build a fully responsive design in HTML,CSS, bootstrap, and javascript</a></h5>
                <div className="review-meta d-flex align-items-center">
                  <i className="fas fa-star fz10 review-color me-2"></i>
                  <p className="mb-0 body-color fz14"><span className="dark-color me-2">4.82</span>94 reviews</p>
                </div>
                <hr className="my-2" />
                <div className="list-meta d-flex justify-content-between align-items-center mt15">
                  <a className="d-flex" href="#">
                    <span className="position-relative mr10">
                      <img className="rounded-circle" src="images/team/fl-s-3.png" alt="Freelancer Photo" />
                      <span className="online-badges"></span>
                    </span>
                    <span className="fz14">Wanda Runo</span>
                  </a>
                  <div className="budget">
                    <p className="mb-0 body-color">Starting at<span className="fz17 fw500 dark-color ms-1">$983</span></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-xl-3">
            <div className="listing-style1 bdrs16">
              <div className="list-thumb">
                <img className="w-100" src="images/listings/g-4.jpg" alt="" />
                <a href="#" className="listing-fav fz12"><span className="far fa-heart"></span></a>
              </div>
              <div className="list-content">
                <p className="list-text body-color fz14 mb-1">Web & App Design</p>
                <h5 className="list-title line-clamp2"><a href="page-services-single.html">I will do mobile app development for ios and android</a></h5>
                <div className="review-meta d-flex align-items-center">
                  <i className="fas fa-star fz10 review-color me-2"></i>
                  <p className="mb-0 body-color fz14"><span className="dark-color me-2">4.82</span>94 reviews</p>
                </div>
                <hr className="my-2" />
                <div className="list-meta d-flex justify-content-between align-items-center mt15">
                  <a className="d-flex" href="#">
                    <span className="position-relative mr10">
                      <img className="rounded-circle" src="images/team/fl-s-4.png" alt="Freelancer Photo" />
                      <span className="online-badges"></span>
                    </span>
                    <span className="fz14">Wanda Runo</span>
                  </a>
                  <div className="budget">
                    <p className="mb-0 body-color">Starting at<span className="fz17 fw500 dark-color ms-1">$983</span></p>
                  </div>
                </div>
              </div>
            </div>
            <div className="listing-style1 bdrs16">
              <div className="list-thumb">
                <img className="w-100" src="images/listings/g-1.jpg" alt="" />
                <a href="#" className="listing-fav fz12"><span className="far fa-heart"></span></a>
              </div>
              <div className="list-content">
                <p className="list-text body-color fz14 mb-1">Web & App Design</p>
                <h5 className="list-title"><a href="page-services-single.html">I will design modern websites in figma or adobe xd</a></h5>
                <div className="review-meta d-flex align-items-center">
                  <i className="fas fa-star fz10 review-color me-2"></i>
                  <p className="mb-0 body-color fz14"><span className="dark-color me-2">4.82</span>94 reviews</p>
                </div>
                <hr className="my-2" />
                <div className="list-meta d-flex justify-content-between align-items-center mt15">
                  <a className="d-flex" href="#">
                    <span className="position-relative mr10">
                      <img className="rounded-circle wa" src="images/team/fl-s-1.png" alt="Freelancer Photo" />
                      <span className="online-badges"></span>
                    </span>
                    <span className="fz14">Wanda Runo</span>
                  </a>
                  <div className="budget">
                    <p className="mb-0 body-color">Starting at<span className="fz17 fw500 dark-color ms-1">$983</span></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* <!-- Talent by category --> */}
    <section className="pb90 pb30-md pt-0">
      <div className="container">
        <div className="row align-items-center wow fadeInUp" data-wow-delay="00ms">
          <div className="col-lg-9">
            <div className="main-title2">
              <h2 className="title">Browse talent by category</h2>
              <p className="paragraph">Get some Inspirations from 1800+ skills</p>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="text-start text-lg-end mb-4 mb-lg-2">
              <a className="ud-btn2" href="page-service-single.html">All Categories<i className="fal fa-arrow-right-long"></i></a>
            </div>
          </div>
        </div>
        <div className="row wow fadeInUp" data-wow-delay="300ms">
          <div className="col-lg-12">
            <div className="category-slider-home10 slider-7-grid dots_none nav_none owl-carousel owl-theme wow fadeInUp">
              <div className="item">
                <div className="iconbox-style1 at-home11-v2 bdr1 bdrs12">
                  <div className="icon"><span className="flaticon-developer"></span></div>
                  <div className="details mt20">
                    <p className="text mb5">1.853 skills</p>
                    <h5 className="title">Development & IT</h5>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="iconbox-style1 at-home11-v2 bdr1 bdrs12">
                  <div className="icon"><span className="flaticon-web-design-1"></span></div>
                  <div className="details mt20">
                    <p className="text mb5">1.853 skills</p>
                    <h5 className="title">Design & Creative</h5>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="iconbox-style1 at-home11-v2 bdr1 bdrs12">
                  <div className="icon"><span className="flaticon-digital-marketing"></span></div>
                  <div className="details mt20">
                    <p className="text mb5">1.853 skills</p>
                    <h5 className="title">Digital Marketing</h5>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="iconbox-style1 at-home11-v2 bdr1 bdrs12">
                  <div className="icon"><span className="flaticon-translator"></span></div>
                  <div className="details mt20">
                    <p className="text mb5">1.853 skills</p>
                    <h5 className="title">Writing & Translation</h5>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="iconbox-style1 at-home11-v2 bdr1 bdrs12">
                  <div className="icon"><span className="flaticon-microphone"></span></div>
                  <div className="details mt20">
                    <p className="text mb5">1.853 skills</p>
                    <h5 className="title">Music & Audio</h5>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="iconbox-style1 at-home11-v2 bdr1 bdrs12">
                  <div className="icon"><span className="flaticon-video-file"></span></div>
                  <div className="details mt20">
                    <p className="text mb5">1.853 skills</p>
                    <h5 className="title">Video & Animation</h5>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="iconbox-style1 at-home11-v2 bdr1 bdrs12">
                  <div className="icon"><span className="flaticon-ruler"></span></div>
                  <div className="details mt20">
                    <p className="text mb5">1.853 skills</p>
                    <h5 className="title">Engineering & Architecture</h5>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="iconbox-style1 at-home11-v2 bdr1 bdrs12">
                  <div className="icon"><span className="flaticon-goal"></span></div>
                  <div className="details mt20">
                    <p className="text mb5">1.853 skills</p>
                    <h5 className="title">Finance & Accounting</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* <!-- Our CTA -->  */}
    <section className="home11-cta-2 bdrs12 mx-auto maxw1700 pb70 pb30-md">
      <div className="container">
        <div className="row justify-content-between">
          <div className="col-lg-4 wow fadeInRight" data-wow-delay="300ms">
            <div className="cta-style mb30-md">
              <h2 className="cta-title mb35">Need something <br className="d-none d-xl-block" />done?</h2>
              <p className="text mb55 mb30-md">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever</p>
              <a href="page-contact.html" className="ud-btn btn-thm4 bdrs12">Get Started <i className="fal fa-arrow-right-long"></i></a>
            </div>
          </div>
          <div className="col-lg-6 wow fadeInLeft" data-wow-delay="300ms">
            <div className="row">
              <div className="col-sm-6">
                <div className="iconbox-style1 at-home11 mb-xl-5 bg-transparent p-0">
                  <div className="icon before-none text-center"><span className="flaticon-cv"></span></div>
                  <div className="details">
                    <h4 className="title mt10 mb-3">Post a job</h4>
                    <p className="text">It’s free and easy to post a job. Simply fill <br className="d-none d-xxl-block" /> in a title, description.</p>
                  </div>
                </div>
              </div>
              <div className="col-sm-6">
                <div className="iconbox-style1 at-home11 mb-xl-5 bg-transparent p-0">
                  <div className="icon before-none text-center"><span className="flaticon-web-design"></span></div>
                  <div className="details">
                    <h4 className="title mt10 mb-3">Choose freelancers</h4>
                    <p className="text">It’s free and easy to post a job. Simply fill <br className="d-none d-xxl-block"/> in a title, description.</p>
                  </div>
                </div>
              </div>
              <div className="col-sm-6">
                <div className="iconbox-style1 at-home11 mb-xl-5 bg-transparent p-0">
                  <div className="icon before-none text-center"><span className="flaticon-secure"></span></div>
                  <div className="details">
                    <h4 className="title mt10 mb-3">Pay safely</h4>
                    <p className="text">It’s free and easy to post a job. Simply fill <br className="d-none d-xxl-block"/> in a title, description.</p>
                  </div>
                </div>
              </div>
              <div className="col-sm-6">
                <div className="iconbox-style1 at-home11 mb-xl-5 bg-transparent p-0">
                  <div className="icon before-none text-center"><span className="flaticon-customer-service"></span></div>
                  <div className="details">
                    <h4 className="title mt10 mb-3">We’re here to help</h4>
                    <p className="text">It’s free and easy to post a job. Simply fill <br className="d-none d-xxl-block"/> in a title, description.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* <!-- Customers Testimonials --> */}
    <section className="pb-0">
      <div className="container">
        <div className="row wow fadeInUp">
          <div className="col-lg-12">
            <div className="testimonial-slider-home11 vam_nav_style dots_none slider-1-grid owl-carousel owl-theme">
              <div className="item">
                <div className="row align-items-center">
                  <div className="col-lg-5 col-xl-4">
                    <div className="testimonial-style4-img position-relative">
                      <img className="bdrs12" src="images/about/about-12.jpg" alt=""/>
                      <a className="video-button-home11 popup-iframe popup-youtube" href="https://www.youtube.com/watch?v=1WdiUn9JaX0"><i className="far fa-play"></i></a>
                    </div>
                  </div>
                  <div className="col-lg-6 col-xl-8">
                    <div className="testimonial-style4 position-relative">
                      <h2 className="sub-title text-thm mb25">Envato</h2>
                      <h4 className="title mb35">“ I have used Freeio numerous times for several different companies. I have always had great experiences. I once tried using someone else and I ended up having to cancel the order and move back to Freeio. ”</h4>
                      <h6 className="author fz14">Courtney Henry</h6>
                      <p className="desig mb-0">Product Manager | Envato</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="row align-items-center">
                  <div className="col-lg-5 col-xl-4">
                    <div className="testimonial-style4-img position-relative">
                      <img className="bdrs12" src="images/about/about-12.jpg" alt=""/>
                      <a className="video-button-home11 popup-iframe popup-youtube" href="https://www.youtube.com/watch?v=1WdiUn9JaX0"><i className="far fa-play"></i></a>
                    </div>
                  </div>
                  <div className="col-lg-6 col-xl-8">
                    <div className="testimonial-style4 position-relative">
                      <h2 className="sub-title text-thm mb25">Envato</h2>
                      <h4 className="title mb35">“ I have used Freeio numerous times for several different companies. I have always had great experiences. I once tried using someone else and I ended up having to cancel the order and move back to Freeio. ”</h4>
                      <h6 className="author fz14">Courtney Henry</h6>
                      <p className="desig mb-0">Product Manager | Envato</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* <!-- Our Partners -->  */}
    <section className="our-partners">
      <div className="container">
        <div className="row wow fadeInUp">
          <div className="col-lg-12">
            <div className="main-title text-center">
              <h6>Trusted by the world’s best</h6>
            </div>
          </div>
        </div>
        <div className="row wow fadeInUp" data-wow-delay="300ms">
          <div className="col-6 col-md-4 col-xl-2">
            <div className="partner_item text-center mb30-lg"><img className="wa m-auto" src="images/partners/1.png" alt="1.png" /></div>
          </div>
          <div className="col-6 col-md-4 col-xl-2">
            <div className="partner_item text-center mb30-lg"><img className="wa m-auto" src="images/partners/2.png" alt="2.png" /></div>
          </div>
          <div className="col-6 col-md-4 col-xl-2">
            <div className="partner_item text-center mb30-lg"><img className="wa m-auto" src="images/partners/3.png" alt="3.png" /></div>
          </div>
          <div className="col-6 col-md-4 col-xl-2">
            <div className="partner_item text-center mb30-lg"><img className="wa m-auto" src="images/partners/4.png" alt="4.png" /></div>
          </div>
          <div className="col-6 col-md-4 col-xl-2">
            <div className="partner_item text-center mb30-lg"><img className="wa m-auto" src="images/partners/5.png" alt="5.png" /></div>
          </div>
          <div className="col-6 col-md-4 col-xl-2">
            <div className="partner_item text-center mb30-lg"><img className="wa m-auto" src="images/partners/6.png" alt="6.png" /></div>
          </div>
        </div>
      </div>
    </section>

    {/* <!-- Our CTA -->  */}
    <section className="home11-cta-3 bdrs12 mx-auto maxw1700">
      <div className="container">
        <div className="row justify-content-between">
          <div className="col-md-6 col-lg-8 wow fadeInLeft">
            <div className="cta-style3">
              <h2 className="cta-title">Find the talent needed to get your <br className="d-none d-xl-block" />business growing.</h2>
              <p className="cta-text">Advertise your jobs to millions of monthly users and search 15.8 million CVs</p>
              <a href="page-contact.html" className="ud-btn btn-thm2">Get Started <i className="fal fa-arrow-right-long"></i></a>
            </div>
          </div>
          <div className="col-md-6 col-lg-4 wow fadeIn">
            <img className="home11-ctaimg-v3 d-none d-md-block" src="images/about/about-10.png" alt=""/>
          </div>
        </div>
      </div>
    </section>

    {/* <!-- Inspiring work --> */}
    <section className="pb90 pb20-md">
      <div className="container">
        <div className="row align-items-center wow fadeInUp" data-wow-delay="00ms">
          <div className="col-lg-9">
            <div className="main-title">
              <h2 className="title">Inspiring work made on Freeio</h2>
              <p className="paragraph">Get some Inspirations from 1800+ skills</p>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="text-start text-lg-end mb-4 mb-lg-2">
              <a className="ud-btn2" href="page-blog-v1.html">See more<i className="fal fa-arrow-right-long"></i></a>
            </div>
          </div>
        </div>
        <div className="row wow fadeInUp" data-wow-delay="300ms">
          <div className="col-sm-6 col-xl-3">
            <div className="listing-style1 bdrs12 default-box-shadow1">
              <div className="list-thumb">
                <img className="w-100" src="images/listings/pro-1.jpg" alt=""/>
              </div>
              <div className="list-content">
                <div className="list-meta">
                  <a className="d-flex align-items-center" href="#">
                    <span className="position-relative mr15">
                      <img className="rounded-circle" src="images/team/fl-m-1.png" alt="Freelancer Photo" />
                    </span>
                    <span>
                      <h5 className="fz14 mb-1">Caricatures</h5>
                      <p className="fz14 mb-0">by Ali Tufan</p>
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-xl-3">
            <div className="listing-style1 bdrs12 default-box-shadow1">
              <div className="list-thumb">
                <img className="w-100" src="images/listings/pro-2.jpg" alt=""/>
              </div>
              <div className="list-content">
                <div className="list-meta">
                  <a className="d-flex align-items-center" href="#">
                    <span className="position-relative mr15">
                      <img className="rounded-circle" src="images/team/fl-m-2.png" alt="Freelancer Photo"/>
                    </span>
                    <span>
                      <h5 className="fz14 mb-1">Product Photography</h5>
                      <p className="fz14 mb-0">by Ali Tufan</p>
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-xl-3">
            <div className="listing-style1 bdrs12 default-box-shadow1">
              <div className="list-thumb">
                <img className="w-100" src="images/listings/pro-3.jpg" alt=""/>
              </div>
              <div className="list-content">
                <div className="list-meta">
                  <a className="d-flex align-items-center" href="#">
                    <span className="position-relative mr15">
                      <img className="rounded-circle" src="images/team/fl-m-3.png" alt="Freelancer Photo" />
                    </span>
                    <span>
                      <h5 className="fz14 mb-1">UI Design</h5>
                      <p className="fz14 mb-0">by Ali Tufan</p>
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-xl-3">
            <div className="listing-style1 bdrs12 default-box-shadow1">
              <div className="list-thumb">
                <img className="w-100" src="images/listings/pro-4.jpg" alt=""/>
              </div>
              <div className="list-content">
                <div className="list-meta">
                  <a className="d-flex align-items-center" href="#">
                    <span className="position-relative mr15">
                      <img className="rounded-circle" src="images/team/fl-m-4.png" alt="Freelancer Photo" />
                    </span>
                    <span>
                      <h5 className="fz14 mb-1">App Design</h5>
                      <p className="fz14 mb-0">by Ali Tufan</p>
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
        </HomepageLayout>
    )
}

export default HomePage;