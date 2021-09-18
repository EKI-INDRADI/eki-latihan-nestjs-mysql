import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity()

export class User {
    @PrimaryGeneratedColumn() //  otomatis generate sebagai primary key + auto increment
    id: number

    @Column()
    nama_user: string

    @Column()
    email: string

    @Column()
    username: string

    @Column()
    password: string

    @CreateDateColumn() // auto generate create new Date()
    create_at : Date

    @UpdateDateColumn() // auto generate update new Date()
    update_at : Date

}
