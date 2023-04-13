import {
    Form,
    useLoaderData,
    redirect,
    useNavigate,
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
    const formData = await request.formData();
    const updates = Object.fromEntries(formData);
    await updateContact(params.contactId, updates);
    return redirect(`/contacts/${params.contactId}`);
};


export default function EditContact(){
    const { contact } = useLoaderData();
    const navigate = useNavigate();

    return (
        <Form method="post" id="contact-form">
            <p>
                <span>Name</span>
                <input 
                    placeholder="First"
                    aria-label="First name" 
                    type="text"
                    autoComplete="off"
                    name="first"
                    defaultValue={contact.first}
                />
                <input 
                    placeholder="Last"
                    aria-label="Last name"
                    type="text"
                    autoComplete="off"
                    name="last"
                    defaultValue={contact.last}
                />
            </p>
            <label>
                <span>Number</span>
                <input 
                    type="tel"
                    name="number"
                    autoComplete="off"
                    placeholder="012-345-6789"
                    defaultValue={contact.number}
                    maxLength="12"
                    pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                />
            </label>
            <label>
                <span>Website</span>
                <input 
                    type="text"
                    name="website"
                    autoComplete="off"
                    placeholder="example.com"
                    defaultValue={contact.website}
                />
            </label>
            <label>
                <span>Avatar URL</span>
                <input
                    placeholder="https://placekitten.com/200/200"
                    aria-label="Avatar URL"
                    type="text"
                    autoComplete="off"
                    name="avatar"
                    defaultValue={contact.avatar ? contact.avatar : `https://placekitten.com/200/200?image=${Math.floor(Math.random() * 16) + 1}`}
                />
            </label>
            <label>
                <span>Notes</span>
                <textarea 
                    name="notes"
                    autoComplete="off"
                    defaultValue={contact.notes}
                    row={6}
                />
            </label>
            <p>
                <button type="submit">Save</button>
                <button 
                    type="button"
                    onClick={() => {
                        navigate(-1);
                    }}
                >
                    Cancel
                </button>
            </p>
        </Form>
    );
}