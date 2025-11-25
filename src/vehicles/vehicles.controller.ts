import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, Put} from '@nestjs/common';
import { VehiclesService } from './vehicles.service';
import { UpdateVehicleDTO } from './dtos/update.vehicles.dto';
import { CreateVehicleDTO } from './dtos/create.vehicles.dto';


@Controller('vehicles')
export class VehiclesController {

    constructor(private readonly  vehiclesService : VehiclesService){}

    //listar
    @Get()
    findAll(){
        return this.vehiclesService.findAll()
    }


    //buscar
    @Get(':id')
    findOne(@Param('id', ParseIntPipe) id : number){
       const vehicle =  this.vehiclesService.findOne(id);
       return vehicle;
    }

    //crear
    @Post()
    create(@Body() createvehicleDTO:CreateVehicleDTO){
        return this.vehiclesService.create(createvehicleDTO);
    }


    //actualizar
    @Put(':id')
    update(@Param('id', ParseIntPipe) id : number, @Body() updatevehiclesDTO : UpdateVehicleDTO){
       return this.vehiclesService.update(id, updatevehiclesDTO)
    }

    
    //eliminar 
    @Delete(':id')
    delete(@Param('id', ParseIntPipe) id : number){
       return this.vehiclesService.delete(id)
    }


}
