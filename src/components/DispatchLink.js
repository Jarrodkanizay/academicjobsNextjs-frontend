import React from 'react';
import { useStore } from '@/lib/store/store';
import { useRouter } from 'next/navigation';

const DispatchLink = ({ to, region, children, setDropdown, setIsNavOpen }) => {
    const router = useRouter();
   
    const { setRegion } = useStore();
    const handleClick = (e) => {
        e.preventDefault();
        setRegion(region)
        console.log("region", region)
        router.push(to);

        setDropdown(false);
        setIsNavOpen(false);
    };
    return <button onClick={handleClick}>{children}</button>;
};
export default DispatchLink;
