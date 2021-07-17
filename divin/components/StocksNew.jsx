import React from 'react';

const initialFormUser = { name: "", age: "", email: "", phoneNumber: "" };

const formReducer = (state, action) => {
  switch (action.type) {
    case "UPDATE_NAME":
      return { ...state, name: action.payload };
    case "UPDATE_AGE":
      return { ...state, age: action.payload };
    case "UPDATE_EMAIL":
      return { ...state, email: action.payload };
    case "UPDATE_PHONE_NUMBER":
      return { ...state, phoneNumber: action.payload };
    default:
      return state;
  }
};

export default function App() {
  const [formState, formDispatch] = React.useReducer(
    formReducer,
    initialFormUser,
  );

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen! (with useReducer)</h2>
      <input
        type="text"
        placeholder="name"
        value={formState.name}
        onChange={(e) =>
          formDispatch({ type: "UPDATE_NAME", payload: e.target.value })
        }
      />
      <input
        type="text"
        placeholder="age"
        value={formState.age}
        onChange={(e) =>
          formDispatch({ type: "UPDATE_AGE", payload: e.target.value })
        }
      />
      <input
        type="text"
        placeholder="email"
        value={formState.email}
        onChange={(e) =>
          formDispatch({ type: "UPDATE_EMAIL", payload: e.target.value })
        }
      />
      <input
        type="text"
        placeholder="phoneNumber"
        value={formState.phoneNumber}
        onChange={(e) =>
          formDispatch({ type: "UPDATE_PHONE_NUMBER", payload: e.target.value })
        }
      />
    </div>


<View style={styles.picker}>
<Picker
  selectedValue={selectCountry}
  onValueChange={(itemValue) => setSelectCountry(itemValue)}
>
  {countries.map((country) => (
    <Picker.Item
      key={country.id}
      placeholder="Entrez votre ville"
      label={country.name}
      value={country.id}
    />
  ))}
</Picker>
  );
}
