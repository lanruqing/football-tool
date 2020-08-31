import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, Validators,AbstractControl,ValidationErrors } from '@angular/forms';


@Component({
  selector: 'app-player-detail-form',
  templateUrl: './player-detail-form.component.html',
  styleUrls: ['./player-detail-form.component.scss']
})
export class PlayerDetailFormComponent implements OnInit {

  constructor(public fb:FormBuilder) { }
  submit(){
    console.log(this.playerForm)
    console.log(this.playerForm.dirty)
    alert(JSON.stringify(this.playerForm.invalid))
  }
  ngOnInit(): void {
  }
  playerNameVal(name:AbstractControl):ValidationErrors | null{
    let result = /^[a-zA-Z0-9_-]{4,16}$/.test(name.value)
    return !result ? {nameErr:true} : null
  }
  public playerForm = this.fb.group({
    "name":['',[Validators.required,this.playerNameVal]],
    "age":['',Validators.required],
    "region":['',Validators.required]
  })

  get name() {
    return this.playerForm.get('name')
  }
}
