 import   axios  from "axios"
 import React from "react"
 import {render, screen , fireEvent} from '@testing-library/react'
 import userEvent from '@testing-library/user-event'
 import '@testing-library/jest-dom'
 import TodoComponent from "../src/features/todo/todo_component"
 import { RecoilRoot } from "recoil"
 
 jest.mock("axios");

const mockAxios   =  axios as jest.Mocked<typeof axios>
 it("test mock" , async ()=>{
  const resp = {title: "test"}
  mockAxios.get.mockResolvedValue(resp)
    render(<RecoilRoot> <TodoComponent /></RecoilRoot>)
    const txt  = screen.getByTestId("test_input_txt1") 
    await userEvent.keyboard("key")
    fireEvent.change(txt,{target:{value:"test item"}})
    const btn1 = screen.getByTestId("test_btn_add") 
    await userEvent.click(btn1)
    const items =  await screen.findAllByTestId("t_item")

    expect(items.length).toBeGreaterThan(0)
    
    
    //mockGet.mockResolvedValue(resp)
    
  })

 