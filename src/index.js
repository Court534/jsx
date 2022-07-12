// 1. Import the React and ReactDom libraries
import React from 'react';
import ReactDOM from 'react-dom/client';

// 2. Get a reference to the div with ID root
const el = document.getElementById('root');

// 3. Tell React to tak control of that element
const root = ReactDOM.createRoot(el);

// 4. Create a component

// function App() {
//   return (
//     <div class="wrapper">
//       <textarea                            <-- Was given this code with mistakes to correct.
//         readonly="true"                        Below is the correct layout for jsx.
//         maxlength="3"
//         spellcheck="true"
//         style="background-color: gray;"
//       />
//     </div>
//   );   
// }

function App() {
  return (
    <div className="wrapper">
      <textarea
        readOnly
        maxLength={3}
        spellCheck
        style={{backgroundColor: "gray"}}
      />
    </div>
  );   
}

export default App;

//5. Show the component on the screen 
root.render(<App />)
