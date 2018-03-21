import Controller from '@ember/controller';
import { computed } from '@ember/object';
import { inject as service } from '@ember/service';

export default Controller.extend({
    mock : service('mock-service'),

    message : computed('model.mess', function(){
        return this.get('model.mess');
    }),

    msgcolor : computed('model.msgcolor', function(){
        return this.get('model.msgcolor');
    }),

    actions: {
        register() {
            let { name, salary, gender } = this.getProperties('name', 'salary', 'gender');
            if(name==null || salary==null || gender==null){
                this.set('model.mess', "Los campos no pueden estar vacios");
                this.set('model.msgcolor', true);
            }else if(isNaN(salary)){
                this.set('model.mess', "Salario debe ser numerico");
                this.set('model.msgcolor', true);
            }else if(gender.localeCompare('M')!==0 && gender.localeCompare('F')!==0){
                this.set('model.mess', "Genero debe ser F o M");
                this.set('model.msgcolor', true);
            }else{
                var person = {
                    name: name,
                    salary: salary,
                    gender: gender
                }
                this.get('mock').updatePeople(person);
                this.set('model.mess', "Persona registrada");
                this.set('model.msgcolor', false);
                this.set('name',"");
                this.set('salary',"");
                this.set('gender',"");
            }
        },
    },
});
