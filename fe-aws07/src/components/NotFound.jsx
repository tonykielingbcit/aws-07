import { useRouteError } from "react-router-dom";

export default function NotFound() {
    const error = useRouteError();

    return(
        <div>
            <h1>Page has not been found</h1>
            <p>
                <i>{error.statusText || error.message}</i>
            </p>
        </div>
    );
}