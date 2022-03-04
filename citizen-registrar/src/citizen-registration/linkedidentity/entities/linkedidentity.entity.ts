import { Biodatum } from "src/citizen-registration/biodata/entities/biodatum.entity";
import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";


@Entity()
export class Linkedidentity {
    @PrimaryGeneratedColumn()
    id1: number;

    @Column()
    nationalIdentityNumber: number;

    @Column()
    bankVerificationNumber: number;

    @Column({ nullable: true })
    mobileNumber: number;

    @JoinColumn()
    @OneToOne(type=> Biodatum, biodata => biodata.linkedIdentity, {cascade: true})
    biodata: Biodatum;

}
