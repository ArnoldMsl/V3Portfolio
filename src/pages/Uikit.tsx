import React, { useEffect } from 'react';

function scrollTrigger(selector, options) {
    let elements = document.querySelectorAll(selector);
    elements = Array.from(elements);
    elements.forEach(element => {
        addObserver(element, options);
    });
}

function addObserver(element, options) {
    if (!('IntersectionObserver' in window)) {
        if (options.cb) {
            options.cb(element);
        } else {
            element.classList.add('active');
        }
        return;
    }

    let observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                if (options.cb) {
                    options.cb(element);
                } else {
                    entry.target.classList.add('active');
                }
                observer.unobserve(entry.target);
            }
        });
    }, options);
    observer.observe(element);
}

function Uikit() {
    useEffect(() => {
        scrollTrigger('.scroll-reveal', {
            rootMargin: '-50px',
        });
        scrollTrigger('.pop-reveal', {
            rootMargin: '-50px',
        });
    }, []);

    return (
        <>
            <h1 className={'customH1 scroll-reveal pop'}>ARNOLD MASSELIN</h1>
            <h1 className={'customH1 scroll-reveal animatedX left'}>H1 : Montserrat, bold, 80</h1>
            <h2 className={'customH2 scroll-reveal animatedX right'}>H2 : Montserrat, bold, 50</h2>
            <h3 className={'customH3 scroll-reveal animatedX right'}>H3 : Montserrat, Semibold, 40</h3>
            <h4 className={'customH4 scroll-reveal animatedX left'}>H4, Buttons : Montserrat, Semibold, 30</h4>
            <p className={'flex w-1/2 scroll-reveal animatedY bottom'}>
                p, Biryani, regular, 20 : <br />
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            </p>
            <button className={'customButton'}>Button</button>
        </>
    );
}

export default Uikit;
