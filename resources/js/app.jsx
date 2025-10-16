import Logo from '../assets/website/Vector.png';
import '../css/app.css';
import './bootstrap';

import { createInertiaApp } from '@inertiajs/react';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import { createRoot } from 'react-dom/client';
import { Helmet } from 'react-helmet'; // Import Helmet
import { BrowserRouter } from 'react-router-dom'; //

const appName = import.meta.env.VITE_APP_NAME || 'Laravel';

createInertiaApp({
    title: (title) => `AI Solutions - ${title} `,
    resolve: (name) =>
        resolvePageComponent(
            `./Pages/${name}.jsx`,
            import.meta.glob('./Pages/**/*.jsx'),
        ),
    setup({ el, App, props }) {
        const root = createRoot(el);

        root.render(
            <BrowserRouter>
                <Helmet>
                    <title>{appName}</title>
                    <link rel="icon" type="../assets/website/Vector.png"
                    href={Logo}
                    />
                </Helmet>
                <App {...props} />
            </BrowserRouter>
        );
    },
    progress: {
        color: '#4B5563',
    },
});
