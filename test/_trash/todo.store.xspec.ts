import store from "../../src/store" 
import Server from "../../server"
import {rest} from 'msw'
import {setupServer} from 'msw/node'
describe("test 01",()=>{
    const server = setupServer(
        rest.get('http://localhost/api/todos/:id', (req, res, ctx) => {
            console.log("get called", req)
          return res(ctx.json({greeting: 'hello there'}))
        }), 
        rest.get("http://localhost/api/todos",(req,res,ctx)=>{

            const todos : Todo[] = []
            for(let i = 0 ; i != 10 ; i++){
                const todo : Todo = {
                    id : i , 
                    title : "todo number : " + i ,
                    completed : false 
                }
                    todos.push(todo)

            }
            return res(ctx.json(todos))
        }),
        rest.post("http://localhost/api/todos",(req,res,ctx)=>{

        return res(ctx.json({title:"saved " , id: 11 , completed: false }))
        })
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
    expect(store.getState().todos.status ).toEqual("idle")
       await  store.dispatch(saveAsync(newTodo))

        const state = store.getState() 
        expect(state.todos.status).toEqual("completed")
        
    })
  
    it("should return at least 5 object  ", async ()=>{
        
     
       await  store.dispatch(fetchTodos())

        const state = store.getState() 
        expect(state.todos.status).toEqual("completed")
        expect(state.todos.todos.length).toBeGreaterThan(4)
    })
    
})