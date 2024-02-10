import React from 'react'

export default function UserCard({traderName,traderPic}) {
    // last message check , who is it?
    const lastMessageUser = true
    const lastMessage = "This is nice"
    return (
        <div className="card py-2 flex flex-row items-center gap-4 w-full ">
            <div className="avatar">
                <div className="w-12 rounded-full">
                    <img src={traderPic} />
                </div>
            </div>

            <div className='flex flex-col gap-2'>
                <span className='font-semibold'>{traderName}</span>
                <span>{lastMessageUser?"you":traderName}:{lastMessage}</span>
            </div>

        </div>
    )
}
