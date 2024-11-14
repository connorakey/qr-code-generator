# Connor's QR Code Generator

A simple, zero bloat, free and open source alternative to common QR Code Generators. 



![IconScreenShot1](https://i.ibb.co/X73ZYM0/image.png)
## Screenshots

![Frontend Screenshot](https://i.ibb.co/qnZxg18/image.png)

![Backend Screenshot 1](https://i.ibb.co/JpVGkxd/image.png)

![Backend Screenshot 2](https://i.ibb.co/znWMzNB/image.png)
## API Reference




#### Generate QR Code

```http
  GENERATE /generate?link=qrLink&size=pixels
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `qrLink`      | `string` | **Required**. Link of QR Code to generator |
| `pixels`      | `number` | **Optional**. Size of QR code (150 = 150x150)|

#### Example
```http
  localhost:3000/generate?link=youtube.com&size=70
```
#### Result:
![ResultScreenshot1](https://i.ibb.co/4fT9RFS/image.png)



## Run Locally

Clone the project

```bash
  git clone https://github.com/connorakey/qr-code-generator
```

Go to the project directory

```bash
  cd qr-code-generator
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  node .
```


## FAQ

#### How do  I change the ports of the front end and backend?

To change the ports enter the configuration.json and change the backend/front end ports to your desire, then enter backend.js and change the backend port.

#### Am I allowed to edit the code?

Yes, you are allowed to edit the code as much as you want, but no support will be given.

#### Am I allowed to reupload the code?
Yes, you are allowed to but please fork the original repository.


## Authors

- [@connorakey](https://github.com/connorakey)

## Thank you
Thank you, Connor, 10th of November, 2024, Year 7