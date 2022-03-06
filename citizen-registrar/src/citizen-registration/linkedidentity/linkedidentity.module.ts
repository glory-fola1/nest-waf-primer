import { Module } from '@nestjs/common';
import { LinkedidentityService } from './linkedidentity.service';
import { LinkedidentityController } from './linkedidentity.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Linkedidentity } from './entities/linkedidentity.entity';
import { Biodatum } from '../biodata/entities/biodatum.entity';

@Module({
  imports:[TypeOrmModule.forFeature([Linkedidentity,Biodatum])],
  controllers: [LinkedidentityController],
  providers: [LinkedidentityService]
})
export class LinkedidentityModule {}
