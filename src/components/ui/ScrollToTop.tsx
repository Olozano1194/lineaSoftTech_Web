import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export const HEADER_OFFSET = 64;

const ScrollToTop = () => {
    const { pathname, hash } = useLocation();

    useEffect(() => {
        if (!hash) {
            window.scrollTo({ top: 0, behavior: 'instant' });
        }
    }, [pathname, hash]);

    return null;
};
export default ScrollToTop;