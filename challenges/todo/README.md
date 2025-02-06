# Frontend Mentor - Todo app solution

This is a solution to the [Todo app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/todo-app-Su1_KokOW). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Add new todos to the list
- Mark todos as complete
- Delete todos from the list
- Filter by all/active/complete todos
- Clear all completed todos
- Toggle light and dark mode
- **Bonus**: Drag and drop to reorder items on the list

### Screenshot

![](/public/screenshot-light-theme.png)
![](/public/screenshot-dark-theme.png)

### Links

- Solution URL: [https://github.com/eljohn316/todo-app](https://github.com/eljohn316/todo-app)
- Live Site URL: [https://todo-app-eta-two-26.vercel.app/](https://todo-app-eta-two-26.vercel.app/)

## My process

### Built with

- HTML5
- CSS
- localStorage - For storage
- [React](https://reactjs.org/) - JS library
- [Styled Components](https://styled-components.com/) - For styles

### What I learned

I learned how to use `styled-components` to write scoped, dynamic CSS directly in my React components, making styling more efficient and manageable.

```js
const Wrapper = styled.div`
  /* styles here */
`;
```

Additionally, I’ve learned to create custom React hooks, allowing me to extract and reuse logic across components for cleaner, more organized code.

```js
export function useTodos() {
  const [todos, setTodos] = useLocalStorage('todos', {
    defaultValut: todos
  });

  const createTodo = () => {
    // Create todo logic
  };

  const updateTodo = (todoId) => {
    // Update todo logic
  };

  const deleteTodo = (todoId) => {
    // Delete todo logic
  };

  return {
    todos,
    createTodo,
    updateTodo,
    deleteTodo
  };
}
```

### Continued development

I planned on adding the drag and drop feature in the future.

### Useful resources

- [Josh Comeau's CSS reset](https://www.joshwcomeau.com/css/custom-css-reset/) - This helped me with the global CSS reset.
- [https://reactlevelup.com/posts/use-local-storage](https://reactlevelup.com/posts/use-local-storage) - This help me create a custom hook for interacting with localStorage.

## Author

- Frontend Mentor - [@eljohn316](https://www.frontendmentor.io/profile/eljohn316)
- Github - [@eljohn316](https://github.com/eljohn316)
