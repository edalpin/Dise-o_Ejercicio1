import Route from '@ember/routing/route';
import { inject as service} from '@ember/service';

export default Route.extend({
    singservice : service('sing-service'),

    model() {
        return{
            mess:null,
            msgcolor:false,
        }
    },

    beforeModel(){
        if(localStorage.getItem('controlSession')){
            this.replaceWith('registrar_persona');
        }
        else{
            this.replaceWith('login');
        }
    }
});
