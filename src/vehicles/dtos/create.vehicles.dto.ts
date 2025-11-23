import { Type } from "class-transformer";
import { IsInt, IsNotEmpty, IsString } from "class-validator";

export class CreateVehicleDTO{
    @IsString()
    @IsNotEmpty()
    plate:string;

    @IsString()
    @IsNotEmpty()
    brand:string;

    @IsString()
    @IsNotEmpty()
    model:string;

    @IsInt()
    @Type(() => Number)
    @IsNotEmpty()
    year:number;

    @IsInt()
    @Type(() => Number)
    @IsNotEmpty()
    driversId:number;

}