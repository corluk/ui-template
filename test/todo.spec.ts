import store from "../src/store" 


describe("test 01",()=>{

    const initial = { todos: { todos: [], selected: null, errors: [], status: 'idle' } }

    it("should return initial state", ()=>{

        expect(store.getState()).toEqual(initial)
    
    })
})