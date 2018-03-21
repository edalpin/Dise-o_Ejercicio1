import Service from '@ember/service';

export default Service.extend({
    users: [
        {
            usuario: 'yo',
            contrasena: '123'
        },
        {
            usuario: 'el',
            contrasena: '123'
        },
        {
            usuario: 'tu',
            contrasena: '123'
        },
        {
            usuario: 'ella',
            contrasena: '123'
        },
        {
            usuario: 'ellos',
            contrasena: '123'
        },
    ],
    /*
    ct: true,
    cf: false,
    */
    getUsers() {
        return this.users;
    },
    /*
    getAuthentication(id, pass) {
        this.users.forEach(function (person) {
            if (person.usuario.localeCompare(id) == 0) {
                return this.ct;
            } else {
                return this.cf;
            };
        });
    },
    */
});
