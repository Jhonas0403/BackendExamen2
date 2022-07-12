var admin = require("firebase-admin");

var serviceAccount = require("./keys/lab08-notification-firebase-adminsdk-aehys-76cee8506d.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});



function sendPushToOneUser(notification) {
    const message = {
        token: notification.tokenId,
        data: {
            title: notification.title,
            message: notification.message
        }
    }
    sendMessage(message);
}

function sendPushToTopic(notification) {
    const message = {
        topic: notification.topic,
        data: {
            titulo: notification.titulo,
            mensaje: notification.mensaje
        }
    }
    sendMessage(message);
}

module.exports = { sendPushToOneUser, sendPushToTopic }

function sendMessage(message) {
    admin.messaging().send(message)
        .then((response) => {
            // Response is a message ID string.
            console.log('Successfully sent message:', response);
        })
        .catch((error) => {
            console.log('Error sending message:', error);
        })
}