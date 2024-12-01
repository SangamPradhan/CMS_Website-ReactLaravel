import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Provider } from 'react-redux';
import store from '../../../resources/js/src/store';
import App from '../../js/src/App';


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
                <Provider store={store}>
                    <App />
                </Provider>

            </div>
        </AuthenticatedLayout>
    );
}
