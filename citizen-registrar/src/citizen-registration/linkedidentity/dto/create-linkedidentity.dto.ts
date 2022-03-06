import { CreateBiodatumDto } from '../../biodata/dto/create-biodatum.dto';

export class CreateLinkedidentityDto {
    readonly NIN: number;
    readonly BVN: number;
    readonly MobileNumber: number;
    readonly biodatum: CreateBiodatumDto; //In case you want to creaate BioDatum along with Linkedidentity 
}

