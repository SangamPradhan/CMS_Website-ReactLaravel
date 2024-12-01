import { AppContent, AppFooter, AppHeader, AppSidebar } from '../components/index'

const DefaultLayout = () => {
    return (
        <div>
            <AppSidebar />
            <div className="d-flex flex-column min-vh-100 wrapper">
                <AppHeader />
                <div className="flex-grow-1 body">
                    <AppContent />
                </div>
                <AppFooter />
            </div>
        </div>
    )
}

export default DefaultLayout
