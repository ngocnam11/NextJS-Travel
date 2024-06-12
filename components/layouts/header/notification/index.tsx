import { Popover, PopoverButton, PopoverGroup, Transition } from '@headlessui/react'
import React, { Fragment } from 'react'
import "./notification.scss"
import { AiOutlineBell } from "react-icons/ai"
import Image from 'next/image'

const notifications = [
    {
        id: 1,
        label: "Notify 1",
        author: "JohnDoe1",
        avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        content: "Lorem ipsum, dolor sit amet consectetur adipisicing....",
        isRead: false
    },
    {
        id: 2,
        label: "Notify 2",
        author: "JohnDoe2",
        avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        content: "Lorem ipsum, dolor sit amet consectetur adipisicing....",
        isRead: false
    },
    {
        id: 3,
        label: "Notify 3",
        author: "JohnDoe3",
        avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        content: "Lorem ipsum, dolor sit amet consectetur adipisicing....",
        isRead: true
    },
    {
        id: 4,
        label: "Notify 4",
        author: "JohnDoe4",
        avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        content: "Lorem ipsum, dolor sit amet consectetur adipisicing....",
        isRead: true
    }
    
]

const Notification: React.FC = () => {
    return (
        <div className='notification'>
            <PopoverGroup className="hidden lg:flex lg:gap-x-12">
                <Popover className="relative">
                    <PopoverButton className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900 bg-transparent">
                        <AiOutlineBell className='primary--hover text-xl cursor-pointer' />
                    </PopoverButton>

                    <Transition
                        as={Fragment}
                        enter="transition ease-out duration-200"
                        enterFrom="opacity-0 translate-y-1"
                        enterTo="opacity-100 translate-y-0"
                        leave="transition ease-in duration-150"
                        leaveFrom="opacity-100 translate-y-0"
                        leaveTo="opacity-0 translate-y-1"
                    >
                        <ul className="absolute -right-10 top-full z-10 mt-3 py-2 w-[400px] overflow-hidden rounded-xl bg-white shadow-xl ring-1 ring-gray-900/5">
                            {notifications.map(notification => {
                                return (
                                    <React.Fragment key={notification.id}>
                                        <li className="transition-all flex gap-10 items-center justify-center hover:bg-gray-100 rounded-lg p-4">
                                            <div>
                                                <Image
                                                    src={notification.avatar}
                                                    alt={notification.author}
                                                    width={100}
                                                    height={100}
                                                    className="rounded-full w-[50px] h-[50px]"
                                                />
                                                <p className='m-0'>{notification.author}</p>
                                            </div>
                                            <div className='flex items-center'>
                                                <div>
                                                    <p>{notification.label}</p>
                                                    {notification.content}
                                                </div>
                                                {!notification.isRead ? <div className='w-[20px] h-[12px] rounded-full bg-blue-500' /> : null}
                                            </div>
                                        </li>
                                    </React.Fragment>
                                )
                            })}
                        </ul>
                    </Transition>
                </Popover>
            </PopoverGroup>
        </div>
    )
}

export default Notification