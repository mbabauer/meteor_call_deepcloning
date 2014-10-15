Template.tests.helpers({
    'message': function() {
        return Session.get('message');
    }
});

Template.tests.events({
    'click #working': function(evt, tmpl) {
        console.log('Calling working example');
        Session.set('message', null);
        var sampleObj = {
            test1: 'test',
            test2: [{something: 1, another: true},{something: 2, another: 3}],
            test3: {
                thisOne: [1,3,4,5],
                tada: '32'
            }
        }

        Meteor.call('testMethod', sampleObj, function(err, result) {
            if (err) {
                Session.set('message', 'Call failed! Reason:', err.reason, ', Details: ', err.details);
            } else {
                Session.set('message', 'It worked!');
            }
        });
    },
    'click #broken': function(evt, tmpl) {
        console.log('Calling working example');
        Session.set('message', null);
        var sampleObj1 = {
            test1: 'test',
            test2: [{something: 1, another: true},{something: 2, another: 3}],
            test3: {
                thisOne: [1,3,4,5],
                tada: '32'
            },
            children: []
        }
        var sampleObj2 = {
            testX: 'myTest',
            _parent: sampleObj1
        }
        sampleObj1.children.push(sampleObj2);

        Meteor.call('testMethod', sampleObj1, function(err, result) {
            if (err) {
                Session.set('message', 'Call failed! Reason:', err.reason, ', Details: ', err.details);
            } else {
                Session.set('message', 'It worked!');
            }
        });
    }
});
