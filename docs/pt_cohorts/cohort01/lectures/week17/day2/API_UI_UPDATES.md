---
title: API/UI Updates
sidebar_label: UI/API Updates
sidebar_position: 2
---

## UI Updates

### Add Auth Context - `AuthContext.jsx`

```jsx
import { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export function AuthProvider({ children }) {
    const [isAuth, setIsAuth] = useState(false);

    useEffect(() => {
        if (localStorage.getItem('access_token')) {
            setIsAuth(true);
        }
    }, []);

    return (
        <AuthContext.Provider value={{ isAuth, setIsAuth }}>
            {children}
        </AuthContext.Provider>
    );
}

export function useAuth() {
    return useContext(AuthContext);
}
```

### Wrap `App` in `AuthContext`

```jsx
// Import AuthProvider from AuthContext

import { AuthProvider } from "./AuthContext";
// other imports...

function App() {
  return (
    <AuthProvider>
    // existing routes here...
    </AuthProvider>
  );
}
```

### Add Registration Form - `components/RegistrationForm.jsx`

```jsx
import { useState } from "react";
import { useNavigate } from "react-router";
import styles from "./form.module.css";

const RegisterForm = () => {
  const [emailAddress, setEmailAddress] = useState("");
  const [password, setPassword] = useState("");
  const [properName, setProperName] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    const apiUrl = `${import.meta.env.VITE_API_URL}/register`;
    const body = {
      name: properName,
      email: emailAddress,
      hashed_password: password,
    };

    try {
      const response = await fetch(apiUrl, {
        method: "POST",
        body: JSON.stringify(body),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();
      console.log("DATA: ", data);
      navigate("/login");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form
      className={styles.form}
      method="POST"
      onSubmit={(e) => handleSubmit(e)}
    >
      <label>
        What is Your Name?
        <input
          type="text"
          name="properName"
          value={properName}
          placeholder="Firstname Lastname"
          onChange={(e) => setProperName(e.target.value)}
        />
      </label>
      <label>
        What is Your Email Address?
        <input
          type="text"
          name="emailAddress"
          value={emailAddress}
          placeholder="user@email.com"
          onChange={(e) => setEmailAddress(e.target.value)}
        />
      </label>
      <label>
        Set a Password
        <input
          type="password"
          name="password"
          value={password}
          placeholder="battery horse correct staple"
          onChange={(e) => setPassword(e.target.value)}
        />
      </label>
      <button type="submit">Register</button>
    </form>
  );
};

export default RegisterForm;
```

### Add Login Form = `componenents/LoginForm.jsx`

```jsx
import { useState } from 'react';
import { useNavigate } from "react-router";
import { useAuth } from '../AuthContext';

import styles from './form.module.css';
import { Link } from 'react-router';

const LoginForm = () => {
  const [emailAddress, setEmailAddress] = useState('');
  const [password, setPassword] = useState('');
  const { setIsAuth } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    const apiUrl = `${import.meta.env.VITE_API_URL}/login`;
    const body = {
      email: emailAddress,
      hashed_password: password,
    };

    try {
      const response = await fetch(apiUrl, {
        method: 'POST',
        body: JSON.stringify(body),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const statusCode = response.status;
      const data = await response.json();

      console.log('RESPONSE:', response, response.status);

      const { access_token } = data;
      localStorage.clear();
      localStorage.setItem('access_token', access_token);
      setIsAuth(statusCode === 200);
      navigate("/links");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <Link to='/register'>Click here if you need register for an account</Link>
      <form
        className={styles.form}
        method='POST'
        onSubmit={(e) => handleSubmit(e)}
      >
        <label>
          Username
          <input
            type='text'
            name='emailAddress'
            value={emailAddress}
            placeholder='user@email.com'
            onChange={(e) => setEmailAddress(e.target.value)}
          />
        </label>
        <label>
          Password
          <input
            type='password'
            name='password'
            value={password}
            placeholder='password'
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <button type='submit'>Login</button>
      </form>
    </>
  );
};

export default LoginForm;
```

### Add Pages

- Create `pages/Login.jsx` and import `LoginForm.jsx`
- Create `pages/Register.jsx` and import `RegisterForm.jsx`

### Add a new layout, `layouts/ProtectedLayout.jsx`

```jsx
import { Outlet, Navigate } from "react-router";
import { useAuth } from "../AuthContext";
import Header from "../components/Header";
import Footer from "../components/Footer";

const ProtectedLayout = () => {
  const { isAuth } = useAuth();

  if (!isAuth) {
    // If not authenticated, redirect to the login page
    return <Navigate to="/login" />;
  }

  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default ProtectedLayout;
```

### Add new pages and wrap Protected Layout around protected routes

```jsx
// Import new pages/layout
// Add the following to the existing imports...

import ProtectedLayout from "./layouts/ProtectedLayout";

import Login from "./pages/Login";
import Register from "./pages/Register";
import Logout from "./pages/Logout";

function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route element={<MainLayout />}>
        //  Main Layout Routes...
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
        </Route>
        <Route element={<ProtectedLayout />}>
        // Move Links, AddLink, Logout to ProtectedLayout...
            <Route path="/links" element={<Links />} />
            <Route path="/addLink" element={<AddLink />} />
            <Route path="/logout" element={<Logout />} />
        </Route>
        // Remaining routes...
      </Routes>
    </AuthProvider>
  );
}
```

### Update navigation links

```jsx
// Import useAuth Hook
import { useAuth } from '../AuthContext';

const Header = () => {
    // Import isAuth variable from useAuth hook
    const { isAuth } = useAuth();
    // Add conditional rendering to current nav items
    {isAuth ? (
        <>
            <li>
                <Link to='/links'>Links</Link>
            </li>
            <li>
                <Link to='/addLink'>Add a Link</Link>
            </li>
            <li>
                <Link to='/logout'>Logout</Link>
            </li>
        </>
        ) : (
        <>
            <li>
                <Link to='/login'>Login</Link>
            </li>
            <li>
                <Link to='/register'>Register</Link>
            </li>
        </>
    )}
```

### Send `Bearer` token with Add Link request

In `AddLink.jsx` get the `access_token` from `localstorage`

```jsx
const handleSubmit = async (event) => {
    // ... existing handle submit function options
    const access_token = localStorage.getItem("access_token");
    // ... remaining handle submit function options
```

Then add the following to the `fetch` call...

```jsx
    // existing `fetch()`...
    headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${access_token}`,
    },

```

## API Updates

### Update the Users model

```py
class UserAccountSchema(Base):
    # REMOVE NAME FROM HERE
    email: EmailStr
    """ We set an alias for the field so that when this field is serialized or deserialized,
    the name "password" will be used instead of "hashed_password." """
    hashed_password: str = Field(alias="password")

# ADD NEW CLASS HERE
class UserRegistrationSchema(UserAccountSchema):
    name: str

    class Config:
        populate_by_name = True
```

### Update `register_user` route

Change the following (around Line 45)...

```py
def register_user(payload: UserAccountSchema, session: Session = Depends(get_session)):
```

to this...

```py
def register_user(payload: UserRegistrationSchema, session: Session = Depends(get_session)):
```

### Add auth check to `urls/add` route

Change the following (around Line 60)

```py
async def add_url(payload: Urls, session: Session = Depends(get_session)):
```

Add the following dependency: `user: User = Depends(get_current_user_token),`

```py
async def add_url(payload: Urls, user: User = Depends(get_current_user_token), session: Session = Depends(get_session)):
```

### Update Services

Change the last line...

```py
return user
```

Return `token_data` instead of `user`

```py
return token_data
```
