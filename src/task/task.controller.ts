import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { TaskService } from './task.service';
import { Task } from './task.entity';
@Controller('task')
export class TaskController {
    constructor(private readonly taskService: TaskService) {

    }
    @Get()
    find(): Promise<Task[]> {
        return this.taskService.fintAll()
    }
    @Get(':id')
    get(@Param() params) {
        return this.taskService.findOne(params.id);
    }
    @Post()
    create(@Body() task: Task) {
        return this.taskService.create(task);
    }
    @Put()
    update(@Body() task: Task) {
        return this.taskService.update(task);
    }
    @Delete(':id')
    deleteUser(@Param() params) {
        return this.taskService.delete(params.id);
    }

}
