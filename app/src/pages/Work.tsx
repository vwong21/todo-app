import React from "react"
import { TodoForm } from "../components/forms/TodoForm"
export const Work: React.FC = () => {
    const winObj = (window as any).electron
    return(
       <div>
        This is a work page content 
        <br />
        {winObj.homeDir()} 
        <br />
        {winObj.osVersion()}
        <br />
        {winObj.arch()}
        <TodoForm />
        </div> 
    ) 
}        