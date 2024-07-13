import React from 'react';

function ConnectComponent({ fpeerID, setFPeerID, connect }) {
    return (
        <div>
            <input
                type="text"
                id="fpeerid"
                value={fpeerID}
                onChange={e => setFPeerID(e.target.value)}
                placeholder="Peer ID"
            />
            <button id="connect" onClick={connect}>Connect</button><br />
        </div>
    );
}

export default ConnectComponent;

