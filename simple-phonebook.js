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

    //CHECKS THE PHONE NUMBER AND RETURNS IF THE DATA IS MISSING, EMPTY STRING OR CONTAINS A NON-NUMERIC CHARACTER
    if (phoneNumber == null || phoneNumber === '' || /^[0-9]+$/.test(phoneNumber) == false) return 
    //CHECKS THE NAME AND RETURNS IF THE DATA IS MISSING OR EMPTY
    if (name == null || name === '') return
    //CHECKS THE EMAIL AND RETURNS IF THE DATA IS MISSING, EMPTY OR NOT A VALID EMAIL
    if (email == null || email === '' || /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email) == false) return

    //RETURNS IF A PHONE NUMBER ALREADY EXIST  
    let found = contacts.some(i => i.phoneNumber === phoneNumber)
    if(found) return

    //SAVES CONTACT
    let contact = new Contact(phoneNumber, name, email)
    contacts.push(contact)
    return contact 
}

//FUNCTION TO GET ONE PHONE DETAIL
const getOneContact = (phoneNumber)=>{
    let found = contacts.find(num=> num > phoneNumber)
    if (!found) return
    return found
}

//FUNCTION TO GET LIST OF PHONE DETAILS
const getAllContacts = ()=>{
    if (contacts.length < 1) return
    return contacts
}

//EXPORT FUNCTIONS
export {
    storeContact,
    getOneContact,
    getAllContacts
}