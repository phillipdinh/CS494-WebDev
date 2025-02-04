[![Open in Visual Studio Code](https://classroom.github.com/assets/open-in-vscode-c66648af7eb3fe8bc4f294546bfd86ef473780cde1dea487d3c4ff354943c9ae.svg)](https://classroom.github.com/online_ide?assignment_repo_id=10139642&assignment_repo_type=AssignmentRepo)
# Assignment 3

**Assignment due at 11:59pm on Monday, 2/20/2023**<br>
**Grading demo due by 11:59pm on Monday 3/13/2023**

The primary goal of this assignment is to practice fetching data from an HTTP API and using Emotion to style the components of an app.  Specifically, you'll use the [OpenWeather API](https://openweathermap.org/api) create a simple weather app that can display a daily forecast for a city specified by the user.  The assignment is broken down into parts below.

## 1. Sign up for an OpenWeather API key

To be able to use the OpenWeather API, you'll first need to sign up for an OpenWeather API key here: http://openweathermap.org/appid.  Without this API key, you won't be able to make calls to the API.  Once you have your API key, you can [use an environment variable](https://create-react-app.dev/docs/adding-custom-environment-variables) to incorporate it into your app.

> Importantly, as described in the documentation linked above, environment variables are not a secure way to incorporate secrets into a production Create React App application, since their values will be visible to any user who downloads your application bundle.  However, using environment variables *does* allow you to avoid publishing values to your GitHub repo by hard-coding them into your application.  In other words, it works well for development purposes only.

## 2. Fetch forecast data for a user-specified city

Next, incorporate components into your app that allow the user to submit a city name for which to fetch forecast data (e.g. a text input box and a "submit" button).  When the user submits a new city name, make a call to one of the OpenWeather API methods to fetch forecast data for the specified city.

Note that there are several different API methods that might work well here, though some of them require a paid subscription to the OpenWeather API, though, since you're a student, [OpenWeather will upgrade your API key for free](https://openweathermap.org/price#offers), giving you access to some of the API methods you'd normally have to pay for.  Here are a few of the API methods that might work well for this assignment:
  * [The 16-day daily forecast](https://openweathermap.org/forecast16) (requires an upgraded API key)
  * [The 5 day/3 hour forecast](https://openweathermap.org/forecast5)
  * [The one call API](https://openweathermap.org/api/one-call-api)
    * Note that this API might work best in conjunction with the [geocoding API](https://openweathermap.org/api/geocoding-api) to allow queries by city name

Whatever API method(s) you use, make sure you fetch several periods of forecast data (e.g. several days or several 3-hour periods).  Then, once you receive a response from the API, parse the relevant data out of the response body, and use it to render forecast cards in your app, each of which should represent the forecast for a specific period from the data.  Each card may display as much of the weather data as you want, but at a minimum, it should display the following information:
  * The date/time
  * The high and low temperatures
  * The probability of precipitation
  * The short description of the day's weather
  * The appropriate icon for the day's weather.  You can read more about how to get an OpenWeather icon URL from the forecast data here: https://openweathermap.org/weather-conditions.

> Note: The OpenWeather API works best when you use a specific format for the city name, e.g. "Corvallis,OR,US".  To make it easier on you, you can assume that users will type city names in this format.

Try to implement your data loading functionality as a [custom React hook](https://reactjs.org/docs/hooks-custom.html) that takes the user-entered city name as an argument and returns three values, `forecast`, `isLoading`, and `error`, respectively representing the fetched forecast data, the loading status for the data fetching operation, and the error status of the operation.

## 3. Apply professional-grade styling to your app

Finally, use Emotion to make your app look as good as you can.  It's up to you to come up with an application design, but really try to make your app look like a real, production weather app.  Remember, the assignments in this course are graded based on effort, not correctness, so you won't be penalized if your app doesn't win design awards, but treat this as an opportunity to practice using CSS to build an app that looks really good.

Here are some suggestions about how to approach the design of your app:
  * Including a navbar and footer in your app, and give your app a name and/or a logo that's displayed in the navbar.
  * Displaying each day's forecast in a distinct card element, and apply an appropriate spatial organization to these cards (e.g. arrange them in a scrollable horizontal or vertical list).
  * Use a modern font (e.g. from [Google Fonts](https://fonts.google.com)) and other modern design elements.
  * Use iconography when appropriate.  [Font Awesome](https://fontawesome.com/) is a great tool for incorporating icons (you can use [the official Font Awesome React component](https://fontawesome.com/how-to-use/on-the-web/using-with/react) to easily incorporate Font Awesome icons into a React app).
  * Browse the web and really pay attention to the styling of web apps you like.  Try to emulate elements of that styling in your app.
  * Read about principles of web design.  [This article](https://xd.adobe.com/ideas/principles/web-design/web-page-design/) is a good starting point.
  * Study [modern app design systems](https://designsystemsrepo.com/design-systems-recent/). To see what works in a design.

As you're styling your app, make sure to include responsive styling elements to make your app function well on different size devices (e.g. a navbar whose appearance changes as the viewport shrinks, an adaptive organization of your forecast cards, etc.).

## Extra credit

The following challenges are worth 1 point of extra credit each:

  * Add functionality to your application to allow the user to switch between a "light" theme and a "dark" theme.  This will involve writing styles for both themes and then adding a button or some other interactive mechanism (which should have polished styling) in the navbar or elsewhere in the app that toggles between the themes.  To make it easier to propagate theme changes across all the app's components, you can use [React's context functionality](https://reactjs.org/docs/context.html).  Use [the `useContext()` hook](https://reactjs.org/docs/hooks-reference.html#usecontext) to incorporate context into function components.

  * Use the geo coordinates returned in the OpenWeather API response to display a nice looking map indicating the location of the city for which the forecast is being displayed.  You can use any map library/API you like.  Some possibilities are [Leaflet](https://leafletjs.com/) (in conjunction with [React Leaflet](https://react-leaflet.js.org/)), [Mapbox](https://www.mapbox.com/), and [Google Maps](https://developers.google.com/maps/documentation/javascript/overview) (in conjunction with [Google Map React](https://www.npmjs.com/package/google-map-react)).  Note that OpenWeather has [a weather map API](https://openweathermap.org/api/weathermaps) that provides many different kinds of weather map.  As a further challenge, you could use this API to display a weather map for the specified location.

## Assignment submission

We'll be using GitHub Classroom for this assignment, and you will submit your assignment via GitHub.  Just make sure your completed files are committed and pushed by the assignment's deadline to the main branch of the GitHub repo that was created for you by GitHub Classroom.  A good way to check whether your files are safely submitted is to look at the main branch your assignment repo on the github.com website (i.e. https://github.com/osu-cs494-w23/assignment-3-YourGitHubUsername/). If your changes show up there, you can consider your files submitted.

## Assignment grading

This assignment is worth 10 points total.  You can also earn up to 2 points of extra credit as described above (1 point each for the two possible challenges).

Remember that in this course, programming assignments will be graded based on effort instead of correctness, and you will get full credit for an assignment if it is submitted on time and is clearly the product of a determined effort to solve the problem.  Again, If you’re unable to solve the homework problem, make sure to submit all code you’ve written, and then describe in comments in the source code the following three things:
  1. How you attempted to solve the problem.
  2. Where you ran into trouble.
  3. What options you think (conceptually) might lead to a working solution.

Note, however, that to earn extra credit for the assignment, the extra credit features must work correctly.  In other words, the extra credit will be graded based on correctness, not just effort.
