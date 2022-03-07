import { CreateLinkedidentityDto } from '../../linkedidentity/dto/create-linkedidentity.dto';

export class CreateBiodatumDto {
    readonly firstName: string;
    readonly middleName?: string;
    readonly lastName: string;
    readonly dateOfbirth: Date;
    readonly nationality: string;
    readonly countryOfbirth: string;
    readonly stateOfbirth: string;
    readonly townOfbirth: string;
    readonly residenceAddress: string;
    readonly profession: string;
    readonly linkedIdentity: CreateLinkedidentityDto;
}
