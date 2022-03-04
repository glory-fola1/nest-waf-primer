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
  ) { }

  async create(createBiodatumDto: CreateBiodatumDto) {
    return 'This action adds a new biodatum';
  }

  async findAll() {
    return `This action returns all biodata`;
  }

  async findOne(id: number) {
    return `This action returns a #${id} biodatum`;
  }

  async update(id: number, updateBiodatumDto: UpdateBiodatumDto) {
    return `This action updates a #${id} biodatum`;
  }

  async remove(id: number) {
    return `This action removes a #${id} biodatum`;
  }
}
