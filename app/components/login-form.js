import Component from '@ember/component';
import { inject as service } from '@ember/service';

export default Component.extend({
    singService: service('sing-service'),
    usersService: service('mock-service'),

    actions: {
        authenticate() {
            var users = this.get('usersService').getUsers();
            let { identification, password } = this.getProperties('identification', 'password');

            /*console.log(this.get('usersService').getAuthentication(this.identification,this.password));

            if(this.get('usersService').getAuthentication(this.identification,this.password)==0){
                console.log('entre');
            };*/
          
            var search = users.findBy('usuario',identification);
            if(!search || search.contrasena !== password){
            } else {
                this.get('singService').setControlSession(true,identification);
            }
        }
    }
});
