export class employeeData {
    id:number
    firstName: string
    lastName: string
    age: number
    EmpId: number
    emailId: string


    constructor(id:number =0 ,firstName: string = "", lastName: string = "", age: number = 0, EmpId: number = 0, emailId: string = "") {
        this.id = id
        this.firstName = firstName
        this.lastName = lastName
        this.age = age
        this.EmpId = EmpId
        this.emailId = emailId
    }
}