import { Konsuman } from "src/konsumen/entities/konsuman.entity";
import { User } from "src/user/entities/user.entity";
import { Column, CreateDateColumn, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { PenjualanBayar } from "./penjualan-bayar.entity";
import { PenjualanItem } from "./penjualan-item.entity";

// export class Penjualan {}
@Entity()
export class Penjualan {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    no_faktur: string

    @Column()
    tanggal: Date

    @Column()
    total_transaksi: number

    @Column()
    total_potongan: number

    @Column()
    total_bayar: number

    @ManyToOne(() => Konsuman, data => data.id)
    konsumen: Konsuman 
    
    @OneToMany(() => PenjualanItem, data => data.id, {cascade:true})
    item: PenjualanItem[] //ini array

    @OneToMany(() => PenjualanBayar, data => data.id, {cascade:true})
    bayar: PenjualanBayar[] //ini array

    @CreateDateColumn()
    create_at: Date

    @UpdateDateColumn({ onUpdate: 'CURRENT_TIMESTAMP(6)' })
    update_at: Date

    @ManyToOne(() => User, data => data.id)
    user: User 

}
