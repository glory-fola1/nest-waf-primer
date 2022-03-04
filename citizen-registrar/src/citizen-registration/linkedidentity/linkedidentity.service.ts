import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateLinkedidentityDto } from './dto/create-linkedidentity.dto';
import { UpdateLinkedidentityDto } from './dto/update-linkedidentity.dto';
import { Linkedidentity } from './entities/linkedidentity.entity';

@Injectable()
export class LinkedidentityService {
  constructor(
  @InjectRepository(Linkedidentity)
    private LinkedIdentitiesRespository: Repository <Linkedidentity>
  ){}

  async create(createLinkedidentityDto: CreateLinkedidentityDto) {
    //return 'This action adds a new linkedidentity';
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
    return await this.LinkedIdentitiesRespository.update(id,new UpdateLinkedidentityDto);
  }

  async remove(id: number) {
    //return `This action removes a #${id} linkedidentity`;
    return await this.LinkedIdentitiesRespository.delete(id);
  }
}
