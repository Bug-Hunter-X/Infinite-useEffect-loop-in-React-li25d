# React useEffect Infinite Loop Bug

This repository demonstrates a common bug in React applications involving the `useEffect` hook.  The `useEffect` hook runs infinitely, causing performance issues and potentially crashing the application.

## Bug Description
The issue stems from an improperly configured dependency array in the `useEffect` hook. Without specifying dependencies correctly, the effect runs on every render, creating an infinite loop.

## Solution
The solution involves correctly specifying the dependency array, ensuring that the effect only runs when the specified dependencies change.

## How to Reproduce
1. Clone the repository.
2. Run `npm install` to install the necessary dependencies.
3. Run `npm start` to start the development server.
4. Observe the console logs and the performance of the application.

## License
[MIT](https://choosealicense.com/licenses/mit/)