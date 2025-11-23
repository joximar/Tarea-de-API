import { PartialType } from "@nestjs/mapped-types";
import { CreateVehicleDTO } from "./create.vehicles.dto";


export class UpdateVehicleDTO extends PartialType(CreateVehicleDTO){}
