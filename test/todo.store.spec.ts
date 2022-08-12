import store from "../src/store" 
import { addTodo , saveAsync } from "../src/features/todo/store/slice"
import {rest} from 'msw'
import {setupServer} from 'msw/node'
describe("test 01",()=>{
    const server = setupServer(
        rest.get('http://localhost/api/todos/:id', (req, res, ctx) => {
            console.log("get called", req)
          return res(ctx.json({greeting: 'hello there'}))
        }),
      )
      
      beforeAll(() => server.listen())
      afterEach(() => server.resetHandlers())
      afterAll(() => server.close())
      

    const initial = { todos: { todos: [], selected: null, errors: [], status: 'idle' } }

    it("should return initial state", ()=>{

        expect(store.getState()).toEqual(initial)
    
    })

    it("should saga calls returns ", async ()=>{
        const newTodo = {
            completed: false,
            id : 1, 
            title : "saved todo"
        }
        
       await  store.dispatch(saveAsync(newTodo))

        const state = store.getState() 
        
        expect(state.todos.todos).toContain(newTodo)
    })
})