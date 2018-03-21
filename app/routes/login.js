import Route from '@ember/routing/route';
import { inject as service} from '@ember/service';

export default Route.extend({
    model() {
        return {
             error : null,
        };
    },

    singservice : service('sing-service'),

    beforeModel(){
        if(this.get('singservice').control){
            this.replaceWith('home');
        }
        else{
            this.replaceWith('login');
        }
    }
});
