// import React from 'react';
// import Peer from 'peerjs';  // Import Peer from 'peerjs'

// function JoinComponent({ peerID, setPeer }) {
//     const join = () => {
//         setPeer(new Peer());
//     };

//     return (
//         <div>
//             <input id="peerid" value={peerID} placeholder="My ID" readOnly />
//             <button onClick={join}>Join</button><br />
//         </div>
//     );
// }

// export default JoinComponent;



import React from 'react';
import Peer from 'peerjs';  // Import Peer from 'peerjs'

function JoinComponent({ peerID, setPeer }) {
    const join = () => {
        setPeer(new Peer());
    };

    return (
        <div>
            <input id="peerid" value={peerID} placeholder="My ID" readOnly />
            <button onClick={join}>Join</button><br />
        </div>
    );
}

export default JoinComponent;
