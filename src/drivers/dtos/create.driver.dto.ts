import { Type } from "class-transformer";
import { IsNotEmpty, IsString } from "class-validator"

export class CreateDriversDTO{
    @IsString()
    @IsNotEmpty()
    name :string;

    @IsString()
    @IsNotEmpty()
    dni : string;

    @IsString()
    @IsNotEmpty()
    license:string;


    @Type(() => Date)
    @IsNotEmpty()
    birthdate:Date;

}