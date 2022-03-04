import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateBiodatumDto } from './dto/create-biodatum.dto';
import { UpdateBiodatumDto } from './dto/update-biodatum.dto';
import { Biodatum } from './entities/biodatum.entity';

@Injectable()
export class BiodataService {
  constructor(
    @InjectRepository(Biodatum)
    private BiodataRepository: Repository<Biodatum>
  ){}
  create(createBiodatumDto: CreateBiodatumDto) {
    return 'This action adds a new biodatum';
  }

  findAll() {
    return `This action returns all biodata`;
  }

  findOne(id: number) {
    return `This action returns a #${id} biodatum`;
  }

  update(id: number, updateBiodatumDto: UpdateBiodatumDto) {
    return `This action updates a #${id} biodatum`;
  }

  remove(id: number) {
    return `This action removes a #${id} biodatum`;
  }
}
