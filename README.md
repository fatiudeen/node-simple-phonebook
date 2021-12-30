## simple-phonebook
simple-phonebook is a simple javascript module for:
1. storing unique phone numbers
2. get a single contact detail
3. get all the contacts

#note
1. rename file extention to .mjs if you are using common javascript

2. the module does not return any error. it will simply return and abort. you can handle all errors and exceptions by adding the hanldlers where indicated.


# usage
```javascript
#returns an object of the saved contact
storeContact(phoneNumber, name, email)

#returns a contact object
getOneContact(phoneNumber)

#returns array of contact objects
getAllContacts()
```
