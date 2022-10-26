import { Controller, Delete, Get, Post, Put,Body, Param, Req,Res } from '@nestjs/common';
import { CreatetitTaskDto } from './dto/create.task.dto';
import { Request,Response } from 'express';
import { TaskService } from './task.service';
import { Task } from './interfaces/Task';
@Controller('task')
export class TaskController {
constructor(private taskService:TaskService){}
    @Get()
    getTasks(): Task[] {
       return this.taskService.getTasks()
    }
    // getTask(@Req() req,@Res() res){
    //     res.send("hello world")
    // }

     @Get(':id')
     getTask(@Param('id') id:string): Task {
        return this.taskService.getTask(parseInt(id))
     }   
    @Post()
    createTask(@Body() task:CreatetitTaskDto): CreatetitTaskDto {
        console.log(task.description);
        
        return task
    }
    @Put(':id')
    updateTask(@Body() task:CreatetitTaskDto, @Param('id')id): string {
        console.log(task);
        console.log(id);
        
        
        return 'actualizando tareas'
    }

    @Delete(':id')
    deleteTask(@Param('id')id): string {
        console.log(id);
        
        return `eliminando tareas ${id}`
    }

}
