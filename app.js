const app = document.getElementById('app')
const addTodo = (title) => () => {
  const el = document.createElement('div')
  el.innerText = title
  app.appendChild(el)
}
setTimeout(addTodo('first child'), 1000)
setTimeout(addTodo('second child'), 2000)
setTimeout(addTodo('third child'), 3000)
