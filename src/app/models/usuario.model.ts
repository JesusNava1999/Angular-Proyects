export interface Usuario {
  id_Usuario: number;
  id_Administrativo?: number;
  id_Estudiante?: number;
  id_Docente?: number;
  nombre: string;
  aPaterno: string;
  aMaterno: string;
  numeroControl: number;
  correoInstitucional: string;
  contraseña: string;
}
