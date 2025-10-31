import { useContext } from "react";
import { AdminStoriesTable } from "../../components/table/AdminStoriesTable";
import { StoriesContext } from "../../context/stories/StoriesContext";

export function AdminAllStoriesPage() {
    const { adminStories } = useContext(StoriesContext);

    return (
        <main>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <h3 className="fst-italic">Visos istorijos</h3>
                    </div>
                </div>
            </div>
            <AdminStoriesTable list={adminStories} />
        </main>
    );
}