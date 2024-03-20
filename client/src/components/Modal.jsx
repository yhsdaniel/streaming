/* eslint-disable react/prop-types */
import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'
import VideoBanner from '../pages/VideoBanner'
import { LazyLoadImage } from "react-lazy-load-image-component";

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
                    className="bg-gray-400/65 px-6 py-2 text-lg text-white font-bold flex justify-center items-center rounded cursor-pointer hover:bg-gray-400/90 duration-150 ease-in-out z-10"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-8 h-8 mr-2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z" />
                    </svg>
                    Trailer
                </button>
                :
                <LazyLoadImage
                    className='w-full h-full'
                    alt='Image Alt'
                    src={props.image}
                    effect="blur"
                    onClick={openModal}
                />
            }

            <Transition appear show={isOpen} as={Fragment}>
                <Dialog as="div" className="relative z-50" onClose={closeModal}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-black/25" />
                    </Transition.Child>

                    <div className="fixed inset-0 overflow-y-auto bg-black/50">
                        <div className="flex w-full h-full items-center justify-center text-center">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95"
                            >
                                <Dialog.Panel className="w-[80%] h-[90%] max-[600px]:w-[95%] transform rounded-2xl bg-black text-left overflow-auto align-middle shadow-xl transition-all">
                                    <VideoBanner id={props.id} title={props.title} videoTypes={props.typesFilm} />
                                    <div className='mt-4 px-8 bg-black w-full flex justify-center items-start flex-col'>
                                        <div className='flex justify-start items-center my-4'>
                                            <div className='cursor-pointer flex justify-center items-center text-black hover:text-orange-500 duration-150 ease-in-out font-bold rounded bg-white/90 px-4'>
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 my-2 mr-2 cursor-pointer">
                                                    <path fillRule="evenodd" d="M4.5 5.653c0-1.427 1.529-2.33 2.779-1.643l11.54 6.347c1.295.712 1.295 2.573 0 3.286L7.28 19.99c-1.25.687-2.779-.217-2.779-1.643V5.653Z" clipRule="evenodd" />
                                                </svg>
                                                Play
                                            </div>
                                            <div className='cursor-pointer flex justify-center items-center hover:text-orange-500 duration-150 ease-in-out px-4'>
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-8 h-8 my-2 mr-2 cursor-pointer">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                                                </svg>
                                                Whistlist
                                            </div>
                                        </div>
                                        <div className='flex justify-start items-start max-[600px]:flex-col my-4'>
                                            <div className='w-3/12 my-4 max-[600px]:w-6/12'>
                                                <img src={props.image} alt="Image Alt" className='w-full h-full' />
                                            </div>
                                            <div className='flex-1 px-4 max-[600px]:w-full max-[600px]:px-0'>
                                                <h1 className='text-3xl'>{props.title}</h1>
                                                <p>{props.runtime}</p>
                                                <p className='pt-6'>{props.overview}</p>
                                                <p className='mt-8 text-sm'>Release date: {props.date}</p>
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
