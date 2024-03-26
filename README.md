# Spotify Album Finder
<sup>Prerequisites: HTML, CSS, and JS fundamentals</sup>
\
<sup>Versions: Node.js v18, Vite v5, React v18, React-Bootstrap v2</sup>

## Introduction
Channeling our inner Spotify engineers, let's use the magic of JavaScript and the Spotify API to access our favorite music!

An **API**, which stands for `Application Programming Interface`, acts as a middleman between two software applications. 
It allows them to communicate with each other and exchange data or functionality.

Buckle up! Here's how our Album Finder will work its wonders. ✨✨

![TS](https://github.com/izzyluuuuh/spotify-album-finder/assets/103919666/761288a6-8eff-4490-86b3-80bc522add7b)

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
Our search button isn't quite there yet - it doesn't react to clicks. The search bar isn't tracking user input either. Let's fix that!

We'll use the `useEffect` hook to fetch an access token from the Spotify API. Think of this token as a special key that allows us to request information from Spotify.

Inside the `useEffect` hook, we'll be focusing on two things:
1. **Grab the key to Spotify's music:**  We'll use useEffect to send a special request (a POST request) to the Spotify API. This request will get us an access token, which acts like a key that unlocks Spotify's music data.

2. **Store the key for later:**  Once we have the access token, we'll store it safely inside our component's state. This way, we can use it throughout our app to search for albums.
---

To keep track of the access token within our app, we'll use something called the `useState` hook. This helps us manage changes to our component's data.

Import both `useState` and `useEffect` at the top of your App.jsx file:
```jsx
import { useState, useEffect } from "react";
```

We'll use `useState()` inside `App()` function [above the `return()`] to set up the search input and the access token (from the Spotify POST request):
```jsx
const [searchInput, setSearchInput] = useState("");
const [accessToken, setAccessToken] = useState("");
```

First, let's write use `useEffect()` to fetch our access token:
```jsx
useEffect(() => {
  let authParams = {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body:
      "grant_type=client_credentials&client_id=" +
      clientId +
      "&client_secret=" +
      clientSecret,
  };

  fetch("https://accounts.spotify.com/api/token", authParams)
    .then((result) => result.json())
    .then((data) => {
      setAccessToken(data.access_token);
    });
}, []);
```

`fetch()` is a powerful built-in function in JavaScript that provides a modern and promise-based way to fetching resources from a server (HTTP requests). It takes two parameters:

- The URL we're sending the POST request to (`https://accounts.spotify.com/api/token`).
- An options object called `authParams`, that includes our `clientId` and `clientSecret`.

It returns a Promise in which we're able to use our access token for our search functionality.

## Async Search Function
Alright! Time to build the core of our app - the search functionality!

We'll create an asynchronous function named `search()`. This function will be responsible for searching artists on Spotify. Remember, **_asynchronous_** means it can run in the background without slowing down the app.

Using the [Spotify API documentation](https://developer.spotify.com/documentation/web-api/reference/get-an-artist), we want to use the GET request for artists. We'll need the ID of the artist that holds the name of the artist.

After the `useEffect()`, code the following:
```jsx
async function search() {
  let artistParams = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + accessToken,
    },
  };

  // Get Artist
  const artistID = await fetch(
    "https://api.spotify.com/v1/search?q=" + searchInput + "&type=artist",
    artistParams
  )
    .then((result) => result.json())
    .then((data) => {
      return data.artists.items[0].id;
    });
}
```

Inside the search function, we'll use `await` to incorporate the value from our `searchInput` state variable. This will allow us to make an asynchronous request to the Spotify API and potentially retrieve a list of artist results matching the user's search.

Let's make the search bar work! Replace the empty curly braces `{}` in the `onKeyDown`, `onChange`, and `onClick` event handlers with the following code to make the search bar functional.
```jsx
<Container>
  <InputGroup>
    <FormControl
      placeholder="Search For Artist"
      type="input"
      aria-label="Search for an Artist"
      onKeyDown={(event) => {
        if (event.key === "Enter") {
          search();
        } // search function
      }}
      onChange={(event) => setSearchInput(event.target.value)} // setSearch
      style={{
        width: "300px",
        height: "35px",
        borderWidth: "0px",
        borderStyle: "solid",
        borderRadius: "5px",
        marginRight: "10px",
        paddingLeft: "10px",
      }}
    />
    // search function
    <Button onClick={search}>Search</Button>
  </InputGroup>
</Container>
```

Now our search bar is interactive!

- Clicking the button (using `onClick`) triggers the `search` function.
- Pressing Enter (using `onKeyDown`) also initiates the `search` function.
- As users type, the `onChange` event handler updates the search input state, keeping track of their query.

**Code checkpoint!**
\
Before we proceed, make sure your App.jsx file matches the following code:
```jsx
import "./App.css";
import { FormControl, InputGroup, Container, Button } from "react-bootstrap";
import { useState, useEffect } from "react";

const clientId = import.meta.env.VITE_CLIENT_ID;
const clientSecret = import.meta.env.VITE_CLIENT_SECRET;

function App() {
  const [searchInput, setSearchInput] = useState("");
  const [accessToken, setAccessToken] = useState("");

  useEffect(() => {
    let authParams = {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body:
        "grant_type=client_credentials&client_id=" +
        clientId +
        "&client_secret=" +
        clientSecret,
    };
    fetch("https://accounts.spotify.com/api/token", authParams)
      .then((result) => result.json())
      .then((data) => {
        setAccessToken(data.access_token);
      });
  }, []);

  async function search() {
    let artistParams = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + accessToken,
      },
    };

    // Get Artist
    const artistID = await fetch(
      "https://api.spotify.com/v1/search?q=" + searchInput + "&type=artist",
      artistParams
    )
      .then((result) => result.json())
      .then((data) => {
        return data.artists.items[0].id;
      });
  }

  return (
    <>
      <Container>
        <InputGroup>
          <FormControl
            placeholder="Search For Artist"
            type="input"
            aria-label="Search for an Artist"
            onKeyDown={(event) => {
              if (event.key === "Enter") {
                search();
              }
            }}
            onChange={(event) => setSearchInput(event.target.value)}
            style={{
              width: "300px",
              height: "35px",
              borderWidth: "0px",
              borderStyle: "solid",
              borderRadius: "5px",
              marginRight: "10px",
              paddingLeft: "10px",
            }}
          />

          <Button onClick={search}>Search</Button>
        </InputGroup>
      </Container>
    </>
  );
}

export default App;
```

## Testing Our Functions
Now that searching for artists is working, we'll add some helpful messages to the console to double-check everything.  We want to verify that:
1. The user's search input is being saved correctly in our state.
2. We're successfully retrieving an artist ID from the Spotify API based on the search input.

Add the following code inside our `search()` function:
```jsx
// Get Artist
const artistID = await fetch(
  "https://api.spotify.com/v1/search?q=" + searchInput + "&type=artist",
  artistParams
)
  .then((result) => result.json())
  .then((data) => {
    return data.artists.items[0].id;
  });

console.log("Search Input: " + searchInput);
console.log("Artist ID: " + artistID);
```

Let's go back to inspecting our page on our localhost server, and see the information we get back! Enter any artist's name into the search bar and click "Search."

<img width="402" alt="artist-info-console-output" src="https://github.com/izzyluuuuh/spotify-album-finder/assets/103919666/a4882a0f-a948-4d91-a5ba-b952b183d9a7">

🎉🎉 Yay! Search is working and we have an artist ID. Let's move on and build the interface to display that artist's albums!

## GET Artist Albums
**From ID to albums!** 🆔➡️💽
Since we can successfully search for artists and obtain their `artistID`, we can use these IDs to connect artists to their albums.

Again, feel free to use the Spotify API documentation to provide additional information.

Let's keep in mind that we want to store the album information that we get back from our search results. 
\
Let's declare another `useState()`:
```jsx
const [searchInput, setSearchInput] = useState("")
const [accessToken, setAccessToken] = useState("")
const [albums, setAlbums] = useState([]);
```

For albums, we need to consider it can hold multiple items.  So, we'll start with an empty array to store album information. We'll populate this array later using the `artistID`.

Let's now write our code to get album information. This will go right below the `artistID` functionality, inside our `search()` function:
```jsx
// Get Artist Albums
await fetch(
  "https://api.spotify.com/v1/artists/" +
    artistID +
    "/albums?include_groups=album&market=US&limit=50",
  artistParams
)
  .then((result) => result.json())
  .then((data) => {
    setAlbums(data.items);
  });
```

Your search function should now look like this:
```jsx
async function search() {
  let artistParams = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + accessToken,
    },
  };

  // Get Artist
  const artistID = await fetch(
    "https://api.spotify.com/v1/search?q=" + searchInput + "&type=artist",
    artistParams
  )
    .then((result) => result.json())
    .then((data) => {
      return data.artists.items[0].id;
    });

  // Get Artist Albums
  await fetch(
    "https://api.spotify.com/v1/artists/" +
      artistID +
      "/albums?include_groups=album&market=US&limit=50",
    artistParams
  )
    .then((result) => result.json())
    .then((data) => {
      setAlbums(data.items);
    });
}
```

## Mapping Search Results
Now that we can search for artists and retrieve their albums, let's create a visually appealing interface to display each album in a card format. This will make it easy for users to browse the search results.

![card-component-example](https://github.com/izzyluuuuh/spotify-album-finder/assets/103919666/d46ce752-99a1-4d20-8726-fb6581d41a41)

To display this, we'll need to fetch the following information:

- Album cover image
- Album name
- Album release date
- Link to the album on Spotify

We'll need the `Card` and `Row` components from React-Bootstrap to create the mapping of the results.

Your `import` statement should now look like this:
```jsx
import {
  FormControl,
  InputGroup,
  Container,
  Button,
  Row,
  Card,
} from "react-bootstrap";
```

Following our search box within the `return()` function, let's add another `Container` to house the album cards. This will organize the retrieved albums visually.
```jsx
<Container>
  <Row
    style={{
      // Reminder that you can change this.
      display: "flex",
      flexDirection: "row",
      flexWrap: "wrap",
      justifyContent: "space-around",
      alignContent: "center",
    }}
  >
    // content
  </Row>
</Container>
```

Back to those albums!  Our `albums` state variable stores information about the artist's albums we retrieved based on the search query.  According to the [Spotify API documentation for "Get Album](https://developer.spotify.com/documentation/web-api/reference/get-an-album)," we have access to a wealth of data, including the album's link (href), ID, images, URI, type, restrictions, release date, artists involved, genres, and more!

Now, we'll concentrate on displaying the album image, name, release date, and a link to the album on Spotify.  The Spotify API documentation provides us with the following properties to access this information for each album in the albums array:
- `id` (album ID)
-`images[0].url` (source image file for the album)
- `release_date` (release date of the album)
- `external_urls.spotify` (Spotify link for the album)

Our `Card` component will have an Image, Title, Text, and a Button, that users can click to visit the album on Spotify. This can be used by the `<Card.Img>`, `<Card.Body>`, `<Card.Title>`, and `<Card.Text>` components.

To access our album information array without mutating it as we change it to display our album card, we'll use the `map()` function in JavaScript.

### The map() function 🗺️📌
Take a look at the `map()` function syntax:
```jsx
const numbers = [1, 2, 3, 4, 5];
const doubledNumbers = numbers.map((num) => num * 2);
console.log(doubledNumbers); // Output: [2, 4, 6, 8, 10]
```

A new `doubledNumbers` array is made with the `map()` function as it takes the transforms the values from the `numbers` array. In our case, we won't be multiplying numbers but rather displaying a component with our album information.

Inside the `Row` component of our container, we'll use the `map()` function to process the `albums` array. This array stores the album data we retrieved from the search query.
```jsx
{
  albums.map((album) => {
    return (
      <Card
        key={album.id}
        style={{
          backgroundColor: "white",
          margin: "10px",
          borderRadius: "5px",
          marginBottom: "30px",
        }}
      >
        //card content
      </Card>
    );
  });
}
```

You might notice that we're using `album.id` as a key within the `map()` function. In React, keys act as unique identifiers for elements within lists or arrays. This helps React efficiently update the UI when data changes.  In our case, the unique album IDs are perfect for this purpose.
 
At this point, Get Creative with Styling!
Feel free to unleash your creativity and customize the appearance of your album cards to match your preferences.
```jsx
{
  albums.map((album) => {
    return(
      <Card 
        key={album.id}
        style={{
	        backgroundColor: 'white',
	        margin: '10px',
	        borderRadius: '5px',
	        marginBottom: '30px',
	    }} >
        <Card.Img
          width={200}
          src={album.images[0].url}
          style={{borderRadius: '4%',}}
        />
	      <Card.Body>
		      <Card.Title
            style={{
			        whiteSpace: 'wrap',
			        fontWeight: 'bold',
			        maxWidth: '200px',
			        fontSize: '18px',
			        marginTop: '10px',
			        color: 'black'
		      }}>
            {album.name}
          </Card.Title>

          <Card.Text
            style={{color: 'black'}}
          >
            Release Date: <br> {album.release_date}
          </Card.Text>

          <Button
            href={album.external_urls.spotify} style={{
              backgroundColor: 'black',
              color: 'white',
              fontWeight: 'bold',
              fontSize: '15px',
              borderRadius: '5px',
              padding: '10px',
          }}>
            Album Link
          </Button>
	      </Card.Body>
      </Card>
    )
  })
}
```

### Ta-da! Our _App.jsx_ file is complete! 😎💻
```jsx
import "./App.css";
import {
  FormControl,
  InputGroup,
  Container,
  Button,
  Card,
  Row,
} from "react-bootstrap";
import { useState, useEffect } from "react";

const clientId = import.meta.env.VITE_CLIENT_ID;
const clientSecret = import.meta.env.VITE_CLIENT_SECRET;

function App() {
  const [searchInput, setSearchInput] = useState("");
  const [accessToken, setAccessToken] = useState("");
  const [albums, setAlbums] = useState([]);

  useEffect(() => {
    let authParams = {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body:
        "grant_type=client_credentials&client_id=" +
        clientId +
        "&client_secret=" +
        clientSecret,
    };

    fetch("https://accounts.spotify.com/api/token", authParams)
      .then((result) => result.json())
      .then((data) => {
        setAccessToken(data.access_token);
      });
  }, []);

  async function search() {
    let artistParams = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + accessToken,
      },
    };

    // Get Artist
    const artistID = await fetch(
      "https://api.spotify.com/v1/search?q=" + searchInput + "&type=artist",
      artistParams
    )
      .then((result) => result.json())
      .then((data) => {
        return data.artists.items[0].id;
      });

    // Get Artist Albums
    await fetch(
      "https://api.spotify.com/v1/artists/" +
        artistID +
        "/albums?include_groups=album&market=US&limit=50",
      artistParams
    )
      .then((result) => result.json())
      .then((data) => {
        setAlbums(data.items);
      });
  }

  return (
    <>
      <Container>
        <InputGroup>
          <FormControl
            placeholder="Search For Artist"
            type="input"
            aria-label="Search for an Artist"
            onKeyDown={(event) => {
              if (event.key === "Enter") {
                search();
              }
            }}
            onChange={(event) => setSearchInput(event.target.value)}
            style={{
              width: "300px",
              height: "35px",
              borderWidth: "0px",
              borderStyle: "solid",
              borderRadius: "5px",
              marginRight: "10px",
              paddingLeft: "10px",
            }}
          />
          <Button onClick={search}>Search</Button>
        </InputGroup>
      </Container>

      <Container>
        <Row
          style={{
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: "space-around",
            alignContent: "center",
          }}
        >
          {albums.map((album) => {
            return (
              <Card
                key={album.id}
                style={{
                  backgroundColor: "white",
                  margin: "10px",
                  borderRadius: "5px",
                  marginBottom: "30px",
                }}
              >
                <Card.Img
                  width={200}
                  src={album.images[0].url}
                  style={{
                    borderRadius: "4%",
                  }}
                />
                <Card.Body>
                  <Card.Title
                    style={{
                      whiteSpace: "wrap",
                      fontWeight: "bold",
                      maxWidth: "200px",
                      fontSize: "18px",
                      marginTop: "10px",
                      color: "black",
                    }}
                  >
                    {album.name}
                  </Card.Title>
                  <Card.Text
                    style={{
                      color: "black",
                    }}
                  >
                    Release Date: <br /> {album.release_date}
                  </Card.Text>
                  <Button
                    href={album.external_urls.spotify}
                    style={{
                      backgroundColor: "black",
                      color: "white",
                      fontWeight: "bold",
                      fontSize: "15px",
                      borderRadius: "5px",
                      padding: "10px",
                    }}
                  >
                    Album Link
                  </Button>
                </Card.Body>
              </Card>
            );
          })}
        </Row>
      </Container>
    </>
  );
}

export default App;
```

Ready to rock? Fire up your app, enter an artist's name in the search bar, and see what albums you can find!!

![BP](https://github.com/izzyluuuuh/spotify-album-finder/assets/103919666/a9a1be7d-1745-43bd-a6e7-8f1fef306203)

## Conclusion

Congratulations!!! 🎊

You've built a web app that interacts with the Spotify API! 

Now that you've built a foundation, explore the endless possibilities of the Spotify API! 🎵
<!--Some other ideas include:

- Data Visualization on Spotify Data
- Authentication to your personal Spotify account
- Playlist creator
- CSS Redesign
- Build a playlist generator based on user preferences or mood.
- Create a "radio station" experience that recommends similar artists based on a user's search.
- Design a visualizer that animates based on the music being played.-->

Let your imagination guide you and keep building! 🥹😼

# More Resources
- [Source code for this project!](https://github.com/itsnotizzy/the-api-template)
- [Spotify for Developers Web API Documentation](https://developer.spotify.com/documentation/web-api)
- [Understanding the Spotify API by Spotify Engineering](https://engineering.atspotify.com/2015/03/understanding-spotify-web-api/)
- [React Documentation](https://react.dev/)
- [React-Bootstrap Documentation](https://react-bootstrap.netlify.app/)

---

🖤 All the Love for [Ellie](https://twitter.com/exrlla)!
\
This is an updated version of her work.

Follow Me!
\
💙 Instagram: [@izzyluuuuh](https://www.instagram.com/izzyluuuuh/)
