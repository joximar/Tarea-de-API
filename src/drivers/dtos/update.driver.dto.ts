import { PartialType } from "@nestjs/mapped-types";
import { CreateDriversDTO } from "./create.driver.dto";

export class UpdateDriversDTO extends PartialType(CreateDriversDTO){}