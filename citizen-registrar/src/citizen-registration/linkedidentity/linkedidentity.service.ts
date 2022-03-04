import { Injectable } from '@nestjs/common';
import { CreateLinkedidentityDto } from './dto/create-linkedidentity.dto';
import { UpdateLinkedidentityDto } from './dto/update-linkedidentity.dto';

@Injectable()
export class LinkedidentityService {
  create(createLinkedidentityDto: CreateLinkedidentityDto) {
    return 'This action adds a new linkedidentity';
  }

  findAll() {
    return `This action returns all linkedidentity`;
  }

  findOne(id: number) {
    return `This action returns a #${id} linkedidentity`;
  }

  update(id: number, updateLinkedidentityDto: UpdateLinkedidentityDto) {
    return `This action updates a #${id} linkedidentity`;
  }

  remove(id: number) {
    return `This action removes a #${id} linkedidentity`;
  }
}
