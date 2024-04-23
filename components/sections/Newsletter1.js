import Link from "next/link";

export default function Newsletter1() {
    return (
        <>
            <section
                className="newsletter-area jarallax newsletter-bg"
                data-background="/assets/img/bg/newsletter_bg.jpg"
            >
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-xl-5">
                            <div className="newsletter-content">
                                <div className="section-title white-title-two tg-heading-subheading animation-style3">
                                    <span className="sub-title tg-element-title">
                                        Quality Roofing Contact From
                                    </span>
                                    <h2 className="title tg-element-title">
                                        Need Roofing Any Services?
                                    </h2>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-7">
                            <div className="newsletter-form">
                                <form action="#" className="flex flex-col">
                                    <div className="flex w-full gap-3">
                                        <div className="form-grp">
                                            <input type="text" placeholder="Name*" />
                                        </div>
                                        <div className="form-grp">
                                            <input type="text" placeholder="Phone*" />
                                        </div>
                                    </div>
                                    <div className="w-full">
                                        <label className="flex gap-3 w-full">
                                            <input className="!h-6 !w-6" type="checkbox" />
                                            <span className="text-gray-400 w-full">
                                                By checking this box, I agree to receive text
                                                messages (SMS) from PC Roofing regarding updates,
                                                promotions, and other notifications. I understand
                                                that standard text messaging rates may apply, and I
                                                can cancel these communications at any time by
                                                texting "UNSUBSCRIBE" or "STOP" to the provided
                                                number. For more information on how my data is used
                                                and my rights, I can review the{" "}
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
                                    <button type="submit" className="btn btn-two">
                                        Submit Now
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
