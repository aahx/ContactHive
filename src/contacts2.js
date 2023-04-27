import localforage from "localforage";
import { matchSorter } from "match-sorter";
import sortBy from "sort-by";

export async function getContacts(query) {
    let contacts = await localforage.getItem("contacts");
    if (!contacts) contacts = [];
    if (query) {
        contacts = matchSorter(contacts, query, { keys: ["first", "last"] });
    }
    return contacts.sort(sortBy("last", "createdAt"));
}

export async function createContact() {
    let id = Math.random().toString(36).substring(2, 9);
    let contact = { id, createdAt: Date.now() };
    let contacts = await getContacts();
    contacts.unshift(contact);
    await set(contacts);
    return contact;
}

export async function getContact(id) {
    let contacts = await localforage.getItem("contacts");
    if (contacts) {
        let contact = contacts.find(contact => contact.id === id);
        return contact ?? null;
    } else {
        return null;
    }
}

export async function updateContact(id, updates) {
    let contacts = await localforage.getItem("contacts");
    let contact = contacts.find(contact => contact.id === id);
    if (!contact) throw new Error("No contact found for", id);
    Object.assign(contact, updates);
    await set(contacts);
    return contact;
}

export async function deleteContact(id) {
    let contacts = await localforage.getItem("contacts");
    let index = contacts.findIndex(contact => contact.id === id);
    console.log("delete id", contacts[index].id)

    // removing michaelId from localStorage
    if(contacts[index][id] === localStorage.getItem("michaelIdStorage")){
        localStorage.removeItem('michaelIdStorage')
    };
    
    if (index > -1) {
        contacts.splice(index, 1);
        await set(contacts);
        return true;
    }
    return false;
}

function set(contacts) {
    return localforage.setItem("contacts", contacts);
}

// fake a cache so we don't slow down stuff we've already seen
let fakeCache = {};

async function fakeNetwork(key) {
    if (fakeCache[key]) {
        return;
    };

    if (!key) {
        fakeCache = {};
    };
    fakeCache[key] = true;

    return new Promise(res => {
        setTimeout(() => {
            res();
        }, Math.random() * 300);
    });
}