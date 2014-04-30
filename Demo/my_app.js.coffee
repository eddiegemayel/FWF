class Alfred extends Batman.App

  class Alfred.Todo extends Batman.Model
    body: ''
    isDone: false

  if not Todo.all().length
    todo = new Todo body: 'Yeah'
    todo.save()
  @root 'main#index'

@Alfred = Alfred