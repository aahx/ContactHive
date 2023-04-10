import {
    Form,
    useLoaderData
} from "react-router-dom";

// export async function loader()


export default function EditContact(){
    console.log("editContact loaderData");
    console.log(useLoaderData());
    const { contact } = useLoaderData();





}