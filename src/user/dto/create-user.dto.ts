export class CreateUserDto { // DTO data transfer object (schema) untuk keperluan controller //https://docs.nestjs.com/controllers
    id?: number  // ? = optional
    nama_user: string
    email: string
    username: string
    password: string
    // create_at : Date // tidak digunakan karena auto generate create new Date()
    // update_at : Date // tidak digunakan karena auto generate update new Date()
}
