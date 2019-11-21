# Answers

1. What is React JS and what problems does it try and solve? Support your answer with concepts introduced in class and from your personal research on the web.

  - React JS is an interactive UI library that is JavaScript like HTML and the problems it tries to solve is the use of the virtual DOM for faster development of the UI app, Reusability of components throughout the entire application, which can help save time in the development process, and uses of real and fully featured programming language that renders view.

1. What does it mean to think in react?

  - First you must break down the UI into components to understand the parent/child relationship, then build a static app with no interactivity, identify where to use state then figure out where state should live, decide how the hierarchy will function for props and state to flow down accordingly.

1. Describe state.

  - When data comes in it is loaded and stored within state. State is managed by the component and can be changed by the state.

1. Describe props.

  - When you want to pass information from component to component that is held on state can be passed through with props.

1. What are side effects, and how do you sync effects in a React component to state or prop changes?

  - Side effects are anything that can affects anything outside the scope of the function that is being executed. I.e. fetching data from an API, manual manipulation of the DOM, and setting up subscription. Can use useEffect function that will help run these side effects after the render is ran.
