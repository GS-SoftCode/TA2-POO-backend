import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class Ingredient {
    @PrimaryGeneratedColumn()
    id: number;
    
    @Column()
    nombre: string;

    @Column('decimal', { precision: 10, scale: 2 })
    precio: number;

    @Column({nullable: true})
    unidad: string;

    @CreateDateColumn({ name: 'fecha_creacion' })
    fechaCreacion: Date;

    @UpdateDateColumn({ name: 'fecha_actualizacion' })
    fechaActualizacion: Date;
}