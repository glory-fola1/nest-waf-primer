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
    MobileNumber: number;

    @JoinColumn()
    @OneToOne(type=> Biodatum, biodata => biodata.linkedidentity, {cascade: true})
    biodata: Biodatum;

}
