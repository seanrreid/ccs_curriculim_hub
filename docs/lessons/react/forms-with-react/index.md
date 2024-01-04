---
sidebar: auto
---

# Form Components in React

## Learning Objectives

After completing this lesson, you will be able to:

1. controlled vs non-controlled
2. stripping the event, passing the data
3. Storing state in the `<form>`
4. Handling input events in the children/descendants

## Lesson

### Overview

We're going to crate a login form that reports whether you have logged in correctly or not. It won't connect to a real backend.

### Setting Up

```sh
npx create-react-app login-form
cd login-form
mkdir src/components
code .
npm start
```

### Simulating an Authentication Server

In a real application, we would send a Request to a server to log a user in. For this example, we'll hard-code a "valid" username and password in the `App` Component. In addition, we'll define a function that checks whether a username/password pair are correct.

```js
import React from 'react';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            credentials: {
                huxley: {
                    password: 's3kr3t',
                },
            },
        };
    }

    render() {
        return <div className='App'>{/* Login Form will go here */}</div>;
    }

    _checkCredentials = (username, password) => {
        // Compare the arguments to the contents of this.state.credentials
    };
}

export default App;
```

We store the credentials in `this.state` and add a helper method called `_checkCredentials`.

#### Defining `App._checkCredentials()`

`_checkCredentials()` will look in `this.state.credentials` for a matching user. If it finds one, it will see if the passwords match.

No matter what, `_checkCredentials()` will return an Object with the following keys:

-   `isValid` - a Boolean that reports the status of the login attempt.
-   `message` - a String intended for the user to see.

Fill in the body of `_checkCredentials()` with the following code:

```js
_checkCredentials = (username, password) => {
    console.log('checking credentials');
    const userObj = this.state.credentials[username];
    if (userObj && userObj.password === password) {
        // If we found a user in this.state.credentials
        // and the passwords match.
        return {
            isValid: true,
            message: 'Login successful',
        };
    } else {
        // We couldn't find a user with that username
        // or the passwords didn't match.
        return {
            isValid: false,
            message: 'Bad username or password',
        };
    }
};
```

### Creating the `LoginForm` Component

The `LoginForm` Component is responsible for the following:

-   Displaying the form fields for `username` and `password`.
-   Managing `username` and `password` in `this.state`.
-   Submitting the credentials to our fake authentication server.
-   Showing the server response to the user.

Create a new file for our `LoginForm` Component.

```sh
touch src/components/LoginForm.js
```

In it, create the `LoginForm` class with placeholders for the `constructor()` and `render()` methods:

```js
import React from 'react';
class LoginForm extends React.Component {
    constructor(props) {
        super(props);
        // Add initial state here.
    }
    render() {
        return (
            // JSX for form will go here.
        );
    }
}
export default LoginForm;
```

#### Adding a `this.state` to the `constructor()`

Fill out the `constructor()` with the initial state for `username` and `password`:

```js
import React from 'react';
class LoginForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
        }
    }
    render() {
        return (
            // JSX for form will go here.
        );
    }
}
export default LoginForm;
```

Fill out the `render()` method so that the `LoginForm` displays three inputs:

-   username field
-   password field
-   submit button

```js
...
    render() {
        return (
            <div>
                <form>
                    <label>
                        username:
                        <input
                            type="text"
                        />
                    </label>
                    <br />
                    <label>
                        password:
                        <input
                            type="password"
                        />
                    </label>
                    <br />
                    <input type="submit" />
                </form>
            </div>
        );
    }
}
```

Since the `username` and `password` fields are not being sent to a server, we do not need to specify `name` attributes. (The `name` attributes serve as the keys in the key-value pairs sent in a POST Request.)

#### Updating `App.render()` to show the `LoginForm`

To make sure that the form appears on the page, `import` the `LoginForm` in `src/App.js` and add a `<LoginForm />` tag to your JSX:

```js{3,20}
import React from 'react';
import './App.css';
import LoginForm from './components/LoginForm';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            credentials: {
                huxley: {
                    password: 's3kr3t',
                }
            }
        }
    }

    render() {
        return (
            <div className="App">
                <LoginForm />
            </div>
        );
    }
```

You should see your form in the browser after the Dev Server refreshes:

#### Connecting the `username` and `password` to `this.state`

We've defined `username` and `password` in state, and we have `<input>` Components for each. Our next steps are to connect our state to our inputs:

1. Display the values from `this.state`
2. Add an `onChange` function that updates `this.state`

Displaying the values from state is as simple as adding `value` props to the `username` and `password` fields:

```js{10,18}
...
    render() {
        return (
            <div>
                <form onSubmit={this._submitForm}>
                    <label>
                        username:
                        <input
                            type="text"
                            value={this.state.username}
                        />
                    </label>
                    <br />
                    <label>
                        password:
                        <input
                            type="password"
                            value={this.state.password}
                        />
                    </label>
                    <br />
                    <input type="submit" />
                </form>
            </div>
        );
    }
...
```

If you try to type into those fields in the browser, nothing happens. That's because, no matter what, those fields can only display the values from `this.state`.

To get them to accept input, we'll write a helper method that will call `this.setState()`.

#### `_updateField()`

When working with forms, you could have separate helper methods for each individual form field. For longer forms, that would be repetitive and tedious. We'll write a helper method that accepts the field name and the new value.

In `src/components/LoginForm.js`, add a helper method named `_updateField`:

```js{29}
    render() {
        return (
            <div>
                <form onSubmit={this._submitForm}>
                    <label>
                        username:
                        <input
                            type="text"
                            value={this.state.username}
                        />
                    </label>
                    <br />
                    <label>
                        password:
                        <input
                            type="password"
                            value={this.state.password}
                        />
                    </label>
                    <br />
                    <input type="submit" />
                </form>
            </div>
        );
    }

    _updateField = (field, val) => {
        this.setState({
            [field]: val
        }, () => {
            console.log(`${field} is now ${val}`) ;
        });
    }

```

On line 3, `[field]` is a [computed property name](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Object_initializer#Computed_property_names). The `[]` tells JavaScript to use the value of the `field` argument as the key, instead of the literal word `"field"`.

Even though we're managing multiple values in state (`username` and `password`), we're only updating one at a time when we call `_updateField()`. Remember, `this.setState()` only updates the keys in the Object that you pass it.

#### Adding the `onChange` Handlers

Add `onChange` props to your `username` and `password` input Components. Set each `onChange` to an arrow function that expects to receive an Event Object.

In the body of the arrow functions, call `this._updateField` and pass it the field name, and the value (`this.target.value`):

```js{11-13,22-24}
...
    render() {
        return (
            <div>
                <form onSubmit={this._submitForm}>
                    <label>
                        username:
                        <input
                            type="text"
                            value={this.state.username}
                            onChange={(event) => {
                                this._updateField('username', event.target.value)
                            }}
                        />
                    </label>
                    <br />
                    <label>
                        password:
                        <input
                            type="password"
                            value={this.state.password}
                            onChange={(event) => {
                                this._updateField('password', event.target.value)
                            }}
                        />
                    </label>
                    <br />
                    <input type="submit" />
                </form>
            </div>
        );
    }
...
```

Using anonymous functions as the `onChange` value gives us access to the `event` Object and lets us customize the arguments to `this._updateField()`.

:::tip Controlled Components
In React terminology, `username` and `password` fields are [Controlled Components](https://reactjs.org/docs/forms.html#controlled-components).

This means that they:

-   Show a value from `this.state`.
-   Update the value using `this.setState()` when an Event occurs

Alternatively, a form element that is not connected to state is an [Uncontrolled Component](https://reactjs.org/docs/uncontrolled-components.html). Uncontrolled Components are used in the rare cases where you have a mix of React and non-React code.
:::

### Connecting `App._checkCredentials()` to the `LoginForm`

The `App` Component is doing the job of an authentication server and has a `_checkCredentials()` method. The `LoginForm` keeps track of the `username` and `password` that the user enters.

The last step is to call `_checkCredentials()` when the user clicks the `submit` button.

#### Passing `_checkCredentials()` as a prop

Update `src/App.js`, passing a new prop to `LoginForm`. We'll name the prop `handleSubmit` and its value will be our helper method, `_checkCredentials`:

```js{4}
    render() {
        return (
            <div className="App">
                <LoginForm handleSubmit={this._checkCredentials}/>
            </div>
        );
    }
```

Next, we'll call the new prop when the form is submitted.

#### Adding a `_submitForm()` helper method

Our next thing to do is add an `onSubmit` handler to the form that:

1. Calls `event.preventDefault()` so that we stay on the same page in the browser.
2. Passes `username` and `password` to `this.props.handleSubmit()`
3. Sets state based on the result of `this.props.handleSubmit()`

Calling `this.props.handleSubmit()` will trigger `App._checkCredentials()`, since `App` is passing `_checkCredentials` as the as the `handleSubmit` prop.

By default, `this.state.serverResponse` will be `null`. We can check whether it contains a truthy or falsey value. If it is truthy, we will render the message from the server. Otherwise, we know there's no server message to show.

```js{7,8}
class LoginForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            serverResponse: null,
            // Prior to response, use a falsey value
        }
    }
```

```js
_submitForm = (event) => {
    event.preventDefault();
    const serverResponse = this.props.handleSubmit(
        this.state.username,
        this.state.password
    );
    this.setState(
        {
            serverResponse,
        },
        () => {
            console.log(serverResponse);
        }
    );
};
```

We save the `serverResponse` in state using a [shorthand property name](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Object_initializer#New_notations_in_ECMAScript_2015), storing the value of `serverResponse` under the key name `"serverResponse"`.

Make sure that the `console.log()` displays the a success message if you put in the correct credentials, and the error message if not.

Next, we'll display the information in `serverResponse` to the user.

### Adding the `LoginMessage` Component

Currently, we're showing the login status (success or error) in the console. Next, we'll move that into its own Component.

A popular convention is to have one Component per file. In this case, we'll add a second Component to `src/components/LoginForm.js` that will only be used by the `LoginForm`. The logic for displaying the server's response is not complicated, but it's a lot to include in `LoginForm.render()`.

```js
class LoginMessage extends React.Component {
    // No need for a constructor.
    // LoginMessage doesn't manage any state.

    render() {
        // Return different JSX based on whether
        // we logged in successfully.
    }
}
```

The `LoginForm` will pass the values from the `serverResponse` to the `LoginMessage`. It receives those values from the `App` Component's `_checkCredentials()` function. The two possible values are:

```js
{
    isValid: true,
    message: 'Login successful'
}
```

or

```js
{
    isValid: false,
    message: 'Bad username or password'
}
```

Therefore, we can render `this.state.serverResponse.message` for the user to see, and use `this.state.serverResponse.isValid` to change the styling to reflect the login status.

We'll begin with a rough outline of the logic:

```js{4,6,12}
class LoginMessage extends React.Component {
    render() {
        // Destructure the `message` and `isValid` from the props Object.
        const { message, isValid } = this.props;

        if (message) {
            return (
                // Show different messages based on `isValid`
            );
        } else {
            // Rendering `null` tells React to show nothing.
            return null;
        }
    }
}
```

-   Line 4 is just for the sake of convenience. We use the [destructuring syntax](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment) to create the `message` and `isValid` variables and assign them the corresponding values form `this.props`.
-   The if-branch starting on line 6 will display the `message`. Based on whether the login attempt `isValid` or not, we'll adjust the styling.
-   On line 12, we return `null`, telling React not to display anything.

Add the following `<h1>` to display the `message` and toggle the `className` based on the value of `isValid`:

```js{9}
class LoginMessage extends React.Component {
    render() {
        // Destructure the `message` and `isValid` from the props Object.
        const { message, isValid } = this.props;

        if (message) {
            return (
                // Show different messages based on `isValid`
                <h1 className={ isValid ? 'success' : 'error'}>
                    {message}
                </h1>
            );
        } else {
            // Rendering `null` tells React to show nothing.
            return null;
        }
    }
}

```

On line 9, we use the [ternary operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator), which is like a compact if-else.

Unlike an if-else, a ternary is an **expression** and resolves into a single value. If `isValid` is truthy, the entire expression is replaced with `"success"`. Otherwise, the expression is replaced with `"error"`.

In the `src/index.css`, add some simple styles for those class names:

```css
.error {
    background-color: red;
    font-size: 18px;
    color: white;
}

.success {
    background-color: green;
    font-size: 18px;
    color: white;
}
```

#### Using the LoginMessage

Towards the end of `LoginMessage.render()`, add a `<LoginMessge>` JSX tag after the closing `<form>` tag:

```js
...
    render() {
        return (
            <div>
                <form onSubmit={this._submitForm}>
                    <label>
                        username:
                        <input
                            type="text"
                            value={this.state.username}
                            onChange={(event) => {
                                this._updateField('username', event.target.value)
                            }}
                        />
                    </label>
                    <br />
                    <label>
                        password:
                        <input
                            type="password"
                            value={this.state.password}
                            onChange={(event) => {
                                this._updateField('password', event.target.value)
                            }}
                        />
                    </label>
                    <br />
                    <input type="submit" />
                </form>
                <LoginMessage
                    message={this.state.serverResponse.message}
                    isValid={this.state.serverResponse.isValid}
                />
            </div>
        );
    }
...
```

To pass the all of the key-value pairs from `this.state.serverResponse` as props, you can write this instead:

```js{3}
...
                </form>
                <LoginMessage {...this.state.serverResponse} />
            </div>
        );
    }
...
```

This is the Object spread syntax. React copies the key-value pairs from `this.state.serverResponse` to the `props` it passes to `LoginMessage`.

#### Resetting `LoginMessage` onChange

After submitting the form, the `LoginMessage` should disappear if the user decides to type in different information.

To do that, we will add another key-value pair to the `this.setState()` call in `_updateField()`:

```js{4}
    _updateField = (field, val) => {
        this.setState({
            [field]: val,
            serverResponse: null
        }, () => {
            console.log(`${field} is now ${val}`) ;
        });
    }
```

### Summary

In this lesson, you built on your knowledge of stateful components and event handlers to create interactive forms in React.

State management is the key to using forms effectively in a React application.
