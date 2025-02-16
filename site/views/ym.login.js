var loginModel = {

    registerForm: {
        username: ko.observable(''),
        displayName: ko.observable(''),
        password: ko.observable(''),

        submit: function(event){
            var form = this().registerForm;
            $.post('register', {username: form.username, password: form.password }).success(function(data){
               if(data.success) {

               }
            });
        }
    },

    loginForm: {
        username: ko.observable(''),
        password: ko.observable(''),

        submit: function(event){

            var form = this().loginForm;

            viewModel.authenticated(true);
            viewModel.username('user');
            viewModel.displayName('Joe Bloggs');
            viewModel.doOnAuth();

//            $.post('login', { username: form.username(), password: form.password() }).success(function(data){
//                if(data.success) {
//                    $.get('currentuser').success(function(data) {
//                        viewModel.authenticated(true);
//                        viewModel.username(data.username);
//                    });
//                }
//            });
        }
    }
};

loginModel.loginForm.valid = ko.dependentObservable(function(){
        return this.loginForm.username().length > 0 && this.loginForm.password().length > 0;
}, loginModel);
