import Slider from "react-slick";
const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    autoplay: false,
    arrows: false,
    fade: true,
    slidesToShow: 1,
    slidesToScroll: 1,
};
export default function Testimonial2() {
    return (
        <>
            <section className="testimonial-area-two pt-110">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-xl-6">
                            <div className="section-title text-center mb-50">
                                <span className="sub-title">Our Testimonial</span>
                                <h2 className="title">What Our Client Feedback</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-lg-10">
                            <div className="testimonial-inner">
                                <Slider {...settings} className="testimonial-active-two">
                                    <div className="testimonial-item-two">
                                        <div className="testimonial-avatar-two">
                                            <img
                                                src="/assets/img/images/h2_testi_avatar01.png"
                                                alt=""
                                            />
                                        </div>
                                        <div className="testimonial-content-two">
                                            <div className="content-top">
                                                <div className="icon">
                                                    <i className="fas fa-quote-left" />
                                                </div>
                                                <div className="rating">
                                                    <i className="fas fa-star" />
                                                    <i className="fas fa-star" />
                                                    <i className="fas fa-star" />
                                                    <i className="fas fa-star" />
                                                    <i className="fas fa-star" />
                                                </div>
                                            </div>
                                            <p>
                                                PC Roofing turned our rickety old roof into a solid,
                                                stylish haven in no time. They worked within our
                                                tight schedule, provided thorough answers to all our
                                                questions, and left the place spotless. We're
                                                thrilled with the service and the peace of mind that
                                                comes with a job well done.
                                            </p>
                                            <div className="content-bottom">
                                                <h4 className="title">Darrell Steward</h4>
                                                <span>Roofing Expert</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="testimonial-item-two">
                                        <div className="testimonial-avatar-two">
                                            <img
                                                src="/assets/img/images/h2_testi_avatar02.png"
                                                alt=""
                                            />
                                        </div>
                                        <div className="testimonial-content-two">
                                            <div className="content-top">
                                                <div className="icon">
                                                    <i className="fas fa-quote-left" />
                                                </div>
                                                <div className="rating">
                                                    <i className="fas fa-star" />
                                                    <i className="fas fa-star" />
                                                    <i className="fas fa-star" />
                                                    <i className="fas fa-star" />
                                                    <i className="fas fa-star" />
                                                </div>
                                            </div>
                                            <p>
                                                The team at PC Roofing exceeded our expectations.
                                                They expertly navigated our complex roof layout and
                                                delivered a beautiful, leak-free result.
                                                Professional, efficient, and courteous - they truly
                                                stand out in the roofing industry.
                                            </p>
                                            <div className="content-bottom">
                                                <h4 className="title">Robert C. Simmons</h4>
                                                <span>Roofing Expert</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="testimonial-item-two">
                                        <div className="testimonial-avatar-two">
                                            <img
                                                src="/assets/img/images/h2_testi_avatar03.png"
                                                alt=""
                                            />
                                        </div>
                                        <div className="testimonial-content-two">
                                            <div className="content-top">
                                                <div className="icon">
                                                    <i className="fas fa-quote-left" />
                                                </div>
                                                <div className="rating">
                                                    <i className="fas fa-star" />
                                                    <i className="fas fa-star" />
                                                    <i className="fas fa-star" />
                                                    <i className="fas fa-star" />
                                                    <i className="fas fa-star" />
                                                </div>
                                            </div>
                                            <p>
                                                PC Roofing was a game-changer for our cottage's
                                                quirky roof. Their attention to detail, premium
                                                materials, and transparent pricing have made all the
                                                difference. Our roof's durability and appearance
                                                have been transformed, thanks to their top-notch
                                                craftsmanship.
                                            </p>
                                            <div className="content-bottom">
                                                <h4 className="title">Karikoka Ahli</h4>
                                                <span>Executive Manager</span>
                                            </div>
                                        </div>
                                    </div>
                                </Slider>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
