import {
    Form,
    useLoaderData,
    redirect,
} from "react-router-dom";
import { 
    getContact,
    updateContact
} from "../contacts";

export async function loader({ params }){
    const contact = await getContact(params.contactId);
    return { contact }
};

export async function action({ request, params }){
    console.log("EDIT Action");
    console.log("request", request);
    console.log("params", params);
    console.log("---------------");

    const formData = await request.formData();
    console.log("formData = request.formData()", formData);
    console.log("---------------");

    const updates = Object.fromEntries(formData);
    console.log("Object.fromEntries(formData");
    console.log(updates);


    await updateContact(params.contactId, updates);
    return redirect(`/contacts/${params.contactId}`);
};


export default function EditContact(){
    const { contact } = useLoaderData();

    return (
        <Form method="post" id="contact-form">
            <p>
                <span>Name</span>
                <input 
                    placeholder="First"
                    aria-label="First name" 
                    type="text"
                    name="first"
                    defaultValue={contact.first}
                />
                <input 
                    placeholder="Last"
                    aria-label="Last name"
                    type="text"
                    name="last"
                    defaultValue={contact.last}
                />
            </p>
            <label>
                <span>Twitter</span>
                <input 
                    type="text"
                    name="twitter"
                    placeholder="@jack"
                    defaultValue={contact.twitter}
                />
            </label>
            <label>
                <span>Avatar URL</span>
                <input
                    placeholder="https://example.com/avatar.jpg"
                    aria-label="Avatar URL"
                    type="text"
                    name="avatar"
                    defaultValue={contact.avatar}
                />
            </label>
            <label>
                <span>Notes</span>
                <textarea 
                    name="notes"
                    defaultValue={contact.notes}
                    row={6}
                />
            </label>
            <p>
                <button type="submit">Save</button>
                <button type="button">Cancel</button>
            </p>
        </Form>
    );
}