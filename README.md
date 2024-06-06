# Dall-e Clone

## Overview

This is a clone of the now-defunct Dall-e website. It uses `gpt-4` to create images based on a user-generated prompt. The image is then stored on [Cloudinary](https://cloudinary.com/). The user's name and the image URL are then stored on MongoDB and added to the gallery on the homepage.

Dall-e is not separate from GPT anymore, but it was such a cool website that I decided to resurrect it. 🙌

This project was built with a MERN stack - [MongoDB](https://www.mongodb.com/), [Express](https://expressjs.com/), [React](https://react.dev/), and [Node](https://nodejs.org/en), all wrapped up with [Vite](https://vitejs.dev/).

## Install

Clone this repository

```bash
git clone git@github.com:erikJonsberg/dalle-clone.git
```

Navigate to `dalle-clone`

```bash
cd dalle-clone
```

Install the front-end

```bash
cd client
npm i
```

Install the back-end

```bash
cd server
npm i
```

Start the back-end from the `server` directory

```bash
npm start
```

Start the front-end from the `client` directory

```bash
npm run dev
```

## Setup

[Cloudinary](https://cloudinary.com/) is cloud-based platform for image and video management and storage. Sign up for a free account and grab your API and secret keys, and your `CLOUD_NAME`.

[MongoDB](https://www.mongodb.com/) is a cloud-based noSQL database. Sign up for a free account and follow the instructions for setting up a cluster.

[OpenAI](https://openai.com/) is the organization behind Chat-GPT. You will need a developer's account so you can grab your API key. Because this project is using dall-e, you will need to put a few bucks on your account to cover the cost of image generation. The minimum is $5 and the maximum is $100.

Create a `.env` file in the `server` directory and add your Cloudinary and MongoDB credentials.

Your `.env` file should look like this:

```javascript
MONGO_URL = '<mongodb+srv://<YOUR_USERNAME>:<YOUR_PASSWORD>@cluster0zxtxveh.mongodb.netretryWrites=true&w=majority>';
OPENAI_API_KEY = '<YOUR_OPENAI_KEY>';
CLOUD_NAME = '<YOUR_CLOUD_NAME>';
API_KEY = '<YOUR_API_KEY>';
API_SECRET = '<YOUR_API_SECRET>';
```

## Resources

For development information on the tools used in the project, check out the documentation

[OpenAI](https://platform.openai.com/docs/overview)
[MongoDB](https://www.mongodb.com/docs/atlas/)
[Cloudinary](https://cloudinary.com/developers)
[React](https://react.dev/reference/react)
[Express](https://expressjs.com/en/5x/api.html)
[Node.js](https://nodejs.org/docs/latest/api/)
