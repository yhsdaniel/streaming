/* eslint-disable react/prop-types */
import React from 'react';
import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'
import { LazyLoadImage } from "react-lazy-load-image-component";

const VideoBanner = React.lazy(() => import('./VideoBanner'))

export default function Modal(props) {
    let [isOpen, setIsOpen] = useState(false)

    function closeModal() {
        setIsOpen(false)
    }

    function openModal() {
        setIsOpen(true)
    }

    return (
        <>
            {props.labelModal ?
                <button
                    type="button"
                    onClick={openModal}
                    className="bg-gray-600 px-6 py-2 text-base text-white font-bold flex justify-center items-center rounded-3xl cursor-pointer hover:bg-gray-500 duration-150 ease-in-out z-10 max-[600px]:px-4    ">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-8 h-8 mr-2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z" />
                    </svg>
                    Trailer
                </button>
                :
                <LazyLoadImage
                    key={props.id}
                    alt='Image'
                    src={props.image}
                    className='size-full'
                    width='200'
                    height='300'
                    loading='lazy'
                    onClick={openModal}
                />
                // <img key={props.id} src={props.image} alt="Image" onClick={openModal} loading='lazy' className='w-full h-full' />
            }
            <Transition appear show={isOpen} as={Fragment}>
                <Dialog as="div" className="relative z-50" onClose={closeModal}>
                    <div className="fixed inset-0 overflow-y-auto flex justify-center items-center bg-gray-700/50">
                        <div className="flex size-full md:w-[90%] md:h-[90%] items-center justify-center text-center">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-500"
                                enterFrom="translate-x-full" /* Start completely off-screen (to the right) */
                                enterTo="translate-x-0"      /* End at its final position */
                                leave="ease-in duration-300"
                                leaveFrom="translate-x-0"    /* Start at its final position */
                                leaveTo="translate-x-full"
                            >
                                <Dialog.Panel className="size-full bg-black text-left overflow-auto p-4">
                                    <button
                                        onClick={closeModal}
                                        className="top-4 left-4 my-2 text-white text-2xl flex items-center focus:outline-none hover:text-gray-400 transition"
                                        aria-label="Close"
                                    >
                                        <span className="material-icons">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                                            </svg>
                                        </span>
                                    </button>
                                    <VideoBanner id={props.id} title={props.title} videoTypes={props.typesFilm} />
                                    <div className='mt-4 bg-black w-full flex justify-center items-start flex-col max-[600px]:px-2'>
                                        <p className='text-2xl'>{props.title}</p>
                                        <div className='flex flex-col md:flex-row justify-start items-start my-4'>
                                            <div className='w-6/12 sm:w-4/12 mt-4'>
                                                <img src={props.image} alt="Image Alt" className='size-full' />
                                            </div>
                                            <div className='flex-1 px-4 max-[600px]:w-full max-[600px]:px-0 max-[600px]:py-4'>
                                                <p>{props.runtime}</p>
                                                <div className='flex justify-center items-center my-4 h-8'>
                                                    <h1 className="w-5/12 h-full text-lg"><span className="fa fa-star text-orange-300"></span> {props.rating} / 10</h1>
                                                    <p className='flex-1 text-sm'>Release date: {props.date}</p>
                                                </div>
                                                <p className='pt-4 text-base md:text-sm'>{props.overview}</p>
                                            </div>
                                        </div>
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>
        </>
    )
}
