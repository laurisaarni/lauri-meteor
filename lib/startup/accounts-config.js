import { Accounts } from 'meteor/accounts-base';

if(Meteor.isClient)
{
  // This code is executed on the client only
  Accounts.ui.config({
  passwordSignupFields: "USERNAME_ONLY"
  });
}
