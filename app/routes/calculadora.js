import Route from '@ember/routing/route';
import { inject as service} from '@ember/service';

export default Route.extend({
    singservice : service('sing-service'),

    beforeModel(){
        if(this.get('singservice').control){
            this.replaceWith('calculadora');
        }
        else{
            this.replaceWith('login');
        }
    }
});



