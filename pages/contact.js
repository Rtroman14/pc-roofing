import Layout from "@/components/layout/Layout";
import Link from "next/link";

export default function Contact() {
    return (
        <>
            <Layout breadcrumbTitle="Contact Us">
                <section className="contact-area pt-120 pb-120">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-xl-6 col-lg-10">
                                <div
                                    className="contact-form-wrap"
                                    data-background="/assets/img/images/contact_form_bg.jpg"
                                >
                                    <h2 className="title">Contact With Us</h2>
                                    <p>Send us a message and we' ll respond as soon as possible</p>
                                    <form action="#" className="contact-form">
                                        <div className="row">
                                            <div className="col-md-6">
                                                <div className="form-grp">
                                                    <input
                                                        id="firstName"
                                                        type="text"
                                                        placeholder="First Name*"
                                                    />
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="form-grp">
                                                    <input
                                                        id="lastName"
                                                        type="text"
                                                        placeholder="Last Name*"
                                                    />
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="form-grp">
                                                    <input
                                                        id="email"
                                                        type="email"
                                                        placeholder="Email Address*"
                                                    />
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="form-grp">
                                                    <input
                                                        id="phone"
                                                        type="text"
                                                        placeholder="Phone Number*"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="form-grp">
                                            <input id="subject" type="text" placeholder="Subject" />
                                        </div>
                                        <div className="form-grp">
                                            <textarea
                                                id="message"
                                                placeholder="Your Message here"
                                            />
                                        </div>
                                        <div className="form-grp">
                                            <label className="flex gap-3">
                                                <input className="!h-6 !w-6" type="checkbox" />
                                                <span>
                                                    By checking this box, I agree to receive text
                                                    messages (SMS) from PC Roofing regarding
                                                    updates, promotions, and other notifications. I
                                                    understand that standard text messaging rates
                                                    may apply, and I can cancel these communications
                                                    at any time by texting "UNSUBSCRIBE" or "STOP"
                                                    to the provided number. For more information on
                                                    how my data is used and my rights, I can review
                                                    the{" "}
                                                    <Link
                                                        className="text-blue-600"
                                                        target="_blank"
                                                        href="/privacy-policy"
                                                    >
                                                        Privacy Policy
                                                    </Link>{" "}
                                                    and{" "}
                                                    <Link
                                                        className="text-blue-600"
                                                        target="_blank"
                                                        href="/terms-and-conditions"
                                                    >
                                                        Terms and Conditions
                                                    </Link>
                                                    .
                                                </span>
                                            </label>
                                        </div>
                                        <button className="btn" type="submit">
                                            Send Message
                                        </button>
                                    </form>
                                </div>
                            </div>
                            <div className="col-xl-6 col-lg-10">
                                <div className="contact-info-wrap">
                                    <h2 className="title">Need Any Help?</h2>
                                    <p>Call us or message and we' ll respond as soon as possible</p>
                                    <ul className="list-wrap">
                                        <li>
                                            <div className="contact-info-item">
                                                <div className="icon">
                                                    <i className="fas fa-phone-alt" />
                                                </div>
                                                <div className="content">
                                                    <Link href="tel:4145313160">
                                                        +1 (414) 531-3160
                                                    </Link>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="contact-info-item">
                                                <div className="icon">
                                                    <i className="fas fa-envelope" />
                                                </div>
                                                <div className="content">
                                                    <Link href="mailto:chris@pcroofing.org">
                                                        chris@pcroofing.org
                                                    </Link>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="contact-info-item">
                                                <div className="icon">
                                                    <i className="fas fa-map-marker-alt" />
                                                </div>
                                                <div className="content">
                                                    <p>
                                                        3435 Torrente Ave <br /> Naples, FL
                                                    </p>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                                {/* contact-map */}
                                <div id="contact-map">
                                    <iframe
                                        src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=3435%20Torrente%20Ave,%20Naples,%20FL%2034112+(C&amp;P%20Roofing)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                                        height={570}
                                        style={{ border: 0, width: "100%" }}
                                        allowFullScreen
                                        loading="lazy"
                                        referrerPolicy="no-referrer-when-downgrade"
                                    />
                                </div>
                                {/* contact-map-end */}
                            </div>
                        </div>
                    </div>
                </section>
            </Layout>
        </>
    );
}
