//Interface Usuário
interface UserProps{
  firstName: string
  lastName: string
  username: string
  email: string
  password: string
  cpf: string
  contact: number
  isAdmin: boolean
}

//Encapsulamento 
class Usuario implements UserProps {
 
  //Definindo propriedades
  firstName: string
  lastName: string
  username: string
  email: string
  password: string
  cpf: string
  contact: number
  isAdmin: boolean
  
  //Constructor
  constructor(firstName: string, lastName: string, username: string, email: string, password: string, cpf: string, contact: number, isAdmin: boolean){
  
    this.firstName = firstName
    this.lastName = lastName
    this.username = username
    this.email = email
    this.password = password
    this.cpf = cpf
    this.contact = contact
    this.isAdmin = isAdmin
  
  }

  //Getter & Setter - First Name 
  getfirstName(): string {
    return this.firstName
  }

  setfirstName(firstName: string){
    this.firstName = firstName
  }

  //Getter & Setter - Last Name 
  getlastName(): string {
    return this.lastName
  }

  setlastName(lastName: string){
    this.lastName = lastName
  }

  //Getter & Setter - Username
  getusername(): string {
    return this.username
  }

  setusername(username: string){
    this.username = username
  }

  //Getter & Setter - email
  getemail(): string {
    return this.email
  }

  setemail(email: string){
    this.email = email
  }

  //Getter & Setter - Password
  getpassword(): string {
    return this.password
  }

  setpassword(password: string){
    this.password = password
  }

  //Getter & Setter - CPF
  getcpf(): string {
    return this.cpf
  }

  setcpf(cpf: string){
    this.cpf = cpf
  }

  //Getter & Setter - Contact
  getcontact(): number {
    return this.contact
  }

  setcontact(contact: number){
    this.contact = contact
  }

  //Getter & Setter - isAdmin
  getisAdmin(): boolean{
    return this.isAdmin
  }

  setisAdmin(isAdmin: boolean){
    this.isAdmin = isAdmin
  }
}

let u: Usuario = new Usuario('Raiane', 'Ferreira', 'Raiannecaroline', 'raianecaroline.st@gmail.com', '9876543210', '00011122233', 73982427377, true)

console.log(u)
console.log(u.isAdmin)

console.log(u.getfirstName())
u.setfirstName('Raiane Caroline')

console.log(u.getlastName())
u.setlastName('Ferreira')

console.log(u.getusername())
u.setusername('Raiannecaroline')

console.log(u.getemail())
u.setemail('raianecaroline.st@gmail.com')

console.log(u.getpassword())
u.setpassword('123456789')