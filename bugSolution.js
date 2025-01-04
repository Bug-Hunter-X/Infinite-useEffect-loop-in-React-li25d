```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // This effect runs only when the 'count' variable changes
    console.log('Count:', count);
    return () => {
      // Cleanup function (optional)
    };
  }, [count]); // 'count' is added to dependency array

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}
```