export class EmployeeModel {
  empId: number | undefined;
  name: string | undefined;
  city: string | undefined;
  state: string | undefined;
  emailId: string | undefined;
  contactNo: string | undefined;
  address: string | undefined;

  contructor(){
    this.address = ''
    this.city = ''
    this.contactNo = ''
    this.emailId = ''
    this.name = ''
    this.empId = 0
    this.state = ''
  }
}
