# Spotify Album Finder
<sup>Prerequisites: HTML, CSS, and JS fundamentals</sup>
\
<sup>Versions: Node.js v18, Vite v5, React v18, React-Bootstrap v2</sup>

## Introduction
Channeling our inner Spotify engineers, let's use the magic of JavaScript and the Spotify API to access our favorite music!

An **API**, which stands for `Application Programming Interface`, acts as a middleman between two software applications. 
It allows them to communicate with each other and exchange data or functionality.

Buckle up! Here's how our Album Finder will work its wonders. ✨✨



## Spotify API
The [Spotify API](https://developer.spotify.com/documentation/web-api), which stands for Spotify Web API, is a programmer's toolkit.

It acts as a bridge between your program and Spotify's vast music library.

## JavaScript Tools
To build our Album Finder, we'll be using some helpful **_JavaScript libraries_**.

[React](https://react.dev/) is a _free and open-source library_ created by Meta (formerly Facebook) for building user interfaces (UI)  of web applications. It essentially provides a way to structure and manage the ever-changing parts of a web page.

React uses a _syntax extension_ called `JSX` that allows you to write HTML-like structures within your JavaScript code, making it easier to visualize and manage UI components.

[React-Bootstrap](https://react-bootstrap.netlify.app/) is a front-end development library that simplifies building user interfaces (UI) for web applications.

<!-- This project tutorial is your perfect launchpad to learn React and integrate the Spotify API! -->

## Setup
### Step 1. Create a Spotify Developer Account
To access the Spotify API, grab your Spotify account and head over to the [Spotify for Developers](https://developer.spotify.com/) website. There, you'll need to log in. Don't have a Spotify account yet? No worries! You can <kbd>create one<kbd> for free on the [Spotify](https://open.spotify.com/?) website. 

![Dashboard](https://github.com/izzyluuuuh/spotify-album-finder/assets/103919666/e6d36bac-7bb9-4673-a7f3-64c265bb80a0)

After logging in, click your profile image in the top right corner and navigate to "Dashboard".

> [!NOTE]
> **You might see a screen asking you to accept the "Spotify Developer Terms." Simply check the box near the bottom and click "Accept the terms" to proceed.**

On the Dashboard, click the button labeled "Create App" to get started.

Time to name your app. How about "Album Finder" or "Spotify Music Finder"?
\
You can choose whichever one suits your fancy!

Next, provide a brief **description** of your app's purpose. Here's an example:
\
_This app is a personal project to help me search for albums on Spotify._

For the **redirect URI**, since this is for personal use on your local machine, you can enter `http://localhost/`.

![Create app](https://github.com/izzyluuuuh/spotify-album-finder/assets/103919666/a663ebae-c2f2-4b2c-a5ae-de85387d7cc7)

**Alternative for Local Development:**
Consider using a service like [ngrok](https://ngrok.com/) which creates a temporary public URL that tunnels back to your local machine. This allows you to use a secure `https` connection and avoid limitations of `localhost`.

Since we're focusing on the Spotify Web API for this project, be sure to check the box next to "Web API" when creating your app.

Tick that box for the terms, and we're ready to rock and roll with the Spotify Web API! 🤟

![agree to terms](https://github.com/izzyluuuuh/spotify-album-finder/assets/103919666/099945ac-9308-4142-9abf-db792fc4ce61)

**Boom!** Creating your app granted us some special keys: a **"Client ID"** and a **"Client Secret."** We'll need these later to unlock the power of the Spotify API, but more on that soon! 💥

### Step 2. Clone GitHub Project Template
GitHub time! [This repository](https://github.com/itsnotizzy/the-api-template) will serve as our project template.

This project template leverages two key technologies:
- **Vite:** a super-fast build tool that keeps things lean and mean for modern web development. ⚡
- **React 18:** The base code is built with React 18, the latest and greatest version of React.

**Ready to clone the repository?**
\
You can either download the folder or use Git commands:
```
git clone https://github.com/itsnotizzy/the-api-template.git
```

**Note:** The folder's called "the-api-template" by default. Rename it if you want!

### Heads up! Node.js Version Check:

The next steps require Node.js version 18 or higher. To check your installed version, open your terminal and run this command:
```
node -v
```

Open a new terminal window and navigate to your project's folder. Then, run the command `npm install` to install the project's dependencies.

**Project Folder Peek!** Once you open this folder in VS Code, you'll be greeted by this project structure:

![vs code](https://github.com/izzyluuuuh/spotify-album-finder/assets/103919666/73b280a9-a774-4d9d-9ed5-631abce60f73)

Don't have [VS Code](https://code.visualstudio.com/) yet? No worries! [Check out on how to set it up](https://code.visualstudio.com/docs/setup/setup-overview).

### Step 3. Installing Bootstrap
**Remember [React-Bootstrap](https://react-bootstrap.netlify.app/)?** This awesome library (built with [React](https://react.dev/) and [Bootstrap](https://getbootstrap.com/)) is here to make our UI design a breeze!

Let's use npm to install the following packages:
```
npm install react-bootstrap bootstrap
```

**Woohoo!** Our libraries are prepped, and the project folder is ready. 🫡

## Starting the Development Server 👩‍💻
**Fire up the engines!** 🔥🚂 

In your terminal, run this command in the project folder to start the development server:
```
npm run dev
```

### Magic! ✨  Your Album Finder is Live!

Head over to your browser and visit `http://localhost:5173/` (or the specific port mentioned in the terminal output). You should see something like this:

![localhost](https://github.com/izzyluuuuh/spotify-album-finder/assets/103919666/bfe1092b-bc16-44e2-89d2-d7481c360c0b)

> [!NOTE]
> Any changes you make to your project files will automatically reload in the browser, so you can see your progress instantly.

## Let's Talk to Spotify! Connecting to the API
Remember those credentials **"Client ID"** and **"Client Secret"** we got earlier? Those are actually our _Spotify API_ keys, and they'll be essential for connecting to Spotify's music.

Head to your app on the Spotify for Developers Dashboard and navigate to "Settings".

![developer spotify com_dashboard](https://github.com/izzyluuuuh/spotify-album-finder/assets/103919666/9b4e42b0-cd5b-464c-86a1-b6a45d901fb4)

Next, under "Basic Information", you will find your app's "Client ID". To display your app's "Client secret", select "View client secret."

![developer spotify com_dashboard_settings](https://github.com/izzyluuuuh/spotify-album-finder/assets/103919666/934050d2-18d3-492f-9c60-e554a6434ed4)

**Keep it secret, keep it safe!**   Those API keys are like your treasure chest to Spotify's music. Never share them publicly, and keep them someplace secure.

In your main project folder, create a file named "**.env**" (notice the leading dot). This file will store our secret API keys.

![env](https://github.com/izzyluuuuh/spotify-album-finder/assets/103919666/63a21a3a-74ab-4e14-b953-2f086c4898eb)

Here's what the .env file looks like:
```js
# .env
VITE_CLIENT_ID=your_client_id_here
VITE_CLIENT_SECRET=your_client_secret_here
```
<!-- Remember to replace your_client_id_here and your_client_secret_here with your actual API keys from the Spotify for Developers Dashboard. -->

Make sure you don't commit this file to version control (like Git) to avoid accidentally exposing your keys.
\
OR make sure this **.env** file is inside **.gitignore** so you can push your code to GitHub without publishing your keys!

In your **App.jsx** file, we're going to declare our variables from our env file. Under the imports, add the following:
```jsx
// App.jsx
const clientId = import.meta.env.VITE_CLIENT_ID;
const clientSecret = import.meta.env.VITE_CLIENT_SECRET;
```

Let's verify our API keys! We can use `console.log()` to check if we can successfully read them from the `.env` file.

Under your declared variables, add the following line of code:
```jsx
// App.jsx
console.log(clientId, clientSecret);
```

Head over to your browser and open the developer tools (usually by pressing F12 or click "Inspect").  Navigate to the "Console" tab. If you successfully retrieved the API keys from the `.env` file, you should see them displayed there.

**Security Reminder:** Remember, this is just for testing purposes!  You should never log your API keys to the console in production code.

After confirming the `clientId` and `clientSecret` are there, remove the `console.log()` statement.

Here's the updated version of your **App.jsx** file:
```jsx
// App.jsx
import "./App.css";
const clientId = import.meta.env.VITE_CLIENT_ID;
const clientSecret = import.meta.env.VITE_CLIENT_SECRET;

function App() {
  return (
    <div className="App">
      <h1>Project Template</h1>
    </div>
  );
}
export default App;
```

**Keys secured, interface time!** 🖼️
\
We'll be focusing on our **App.jsx** file from here on out to build the user interface for our Album Finder.

## Search Bar
Our Album Finder needs a search bar for users to enter their album searches.

To create our search functionality, we'll need a few [React Bootstrap](https://react-bootstrap.netlify.app/) components:
- `Container:` This will act as a wrapper to hold all the search bar elements and keep things organized visually.
- `InputGroup:` This component styles the search box as a form element, providing a consistent look and feel.
- `FormControl:` This is the actual input field where users will type their album searches.
- `Button:` Finally, a button to initiate the search based on the user's input.

Since we want our app to send a request to Spotify when we click "Search", we'll use the form control to check when our button is pressed.

**First things first: the search box.**
\
Below is the container component we'll use for the search bar. It already has some CSS styles applied.  Before we start using it, let's import the necessary components at the top of our **App.jsx** file.
```jsx
import { FormControl, InputGroup, Container, Button } from "react-bootstrap";
```

Inside the `return()` function, replace the existing template text with the following component.  This component includes some pre-written CSS styles as well.
```jsx
<Container>
  <InputGroup>
    <FormControl
      placeholder="Search For Artist"
      type="input"
      aria-label="Search for an Artist"
      onKeyDown={} // search function
      onChange={} // setSearch
      style={{
        // You can change the styles
        width: "300px",
        height: "35px",
        borderWidth: "0px",
        borderStyle: "solid",
        borderRadius: "5px",
        marginRight: "10px",
        paddingLeft: "10px",
      }}
    />

    <Button onClick={{}}>Search</Button>
  </InputGroup>
</Container>
```

**Woohoo! Progress!** ✨ This is what your app should look like now!

<img width="1219" alt="search-bar" src="https://github.com/izzyluuuuh/spotify-album-finder/assets/103919666/ee341235-ad5c-48c8-b028-cac6445a76e0">

## Hooks

PAUSEEEEEE

---

🖤 All the Love for [Ellie](#)!
\
This is an updated version of her work.

Follow Me!
\
💙 Instagram: [@izzyluuuuh](https://www.instagram.com/izzyluuuuh/)
