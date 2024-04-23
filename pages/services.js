import Layout from "@/components/layout/Layout";
import Link from "next/link";
import { useState } from "react";
import Counter2 from "@/components/sections/Counter2";

export default function Service() {
    const [isActive, setIsActive] = useState({
        status: false,
        key: "",
    });

    const handleToggle = (key) => {
        if (isActive.key === key) {
            setIsActive({
                status: false,
            });
        } else {
            setIsActive({
                status: true,
                key,
            });
        }
    };
    return (
        <>
            <Layout breadcrumbTitle="Services">
                <div>
                    <section className="inner-services-area pt-115 pb-90">
                        <div className="container">
                            <div className="row justify-content-center">
                                <div className="col-lg-6">
                                    <div className="section-title text-center mb-50">
                                        <span className="sub-title">What We Do</span>
                                        <h2 className="title">Our Services Areas</h2>
                                    </div>
                                </div>
                            </div>
                            <div className="row justify-content-center">
                                <div className="col-lg-4 col-md-6 col-sm-10">
                                    <div
                                        className="services-item wow fadeInUp"
                                        data-wow-delay=".2s"
                                        data-background="/assets/img/services/services_item01.jpg"
                                        onMouseEnter={() => handleToggle(1)}
                                        onMouseLeave={() => handleToggle(1)}>
                                        <div
                                            className="services-icon"
                                            style={{
                                                display: `${isActive.key == 1 ? "none" : "flex"}`,
                                            }}>
                                            <img
                                                src="/assets/img/icon/services_icon01.svg"
                                                alt=""
                                            />
                                        </div>
                                        <div className="services-content">
                                            <h2
                                                className="title"
                                                style={{
                                                    display: `${
                                                        isActive.key == 1 ? "none" : "block"
                                                    }`,
                                                }}>
                                                <Link href="/services-details">Siding Corner</Link>
                                            </h2>
                                            <h2 className="number">01</h2>
                                        </div>
                                        <div
                                            className="services-overlay-content"
                                            style={{
                                                display: `${isActive.key == 1 ? "block" : "none"}`,
                                            }}>
                                            <h2 className="title">
                                                <Link href="/services-details">Siding Corner</Link>
                                            </h2>
                                            <p>
                                                There are many variations of passages of Lorem a
                                                Ipsum available, but the majority have suffered ali
                                                teration in some form
                                            </p>
                                            <Link href="/services-details" className="read-more">
                                                Read More <i className="fas fa-arrow-right" />
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 col-sm-10">
                                    <div
                                        className="services-item wow fadeInUp"
                                        data-wow-delay=".4s"
                                        data-background="/assets/img/services/services_item02.jpg"
                                        onMouseEnter={() => handleToggle(2)}
                                        onMouseLeave={() => handleToggle(2)}>
                                        <div
                                            className="services-icon"
                                            style={{
                                                display: `${isActive.key == 2 ? "none" : "flex"}`,
                                            }}>
                                            <img
                                                src="/assets/img/icon/services_icon02.svg"
                                                alt=""
                                            />
                                        </div>
                                        <div className="services-content">
                                            <h2
                                                className="title"
                                                style={{
                                                    display: `${
                                                        isActive.key == 2 ? "none" : "block"
                                                    }`,
                                                }}>
                                                <Link href="/services-details">Roofing Layers</Link>
                                            </h2>
                                            <h2 className="number">02</h2>
                                        </div>
                                        <div
                                            className="services-overlay-content"
                                            style={{
                                                display: `${isActive.key == 2 ? "block" : "none"}`,
                                            }}>
                                            <h2 className="title">
                                                <Link href="/services-details">Roofing Layers</Link>
                                            </h2>
                                            <p>
                                                There are many variations of passages of Lorem a
                                                Ipsum available, but the majority have suffered ali
                                                teration in some form
                                            </p>
                                            <Link href="/services-details" className="read-more">
                                                Read More <i className="fas fa-arrow-right" />
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 col-sm-10">
                                    <div
                                        className="services-item wow fadeInUp"
                                        data-wow-delay=".6s"
                                        data-background="/assets/img/services/services_item03.jpg"
                                        onMouseEnter={() => handleToggle(3)}
                                        onMouseLeave={() => handleToggle(3)}>
                                        <div
                                            className="services-icon"
                                            style={{
                                                display: `${isActive.key == 3 ? "none" : "flex"}`,
                                            }}>
                                            <img
                                                src="/assets/img/icon/services_icon03.svg"
                                                alt=""
                                            />
                                        </div>
                                        <div className="services-content">
                                            <h2
                                                className="title"
                                                style={{
                                                    display: `${
                                                        isActive.key == 3 ? "none" : "block"
                                                    }`,
                                                }}>
                                                <Link href="/services-details">
                                                    Roof Repairings
                                                </Link>
                                            </h2>
                                            <h2 className="number">03</h2>
                                        </div>
                                        <div
                                            className="services-overlay-content"
                                            style={{
                                                display: `${isActive.key == 3 ? "block" : "none"}`,
                                            }}>
                                            <h2 className="title">
                                                <Link href="/services-details">
                                                    Roof Repairings
                                                </Link>
                                            </h2>
                                            <p>
                                                There are many variations of passages of Lorem a
                                                Ipsum available, but the majority have suffered ali
                                                teration in some form
                                            </p>
                                            <Link href="/services-details" className="read-more">
                                                Read More <i className="fas fa-arrow-right" />
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 col-sm-10">
                                    <div
                                        className="services-item wow fadeInUp"
                                        data-wow-delay=".3s"
                                        data-background="/assets/img/services/services_item04.jpg"
                                        onMouseEnter={() => handleToggle(4)}
                                        onMouseLeave={() => handleToggle(4)}>
                                        <div
                                            className="services-icon"
                                            style={{
                                                display: `${isActive.key == 4 ? "none" : "flex"}`,
                                            }}>
                                            <img
                                                src="/assets/img/icon/services_icon04.svg"
                                                alt=""
                                            />
                                        </div>
                                        <div className="services-content">
                                            <h2
                                                className="title"
                                                style={{
                                                    display: `${
                                                        isActive.key == 4 ? "none" : "block"
                                                    }`,
                                                }}>
                                                <Link href="/services-details">
                                                    Roof Renovation
                                                </Link>
                                            </h2>
                                            <h2 className="number">04</h2>
                                        </div>
                                        <div
                                            className="services-overlay-content"
                                            style={{
                                                display: `${isActive.key == 4 ? "block" : "none"}`,
                                            }}>
                                            <h2 className="title">
                                                <Link href="/services-details">
                                                    Roof Renovation
                                                </Link>
                                            </h2>
                                            <p>
                                                There are many variations of passages of Lorem a
                                                Ipsum available, but the majority have suffered ali
                                                teration in some form
                                            </p>
                                            <Link href="/services-details" className="read-more">
                                                Read More <i className="fas fa-arrow-right" />
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 col-sm-10">
                                    <div
                                        className="services-item wow fadeInUp"
                                        data-wow-delay=".6s"
                                        data-background="/assets/img/services/services_item05.jpg"
                                        onMouseEnter={() => handleToggle(5)}
                                        onMouseLeave={() => handleToggle(5)}>
                                        <div
                                            className="services-icon"
                                            style={{
                                                display: `${isActive.key == 5 ? "none" : "flex"}`,
                                            }}>
                                            <img
                                                src="/assets/img/icon/services_icon05.svg"
                                                alt=""
                                            />
                                        </div>
                                        <div className="services-content">
                                            <h2
                                                className="title"
                                                style={{
                                                    display: `${
                                                        isActive.key == 5 ? "none" : "block"
                                                    }`,
                                                }}>
                                                <Link href="/services-details">Damage Roofing</Link>
                                            </h2>
                                            <h2 className="number">05</h2>
                                        </div>
                                        <div
                                            className="services-overlay-content"
                                            style={{
                                                display: `${isActive.key == 5 ? "block" : "none"}`,
                                            }}>
                                            <h2 className="title">
                                                <Link href="/services-details">Damage Roofing</Link>
                                            </h2>
                                            <p>
                                                There are many variations of passages of Lorem a
                                                Ipsum available, but the majority have suffered ali
                                                teration in some form
                                            </p>
                                            <Link href="/services-details" className="read-more">
                                                Read More <i className="fas fa-arrow-right" />
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 col-sm-10">
                                    <div
                                        className="services-item wow fadeInUp"
                                        data-wow-delay=".9s"
                                        data-background="/assets/img/services/services_item06.jpg"
                                        onMouseEnter={() => handleToggle(6)}
                                        onMouseLeave={() => handleToggle(6)}>
                                        <div
                                            className="services-icon"
                                            style={{
                                                display: `${isActive.key == 6 ? "none" : "flex"}`,
                                            }}>
                                            <img
                                                src="/assets/img/icon/services_icon06.svg"
                                                alt=""
                                            />
                                        </div>
                                        <div className="services-content">
                                            <h2
                                                className="title"
                                                style={{
                                                    display: `${
                                                        isActive.key == 6 ? "none" : "block"
                                                    }`,
                                                }}>
                                                <Link href="/services-details">
                                                    Roofing Animation
                                                </Link>
                                            </h2>
                                            <h2 className="number">06</h2>
                                        </div>
                                        <div
                                            className="services-overlay-content"
                                            style={{
                                                display: `${isActive.key == 6 ? "block" : "none"}`,
                                            }}>
                                            <h2 className="title">
                                                <Link href="/services-details">
                                                    Roofing Animation
                                                </Link>
                                            </h2>
                                            <p>
                                                There are many variations of passages of Lorem a
                                                Ipsum available, but the majority have suffered ali
                                                teration in some form
                                            </p>
                                            <Link href="/services-details" className="read-more">
                                                Read More <i className="fas fa-arrow-right" />
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    {/* services-area-end */}
                    {/* area-bg */}
                    <div className="area-bg">
                        <div
                            className="area-background-img jarallax"
                            data-background="/assets/img/bg/area_bg01.jpg"
                        />
                        {/* counter-area */}
                        <Counter2 />
                        {/* counter-area-end */}
                        {/* appointment-area */}
                        <section className="appointment-area pt-115">
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-12">
                                        <div className="section-title white-title mb-60">
                                            <span className="sub-title">
                                                Your roof require professional attention
                                            </span>
                                            <h2 className="title">Book Your Appointment</h2>
                                        </div>
                                    </div>
                                </div>
                                <div
                                    className="appointment-inner"
                                    data-background="/assets/img/bg/appointment_bg.jpg">
                                    <div className="row">
                                        <div className="col-xl-7">
                                            <div className="appointment-form">
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
                                                        <input
                                                            id="subject"
                                                            type="text"
                                                            placeholder="Subject"
                                                        />
                                                    </div>
                                                    <div className="form-grp">
                                                        <textarea
                                                            id="message"
                                                            placeholder="Your Message here"
                                                        />
                                                    </div>
                                                    <div className="form-grp h-[140px]">
                                                        <label className="flex gap-3">
                                                            <input
                                                                className="!h-6 !w-6"
                                                                type="checkbox"
                                                            />
                                                            <span>
                                                                By checking this box, I agree to
                                                                receive text messages (SMS) from C&P
                                                                Roofing regarding updates,
                                                                promotions, and other notifications.
                                                                I understand that standard text
                                                                messaging rates may apply, and I can
                                                                cancel these communications at any
                                                                time by texting "UNSUBSCRIBE" or
                                                                "STOP" to the provided number. For
                                                                more information on how my data is
                                                                used and my rights, I can review the{" "}
                                                                <Link
                                                                    className="text-blue-600"
                                                                    target="_blank"
                                                                    href="/privacy-policy">
                                                                    Privacy Policy
                                                                </Link>{" "}
                                                                and{" "}
                                                                <Link
                                                                    className="text-blue-600"
                                                                    target="_blank"
                                                                    href="/terms-and-conditions">
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
                                                <img
                                                    src="/assets/img/images/appointment_img.png"
                                                    alt=""
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                        {/* appointment-area-end */}
                    </div>
                    {/* area-bg-end */}
                    {/* support-area */}
                    <section className="support-area pt-115 pb-70">
                        <div className="container">
                            <div className="row justify-content-center">
                                <div className="col-xl-4 col-md-6">
                                    <div className="support-item">
                                        <div className="support-icon">
                                            <img src="/assets/img/icon/support_icon01.svg" alt="" />
                                        </div>
                                        <div className="support-content">
                                            <h4 className="title">Quick Response</h4>
                                            <p>
                                                There are many variations of passages Ipsum
                                                available but the
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-4 col-md-6">
                                    <div className="support-item">
                                        <div className="support-icon">
                                            <img src="/assets/img/icon/support_icon02.svg" alt="" />
                                        </div>
                                        <div className="support-content">
                                            <h4 className="title">Quick Response</h4>
                                            <p>
                                                There are many variations of passages Ipsum
                                                available but the
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-4 col-md-6">
                                    <div className="support-item">
                                        <div className="support-icon">
                                            <img src="/assets/img/icon/support_icon03.svg" alt="" />
                                        </div>
                                        <div className="support-content">
                                            <h4 className="title">Quick Response</h4>
                                            <p>
                                                There are many variations of passages Ipsum
                                                available but the
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </Layout>
        </>
    );
}
