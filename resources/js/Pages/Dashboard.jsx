import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';


export default function Dashboard() {
    return (
        <AuthenticatedLayout
            header={
                <h2 className="font-semibold text-gray-800 text-xl dark:text-gray-200 leading-tight">
                    Dashboard
                </h2>
            }
        >
            <div>
                

            </div>
        </AuthenticatedLayout>
    );
}
