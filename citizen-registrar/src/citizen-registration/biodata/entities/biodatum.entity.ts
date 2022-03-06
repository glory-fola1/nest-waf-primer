import { Linkedidentity } from '../../linkedidentity/entities/linkedidentity.entity';
import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";


@Entity()
export class Biodatum {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    firstName: string;

    @Column({ nullable: true })
    middleName: string;

    @Column()
    lastName: string;

    @Column()
    dateOfBirth: Date;

    @Column()
    nationality: string;

    @Column()
    countryOfBirth: string;

    @Column({ nullable: true })
    stateOfBirth: string;

    @Column({ nullable: true })
    townOfBirth: string;

    @Column({ nullable: true })
    residenceAddress: string;

    @Column()
    profession: string;
    
    @JoinColumn()
    @OneToOne(type => Linkedidentity, linkedidentity => linkedidentity.biodata)
    linkedidentity: Linkedidentity;

}
