import AuthLayout from "../layout/AuthLayout";




const MemeberShipPlan = ()=>{

    return (
        <AuthLayout
        theme=""
        >
   <section className="our-pricing pb90">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 m-auto wow fadeInUp">
            <div className="main-title text-center mb30">
              <h2 className="title">Membership Plans</h2>
              <p className="paragraph mt10">Give your visitor a smooth online experience with a solid UX design</p>
            </div>
          </div>
        </div>
        <div className="row wow fadeInUp" data-wow-delay="200ms">
          <div className="col-lg-12">
            <div className="pricing_packages_top d-flex align-items-center justify-content-center mb60">
              <div className="toggle-btn">
                <span className="pricing_save1 dark-color ff-heading">Billed Monthly</span>
                <label className="switch">
                  <input type="checkbox" id="checbox"
                //    onclick="check()"
                   />
                  <span className="pricing_table_switch_slide round"></span>
                </label>
                <span className="pricing_save2 dark-color ff-heading">Billed Yearly</span>
                <span className="pricing_save3">Save 20%</span>
              </div>
            </div>
          </div>
        </div>
        <div className="row wow fadeInUp" data-wow-delay="300ms">
          <div className="col-sm-6 col-xl-3">
            <div className="pricing_packages text-center bdrs16">
              <div className="heading mb10">
                <h1 className="text2">$29 <small>/ monthly</small></h1>
                <h1 className="text1">$39 <small>/ monthly</small></h1>
                <h4 className="package_title mt-2">Basic Plan</h4>
              </div>
              <div className="details">
                <p className="text mb30">One time fee for one listing or task highlighted in search results.</p>
                <div className="pricing-list mb40">
                  <ul className="px-0">
                    <li>1 Listing</li>
                    <li>30 Days Visibility</li>
                    <li>Highlighted in Search Results</li>
                    <li>4 Revisions</li>
                    <li>9 days Delivery Time</li>
                    <li>Products Support</li>
                  </ul>
                </div>
                <div className="d-grid">
                  <a href="#" className="ud-btn btn-thm-border bdrs8">Buy Now<i className="fal fa-arrow-right-long"></i></a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-xl-3">
            <div className="pricing_packages active text-center bdrs16">
              <div className="heading mb10">
                <h1 className="text2">$49 <small>/ monthly</small></h1>
                <h1 className="text1">$59 <small>/ monthly</small></h1>
                <h4 className="package_title mt-2">Standard Plan</h4>
              </div>
              <div className="details">
                <p className="text mb30">One time fee for one listing or task highlighted in search results.</p>
                <div className="pricing-list mb40">
                  <ul className="px-0">
                    <li>1 Listing</li>
                    <li>30 Days Visibility</li>
                    <li>Highlighted in Search Results</li>
                    <li>4 Revisions</li>
                    <li>9 days Delivery Time</li>
                    <li>Products Support</li>
                  </ul>
                </div>
                <div className="d-grid">
                  <a href="#" className="ud-btn btn-thm-border bdrs8">Buy Now<i className="fal fa-arrow-right-long"></i></a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-xl-3">
            <div className="pricing_packages text-center bdrs16">
              <div className="heading mb10">
                <h1 className="text2">$89 <small>/ monthly</small></h1>
                <h1 className="text1">$99 <small>/ monthly</small></h1>
                <h4 className="package_title mt-2">Extended Plan</h4>
              </div>
              <div className="details">
                <p className="text mb30">One time fee for one listing or task highlighted in search results.</p>
                <div className="pricing-list mb40">
                  <ul className="px-0">
                    <li>1 Listing</li>
                    <li>30 Days Visibility</li>
                    <li>Highlighted in Search Results</li>
                    <li>4 Revisions</li>
                    <li>9 days Delivery Time</li>
                    <li>Products Support</li>
                  </ul>
                </div>
                <div className="d-grid">
                  <a href="#" className="ud-btn btn-thm-border bdrs8">Buy Now<i className="fal fa-arrow-right-long"></i></a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-xl-3">
            <div className="pricing_packages text-center bdrs16">
              <div className="heading mb10">
                <h1 className="text2">$129 <small>/ monthly</small></h1>
                <h1 className="text1">$139 <small>/ monthly</small></h1>
                <h4 className="package_title mt-2">Enterprise Plan</h4>
              </div>
              <div className="details">
                <p className="text mb30">One time fee for one listing or task highlighted in search results.</p>
                <div className="pricing-list mb40">
                  <ul className="px-0">
                    <li>1 Listing</li>
                    <li>30 Days Visibility</li>
                    <li>Highlighted in Search Results</li>
                    <li>4 Revisions</li>
                    <li>9 days Delivery Time</li>
                    <li>Products Support</li>
                  </ul>
                </div>
                <div className="d-grid">
                  <a href="#" className="ud-btn btn-thm-border bdrs8">Buy Now<i className="fal fa-arrow-right-long"></i></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
        </AuthLayout>
    )
}

export default MemeberShipPlan;