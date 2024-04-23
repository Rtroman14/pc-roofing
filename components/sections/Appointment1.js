import Link from "next/link";

export default function Appointment1() {
    return (
        <>
            <section className="appointment-area pt-115">
                <div className="container">
                    <div className="row">
                        <div>
                            <div className="section-title white-title mb-12"></div>
                        </div>
                    </div>
                    <div data-background="/assets/img/bg/appointment_bg.jpg">
                        <div className="row">
                            <div className="col-xl-7">
                                <div
                                    className="contact-form-wrap"
                                    data-background="/assets/img/images/contact_form_bg.jpg"
                                >
                                    <h2 className="title">Book Your Appointment</h2>
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
                            <div className="col-xl-5">
                                <div className="appointment-img">
                                    <img src="/assets/img/images/appointment_img.png" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
