import React from 'react'
import SideBarChat from '../components/Chat/SideBarChat'
import ChatWindow from '../components/Chat/ChatWindow'
export default function ChatPage() {
    const users = [
        {
            "traderName": "shivam",
            "traderPic": "https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
        },
        {
            "traderName": "shivam",
            "traderPic": "https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
        },
        {
            "traderName": "shivam",
            "traderPic": "https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
        },
        {
            "traderName": "shivam",
            "traderPic": "https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
        },
        {
            "traderName": "shivam",
            "traderPic": "https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
        },
        {
            "traderName": "shivam",
            "traderPic": "https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
        },
        {
            "traderName": "shivam",
            "traderPic": "https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
        },{
            "traderName": "shivam",
            "traderPic": "https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
        },{
            "traderName": "shivam",
            "traderPic": "https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
        },{
            "traderName": "shivam",
            "traderPic": "https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
        },{
            "traderName": "shivam",
            "traderPic": "https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
        },{
            "traderName": "shivam",
            "traderPic": "https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
        },{
            "traderName": "shivam",
            "traderPic": "https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
        },{
            "traderName": "shivam",
            "traderPic": "https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
        },{
            "traderName": "shivam",
            "traderPic": "https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
        },{
            "traderName": "shivam",
            "traderPic": "https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
        },{
            "traderName": "shivam",
            "traderPic": "https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
        },{
            "traderName": "shivam",
            "traderPic": "https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
        },{
            "traderName": "shivam",
            "traderPic": "https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
        },  

    ]

  return (
    <section className='flex p-2 flex-row'>
        <SideBarChat users={users} />
        <ChatWindow users={users} />
    </section>
  )
}
