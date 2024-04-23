import { useState } from "react";
export default function Faq1() {
    const [isActive, setIsActive] = useState({
        status: false,
        key: 1,
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
            <section className="faq-area faq-bg" data-background="/assets/img/bg/faq_bg.jpg">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-10">
                            <div className="section-title text-center mb-60">
                                <span className="sub-title">Our Faqs</span>
                                <h2 className="title">Have Any Questions Answer?</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row align-items-center justify-content-center">
                        <div className="col-xl-6 col-lg-10 order-0 order-xl-2">
                            <div className="faq-img-wrap">
                                <img
                                    src="/assets/img/images/faq_img01.jpg"
                                    alt=""
                                    className="wow fadeInRight"
                                    data-wow-delay=".4s"
                                />
                                <img
                                    src="/assets/img/images/faq_img02.jpg"
                                    alt=""
                                    className="wow fadeInRight"
                                    data-wow-delay=".2s"
                                />
                                <div className="overlay-text wow fadeInUp" data-wow-delay=".6s">
                                    <h2 className="title">FAQ</h2>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-6">
                            <div className="faq-wrap">
                                <div className="accordion">
                                    <div className="accordion-item">
                                        <h2
                                            className="accordion-header"
                                            onClick={() => handleToggle(1)}>
                                            <button
                                                className={
                                                    isActive.key == 1
                                                        ? "accordion-button"
                                                        : "accordion-button collapsed "
                                                }>
                                                How Long Does a Roof Replacement Take from Start to
                                                Finish?
                                            </button>
                                        </h2>
                                        <div
                                            className={
                                                isActive.key == 1
                                                    ? "accordion-collapse collapse  show"
                                                    : "accordion-collapse collapse "
                                            }>
                                            <div className="accordion-body">
                                                <p>
                                                    Get an overview of the roof replacement process,
                                                    typical timelines, and factors that can affect
                                                    the duration of your roofing project. We'll
                                                    guide you through each step, from initial
                                                    inspection to project completion, so you know
                                                    what to expect.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <h2
                                            className="accordion-header"
                                            onClick={() => handleToggle(2)}>
                                            <button
                                                className={
                                                    isActive.key == 2
                                                        ? "accordion-button"
                                                        : "accordion-button collapsed "
                                                }>
                                                Are You Licensed, Insured, and Certified for Roofing
                                                Work?
                                            </button>
                                        </h2>
                                        <div
                                            className={
                                                isActive.key == 2
                                                    ? "accordion-collapse collapse  show"
                                                    : "accordion-collapse collapse "
                                            }>
                                            <div className="accordion-body">
                                                <p>
                                                    Safety and reliability are paramount when
                                                    choosing a roofing contractor. Discover the
                                                    importance of working with a licensed, insured,
                                                    and certified roofing company. You'll learn how
                                                    these qualifications protect you and ensure
                                                    quality workmanship on your roofing project.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <h2
                                            className="accordion-header"
                                            onClick={() => handleToggle(3)}>
                                            <button
                                                className={
                                                    isActive.key == 3
                                                        ? "accordion-button"
                                                        : "accordion-button collapsed "
                                                }>
                                                How Often Should My Roof Be Inspected?
                                            </button>
                                        </h2>
                                        <div
                                            className={
                                                isActive.key == 3
                                                    ? "accordion-collapse collapse  show"
                                                    : "accordion-collapse collapse "
                                            }>
                                            <div className="accordion-body">
                                                <p>
                                                    Get expert advice on the importance of regular
                                                    roof inspections to maintain the integrity of
                                                    your roofing system. Discover our recommended
                                                    inspection frequency to detect potential issues
                                                    before they turn into costly repairs, and learn
                                                    how our professional roofing services can extend
                                                    the life of your roof.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <h2
                                            className="accordion-header"
                                            onClick={() => handleToggle(4)}>
                                            <button
                                                className={
                                                    isActive.key == 4
                                                        ? "accordion-button"
                                                        : "accordion-button collapsed "
                                                }>
                                                Can You Help with Roofing Insurance Claims?
                                            </button>
                                        </h2>
                                        <div
                                            className={
                                                isActive.key == 4
                                                    ? "accordion-collapse collapse  show"
                                                    : "accordion-collapse collapse "
                                            }>
                                            <div className="accordion-body">
                                                <p>
                                                    Navigate the complex process of filing a roofing
                                                    insurance claim with our experienced team's
                                                    assistance. Find out how we can help you
                                                    accurately assess damages, provide detailed
                                                    estimates, and work with your insurance company
                                                    to ensure you receive the fair compensation
                                                    you're entitled to.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <h2
                                            className="accordion-header"
                                            onClick={() => handleToggle(5)}>
                                            <button
                                                className={
                                                    isActive.key == 5
                                                        ? "accordion-button"
                                                        : "accordion-button collapsed "
                                                }>
                                                What Regular Maintenance Does My Roof Need?{" "}
                                            </button>
                                        </h2>
                                        <div
                                            className={
                                                isActive.key == 5
                                                    ? "accordion-collapse collapse  show"
                                                    : "accordion-collapse collapse "
                                            }>
                                            <div className="accordion-body">
                                                <p>
                                                    Uncover our top recommendations for regular roof
                                                    maintenance to prevent long-term damage and
                                                    costly repairs. Learn about simple upkeep tasks
                                                    you can perform, and how our professional
                                                    maintenance services can help you keep your roof
                                                    in top condition, ensuring maximum protection
                                                    against the elements.{" "}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
