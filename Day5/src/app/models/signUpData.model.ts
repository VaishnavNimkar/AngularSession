export class SignUpData
{
    username:string;
    password:string;
    retype_password:string;
    email:string;
    gender:string;
    age:number;

    constructor(usename:string, password:string, retype_password:string, email:string, gender:string, age:number)
    {
        this.age = age;
        this.username = usename;
        this.password = password;
        this.retype_password = retype_password;
        this.email = email;
        this.gender = gender;
    }
}