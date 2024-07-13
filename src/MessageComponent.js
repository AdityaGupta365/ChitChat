// import React from 'react';

// function MessageComponent({ msg, setMsg, sendMessage }) {
//     return (
//         <div>
//             <input
//                 type="text"
//                 id="msg"
//                 value={msg}
//                 onChange={e => setMsg(e.target.value)}
//                 placeholder="Message.."
//             />
//             <button id="send" onClick={sendMessage}>Send</button><br />
//         </div>
//     );
// }

// export default MessageComponent;


import React from 'react';

function MessageComponent({ msg, setMsg, sendMessage }) {
    return (
        <div id="chat-footer">
            <input
                type="text"
                id="msg"
                value={msg}
                onChange={e => setMsg(e.target.value)}
                placeholder="Message.."
            />
            <button id="send" onClick={sendMessage}>Send</button><br />
        </div>
    );
}

export default MessageComponent;
