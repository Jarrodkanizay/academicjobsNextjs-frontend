'use client'
import { useState, useRef, useEffect } from 'react';
import { BsFillShareFill } from 'react-icons/bs';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faXTwitter, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

import ShareJob from '@/components/ShareJob';

const ShareButton = ({ jobId, employerId, title, company_name }) => {
    const [showOptions, setShowOptions] = useState(false);
    const [showEmailModal, setShowEmailModal] = useState(false); 
    const url = typeof window !== 'undefined' ? window.location.href : '';
    const widgetRef = useRef(null);
    const buttonRef = useRef(null);

    const shareOptions = [
        { 
            name: 'Email', 
            onClick: () => setShowEmailModal(true), 
            icon: faEnvelope 
        },
        { 
            name: 'Facebook', 
            url: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`, 
            icon: faFacebookF 
        },
        { 
            name: 'Twitter', 
            url: `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}`, 
            icon: faXTwitter 
        },
        { 
            name: 'LinkedIn', 
            url: `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(url)}`, 
            icon: faLinkedinIn 
        },
    ];

    useEffect(() => {
        const handleClickOutside = event => {
            if (widgetRef.current && !widgetRef.current.contains(event.target) && !buttonRef.current.contains(event.target)) {
                setShowOptions(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <div>
            <button ref={buttonRef} className="mt-2 min-w-[32px]" onClick={() => setShowOptions(prev => !prev)}>
                <BsFillShareFill size={20} color="#2867B2" />
            </button>
            {showOptions && (
                <div ref={widgetRef} className="rounded-xl mt-3 ml-[-8px] p-4 absolute bg-white border border-gray-300 p-2">
                    <ul>
                        {shareOptions.map(option => (
                            <li key={option.name}>
                                {option.url ? (
                                    <a href={option.url} target="_blank" className="font-light" rel="noopener noreferrer">
                                        <FontAwesomeIcon icon={option.icon} className="mr-2" />
                                        {option.name}
                                    </a>
                                ) : (
                                    <button onClick={option.onClick} className="font-light">
                                        <FontAwesomeIcon icon={option.icon} className="mr-2" />
                                        {option.name}
                                    </button>
                                )}
                            </li>
                        ))}
                    </ul>
                </div>
            )}
            {showEmailModal && (
                <ShareJob
                    jobId={ jobId}
                    employerId={ employerId }
                    title={ title }
                    company_name={ company_name }
                    onClose={() => setShowEmailModal(false)} 
                />
            )}
        </div>
    );
};

export default ShareButton;
