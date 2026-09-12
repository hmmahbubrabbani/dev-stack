<div align="center">

# ⚡ Project Name: Dev Stack

**An interactive ecosystem tool curated for developers to explore, filter, and assemble modern software engineering stacks.**





</div>

---

## 📖 Description:

**Dev Stack** is designed for modern developers and tech leads to evaluate and select the best tools for their software architecture. Instead of sifting through fragmented documentation, users can visually explore frontend libraries, backend runtimes, databases, and DevOps utilities in a unified workspace and build their ideal stack in real time.

---

## 💻 Technologies Used:


| **React 19** |
| **TypeScript** |
| **Tailwind CSS** |
| **Vite **|
| **Toast Notifications** |


---

## ✨ Key Features:

- 1. Real-Time Interactive Stack Manager:** Select technologies with a single click to instantly compile them into a sticky, synchronized stack sidebar that prevents duplicate selections.
- 2. Dynamic Toast Feedback Engine:** Powered by `react-toastify`, providing clear visual feedback whenever technologies are added, removed, or the entire stack is reset.
- 3. Curated Multi-Domain Catalog:** Browse comprehensive cards containing badges, ratings, and experience levels categorized across Frontend, Backend, Database, Language, Styling, DevOps, and Tools.

---

## Question and Answers

## Q 1. What is JSX? and why is it used in React?

- Ans: **JSX** stands for **JavaScript XML**. It is a syntax extension for JavaScript.

-  JSX is used in React to write HTML-like markup directly inside JavaScript, making it easier and more intuitive to build dynamic, interactive user interfaces.

## Q 2. What is the difference between props and state?

- Ans: Props are read-only inputs passed from a parent component to configure it, while state is internal data managed within the component that can change over time to trigger re-renders.

## Q 3. What does the useState hook do, and where did you use it in this project?

- Ans: The "useState" hook is a fundamental React hook that allows functional components to store, track, and update internal, mutable state across renders. Whenever the state setter function is invoked with a new value, React automatically re-renders the component to reflect the updated data in the UI.

- In the Dev Stack application, useState was primarily used in App.tsx for two distinct purposes: 1. Managing Selected Technologies and 2. Managing Data Loading State.

## Q 4. What does the useEffect hook do, and why did you need it to load the JSON data?

- Ans: The useEffect hook lets functional components run side effects—operations that reach outside the normal render cycle, such as network requests, manual DOM mutations, timers, or event listeners. By specifying an empty dependency array [], useEffect tells React to execute the callback function only once, right after the component mounts into the DOM.

- It is needed to load the json data for 1. Preventing Infinite Render Loops and 2. Decoupling Data Fetching from Rendering.

## Q 5. Why does every item in a .map() list need a unique key prop?

- Ans: React requires a unique key prop to identify which items change, are added, or are removed during its reconciliation process. This allows React to update only the specific DOM nodes that changed, boosting performance and preventing UI bugs caused by mismatched component state.

## Q 6. What is conditional rendering? Show one place you used it (example: the empty stack message).

- Ans: Conditional rendering in React is the practice of rendering different UI elements, components, or styles dynamically based on whether certain conditions evaluate to true or false—similar to how if-else works in standard JavaScript.

- Example from this Project: Empty Stack Message
In the StackCart component, a ternary operator ? : is used to check whether selectedTechnologies.length === 0:

## Q 7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?

- Ans: Data flow in React follows a unidirectional (top-down) pattern: 
- 1. Parent to Child: Using Props
 A parent component passes data down to a child by specifying attributes on the child's JSX tag, just like HTML attributes. The child receives these as read-only props. 
- 2. Child to Parent: Using Callback Functions
 A child cannot directly push state up to its parent. Instead, the parent passes a function as a prop down to the child. When an event occurs inside the child (like a button click), the child invokes that function with the necessary data as arguments.