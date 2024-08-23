'use client';

// import AOS
import AOS from 'aos';

import React, { useEffect } from 'react';
import GLightbox from 'glightbox';
import './Hero.css';
import HeroBtn from '../../components/Button/HeroBtn';
import OrderBtn from '@/app/components/Button/OrderBtn';

export default function Hero() {

    useEffect(() => {
        AOS.init({
            duration: 1000,
            easing: 'ease-in-out',
            once: false,
            mirror: false,
        });
    }, []);

    return (
        <section id="hero" className="d-flex align-items-center">
            <div
                className="container position-relative text-center text-lg-start"
                data-aos="zoom-in"
                data-aos-delay="100"
            >
                <div className="row">
                    <div className="col-lg-8">
                        <h1>
                            New Taste Of <span>India</span>
                        </h1>
                        <h2>Delivering great food for more than 18 years!</h2>

                        <div className="btns">
                            <OrderBtn name="Order Takeout" url="https://order.online/store/new-taste-of-india-lethbridge-1084895/?hideModal=true&pickup=true&utm_medium=wp_plugin&utm_source=sdk&visitorId=222331914e0ad97714dabc" />
                            <OrderBtn name="Order Delivery" url="https://order.online/business/-139827?utm_medium=wp_plugin&delivery=true&utm_source=sdk&visitorId=222331914e0ad97714dabc" />
                            
                        </div>
                    </div>
                    <div
                        className="col-lg-4 d-flex align-items-center justify-content-center position-relative"
                        data-aos="zoom-in"
                        data-aos-delay="200"
                    >
                        <a
                            href="tel:+14033286666"
                            className="glightbox play-btn"
                        ></a>
                    </div>
                </div>
            </div>
        </section>
    );
}