import Button from './Button';
import List from './List';
import { useState } from 'react';
type Props = {
    title: string;
    description?: string;
}

function Card({title, description}: Props) {
    const tasksList: string[] = ["Hacer la cama", "Hacer la comida", "Hacer la cena"];
    const [list, setList] = useState(tasksList)
    const [isLoading, setIsLoading] = useState(false);
    const addTask = () => {
        // setIsLoading(true);
        // setTimeout(() => {
        const newTask: string = prompt("¿Qué tarea quieres añadir?") || "";
            setIsLoading(true);
            setTimeout(() => {
            setList([...list, newTask]);
            setIsLoading(false);
        }, 1000);
            
        };
    const deleteTask = () => {
        // setIsLoading(true);
        // setTimeout(() => {
            setIsLoading(true);
            setTimeout(() => {
            setList(list.slice(0, - 1));
            setIsLoading(false);
        }, 1000);
            
        };
    
  return (
    <div className="bg-slate-400 p-8 rounded-md w-3/5 mx-auto">
        <h2 className="text-xl text-center font-bold">{title}</h2>
        <p>{description}</p>
        <ul>
            {list.map((task, index) => <List key={index} task={task}></List>)}
        </ul>
        <Button isLoading={isLoading} onClick={addTask}>{"Añadir"}</Button>
        <Button isLoading={isLoading} onClick={deleteTask}>{"Elminar"}</Button>
        {/* <Button isLoading={isLoading} onClick={handleIsLoading}>{isLoading ? "Cargando..." : "Eliminar"}</Button> */}
        
       
    </div>
  )
}

export default Card