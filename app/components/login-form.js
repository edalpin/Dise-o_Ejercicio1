import Component from '@ember/component';
import { computed } from '@ember/object';
import { inject as service} from '@ember/service';

export default Component.extend({
    singService : service('sing-service'),
    usersService :service('mock-service'),

  

    actions:{
        authenticate(){
            const mockUsers = this.get('usersService') .getUsers();
            console.log(mockUsers);
            let{identification,password}=this.getProperties('identification','password');
            this.get('singService').setControl(true);
        }
    }
});
