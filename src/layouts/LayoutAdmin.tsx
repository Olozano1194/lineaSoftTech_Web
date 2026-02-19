import { Outlet } from "react-router-dom";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";

function LayoutAdmin() {
    return (
        <div className="min-h-screen flex flex-col">
            <div className="xl:col-span-5">
                <Header />
                <main className="bg-text-secondary/4 flex-1 overflow-y-auto px-3.5 py-8 md:px-5 lg:px-16">
                    <Outlet />
                </main>
                <Footer></Footer>                 
            </div>
        </div>
    );
}
export default LayoutAdmin;