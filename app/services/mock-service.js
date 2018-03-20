import Service from '@ember/service';

export default Service.extend({
    users:[
        {
            usuario:'yo',
            contrasena: '123'
        },
        {
            usuario:'el',
            contrasena: '123'
        },
        {
            usuario:'tu',
            contrasena: '123'
        },
        {
            usuario:'ella',
            contrasena: '123'
        },
        {
            usuario:'ellos',
            contrasena: '123'
        },
    ],

    getUsers(){
        return this.users;
    }
});
