import { 
    Outlet, 
    Link ,
    useLoaderData,
} from "react-router-dom";
import { getContacts } from "../contacts";

export async function loader(){
    const contacts = await getContacts();
    return { contacts };
}

export default function Root() {
    const { contacts } = useLoaderData();
    // "LEFT OFF AT LOADING DATA SECTION OF TUTORIAL"
    // "LEFT OFF AT LOADING DATA SECTION OF TUTORIAL"
    // practicing destructuring assignment on codepen
    // https://codepen.io/SparklingLemonWater/pen/KKGpdBz?editors=0012
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment
    // https://reactrouter.com/en/main/start/tutorial#loading-data
    // https://placekitten.com/


    return (
        <>
            <div id="sidebar">
                <h1>React Router Contacts</h1>
                <div>
                    <form id="search-form" role="search">
                        <input
                            id="q"
                            aria-aria-label="Aria Label Search Contacts"
                            placeholder="Placeholder Search Contacts"
                            type="search"
                            name="q"
                        />
                        <div
                            id="search-spinner"
                            aria-hidden
                            hidden={true}
                        />
                        <div
                            className="sr-only"
                            aria-live="polite"
                        ></div>
                    </form>
                    <form method="post">
                        <button type="submit">New</button>
                    </form>
                </div>
                <nav>
                    <ul>
                        <li>
                            <Link to={`/contacts/1`}>Your Name</Link>
                        </li>
                        <li>
                            <Link to={`/contacts/2`}>Your Friend</Link>
                        </li>
                    </ul>
                </nav>
            </div>
            <div id="detail">
                <Outlet />
            </div>
        </>
    )
};