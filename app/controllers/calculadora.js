import Controller from '@ember/controller';
import { computed } from '@ember/object';
import { inject as service} from '@ember/service';

export default Controller.extend({
    /*singservice : service('sing-service'),

    session : computed(function(){
        return this.get('singservice').getControl();
    }),

    actions:{
        getControl(){
            return this.session;
        }
    }*/

    messageerror : computed(sum()),

    actions:{
        sum(){
            let{n1,n2}=this.getProperties('n1','n2');
            
            this.messageerror=true;
            

        }
    }

});
