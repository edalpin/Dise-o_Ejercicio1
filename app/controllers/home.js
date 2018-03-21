import Controller from '@ember/controller';

export default Controller.extend({
    actions:{
        logout(){
            localStorage.removeItem("controlSession");
            localStorage.removeItem("username");
            this.transitionToRoute('login');
        },
    }
});
