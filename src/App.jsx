import React, { createContext, useContext } from "react";


// Example 1 - Basic useContext
const UserContext = createContext();

function App() {
  return (
    <div>
      {/* Example 1 */}
      <UserContext.Provider value="Lokesh">
        <User />
      </UserContext.Provider>

      {/* Example 2 */}
      <UserDetails />

      {/* Example 3 */}
      <ThemeExample />

      {/* Example 4 */}
      <NumberExample />

      {/* Example 5 */}
      <LoginExample />

      {/* Example 6 */}
      <FunctionExample />

      {/* Example 7 */}
      <ObjectExample />

      {/* Example 8 */}
      <NestedExample />

      {/* Example 9 */}
      <LanguageExample />

      {/* Example 10 */}
      <UserProfileExample />
    </div>
  );
}

function User() {
  return <UserName />;
}

function UserName() {
  const name = useContext(UserContext);

  return <h1>Hello {name}</h1>;
}

// Example 2 - Multiple Values
const UserDetailsContext = createContext();

function UserDetails() {
  return (
    <UserDetailsContext.Provider
      value={{
        name: "Lokesh",
        age: 20,
      }}
    >
      <UserDetailsChild />
    </UserDetailsContext.Provider>
  );
}

function UserDetailsChild() {
  const user = useContext(UserDetailsContext);

  return (
    <div>
      <h2>Example 2 - Multiple Values</h2>
      <p>Name: {user.name}</p>
      <p>Age: {user.age}</p>
    </div>
  );
}


// Example 3 - Theme Context
const ThemeContext = createContext();

function ThemeExample() {
  return (
    <ThemeContext.Provider value="Dark">
      <ThemeChild />
    </ThemeContext.Provider>
  );
}

function ThemeChild() {
  const theme = useContext(ThemeContext);

  return (
    <div>
      <h2>Example 3 - Theme</h2>
      <p>Current Theme: {theme}</p>
    </div>
  );
}


// Example 4 - Number Context
const NumberContext = createContext();

function NumberExample() {
  return (
    <NumberContext.Provider value={100}>
      <NumberChild />
    </NumberContext.Provider>
  );
}

function NumberChild() {
  const number = useContext(NumberContext);

  return (
    <div>
      <h2>Example 4 - Number Context</h2>
      <p>Number: {number}</p>
    </div>
  );
}


// Example 5 - Boolean Context
const LoginContext = createContext();

function LoginExample() {
  return (
    <LoginContext.Provider value={true}>
      <LoginChild />
    </LoginContext.Provider>
  );
}

function LoginChild() {
  const isLoggedIn = useContext(LoginContext);

  return (
    <div>
      <h2>Example 5 - Boolean Context</h2>

      {isLoggedIn ? (
        <p>User is logged in ✅</p>
      ) : (
        <p>User is logged out ❌</p>
      )}
    </div>
  );
}


// Example 6 - Function Context
const FunctionContext = createContext();

function FunctionExample() {
  function sayHello() {
    alert("Hello Lokesh!");
  }

  return (
    <FunctionContext.Provider value={sayHello}>
      <FunctionChild />
    </FunctionContext.Provider>
  );
}

function FunctionChild() {
  const sayHello = useContext(FunctionContext);

  return (
    <div>
      <h2>Example 6 - Function Context</h2>

      <button onClick={sayHello}>
        Say Hello
      </button>
    </div>
  );
}


// Example 7 - Object Context
const ProfileContext = createContext();

function ObjectExample() {
  return (
    <ProfileContext.Provider
      value={{
        name: "Lokesh",
        age: 20,
        city: "Kathmandu",
      }}
    >
      <ProfileChild />
    </ProfileContext.Provider>
  );
}

function ProfileChild() {
  const profile = useContext(ProfileContext);

  return (
    <div>
      <h2>Example 7 - Object Context</h2>

      <p>Name: {profile.name}</p>
      <p>Age: {profile.age}</p>
      <p>City: {profile.city}</p>
    </div>
  );
}

// Example 8 - Nested Components
const MessageContext = createContext();

function NestedExample() {
  return (
    <MessageContext.Provider value="Hello from Context!">
      <ComponentA />
    </MessageContext.Provider>
  );
}

function ComponentA() {
  return (
    <div>
      <h2>Component A</h2>
      <ComponentB />
    </div>
  );
}

function ComponentB() {
  return (
    <div>
      <h3>Component B</h3>
      <ComponentC />
    </div>
  );
}

function ComponentC() {
  const message = useContext(MessageContext);

  return (
    <div>
      <h2>Example 8 - Nested Components</h2>
      <p>{message}</p>
    </div>
  );
}


// Example 9 - Language Context
const LanguageContext = createContext();

function LanguageExample() {
  return (
    <LanguageContext.Provider value="English">
      <LanguageChild />
    </LanguageContext.Provider>
  );
}

function LanguageChild() {
  const language = useContext(LanguageContext);

  return (
    <div>
      <h2>Example 9 - Language Context</h2>
      <p>Current Language: {language}</p>
    </div>
  );
}


// Example 10 - Mini User Profile
const UserProfileContext = createContext();

function UserProfileExample() {
  const user = {
    name: "Lokesh",
    email: "lokesh@example.com",
    city: "Kathmandu",
  };

  return (
    <UserProfileContext.Provider value={user}>
      <ProfilePage />
    </UserProfileContext.Provider>
  );
}

function ProfilePage() {
  return (
    <div>
      <h2>Example 10 - Mini User Profile</h2>
      <ProfileInfo />
    </div>
  );
}

function ProfileInfo() {
  const user = useContext(UserProfileContext);

  return (
    <div>
      <p>Name: {user.name}</p>
      <p>Email: {user.email}</p>
      <p>City: {user.city}</p>
    </div>
  );
}

export default App;