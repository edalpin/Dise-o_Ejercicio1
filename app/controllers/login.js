import Controller from '@ember/controller';
import { computed } from '@ember/object';
import { inject as service } from '@ember/service';

export default Controller.extend({
    singService: service('sing-service'),
    usersService: service('mock-service'),

    message : computed('model.error',function(){
        return this.get('model.error');
    }),

    actions: {
        authenticate() {
            var users = this.get('usersService').getUsers();
            let { identification, password } = this.getProperties('identification', 'password');

            /*console.log(this.get('usersService').getAuthentication(this.identification,this.password));
            if(this.get('usersService').getAuthentication(this.identification,this.password)==0){
                console.log('entre');
            };*/
          
            var search = users.findBy('usuario',identification);
            if(identification == null || password==null){
                this.set('model.error',"No se han ingresado datos");
            }else if(!search || search.contrasena !== password){
                this.set('model.error',"Usuario inexistente o contraseña incorrecta");
                this.set('password',"");
            } else {
                this.get('singService').setControlSession(true,identification);
                this.transitionToRoute('home');
            }
        }
    }
});
