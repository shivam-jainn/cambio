import React from 'react';
import UserCard from './UserCard';

export default function SideBarChat({ users }) {
  return (
    <div className='h-full p-2 w-[30%] '>
      <div className='border-b-2 py-3'>
        <span className='font-semibold'>messages</span>
      </div>
      {/* retrieve users */}
      <div className='overflow-y-auto max-h-screen'>
        {users.map((user, index) => (
          <UserCard key={index} traderName={user.traderName} traderPic={user.traderPic} />
        ))}
      </div>
    </div>
  );
}
