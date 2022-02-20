import io from "socket.io-client";

const sockett = io.connect("https://gameplay-for-scrum.herokuapp.com",{ transports : ['websocket'] });

export default sockett;