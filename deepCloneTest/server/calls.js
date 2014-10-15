/**
 * Created by mbauer on 10/15/14.
 */

Meteor.methods({
    'testMethod': function(arg1) {
        console.log('Recieved a call: ', arg1);
    }
});
