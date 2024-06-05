/* eslint-disable react/prop-types */
import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'
import VideoBanner from './VideoBanner'
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
                    className="bg-gray-600 px-6 py-2 text-base text-white font-bold flex justify-center items-center rounded-3xl cursor-pointer hover:bg-gray-500 duration-150 ease-in-out z-10"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-8 h-8 mr-2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z" />
                    </svg>
                    Trailer
                </button>
                :
                <LazyLoadImage
                    key={props.id}
                    className='w-full h-full'
                    alt='Image'
                    src={props.image}
                    effect="blur"
                    loading='lazy'
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

                    <div className="fixed inset-0 overflow-y-auto bg-gray-700/50">
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
                                <Dialog.Panel className="w-[80%] h-[90%] max-[600px]:w-[95%] transform rounded-2xl bg-black text-left overflow-auto align-middle transition-all shadow-gray-600 p-4 shadow-inner">
                                    <VideoBanner id={props.id} title={props.title} videoTypes={props.typesFilm} />
                                    <div className='mt-4 bg-black w-full flex justify-center items-start flex-col max-[600px]:px-2'>
                                        <div className='flex justify-start items-start max-[600px]:flex-col my-4'>
                                            <div className='w-3/12 max-[600px]:w-6/12'>
                                                <img src={props.image} alt="Image Alt" className='w-full h-full' />
                                            </div>
                                            <div className='flex-1 px-4 max-[600px]:w-full max-[600px]:px-0 max-[600px]:py-4'>
                                                <h1 className='text-3xl'>{props.title}</h1>
                                                <p>{props.runtime}</p>
                                                <div className='flex justify-center items-start my-4 h-8'>
                                                    <h1 className="w-3/12 h-full text-xl max-[1024px]:text-xl"><span class="fa fa-star text-orange-300"></span> {props.rating} / 10</h1>
                                                    <p className='flex-1 text-sm h-full'>Release date: {props.date}</p>
                                                </div>
                                                <p className='pt-6'>{props.overview}</p>
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
