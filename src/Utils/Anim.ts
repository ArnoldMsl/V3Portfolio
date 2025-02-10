import { useEffect } from 'react';

interface ScrollOptions {
    rootMargin?: string;
    cb?: (el: Element) => void;
}

function addObserver(element: Element, options: ScrollOptions) {
    if (!('IntersectionObserver' in window)) {
        options.cb ? options.cb(element) : element.classList.add('active');
        return;
    }

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                options.cb ? options.cb(element) : entry.target.classList.add('active');
                observer.unobserve(entry.target);
            }
        });
    }, { rootMargin: options.rootMargin });

    observer.observe(element);
}

export function useScrollTrigger(selector: string, options: ScrollOptions) {
    useEffect(() => {
        const elements: NodeListOf<Element> = document.querySelectorAll(selector);
        elements.forEach(element => addObserver(element, options));

        return () => {
            elements.forEach(element => element.classList.remove('active'));
        };
    }, [selector, options.rootMargin]);
}
