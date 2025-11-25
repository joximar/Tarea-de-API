import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { UpdateVehicleDTO } from './dtos/update.vehicles.dto';
import { CreateVehicleDTO } from './dtos/create.vehicles.dto';


@Injectable()
export class VehiclesService  {

    constructor(private prisma:PrismaService){}

    //listar vehiculos
    findAll(){
        return this.prisma.vehicles.findMany();
    }


    //llamar un solo vehiculo por su ID
    async findOne(id:number){
        const vehicle = await this.prisma.vehicles.findUnique({where:{id}});

        if (!vehicle){
            throw new NotFoundException(`Vehiculo con ID ${id} no encontrado`);
        }
        return vehicle;
    }


    //crear vehiculo
    async create(createvehicleDTO: CreateVehicleDTO){
        return await this.prisma.vehicles.create({
            data:createvehicleDTO
        });
    }



    //actualizar vehiculo 
    async update(id: number, updatevehicleDTO: UpdateVehicleDTO){
        try{
            return this.prisma.vehicles.update({where:{id},data:updatevehicleDTO});
        }catch{
            throw new NotFoundException(`Vehiculo con ID ${id} no encontrado`)
        }
    }
    

    //eliminar vehiculo
    async delete(id:number) {
        try{
            return await this.prisma.vehicles.delete({where:{id}});
        }catch(error){
            throw new NotFoundException(`Vehiculo con ID ${id} no encontrado`)
        }
    }



}
