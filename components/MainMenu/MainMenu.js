import React, { Fragment } from "react";
import Link from "next/link";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid"


const classNames = (...classes) =>{
    return classes.filter(Boolean).join(' ')
}

const MainMenu = () => {
    return (
        <nav className="nav-content flex sticky top-0 z-1000 items-center w-full h-10 p-8 bg-zinc-100 shadow-light-50">
            <div className="flex gap-x-[3rem] items-center w-full max-w-7xl">
                <span className="logo">FLXPAY</span>
                <div className="desktop-menu flex justify-between items-center w-full">
                    <ul className="hidden lg:flex items-center gap-x-6 list-none">
                        <li><Link href="/shop"><a>Shop</a></Link></li>
                        <li>
                            <Menu as="div" className="relative inline-block text-left">
                                <div>
                                    <Menu.Button className="inline-flex w-full">
                                        Help
                                        <ChevronDownIcon className="-mr-1 ml-2 h-5 w-5" aria-hidden="true" />
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
                                    <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                        <div className="py-1">
                                            <Menu.Item>
                                                {({ active }) => (
                                                    <a
                                                        href="/faq"
                                                        className={classNames(
                                                            active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                                            'block px-4 py-2 text-sm'
                                                        )}
                                                    >
                                                        FAQ
                                                    </a>
                                                )}
                                            </Menu.Item>
                                            <Menu.Item>
                                                {({ active }) => (
                                                    <a
                                                        href="/support"
                                                        className={classNames(
                                                            active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                                            'block px-4 py-2 text-sm'
                                                        )}
                                                    >
                                                        Customer Support
                                                    </a>
                                                )}
                                            </Menu.Item>


                                        </div>
                                    </Menu.Items>
                                </Transition>
                            </Menu>
                        </li>
                        <li>
                            <Link href="/solutions">
                                <a>For Business</a>
                            </Link>
                        </li>
                    </ul>
                    <div className="signup">
                        <ul className="hidden lg:flex items-center">
                            <li><Link href="/about"><a>Sign Up</a></Link></li>
                        </ul>
                    </div>
                </div>
                <div className="mobile-menu"></div>
            </div>
        </nav>
    )
}
export default MainMenu;
