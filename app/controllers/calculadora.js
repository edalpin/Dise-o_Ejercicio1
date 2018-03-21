import Controller from '@ember/controller';
import { computed } from '@ember/object';
import { inject as service } from '@ember/service';

export default Controller.extend({
    messagerror: computed('model.error', function () {
        return this.get('model.error');
    }),

    resultado: computed('model.rsulop', function () {
        return this.get('model.rsulop');
    }),

    msgcolor: computed('model.msgcolor', function () {
        return this.get('model.msgcolor');
    }),


    actions: {
        sum() {
            let { n1, n2 } = this.getProperties('n1', 'n2');

            if (n1==null || n2==null) {
                this.set('model.error', "Ambos campos deben ser diligenciados");
                this.set('model.rsulop', null);
                this.set('model.msgcolor', true);
            } else if(isNaN(n1)|| isNaN(n2)){
                this.set('model.error', "Los datos ingresados deben ser numericos");
                this.set('model.rsulop', null);
                this.set('model.msgcolor', true);
            }else if((n1<-1000 || n1>1000) || (n2<-1000 || n2>1000)){
                this.set('model.error', "Los numeros ingresados deben estar entre -1000 y 1000");
                this.set('model.rsulop', null);
                this.set('model.msgcolor', true);
            } else{
                this.set('model.error', "Operacion realizada");
                this.set('model.msgcolor', false);
                var suma = parseFloat(n1) + parseFloat(n2) ;
                this.set('model.rsulop', "La suma es " + suma);  
            }
        },
        resta() {
            let { n1, n2 } = this.getProperties('n1', 'n2');
            if (n1==null || n2==null) {
                this.set('model.error', "Ambos campos deben ser diligenciados");
                this.set('model.rsulop', null);
                this.set('model.msgcolor', true);
            } else if(isNaN(n1)|| isNaN(n2)){
                this.set('model.error', "Los datos ingresados deben ser numericos");
                this.set('model.rsulop', null);
                this.set('model.msgcolor', true);
            }else if((n1<-1000 || n1>1000) || (n2<-1000 || n2>1000)){
                this.set('model.error', "Los numeros ingresados deben estar entre -1000 y 1000");
                this.set('model.rsulop', null);
                this.set('model.msgcolor', true);
            } else{
                this.set('model.error', "Operacion realizada");
                this.set('model.msgcolor', false);
                var resta =parseFloat(n1) - parseFloat(n2) ;
                this.set('model.rsulop', "La resta es " + resta);
            }
        }
    }

});
