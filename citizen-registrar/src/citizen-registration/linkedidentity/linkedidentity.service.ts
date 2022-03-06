import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Biodatum } from '../biodata/entities/biodatum.entity';
import { CreateLinkedidentityDto } from './dto/create-linkedidentity.dto';
import { UpdateLinkedidentityDto } from './dto/update-linkedidentity.dto';
import { Linkedidentity } from './entities/linkedidentity.entity';

@Injectable()
export class LinkedidentityService {

  constructor(
  @InjectRepository(Linkedidentity)
    private LinkedIdentitiesRespository: Repository <Linkedidentity>,

  @InjectRepository(Biodatum)
    private BiodatumRepository: Repository<Biodatum>
  ){}

  async create(createLinkedidentityDto: CreateLinkedidentityDto) {
    //return 'This action adds a new linkedidentity';
    const newLinkedidentity = this.LinkedIdentitiesRespository.create(createLinkedidentityDto);
    
    if (createLinkedidentityDto.biodatum) {
      const newBiodata = this.BiodatumRepository.create(createLinkedidentityDto.biodatum);
      const biodata: Biodatum = await this.BiodatumRepository.save(newBiodata);
      newLinkedidentity.biodata = biodata;
    } 

    return this.LinkedIdentitiesRespository.save(new Linkedidentity);
  }

  async findAll() {
    //return `This action returns all linkedidentity`;
    return await this.LinkedIdentitiesRespository.find();
  }

  async findOne(id: number) {
    //return `This action returns a #${id} linkedidentity`;
    return await this.LinkedIdentitiesRespository.findOne();
  }

  async update(id: number, updateLinkedidentityDto: UpdateLinkedidentityDto) {
    //return `This action updates a #${id} linkedidentity`;
    return await this.LinkedIdentitiesRespository.update(id, updateLinkedidentityDto);
  }

  async remove(id: number) {
    //return `This action removes a #${id} linkedidentity`;
    return await this.LinkedIdentitiesRespository.delete(id);
  }
}
