const messages = [
    {
        sender: "11",
        timestamp: new Date("2019-01-01 19:20:00"),
        text: "You up?",
    },
    {
        sender: "43",
        timestamp: new Date("2019-01-01 19:21:00"),
        text: "Yeah, still working on this INFO6250 work, but I keep getting distracted by cat videos",
    }
];

const users = {
    "11": {
        username: "Amit",
        uid: '11',
    },
    "43": {
        username: "Bao",
        uid: '43',
    },
};

function addMessage({ uid, timestamp = new Date(), text }) {
    messages.push({ sender: uid, timestamp, text });
}

const chat = {
    users,
    messages,
    addMessage,
};

module.exports = chat;