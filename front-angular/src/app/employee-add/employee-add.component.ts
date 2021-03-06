import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { EmployeeService } from '../employees.service';

import Swal from 'sweetalert2';
import { ActivatedRoute, Router } from '@angular/router';
import Employee from '../interfaces/Employee';
import { faUserPlus, faUserEdit } from '@fortawesome/free-solid-svg-icons';
import { AbstractControl } from '@angular/forms';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-employee-add',
  templateUrl: './employee-add.component.html',
  styleUrls: ['./employee-add.component.css']
})

export class EmployeeAddComponent implements OnInit {
  title = 'CRUD Angular API NodeJS';

  icons = {
    faUserPlus,
    faUserEdit
  };

 

  form: FormGroup = this.formBuilder.group({
    name: ['',Validators.compose([Validators.required,Validators.minLength(3)])],
    job_role: ['', Validators.required],
    salary: ['', Validators.required],
    birth: ['', Validators.required],
    employee_registration: ['', Validators.required],
  });
  employee_id: number = 0;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private employeeService: EmployeeService,
    private titleService: Title
  ) {
    this.titleService.setTitle('Cadastro');
   }

  ngOnInit(): void {
    this.checkParam();
  }

  get f(): { [key: string]: AbstractControl } {
    return this.form.controls;
  }

  /**
   * Método para checar se a rota está ou não com parametros
   * Esse método é chamado apos a criação do formulário para garantir que ao momento que trazer os
   * dados do 'Employee' da API o formulário já esteja criado
   */
  checkParam(): void {
    this.route.params.subscribe(params => {
      // ==> caso a rota está com parametro, checamos se esse parametro é um ID
      if (params['id']) {
        this.employee_id = params['id'];
        this.getEmployee(this.employee_id);
      }
    });
  }

  /**
   * Método para pegar o 'Employee' da base de dados
   */
  getEmployee(id: number): void {
    this.employeeService.getEmployee(id).subscribe((res: Employee) => {
      this.form.setValue({
        name: res.name,
        job_role: res.job_role,
        salary: res.salary,
        birth: res.birth,
        employee_registration: res.employee_registration
      });
    });
  }

  /**
   * Método responsável por adicionar um novo 'Employee' --> ação do botão
   */
  createNewEmployee(): void {
    this.employeeService.createNewEmployee(this.form.value).subscribe(res => {
      Swal.fire({
        title: 'Employee added successfully!',
        icon: 'success',
        showConfirmButton: true,
        allowOutsideClick: false,
        allowEnterKey: true,
        allowEscapeKey: false,
      }).then((data) => {
        // ==> Aguardar que a pessoa clique em OK no SweetAlert para que mude ela para a tela de listagem.
        this.router.navigate(['/employees']);
      });
    });
  }

  /**
   * Método responsável por Atualizar o 'Employee' por Id através da action do botão 'Update'
   */
  updateEmployee(): void {
    // ==> cria um novo objeto com as mesmas propriedades do formulário, para que seja possivel adicionar o id do 'Employee'
    const employee: Employee = {
      employee_id: this.employee_id,
      ...this.form.value
    };
    this.employeeService.updateEmployee(employee).subscribe(res => {
      // ==> Depois que o usuário clicar no botão 'Update', será redirecionado para a página de listar 'Employees'
      Swal.fire({
        title: 'Employee updated successfully!',
        icon: 'success',
        showConfirmButton: true,
        allowOutsideClick: false,
        allowEnterKey: true,
        allowEscapeKey: false,
      }).then((data) => {
        this.router.navigate(['/employees']);
      });
    });
  }

  /**
   * Método do submit do formulário.
   */
  onSubmit(): void {
    // Se employee nao tem ID, então é para cadastrar.
    // Se employee tem ID, então é para editar.
    if (!this.employee_id) {
      this.createNewEmployee();
    } else {
      this.updateEmployee();
    }
  }

  /**
   * Método para recuperar a propriedade do formulario desejada
   */
  getControl(control: string): AbstractControl {
    return this.form.controls[control];
  }

  /**
   * Método para validação do campo desejado
   */
  validatorInputs(control: string): boolean {
    return this.getControl(control).invalid && (this.getControl(control).dirty || this.getControl(control).touched);
  }

  /**
   * Método para validação do campo desejado
   */
 
}