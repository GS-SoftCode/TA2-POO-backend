import { Rol } from "src/users/enums/rol.enum";

export class CreateUserDto {
  email: string;
  password: string;
  rol?: Rol; // opcional, por defecto será 'usuario'
}
