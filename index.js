"use strict";
//Encapsulamento 
class Usuario {
    //Constructor
    constructor(firstName, lastName, username, email, password, cpf, contact, isAdmin) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.username = username;
        this.email = email;
        this.password = password;
        this.cpf = cpf;
        this.contact = contact;
        this.isAdmin = isAdmin;
    }
    //Getter & Setter - First Name 
    getfirstName() {
        return this.firstName;
    }
    setfirstName(firstName) {
        this.firstName = firstName;
    }
    //Getter & Setter - Last Name 
    getlastName() {
        return this.lastName;
    }
    setlastName(lastName) {
        this.lastName = lastName;
    }
    //Getter & Setter - Username
    getusername() {
        return this.username;
    }
    setusername(username) {
        this.username = username;
    }
    //Getter & Setter - email
    getemail() {
        return this.email;
    }
    setemail(email) {
        this.email = email;
    }
    //Getter & Setter - Password
    getpassword() {
        return this.password;
    }
    setpassword(password) {
        this.password = password;
    }
    //Getter & Setter - CPF
    getcpf() {
        return this.cpf;
    }
    setcpf(cpf) {
        this.cpf = cpf;
    }
    //Getter & Setter - Contact
    getcontact() {
        return this.contact;
    }
    setcontact(contact) {
        this.contact = contact;
    }
    //Getter & Setter - isAdmin
    getisAdmin() {
        return this.isAdmin;
    }
    setisAdmin(isAdmin) {
        this.isAdmin = isAdmin;
    }
}
let u = new Usuario('Raiane', 'Ferreira', 'Raiannecaroline', 'raianecaroline.st@gmail.com', '9876543210', '00011122233', 73982427377, true);
console.log(u);
console.log(u.isAdmin);
console.log(u.getfirstName());
u.setfirstName('Raiane Caroline');
console.log(u.getlastName());
u.setlastName('Ferreira');
console.log(u.getusername());
u.setusername('Raiannecaroline');
console.log(u.getemail());
u.setemail('raianecaroline.st@gmail.com');
console.log(u.getpassword());
u.setpassword('123456789');
