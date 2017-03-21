import {addTodo,VisibilityFilters,setVisibilityFilter} from './actions'
import todoApp from  './reducers'

import { createStore } from 'redux'
const {SHOW_COMPLETED} = VisibilityFilters

let store = createStore(todoApp)

const stateBefore={
  todos:[
  ],
  visibilityFilter:VisibilityFilters.SHOW_ALL
}
const stateAfter={
  todos:[
    {
      text:"I am HJY",
      completed: false,
      id:0
    }
  ],
  visibilityFilter:VisibilityFilters.SHOW_ALL
}
const stateAfter2={
  todos:[
    {
      text:"I am HJY",
      completed: false,
      id:0
    }
  ],
  visibilityFilter:VisibilityFilters.SHOW_COMPLETED
}

it('test todoApp reducers',()=>{
  expect(
    todoApp(stateBefore,addTodo("I am HJY"))
  ).toEqual(stateAfter)
  expect(
    todoApp(stateAfter,setVisibilityFilter(VisibilityFilters.SHOW_COMPLETED))
  ).toEqual(stateAfter2)
})

console.log("All test passed")
