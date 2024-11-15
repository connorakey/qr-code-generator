// This file is incharge of hosting the backend and making sure the backend API queries are formatted correctly.
const express = require('express');
const QRCode = require('qrcode');


const app = express();


const port = 3000;


app.get('/generate', (req, res) => {
    const { link, size } = req.query;


    if (!link) {
        return res.status(400).json({ error: 'Missing "link" query parameter to utilise the API properly please make your link is like this http://example.com/generate?link=LINKHERE' });
    }


    const qrSize = size ? parseInt(size) : 150;


    if (isNaN(qrSize) || qrSize <= 0 || qrSize > 1000) {
        return res.status(400).json({ error: 'Invalid size. Please provide a size between 1 and 1000.' });
    }


    QRCode.toBuffer(link, { 
        type: 'png',
        width: qrSize,
        height: qrSize
    }, (err, buffer) => {
        if (err) {
            return res.status(500).json({ error: 'Error generating QR code' });
        }


        res.setHeader('Content-Type', 'image/png');
        res.send(buffer);
    });
});


app.listen(port, () => {
    console.log("Back end API is running on https://localhost:" + port); // Feel free to remove this line if code IF you DO NOT want it to log in the console that the API is running.
});
