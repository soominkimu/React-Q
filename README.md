# React-Q
##### Azat Mardan' React Quickly from MANNING Pub.

### Part 1 React foundation
1. Meeting React
```JavaScript
ReactDOM.render(
  React.createElement('h1', null, 'Hello world!'),
  document.getElementById('content')
)
```
2. Baby steps with React
3. Introduction to JSX
```JavaScript
class HelloWorld extends React.Component {
  render() {
    return <h1>Hello world!</h1>
  }
}
ReactDOM.render(
  <HelloWorld/>,
  document.getElementById('content')
)
```
4. Making React Interactive with states
5. React component lifecycle events
