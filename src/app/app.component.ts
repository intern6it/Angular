import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormsModule } from '@angular/forms';
import { AlianModel } from './alian-deshboard.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  formValue !:FormsModule;
  title = 'unstoppable';

  displayStyle = "none";

  openPopup() {

    this.displayStyle="block";
  }
  closePopup(){
    this.displayStyle="none";
  }


  constructor(private formbuilder:FormBuilder){

  }
  obj :AlianModel=new AlianModel();
  ngOnInit(): void {
    this.formValue=this.formbuilder.group({

      id : [''],
      adate : [''],
      gmail : [''],
      name : [''],
      username : [''],
      password : [''],
      status : [''],
      student:['']
    })
  }
 
}
