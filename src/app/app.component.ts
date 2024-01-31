import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PersonComponent } from './components/person/person.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {


  employeeForm: FormGroup;
  employees: any;



  constructor(
    private readonly formBuilder: FormBuilder,
    public employeeService: PersonComponent,
  ) {
    this.employeeForm = this.formBuilder.group({
      identification: ['', Validators.required],
      termsAndConditions: [''],
      });
  }
  ngOnInit(): void {
    this.employeeForm = this.formBuilder.group({
      idEmp: [''],
      fullname: ['', Validators.required],
      function: ['', Validators.required],
      id_boss: ['', Validators.required],
    });

    this.employeeService.getAllEmployees().subscribe(resp => {
      this.employees = resp;
    },
      error => { console.error(error); }
    );

  }


  guardar(): void {
    this.employeeService.saveEmployee(this.employeeForm.value).subscribe(resp => {
      this.employeeForm.reset();
      this.employeeService.getAllEmployees().subscribe(resp => {
        this.employees = resp;
      },
        error => { console.error(error); }
      );
    },
      error => { console.error(error); }
    );
  }

  eliminar(employee: any) {
    this.employeeService.deleteEmployee(employee.idEmp).subscribe(resp => {
      console.log(resp);
      if (resp == false) {
        this.employees.pop(employee);
      }
    });
  }

  editar(employee: any) {
    this.employeeForm.setValue({
      idEmp: employee.idEmp,
      fullname: employee.fullname,
      function: employee.function,
      id_boss: employee.id_boss,
    });

    this.employeeService.getAllEmployees().subscribe(resp => {
      this.employees = resp;
    },
      error => { console.error(error); }
    );
  }

}
