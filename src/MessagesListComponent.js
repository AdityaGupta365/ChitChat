// import React from 'react';

// function MessagesListComponent({ messages }) {
//     return (
//         <div className='MessageBox'>
//         <ul id="messages">
//             {messages.map((message, index) => (
//                 <li key={index}>{message}</li>
//             ))}
//         </ul>
//         </div>
//     );
// }

// export default MessagesListComponent;


import React from 'react';

function MessagesListComponent({ messages }) {
    return (
        <ul id="messages">
            {messages.map((message, index) => (
                <li key={index} className={message.startsWith('Me') ? 'me' : ''}>{message}</li>
            ))}
        </ul>
    );
}

export default MessagesListComponent;
