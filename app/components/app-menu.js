import Component from '@ember/component';
import { inject as service} from '@ember/service';

export default Component.extend({
    singservice : service('sing-service'),
    router: service('-routing'),
    actions:{
        logout: function(){
            this.get('singservice').setControl(false);
            this.get('router').transitionTo('login');
        }
    }
});
