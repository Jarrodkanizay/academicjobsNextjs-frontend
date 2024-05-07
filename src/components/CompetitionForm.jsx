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
                            <div className="w-full sm:w-1/2 mb-4 sm:mb-0"> 
                                <div>
                                    <div className="flex">
                                        <img
                                            src={"/icons/heart-outline.svg"}
                                            width="40"
                                            height="40"
                                            alt="heart outline"
                                            className='mb-4 hidden md:block'
                                        />
                                        <p className="text-black p-2">Sign up and browse jobs,
                                            the more jobs you heart the
                                            more chances to win!</p>
                                    </div>
                                    <SignUpFormComp />
                                </div>
                            </div>
                            <div className=" hidden md:block md:w-1/2 bg-cover bg-center relative" style={{ backgroundImage: "url('/comp-image-desktop.jpg')" }}>
                            </div>
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