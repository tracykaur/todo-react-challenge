# React Components

Review the project and add a few more todo items.

Challenge:
- Add a H1 title to the todo list (My Todo list)
- Add a H2 title to the todo list (Things I need to get done!)
- Wrap the H1 & H2 in a div with the class name 'heading'
- Update the CSS to add a backgound colour to the heading div
- Move the div heading to it's own function called Heading
- Turn todos into an array of hashes with 'task' and 'complete' properties.
- Show "Complete!" next to a task if it's complete.
- There's a great bootstrap/react plugin. Take a look at the components: https://reactstrap.github.io/components/
- Have a Col inside a Row inside a Container. Inside the col, have a ListGroup. Make each task a ListGroupItem.
- Use a badge to indicate a completed task.
- Move the todo list into its own function.
- Move the todo list into its own file in components/todo-list.js (export/import)
- Pass the todo list through props. E.g.
  <ToDoList tasks={toDos} />
- Console is giving you an error about 'unique "key" prop.'. Research + resolve. Hint: you'll need to add an 'id' to each task