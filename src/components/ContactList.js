import React from 'react';
import Contact from './Contact';

const users = [
    {
        name : 'Bessie Jacobs',
        avatar: 'https://randomuser.me/api/portraits/women/51.jpg',
        online: true,
    },
    {
        name: 'Everett Sullivan',
        avatar: 'https://randomuser.me/api/portraits/men/76.jpg',
        online: false,
    },
    {
        name: 'Beth Hernandez',
        avatar: 'https://randomuser.me/api/portraits/women/54.jpg',
        online: true,
    },
    {
        name: 'Zachary Ryan',
        avatar: 'https://randomuser.me/api/portraits/men/89.jpg',
        online: true,
    },
    {
        name: 'Ivan Riley',
        avatar: 'https://randomuser.me/api/portraits/men/94.jpg',
        online: false,
    },
];

const ContactList = () => (
    <div>
        {users.map(
            user => (
                <Contact
                    name={user.name}
                    avatar={user.avatar}
                    online={user.online}
                />
            )
        )}
    </div>
);

export default ContactList;