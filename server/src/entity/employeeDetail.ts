import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity()
export class employeeDetail {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    firstName: string

    @Column()
    lastName: string

    @Column()
    age: number

    @Column()
    EmpId:number

    @Column()
    emailId:string

}
