import Route from '@ember/routing/route';
import { inject as service} from '@ember/service';

export default Route.extend({
    
    model() {
        return {
             error : null,
             rsulop : null,
             msgcolor: false,
        };
    },

    singservice : service('sing-service'),

    beforeModel(){
        if(localStorage.getItem('controlSession')){
            this.replaceWith('calculadora');
        }
        else{
            this.replaceWith('login');
        }
    }
});



