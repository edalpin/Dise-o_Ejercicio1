import Service from '@ember/service';

export default Service.extend({
    control : true,

    getControl(){
        return this.control
    },

    setControl(value){
        return this.control=value
    },
});
