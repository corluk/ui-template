import React , { useState} from "react" 



export default ()=>{

    const [val,setVal] = useState("")

    return <>
        <div className="grid grid-col-1">
            <div className="grid grid-col-2">
                    <div className="mx-2">
                        <label htmlFor="input1">INPUT1</label>
                    </div>
                    <div className="mx-2">
                        <input type="text" value={val} onChange={e =>setVal(e.target.value) }/>
                    </div>

            </div>
        </div>
    </>
}