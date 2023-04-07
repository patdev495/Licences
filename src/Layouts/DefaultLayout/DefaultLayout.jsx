import Sidebar from '~/components/Sidebar/Sidebar';

function DefaultLayout({ children }) {
    return (
        <div className="DefaultLayout Layout">
            <Sidebar></Sidebar>
        </div>
    );
}

export default DefaultLayout;
