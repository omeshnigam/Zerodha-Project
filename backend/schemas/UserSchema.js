const {Schema}=require('mongoose');
const passportLocalMongoose=require('passport-local-mongoose').default;

const UserSchema=new Schema({
    username:{type:String,required:true},
    email:{type:String,required:true,unique:true}
});

// passport-local-mongoose plugin adds hash & salt fields automatically
// usernameField:'email' means login will use email+password (not username+password)
UserSchema.plugin(passportLocalMongoose,{usernameField:'email'});

module.exports={UserSchema};
