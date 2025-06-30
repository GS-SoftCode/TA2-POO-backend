import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { Rol } from 'src/users/enums/rol.enum';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  email: string;

  @Column()
  password: string;

  @Column({ type: 'enum', enum: Rol, default: Rol.CLIENTE })
  rol: Rol;
}