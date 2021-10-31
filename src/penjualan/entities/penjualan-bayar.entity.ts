import { Rekening } from "src/rekening/entities/rekening.entity";
import { User } from "src/user/entities/user.entity";
import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Penjualan } from "./penjualan.entity";


@Entity()
export class PenjualanBayar {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    tanggal_bayar : Date

    @Column()
    jumlah_bayar : number

    @Column()
    potongan : number

    @ManyToOne(() => Penjualan, data => data.id, { onDelete: "CASCADE", onUpdate: "CASCADE" })
    penjualan: Penjualan 

    @ManyToOne(() => Rekening, data => data.id)
    rekening: Rekening 

    @CreateDateColumn()
    create_at: Date

    @UpdateDateColumn({ onUpdate: 'CURRENT_TIMESTAMP(6)' })
    update_at: Date

    @ManyToOne(() => User, data => data.id)
    user: User 

}