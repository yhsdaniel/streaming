import { Menu, Transition } from '@headlessui/react'
import { Fragment } from 'react'
import { ChevronDownIcon, ArrowLeftStartOnRectangleIcon, PencilSquareIcon } from '@heroicons/react/20/solid'

export default function Dropdown(props) {
    return (
        <div className="w-56 text-right">
            <Menu as="div" className="relative inline-block text-left">
                <div>
                    <Menu.Button className="inline-flex w-full justify-center items-center rounded-md bg-black/20 px-3 py-1 text-sm font-medium text-white hover:bg-black/30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75">
                        <img src={'https://i.pravatar.cc/150?img=3'} alt="avatar" className="align-middle w-[25px] h-[25px] rounded-[50%]" />
                        <span className="text-lg pr-4 pl-2">{props.jwtdecodedName} </span>
                        <ChevronDownIcon
                            className="-mr-1 ml-2 h-5 w-5 text-violet-200 hover:text-violet-100"
                            aria-hidden="true"
                        />
                    </Menu.Button>
                </div>
                <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                >
                    <Menu.Items className="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none">
                        {/* <div className="px-1 py-1 ">
                            <Menu.Item>
                                {({ active }) => (
                                    <button
                                        className={`${active ? 'bg-orange-300 text-gray-900' : 'text-gray-900'
                                            } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                                    >
                                        <PencilSquareIcon
                                            className="mr-2 h-5 w-5 text-gray-900"
                                            aria-hidden="true"
                                        />
                                        Account
                                    </button>
                                )}
                            </Menu.Item>
                        </div> */}
                        <div className="px-1 py-1">
                            <Menu.Item>
                                {({ active }) => (
                                    <button
                                        className={`${active ? 'bg-orange-300 text-gray-900' : 'text-gray-900'
                                            } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                                        onClick={props.handleClick}
                                    >
                                        {active ? (
                                            <ArrowLeftStartOnRectangleIcon
                                                className="mr-2 h-5 w-5 text-gray-900"
                                                aria-hidden="true"
                                            />
                                        ) : (
                                            <ArrowLeftStartOnRectangleIcon
                                                className="mr-2 h-5 w-5 text-gray-900"
                                                aria-hidden="true"
                                            />
                                        )}
                                        Sign Out
                                    </button>
                                )}
                            </Menu.Item>
                        </div>
                    </Menu.Items>
                </Transition>
            </Menu>
        </div>
    )
}
