const interactive = require('beam-interactive-node2');
const ws = require('ws');

// import {
//     GameClient,
//     IButton,
//     IButtonData,
//     IControlData,
//     setWebSocket,
// } from interactive;

interactive.setWebSocket(ws);

const client = new interactive.GameClient();

client.open({
    authToken: '',
    url: 'wss://interactive2-dal.beam.pro/gameClient',
    versionId: 34450,
});
