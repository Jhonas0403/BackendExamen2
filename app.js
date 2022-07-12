const express = require("express");
const Notification = require("./notification")

const app = express();


app.use(express.static('public'));
app.get("/one-user/:mensaje", function(req, res) {
    
    res.send("Sending Notification to One user...");
    const data = {
        tokenId: "da-AmBsZRFyfDGm7xaV15B:APA91bEUw_qqM8f5WgkvGqXT9r3WYuPzV2WD_hZWgc1D7SqHxVox9kzra6OXDsJy6c9DsA2KNa7cKEB_DGvLYX6v0i4TM9ObvydkwrnzsqIoWl_E7FoTYtXLnOY0rCu5Dyd6Usp1XWc8",
        titulo: "Notificación de Accidente",
        mensaje: req.params.mensaje
    }
    Notification.sendPushToOneUser(data);
});


app.get("/", function(req, res) {
    res.send("succes")
});

app.listen(3000, function() {
    console.log("Server started on port 3000");
});