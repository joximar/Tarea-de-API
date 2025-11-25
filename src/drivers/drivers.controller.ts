import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, Put } from '@nestjs/common';
import { DriversService } from './drivers.service';
import { CreateDriversDTO } from './dtos/create.driver.dto';
import { UpdateDriversDTO } from './dtos/update.driver.dto';

@Controller('drivers')
export class DriversController {

    constructor (private readonly driverService : DriversService){}

    //listar
    @Get()
    findAll(){
        return this.driverService.findAll()
    }

    //buscar 
    @Get(':id')
    findOne(@Param('id', ParseIntPipe) id: number){
        const driver = this.driverService.findOne(id);
        return driver;
    }

    //crear
    @Post()
    create(@Body() createdriversDTO : CreateDriversDTO){
        return this.driverService.create(createdriversDTO);
    }

    //actualizar
    @Put(':id')
    update(@Param('id', ParseIntPipe) id: number, @Body() updatedriversDTO:UpdateDriversDTO){
        return this.driverService.update(id, updatedriversDTO)
    }

    //elimar
    @Delete(':id')
    delete(@Param('id', ParseIntPipe) id:number){
        return this.driverService.delete(id);
    }
}
