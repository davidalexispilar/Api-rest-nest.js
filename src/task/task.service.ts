import { Injectable } from '@nestjs/common';
import { Task } from './interfaces/Task';

@Injectable()
export class TaskService {
    tasks: Task[]=[
        {
            id:1,
            title:"pepe",
            description:"papa",
            done:"hola"
        },
        {
            id:2,
            title:"pepito",
            description:"cebolla",
            done:"hola"
        },
        {
            id:3,
            title:"pepe",
            description:"cebolllita",
            done:"hola"
        }
    ]

getTasks(): Task[]{
    return this.tasks
}
getTask(id:number): Task{
   return  this.tasks.find(task=>task.id === id)    
}


}
