import Route from '@ember/routing/route';
import { inject as service} from '@ember/service';

export default Route.extend({
    mock : service('mock-service'),
    
    model(){
        return this.get('mock').getPeople();
    },

    singservice : service('sing-service'),

    beforeModel(){
        if(this.get('singservice').control){
            this.replaceWith('listar_personas');
        }
        else{
            this.replaceWith('login');
        }
    }
});
