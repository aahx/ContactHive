import localforage from "localforage";
import { matchSorter } from "match-sorter";
import sortBy from "sort-by";

async function getContacts(){
    let contacts = await localforage.getItem("contacts");

    if(!contacts) contacts = [];


    console.log("getContacts, contacts, pre sort" , contacts);
    console.log("contacts, sort", contacts.sort())
    console.log("contacts, sort, sortBy", contacts.sort(sortBy("last", "createdAt")));
    
    // return contacts.sort(sortBy("last", "createdAt"));
    return contacts;
};


async function createContact(){
    let id = Math.random().toString(36).substring(2,9);
    let contact = { id, createdAt: Date.now() };

    let contacts = await getContacts();
    contacts.unshift(contact);
    await set(contacts);
    console.log(localforage.getItem("contacts"));
    return contact
};

async function set(contacts){
    return localforage.setItem("contacts", contacts);
}


createContact();