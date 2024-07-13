// import React, { useState, useEffect } from 'react';
// import Peer from 'peerjs';
// import JoinComponent from './JoinComponent';
// import ConnectComponent from './ConnectComponent';
// import MessageComponent from './MessageComponent';
// import MessagesListComponent from './MessagesListComponent';

// function App() {
//     const [peer, setPeer] = useState(null);
//     const [conn, setConn] = useState(null);
//     const [peerID, setPeerID] = useState('');
//     const [fpeerID, setFPeerID] = useState('');
//     const [msg, setMsg] = useState('');
//     const [messages, setMessages] = useState([]);

//     useEffect(() => {
//         const newPeer = new Peer();
//         setPeer(newPeer);

//         newPeer.on('open', id => {
//             console.log('Connected to Signaling Server ID : ' + id);
//             setPeerID(id);
//         });

//         newPeer.on('connection', connection => {
//             setConn(connection);
//             console.log("New connection : ");
//             console.log(connection);
//             setFPeerID(connection.peer);

//             connection.on('open', () => {
//                 connection.on('data', data => {
//                     console.log('Received', data);
//                     printMsg("Friend : " + data);
//                 });
//             });
//         });

//         return () => {
//             newPeer.destroy();
//         };
//     }, []);

//     const connect = () => {
//         console.log("connecting to " + fpeerID);
//         const connection = peer.connect(fpeerID);
//         setConn(connection);

//         connection.on('open', () => {
//             console.log("connected");
//             connection.on('data', data => {
//                 console.log('Received', data);
//                 printMsg("Friend : " + data);
//             });
//         });
//     };

//     const sendMessage = () => {
//         console.log("sending message");
//         if (conn && conn.open) {
//             printMsg("Me : " + msg);
//             conn.send(msg);
//         }
//     };

//     const printMsg = msg => {
//         setMessages(prevMessages => [...prevMessages, msg]);
//     };

//     return (
//         <div>
//             <JoinComponent peerID={peerID} setPeer={setPeer} />
//             <ConnectComponent fpeerID={fpeerID} setFPeerID={setFPeerID} connect={connect} />
//             <MessageComponent msg={msg} setMsg={setMsg} sendMessage={sendMessage} />
//             <MessagesListComponent messages={messages} />
//         </div>
//     );
// }

// export default App;




import React, { useState, useEffect } from 'react';
import Peer from 'peerjs';
import JoinComponent from './JoinComponent';
import ConnectComponent from './ConnectComponent';
import MessageComponent from './MessageComponent';
import MessagesListComponent from './MessagesListComponent';
import './App.css';

function App() {
    const [peer, setPeer] = useState(null);
    const [conn, setConn] = useState(null);
    const [peerID, setPeerID] = useState('');
    const [fpeerID, setFPeerID] = useState('');
    const [msg, setMsg] = useState('');
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        const newPeer = new Peer();
        setPeer(newPeer);

        newPeer.on('open', id => {
            console.log('Connected to Signaling Server ID : ' + id);
            setPeerID(id);
        });

        newPeer.on('connection', connection => {
            setConn(connection);
            console.log("New connection : ");
            console.log(connection);
            setFPeerID(connection.peer);

            connection.on('open', () => {
                connection.on('data', data => {
                    console.log('Received', data);
                    printMsg("Friend : " + data);
                });
            });
        });

        return () => {
            newPeer.destroy();
        };
    }, []);

    const connect = () => {
        console.log("connecting to " + fpeerID);
        const connection = peer.connect(fpeerID);
        setConn(connection);

        connection.on('open', () => {
            console.log("connected");
            connection.on('data', data => {
                console.log('Received', data);
                printMsg("Friend : " + data);
            });
        });
    };

    const sendMessage = () => {
        console.log("sending message");
        if (conn && conn.open) {
            printMsg("Me : " + msg);
            conn.send(msg);
        }
        setMsg("");
    };

    const printMsg = msg => {
        setMessages(prevMessages => [...prevMessages, msg]);
    };

    return (
        <div id="chat-container">
            <div id="chat-header">Chat Application</div>
            <div id="chat-body">
                <JoinComponent peerID={peerID} setPeer={setPeer} />
                <ConnectComponent fpeerID={fpeerID} setFPeerID={setFPeerID} connect={connect} />
                <MessageComponent msg={msg} setMsg={setMsg} sendMessage={sendMessage} />
                <MessagesListComponent messages={messages} />
            </div>
        </div>
    );
}

export default App;
