import { Body, Controller, Get, Post } from '@nestjs/common';
import {UsersService} from 'src/users/services/users/users.service'
import { ApiBearerAuth, ApiTags} from '@nestjs/swagger';

@ApiTags('Users')
@Controller('api/users')
export class UsersController {
    
    constructor(private userService: UsersService){}

    @Get()
    getAll(){
        return this.userService.findAll();
    }

    @Post()
    create(@Body() body: any){
        return this.userService.create(body)
    }
}
