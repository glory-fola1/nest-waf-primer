import { Biodatum } from "src/citizen-registration/biodata/entities/biodatum.entity";
import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";


@Entity()
export class Linkedidentity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    NIN: number;

    @Column()
    BVN: number;

    @Column({ nullable: true })
    mobileNumber: number;

    @OneToOne(type=> Biodatum, biodata => biodata.linkedIdentity)
    biodata: Biodatum;

}
