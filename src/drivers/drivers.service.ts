import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateDriversDTO } from './dtos/create.driver.dto';
import { UpdateDriversDTO } from './dtos/update.driver.dto';

@Injectable()
export class DriversService {

    constructor(private prisma:PrismaService){}

    //listar choferes
    async findAll(){
        return await this.prisma.drivers.findMany();
    }

    //llamar un chover por su id
    async findOne(id:number){
        const driver = await this.prisma.drivers.findUnique({where:{id}});

        if(!driver){
            throw new NotFoundException(`Conductor con ID ${id} no encontrado`);
        }

        return driver;
    }

    //crear nuevo conductor
    async create(createdriversDTO: CreateDriversDTO){
        return await this.prisma.drivers.create({data:createdriversDTO});
    }

    //actualizar conductor
    async update(id:number, updatedriverDTO:UpdateDriversDTO){
        return await this.prisma.drivers.update({where:{id}, data:updatedriverDTO});
    }

    //eliminar conductor

    async delete(id:number){
        return await this.prisma.drivers.delete({where:{id}});
    }
}
