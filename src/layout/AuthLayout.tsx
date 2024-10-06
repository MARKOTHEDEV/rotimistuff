

type Prop =React.PropsWithChildren<{
    theme?:string
}>
const AuthLayout = ({
    children,
    theme ='bgc-thm4'
}:Prop)=>{
    return (
        <div
         className={theme}
        >
            <div className="wrapper ovh">
            {/* <!-- Main Header Nav --> */}
                            <header className="header-nav nav-innerpage-style main-menu">
                                {/* <!-- Ace Responsive Menu --> */}
                                <nav className="posr"> 
                                <div className="container-fluid posr menu_bdrt1">
                                    <div className="row align-items-center justify-content-between">
                                    <div className="col-auto pe-0">
                                        <div className="d-flex align-items-center">
                                        <a className="header-logo bdrr1 pr30 pr5-xl" href="index.html"><img src="images/header-logo-dark.svg" alt="Header Logo" /></a>
                                        <div className="home1_style">
                                            <div id="mega-menu">
                                            <a className="btn-mega fw500" href="#"><span className="pl30 pl10-xl pr5 fz15 vam flaticon-menu"></span> Categories</a>
                                            <ul className="menu ps-0">
                                                <li> <a className="dropdown" href="#"> <span className="menu-icn flaticon-developer"></span> <span className="menu-title">Development & IT</span> </a>
                                                <div className="drop-menu d-flex justify-content-between">
                                                    <div className="one-third">
                                                    <div className="h6 cat-title">Web & App Design</div>
                                                    <ul className="ps-0 mb40">
                                                        <li><a href="#">Website Design</a></li>
                                                        <li><a href="#">App DesignUX Design</a></li>
                                                        <li><a href="#">Landing Page Design</a></li>
                                                        <li><a href="#">Icon Design</a></li>
                                                    </ul>
                                                    <div className="h6 cat-title">Marketing Design</div>
                                                    <ul className="ps-0 mb-0">
                                                        <li><a href="#">Social Media Design</a></li>
                                                        <li><a href="#">Email Design</a></li>
                                                        <li><a href="#">Web Banners</a></li>
                                                        <li><a href="#">Signage Design</a></li>
                                                    </ul>
                                                    </div>
                                                    <div className="one-third">
                                                    <div className="h6 cat-title">Art & Illustration</div>
                                                    <ul className="ps-0 mb40">
                                                        <li><a href="#">Illustration</a></li>
                                                        <li><a href="#">NFT Art</a></li>
                                                        <li><a href="#">Pattern Design</a></li>
                                                        <li><a href="#">Portraits & Caricatures</a></li>
                                                        <li><a href="#">Cartoons & Comics</a></li>
                                                        <li><a href="#">Tattoo Design</a></li>
                                                        <li><a href="#">Storyboards</a></li>
                                                    </ul>
                                                    <div className="h6 cat-title">Gaming</div>
                                                    <ul className="ps-0 mb-0">
                                                        <li><a href="#">Game Art</a></li>
                                                        <li><a href="#">Graphics for Streamers</a></li>
                                                        <li><a href="#">Twitch Store</a></li>
                                                    </ul>
                                                    </div>
                                                    <div className="one-third">
                                                    <div className="h6 cat-title">Visual Design</div>
                                                    <ul className="ps-0 mb40">
                                                        <li><a href="#">Image Editing</a></li>
                                                        <li><a href="#">Presentation Design</a></li>
                                                        <li><a href="#">Infographic Design</a></li>
                                                        <li><a href="#">Vector Tracing</a></li>
                                                        <li><a href="#">Resume Design</a></li>
                                                    </ul>
                                                    <div className="h6 cat-title">Print Design</div>
                                                    <ul className="ps-0 mb-0">
                                                        <li><a href="#">T-Shirts & Merchandise</a></li>
                                                        <li><a href="#">Flyer Design</a></li>
                                                        <li><a href="#">Brochure Design</a></li>
                                                        <li><a href="#">Poster Design</a></li>
                                                        <li><a href="#">Catalog Design</a></li>
                                                    </ul>
                                                    </div>
                                                </div>
                                                </li>
                                                <li> <a className="dropdown" href="#"> <span className="menu-icn flaticon-web-design-1"></span> <span className="menu-title">Design & Creative</span> </a>
                                                <div className="drop-menu d-flex justify-content-between">
                                                    <div className="one-third">
                                                    <div className="h6 cat-title">Web & App Design</div>
                                                    <ul className="ps-0 mb40">
                                                        <li><a href="#">Website Design</a></li>
                                                        <li><a href="#">App DesignUX Design</a></li>
                                                        <li><a href="#">Landing Page Design</a></li>
                                                        <li><a href="#">Icon Design</a></li>
                                                    </ul>
                                                    <div className="h6 cat-title">Marketing Design</div>
                                                    <ul className="ps-0 mb-0">
                                                        <li><a href="#">Social Media Design</a></li>
                                                        <li><a href="#">Email Design</a></li>
                                                        <li><a href="#">Web Banners</a></li>
                                                        <li><a href="#">Signage Design</a></li>
                                                    </ul>
                                                    </div>
                                                    <div className="one-third">
                                                    <div className="h6 cat-title">Art & Illustration</div>
                                                    <ul className="ps-0 mb40">
                                                        <li><a href="#">Illustration</a></li>
                                                        <li><a href="#">NFT Art</a></li>
                                                        <li><a href="#">Pattern Design</a></li>
                                                        <li><a href="#">Portraits & Caricatures</a></li>
                                                        <li><a href="#">Cartoons & Comics</a></li>
                                                        <li><a href="#">Tattoo Design</a></li>
                                                        <li><a href="#">Storyboards</a></li>
                                                    </ul>
                                                    <div className="h6 cat-title">Gaming</div>
                                                    <ul className="ps-0 mb-0">
                                                        <li><a href="#">Game Art</a></li>
                                                        <li><a href="#">Graphics for Streamers</a></li>
                                                        <li><a href="#">Twitch Store</a></li>
                                                    </ul>
                                                    </div>
                                                    <div className="one-third">
                                                    <div className="h6 cat-title">Visual Design</div>
                                                    <ul className="ps-0 mb40">
                                                        <li><a href="#">Image Editing</a></li>
                                                        <li><a href="#">Presentation Design</a></li>
                                                        <li><a href="#">Infographic Design</a></li>
                                                        <li><a href="#">Vector Tracing</a></li>
                                                        <li><a href="#">Resume Design</a></li>
                                                    </ul>
                                                    <div className="h6 cat-title">Print Design</div>
                                                    <ul className="ps-0 mb-0">
                                                        <li><a href="#">T-Shirts & Merchandise</a></li>
                                                        <li><a href="#">Flyer Design</a></li>
                                                        <li><a href="#">Brochure Design</a></li>
                                                        <li><a href="#">Poster Design</a></li>
                                                        <li><a href="#">Catalog Design</a></li>
                                                    </ul>
                                                    </div>
                                                </div>
                                                </li>
                                                <li> <a className="dropdown" href="#"> <span className="menu-icn flaticon-digital-marketing"></span> <span className="menu-title">Digital Marketing</span> </a>
                                                <div className="drop-menu d-flex justify-content-between">
                                                    <div className="one-third">
                                                    <div className="h6 cat-title">Web & App Design</div>
                                                    <ul className="ps-0 mb40">
                                                        <li><a href="#">Website Design</a></li>
                                                        <li><a href="#">App DesignUX Design</a></li>
                                                        <li><a href="#">Landing Page Design</a></li>
                                                        <li><a href="#">Icon Design</a></li>
                                                    </ul>
                                                    <div className="h6 cat-title">Marketing Design</div>
                                                    <ul className="ps-0 mb-0">
                                                        <li><a href="#">Social Media Design</a></li>
                                                        <li><a href="#">Email Design</a></li>
                                                        <li><a href="#">Web Banners</a></li>
                                                        <li><a href="#">Signage Design</a></li>
                                                    </ul>
                                                    </div>
                                                    <div className="one-third">
                                                    <div className="h6 cat-title">Art & Illustration</div>
                                                    <ul className="ps-0 mb40">
                                                        <li><a href="#">Illustration</a></li>
                                                        <li><a href="#">NFT Art</a></li>
                                                        <li><a href="#">Pattern Design</a></li>
                                                        <li><a href="#">Portraits & Caricatures</a></li>
                                                        <li><a href="#">Cartoons & Comics</a></li>
                                                        <li><a href="#">Tattoo Design</a></li>
                                                        <li><a href="#">Storyboards</a></li>
                                                    </ul>
                                                    <div className="h6 cat-title">Gaming</div>
                                                    <ul className="ps-0 mb-0">
                                                        <li><a href="#">Game Art</a></li>
                                                        <li><a href="#">Graphics for Streamers</a></li>
                                                        <li><a href="#">Twitch Store</a></li>
                                                    </ul>
                                                    </div>
                                                    <div className="one-third">
                                                    <div className="h6 cat-title">Visual Design</div>
                                                    <ul className="ps-0 mb40">
                                                        <li><a href="#">Image Editing</a></li>
                                                        <li><a href="#">Presentation Design</a></li>
                                                        <li><a href="#">Infographic Design</a></li>
                                                        <li><a href="#">Vector Tracing</a></li>
                                                        <li><a href="#">Resume Design</a></li>
                                                    </ul>
                                                    <div className="h6 cat-title">Print Design</div>
                                                    <ul className="ps-0 mb-0">
                                                        <li><a href="#">T-Shirts & Merchandise</a></li>
                                                        <li><a href="#">Flyer Design</a></li>
                                                        <li><a href="#">Brochure Design</a></li>
                                                        <li><a href="#">Poster Design</a></li>
                                                        <li><a href="#">Catalog Design</a></li>
                                                    </ul>
                                                    </div>
                                                </div>
                                                </li>
                                                <li> <a className="dropdown" href="#"> <span className="menu-icn flaticon-translator"></span> <span className="menu-title">Writing & Translation</span> </a>
                                                <div className="drop-menu d-flex justify-content-between">
                                                    <div className="one-third">
                                                    <div className="h6 cat-title">Web & App Design</div>
                                                    <ul className="ps-0 mb40">
                                                        <li><a href="#">Website Design</a></li>
                                                        <li><a href="#">App DesignUX Design</a></li>
                                                        <li><a href="#">Landing Page Design</a></li>
                                                        <li><a href="#">Icon Design</a></li>
                                                    </ul>
                                                    <div className="h6 cat-title">Marketing Design</div>
                                                    <ul className="ps-0 mb-0">
                                                        <li><a href="#">Social Media Design</a></li>
                                                        <li><a href="#">Email Design</a></li>
                                                        <li><a href="#">Web Banners</a></li>
                                                        <li><a href="#">Signage Design</a></li>
                                                    </ul>
                                                    </div>
                                                    <div className="one-third">
                                                    <div className="h6 cat-title">Art & Illustration</div>
                                                    <ul className="ps-0 mb40">
                                                        <li><a href="#">Illustration</a></li>
                                                        <li><a href="#">NFT Art</a></li>
                                                        <li><a href="#">Pattern Design</a></li>
                                                        <li><a href="#">Portraits & Caricatures</a></li>
                                                        <li><a href="#">Cartoons & Comics</a></li>
                                                        <li><a href="#">Tattoo Design</a></li>
                                                        <li><a href="#">Storyboards</a></li>
                                                    </ul>
                                                    <div className="h6 cat-title">Gaming</div>
                                                    <ul className="ps-0 mb-0">
                                                        <li><a href="#">Game Art</a></li>
                                                        <li><a href="#">Graphics for Streamers</a></li>
                                                        <li><a href="#">Twitch Store</a></li>
                                                    </ul>
                                                    </div>
                                                    <div className="one-third">
                                                    <div className="h6 cat-title">Visual Design</div>
                                                    <ul className="ps-0 mb40">
                                                        <li><a href="#">Image Editing</a></li>
                                                        <li><a href="#">Presentation Design</a></li>
                                                        <li><a href="#">Infographic Design</a></li>
                                                        <li><a href="#">Vector Tracing</a></li>
                                                        <li><a href="#">Resume Design</a></li>
                                                    </ul>
                                                    <div className="h6 cat-title">Print Design</div>
                                                    <ul className="ps-0 mb-0">
                                                        <li><a href="#">T-Shirts & Merchandise</a></li>
                                                        <li><a href="#">Flyer Design</a></li>
                                                        <li><a href="#">Brochure Design</a></li>
                                                        <li><a href="#">Poster Design</a></li>
                                                        <li><a href="#">Catalog Design</a></li>
                                                    </ul>
                                                    </div>
                                                </div>
                                                </li>
                                                <li> <a className="dropdown" href="#"> <span className="menu-icn flaticon-microphone"></span> <span className="menu-title">Music & Audio</span> </a>
                                                <div className="drop-menu d-flex justify-content-between">
                                                    <div className="one-third">
                                                    <div className="h6 cat-title">Web & App Design</div>
                                                    <ul className="ps-0 mb40">
                                                        <li><a href="#">Website Design</a></li>
                                                        <li><a href="#">App DesignUX Design</a></li>
                                                        <li><a href="#">Landing Page Design</a></li>
                                                        <li><a href="#">Icon Design</a></li>
                                                    </ul>
                                                    <div className="h6 cat-title">Marketing Design</div>
                                                    <ul className="ps-0 mb-0">
                                                        <li><a href="#">Social Media Design</a></li>
                                                        <li><a href="#">Email Design</a></li>
                                                        <li><a href="#">Web Banners</a></li>
                                                        <li><a href="#">Signage Design</a></li>
                                                    </ul>
                                                    </div>
                                                    <div className="one-third">
                                                    <div className="h6 cat-title">Art & Illustration</div>
                                                    <ul className="ps-0 mb40">
                                                        <li><a href="#">Illustration</a></li>
                                                        <li><a href="#">NFT Art</a></li>
                                                        <li><a href="#">Pattern Design</a></li>
                                                        <li><a href="#">Portraits & Caricatures</a></li>
                                                        <li><a href="#">Cartoons & Comics</a></li>
                                                        <li><a href="#">Tattoo Design</a></li>
                                                        <li><a href="#">Storyboards</a></li>
                                                    </ul>
                                                    <div className="h6 cat-title">Gaming</div>
                                                    <ul className="ps-0 mb-0">
                                                        <li><a href="#">Game Art</a></li>
                                                        <li><a href="#">Graphics for Streamers</a></li>
                                                        <li><a href="#">Twitch Store</a></li>
                                                    </ul>
                                                    </div>
                                                    <div className="one-third">
                                                    <div className="h6 cat-title">Visual Design</div>
                                                    <ul className="ps-0 mb40">
                                                        <li><a href="#">Image Editing</a></li>
                                                        <li><a href="#">Presentation Design</a></li>
                                                        <li><a href="#">Infographic Design</a></li>
                                                        <li><a href="#">Vector Tracing</a></li>
                                                        <li><a href="#">Resume Design</a></li>
                                                    </ul>
                                                    <div className="h6 cat-title">Print Design</div>
                                                    <ul className="ps-0 mb-0">
                                                        <li><a href="#">T-Shirts & Merchandise</a></li>
                                                        <li><a href="#">Flyer Design</a></li>
                                                        <li><a href="#">Brochure Design</a></li>
                                                        <li><a href="#">Poster Design</a></li>
                                                        <li><a href="#">Catalog Design</a></li>
                                                    </ul>
                                                    </div>
                                                </div>
                                                </li>
                                                <li> <a className="dropdown" href="#"> <span className="menu-icn flaticon-video-file"></span> <span className="menu-title">Video & Animation</span> </a>
                                                <div className="drop-menu d-flex justify-content-between">
                                                    <div className="one-third">
                                                    <div className="h6 cat-title">Web & App Design</div>
                                                    <ul className="ps-0 mb40">
                                                        <li><a href="#">Website Design</a></li>
                                                        <li><a href="#">App DesignUX Design</a></li>
                                                        <li><a href="#">Landing Page Design</a></li>
                                                        <li><a href="#">Icon Design</a></li>
                                                    </ul>
                                                    <div className="h6 cat-title">Marketing Design</div>
                                                    <ul className="ps-0 mb-0">
                                                        <li><a href="#">Social Media Design</a></li>
                                                        <li><a href="#">Email Design</a></li>
                                                        <li><a href="#">Web Banners</a></li>
                                                        <li><a href="#">Signage Design</a></li>
                                                    </ul>
                                                    </div>
                                                    <div className="one-third">
                                                    <div className="h6 cat-title">Art & Illustration</div>
                                                    <ul className="ps-0 mb40">
                                                        <li><a href="#">Illustration</a></li>
                                                        <li><a href="#">NFT Art</a></li>
                                                        <li><a href="#">Pattern Design</a></li>
                                                        <li><a href="#">Portraits & Caricatures</a></li>
                                                        <li><a href="#">Cartoons & Comics</a></li>
                                                        <li><a href="#">Tattoo Design</a></li>
                                                        <li><a href="#">Storyboards</a></li>
                                                    </ul>
                                                    <div className="h6 cat-title">Gaming</div>
                                                    <ul className="ps-0 mb-0">
                                                        <li><a href="#">Game Art</a></li>
                                                        <li><a href="#">Graphics for Streamers</a></li>
                                                        <li><a href="#">Twitch Store</a></li>
                                                    </ul>
                                                    </div>
                                                    <div className="one-third">
                                                    <div className="h6 cat-title">Visual Design</div>
                                                    <ul className="ps-0 mb40">
                                                        <li><a href="#">Image Editing</a></li>
                                                        <li><a href="#">Presentation Design</a></li>
                                                        <li><a href="#">Infographic Design</a></li>
                                                        <li><a href="#">Vector Tracing</a></li>
                                                        <li><a href="#">Resume Design</a></li>
                                                    </ul>
                                                    <div className="h6 cat-title">Print Design</div>
                                                    <ul className="ps-0 mb-0">
                                                        <li><a href="#">T-Shirts & Merchandise</a></li>
                                                        <li><a href="#">Flyer Design</a></li>
                                                        <li><a href="#">Brochure Design</a></li>
                                                        <li><a href="#">Poster Design</a></li>
                                                        <li><a href="#">Catalog Design</a></li>
                                                    </ul>
                                                    </div>
                                                </div>
                                                </li>
                                                <li> <a className="dropdown" href="#"> <span className="menu-icn flaticon-ruler"></span> <span className="menu-title">Engineering & Architecture</span> </a>
                                                <div className="drop-menu d-flex justify-content-between">
                                                    <div className="one-third">
                                                    <div className="h6 cat-title">Web & App Design</div>
                                                    <ul className="ps-0 mb40">
                                                        <li><a href="#">Website Design</a></li>
                                                        <li><a href="#">App DesignUX Design</a></li>
                                                        <li><a href="#">Landing Page Design</a></li>
                                                        <li><a href="#">Icon Design</a></li>
                                                    </ul>
                                                    <div className="h6 cat-title">Marketing Design</div>
                                                    <ul className="ps-0 mb-0">
                                                        <li><a href="#">Social Media Design</a></li>
                                                        <li><a href="#">Email Design</a></li>
                                                        <li><a href="#">Web Banners</a></li>
                                                        <li><a href="#">Signage Design</a></li>
                                                    </ul>
                                                    </div>
                                                    <div className="one-third">
                                                    <div className="h6 cat-title">Art & Illustration</div>
                                                    <ul className="ps-0 mb40">
                                                        <li><a href="#">Illustration</a></li>
                                                        <li><a href="#">NFT Art</a></li>
                                                        <li><a href="#">Pattern Design</a></li>
                                                        <li><a href="#">Portraits & Caricatures</a></li>
                                                        <li><a href="#">Cartoons & Comics</a></li>
                                                        <li><a href="#">Tattoo Design</a></li>
                                                        <li><a href="#">Storyboards</a></li>
                                                    </ul>
                                                    <div className="h6 cat-title">Gaming</div>
                                                    <ul className="ps-0 mb-0">
                                                        <li><a href="#">Game Art</a></li>
                                                        <li><a href="#">Graphics for Streamers</a></li>
                                                        <li><a href="#">Twitch Store</a></li>
                                                    </ul>
                                                    </div>
                                                    <div className="one-third">
                                                    <div className="h6 cat-title">Visual Design</div>
                                                    <ul className="ps-0 mb40">
                                                        <li><a href="#">Image Editing</a></li>
                                                        <li><a href="#">Presentation Design</a></li>
                                                        <li><a href="#">Infographic Design</a></li>
                                                        <li><a href="#">Vector Tracing</a></li>
                                                        <li><a href="#">Resume Design</a></li>
                                                    </ul>
                                                    <div className="h6 cat-title">Print Design</div>
                                                    <ul className="ps-0 mb-0">
                                                        <li><a href="#">T-Shirts & Merchandise</a></li>
                                                        <li><a href="#">Flyer Design</a></li>
                                                        <li><a href="#">Brochure Design</a></li>
                                                        <li><a href="#">Poster Design</a></li>
                                                        <li><a href="#">Catalog Design</a></li>
                                                    </ul>
                                                    </div>
                                                </div>
                                                </li>
                                                <li> <a className="dropdown" href="#"> <span className="menu-icn flaticon-goal"></span> <span className="menu-title">Finance & Accounting</span> </a>
                                                <div className="drop-menu d-flex justify-content-between">
                                                    <div className="one-third">
                                                    <div className="h6 cat-title">Web & App Design</div>
                                                    <ul className="ps-0 mb40">
                                                        <li><a href="#">Website Design</a></li>
                                                        <li><a href="#">App DesignUX Design</a></li>
                                                        <li><a href="#">Landing Page Design</a></li>
                                                        <li><a href="#">Icon Design</a></li>
                                                    </ul>
                                                    <div className="h6 cat-title">Marketing Design</div>
                                                    <ul className="ps-0 mb-0">
                                                        <li><a href="#">Social Media Design</a></li>
                                                        <li><a href="#">Email Design</a></li>
                                                        <li><a href="#">Web Banners</a></li>
                                                        <li><a href="#">Signage Design</a></li>
                                                    </ul>
                                                    </div>
                                                    <div className="one-third">
                                                    <div className="h6 cat-title">Art & Illustration</div>
                                                    <ul className="ps-0 mb40">
                                                        <li><a href="#">Illustration</a></li>
                                                        <li><a href="#">NFT Art</a></li>
                                                        <li><a href="#">Pattern Design</a></li>
                                                        <li><a href="#">Portraits & Caricatures</a></li>
                                                        <li><a href="#">Cartoons & Comics</a></li>
                                                        <li><a href="#">Tattoo Design</a></li>
                                                        <li><a href="#">Storyboards</a></li>
                                                    </ul>
                                                    <div className="h6 cat-title">Gaming</div>
                                                    <ul className="ps-0 mb-0">
                                                        <li><a href="#">Game Art</a></li>
                                                        <li><a href="#">Graphics for Streamers</a></li>
                                                        <li><a href="#">Twitch Store</a></li>
                                                    </ul>
                                                    </div>
                                                    <div className="one-third">
                                                    <div className="h6 cat-title">Visual Design</div>
                                                    <ul className="ps-0 mb40">
                                                        <li><a href="#">Image Editing</a></li>
                                                        <li><a href="#">Presentation Design</a></li>
                                                        <li><a href="#">Infographic Design</a></li>
                                                        <li><a href="#">Vector Tracing</a></li>
                                                        <li><a href="#">Resume Design</a></li>
                                                    </ul>
                                                    <div className="h6 cat-title">Print Design</div>
                                                    <ul className="ps-0 mb-0">
                                                        <li><a href="#">T-Shirts & Merchandise</a></li>
                                                        <li><a href="#">Flyer Design</a></li>
                                                        <li><a href="#">Brochure Design</a></li>
                                                        <li><a href="#">Poster Design</a></li>
                                                        <li><a href="#">Catalog Design</a></li>
                                                    </ul>
                                                    </div>
                                                </div>
                                                </li>
                                            </ul>
                                            </div>
                                        </div>
                                        </div>
                                    </div>
                                    <div className="col-auto">
                                        <div className="d-flex align-items-center">
                                        {/* <!-- Responsive Menu Structure--> */}
                                        <ul id="respMenu" className="ace-responsive-menu" data-menu-style="horizontal">
                                            <li className="visible_list"> <a className="list-item" href="#"><span className="title">Home</span></a>
                                            {/* <!-- Level Two--> */}
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
                                            <li className="visible_list"> <a className="list-item" href="#"><span className="title">Browse Jobs</span></a>
                                            <ul >
                                                <li> <a href="#"><span className="title">Services</span></a>
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
                                                <li> <a href="#"><span className="title">Projects</span></a>
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
                                                <li> <a href="#"><span className="title">Job View</span></a>
                                                <ul>
                                                    <li><a href="page-job-list-v1.html">Job list v1</a></li>
                                                    <li><a href="page-job-list-v2.html">Job list v2</a></li>
                                                    <li><a href="page-job-list-v3.html">Job list V3</a></li>
                                                    <li><a href="page-job-list-single.html">Job Single</a></li>
                                                </ul>
                                                </li>
                                            </ul>
                                            </li>
                                            <li className="visible_list"> <a className="list-item" href="#"><span className="title">Users</span></a>
                                            <ul>
                                                <li> <a href="#"><span className="title">Dashboard</span></a>
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
                                                <li> <a href="#"><span className="title">Employee</span></a>
                                                <ul>
                                                    <li><a href="page-employee-v1.html">Employee V1</a></li>
                                                    <li><a href="page-employee-v2.html">Employee V2</a></li>
                                                    <li><a href="page-employee-single.html">Employee Single</a></li>
                                                </ul>
                                                </li>
                                                <li> <a href="#"><span className="title">Freelancer</span></a>
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
                                                <li> <a href="page-become-seller.html"><span className="title">Become Seller</span></a></li>
                                            </ul>
                                            </li>
                                            <li className="visible_list"> <a className="list-item" href="#"><span className="title">Pages</span></a>
                                            <ul>
                                                <li> <a href="#"><span className="title">About</span></a>
                                                <ul>
                                                    <li><a href="page-about.html">About v1</a></li>
                                                    <li><a href="page-about-v2.html">About v2</a></li>
                                                </ul>
                                                </li>
                                                <li> <a href="#"><span className="title">Blog</span></a>
                                                <ul>
                                                    <li><a href="page-blog-v1.html">List V1</a></li>
                                                    <li><a href="page-blog-v2.html">List V2</a></li>
                                                    <li><a href="page-blog-v3.html">List V3</a></li>
                                                    <li><a href="page-blog-single.html">Single</a></li>
                                                </ul>
                                                </li>
                                                <li> <a href="#"><span className="title">Shop</span></a>
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
                                            <li> <a className="list-item" href="page-contact.html">Contact</a></li>
                                        </ul>
                                        <a className="login-info bdrl1 pl15-lg pl30" data-bs-toggle="modal" href="#exampleModalToggle" role="button"><span className="flaticon-loupe"></span></a>
                                        <a className="login-info mx15-lg mx30" href="page-become-seller.html"><span className="d-none d-xl-inline-block">Become a</span> Seller</a>
                                        <a className="login-info mr15-lg mr30" href="page-login.html">Sign in</a>
                                        <a className="ud-btn btn-thm add-joining" href="page-register.html">Join</a>
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

                            <div className="hiddenbar-body-ovelay"></div>

                            {/* <!-- Mobile Nav  --> */}
                            <div id="page" className="mobilie_header_nav stylehome1">
                                <div className="mobile-menu">
                                <div className="header bdrb1">
                                    <div className="menu_and_widgets">
                                    <div className="mobile_menu_bar d-flex justify-content-between align-items-center">
                                        <a className="mobile_logo" href="#"><img src="images/header-logo-dark.svg" alt="" /></a>
                                        <div className="right-side text-end">
                                        <a className="" href="page-login.html">join</a>
                                        <a className="menubar ml30" href="#menu"><img src="images/mobile-dark-nav-icon.svg" alt="" /></a>
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
            
            
                <div
                className="body_content"
                >
                {children}
                </div>         
            
            
            
            
            
            
            </div>
        </div>
    );
};

export default AuthLayout;