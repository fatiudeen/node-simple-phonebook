/**
 * the module does not return any error. it will simply return and abort. 
 * you can handle all errors and exceptions by adding the hanldlers where indicated.
*/ 

//CONTACT MODEL
class Contact{
    constructor(phoneNumber, name, email){
        this.phoneNumber = phoneNumber
        this.name = name
        this.email = email
        this.dateCreated = new Date()
    }
}

//ARRAY TO STORE CONTACT DATA
var contacts = [] 

//FUNCTION THET SAVES CONTACTS
const storeContact = (phoneNumber, name, email)=>{

    if (phoneNumber == null || phoneNumber === '' || /^[0-9]+$/.test(phoneNumber) == false) return //INSERT ERROR HANDLER
    if (name == null || name === '') return //INSERT ERROR HANDLER
    if (email == null || email === '' || /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email) == false) return //INSERT ERROR HANDLER

    let found = contacts.some(i => i.phoneNumber === phoneNumber)
    if(found) return //INSERT ERROR HANDLER

    //SAVES CONTACT
    let contact = new Contact(phoneNumber, name, email)
    contacts.push(contact)
    return contact 
}

//FUNCTION TO GET ONE PHONE DETAIL
const getOneContact = (phoneNumber)=>{
    let found = contacts.find(num=> num > phoneNumber)
    if (!found) return //INSERT ERROR HANDLER
    return found
}

//FUNCTION TO GET LIST OF PHONE DETAILS
const getAllContacts = ()=>{
    if (contacts.length < 1) return //INSERT ERROR HANDLER
    return contacts
}

//EXPORT FUNCTIONS
export {
    storeContact,
    getOneContact,
    getAllContacts
}