'use client';
import React, { useState, useEffect } from 'react';
import SignUpFormComp from './SignUpFormComp';

function ModalForm() {
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const firstVisit = localStorage.getItem('firstVisit') === null;

        if (firstVisit) {
            setIsOpen(true);
            localStorage.setItem('firstVisit', 'no');
        }
    }, []);

    return (
        <div className="">
            {isOpen && (
                <div className="modal modal-open ">

                    <div className="modal-box max-w-none w-[370px] md:w-[1300px]"> 
                        <div className="flex flex-col sm:flex-row">
                            <img
                                src="/comp-image-mobile.jpg"
                                width="600"
                                height="100"
                                alt="comp image mobile"
                                className='mb-3 md:hidden block'
                            />
                            <div className="sm:w-1/2 mb-4 sm:mb-0"> 
                                <div>
                                    <div className="flex">
                                        <img
                                            src={"/icons/heart.svg"}
                                            width="80"
                                            height="80"
                                            alt="heart outline"
                                            className='mb-8 hidden md:block'
                                        />
                                        <img
                                            src={"/icons/heart.svg"}
                                            width="50"
                                            height="50"
                                            alt="heart outline"
                                            className='md:hidden block'
                                        />
                                        <h3 className="text-black font-light p-2 md:hidden block">Sign Up! and The more jobs you like (save), the more chances to win.</h3>
                                        <h2 className="text-black font-light p-2 hidden md:block">Sign Up! and The more jobs you like (save), the more chances to win.</h2>
                                    </div>
                                    <SignUpFormComp />
                                </div>
                            </div>
                            <img
                                src="/comp-image-desktop.png"
                                width="600"
                                height="200"
                                alt="comp image desktop"
                                className='hidden md:block'
                            />
                        </div>
                        <div className="modal-action">
                            <button type="button" className="btn" onClick={() => setIsOpen(false)}>Close</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );

}

export default ModalForm;