import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity()

export class User {
    @PrimaryGeneratedColumn() //  otomatis generate sebagai primary key + auto increment
    id: number

    @Column()
    nama_user: string

    // @Column({ unique: true })
    // pada class validator ada untuk melakukan validasi data yang sama (duplicate entry) berdasarkan class / array data , 
    // jika terdapat value yang sama maka akan error 500 pada request,
    // {
    //     "statusCode": 500,
    //     "message": "Internal server error"
    // }
    // maka pastikan sebelum unique : true pastikan telah menghapus data value kembar pada database
    // karena error tidak detail , maka diperluan validasi function manual
    @Column()
    email: string

    @Column()
    username: string

    @Column()
    password: string

    @CreateDateColumn() // auto generate create new Date()
    create_at: Date

    @UpdateDateColumn() // auto generate update new Date()
    update_at: Date

}
