import Link from "next/link";
import { LiaHammerSolid } from "react-icons/lia";

export default function Footer1() {
    return (
        <>
            <footer>
                <div
                    className="footer-area footer-bg"
                    data-background="/assets/img/bg/footer_bg.jpg"
                >
                    <div className="footer-top">
                        <div className="container">
                            <div className="row">
                                <div className="col-xl-3 col-lg-4 col-md-7">
                                    <div className="footer-widget">
                                        <h2 className="fw-title">About Us</h2>
                                        <div className="footer-content">
                                            <p>
                                                PC Roofing is committed to superior craftsmanship,
                                                innovative solutions, and exceptional service,
                                                ensuring durable and dependable roofing for your
                                                family’s safety and comfort.
                                            </p>
                                            <div className="footer-newsletter">
                                                <h4 className="title">
                                                    Subscribe to Our Newsletter
                                                </h4>
                                                <form action="#">
                                                    <input
                                                        type="text"
                                                        placeholder="Enter your email"
                                                    />
                                                    <button type="submit" className="btn btn-two">
                                                        Subscribe
                                                    </button>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-lg-4 col-md-5 col-sm-6">
                                    <div className="footer-widget">
                                        <h2 className="fw-title">Our Services</h2>
                                        <div className="footer-link">
                                            <ul className="list-wrap">
                                                <li>
                                                    <Link href="/project">
                                                        <i className="fas fa-angle-double-right" />
                                                        Single Ply Roofing
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link href="/project">
                                                        <i className="fas fa-angle-double-right" />
                                                        Modified Roofing
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link href="/project">
                                                        <i className="fas fa-angle-double-right" />
                                                        Built-Up Roofing
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link href="/project">
                                                        <i className="fas fa-angle-double-right" />
                                                        Metal Roofing
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link href="/project">
                                                        <i className="fas fa-angle-double-right" />
                                                        Vegetative Roofing
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link href="/project">
                                                        <i className="fas fa-angle-double-right" />
                                                        Specialty Metal
                                                    </Link>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-2 col-lg-4 col-md-6 col-sm-6">
                                    <div className="footer-widget">
                                        <h2 className="fw-title">Quick Links</h2>
                                        <div className="footer-link">
                                            <ul className="list-wrap">
                                                <li>
                                                    <Link href="/terms-and-conditions">
                                                        <i className="fas fa-angle-double-right" />
                                                        Terms Conditions
                                                    </Link>
                                                </li>

                                                <li>
                                                    <Link href="/privacy-policy">
                                                        <i className="fas fa-angle-double-right" />
                                                        Privacy Policy
                                                    </Link>
                                                </li>

                                                <li>
                                                    <Link href="/contact">
                                                        <i className="fas fa-angle-double-right" />
                                                        Contact Us
                                                    </Link>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-4 col-lg-5 col-md-6">
                                    <div className="footer-widget">
                                        <h2 className="fw-title">Instagram Posts</h2>
                                        <div className="footer-instagram">
                                            <ul className="list-wrap">
                                                <li>
                                                    <Link href="/#">
                                                        <img
                                                            src="/assets/img/instagram/f_insta_img01.jpg"
                                                            alt=""
                                                        />
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link href="/#">
                                                        <img
                                                            src="/assets/img/instagram/f_insta_img02.jpg"
                                                            alt=""
                                                        />
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link href="/#">
                                                        <img
                                                            src="/assets/img/instagram/f_insta_img03.jpg"
                                                            alt=""
                                                        />
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link href="/#">
                                                        <img
                                                            src="/assets/img/instagram/f_insta_img04.jpg"
                                                            alt=""
                                                        />
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link href="/#">
                                                        <img
                                                            src="/assets/img/instagram/f_insta_img05.jpg"
                                                            alt=""
                                                        />
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link href="/#">
                                                        <img
                                                            src="/assets/img/instagram/f_insta_img06.jpg"
                                                            alt=""
                                                        />
                                                    </Link>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="footer-logo-area">
                                <div className="row align-items-center">
                                    <div className="col-xl-3 col-lg-3 col-md-12">
                                        <div className="logo different-logo">
                                            <Link href="/">
                                                <div className="flex items-center gap-2">
                                                    {/* <LiaHammerSolid size={35} color="#cbd5e1" /> */}
                                                    <p
                                                        className="text-3xl text-slate-300 font-extrabold"
                                                        style={{
                                                            fontFamily: `'Russo One', sans-serif`,
                                                        }}
                                                    >
                                                        PC Roofing
                                                    </p>
                                                </div>
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="col-xl-4 col-lg-4 col-md-6">
                                        <div className="footer-contact">
                                            <div className="icon">
                                                <i className="fas fa-phone-alt" />
                                            </div>
                                            <div className="content">
                                                <span>Phone No</span>
                                                <Link href="/tel:4145313160">(414) 531-3160</Link>
                                            </div>
                                        </div>
                                    </div>
                                    {/* <div className="col-xl-5 col-lg-5 col-md-6">
                                        <div className="footer-social">
                                            <h2 className="title">Follow Us:</h2>
                                            <ul className="list-wrap">
                                                <li><Link href="/#"><i className="fab fa-facebook-f" /></Link></li>
                                                <li><Link href="/#"><i className="fab fa-twitter" /></Link></li>
                                                <li><Link href="/#"><i className="fab fa-linkedin-in" /></Link></li>
                                                <li><Link href="/#"><i className="fab fa-youtube" /></Link></li>
                                            </ul>
                                        </div>
                                    </div> */}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="footer-bottom">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="copyright-text">
                                        <p>
                                            © Copyright {new Date().getFullYear()}. All Right
                                            Reserved
                                        </p>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="footer-bootom-menu">
                                        <ul className="list-wrap">
                                            <li>
                                                <Link href="/privacy-policy">Privacy Policy</Link>
                                            </li>
                                            <li>
                                                <Link href="/terms-and-conditions">
                                                    Terms Conditions
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
}
