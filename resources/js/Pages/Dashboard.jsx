import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import {
    ArcElement,
    CategoryScale,
    Chart as ChartJS,
    Legend,
    LinearScale,
    LineElement,
    PointElement, // Import ArcElement
    Title,
    Tooltip,
} from 'chart.js';
import { Line, Pie } from 'react-chartjs-2';

// Register necessary elements for Chart.js
ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    ArcElement, // Register ArcElement for Pie chart
    Title,
    Tooltip,
    Legend
);

export default function Dashboard() {
    // Static Data for counters
    const dataCounts = {
        blogs: 120,
        projects: 56,
        reviews: 245,
        testimonials: 89,
        events: 45,
    };

    // Static Data for Line Chart (e.g., Blog Views Over Time)
    const lineChartData = {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
        datasets: [
            {
                label: 'Blog Views',
                data: [300, 400, 350, 500, 600, 700],
                borderColor: 'rgba(75,192,192,1)',
                backgroundColor: 'rgba(75,192,192,0.2)',
                tension: 0.1,
            },
        ],
    };

    // Static Data for Pie Chart (e.g., Event Types Distribution)
    const pieChartData = {
        labels: ['Workshops', 'Webinars', 'Conferences', 'Meetups'],
        datasets: [
            {
                data: [30, 20, 25, 25],
                backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0'],
                hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0'],
            },
        ],
    };

    return (
        <AuthenticatedLayout
            header={
                <h2 className="font-semibold text-gray-800 text-xl dark:text-gray-200 leading-tight">
                    Dashboard
                </h2>
            }
        >
            <div className="px-4 py-6">
                {/* Statistics Counters */}
                <div className="gap-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mb-8">
                    <div className="flex justify-between items-center bg-white shadow-md p-4 rounded-lg">
                        <div>
                            <h3 className="font-medium text-lg">Blogs</h3>
                            <p className="font-semibold text-2xl">{dataCounts.blogs}</p>
                        </div>
                        <div className="text-3xl text-blue-500">📚</div>
                    </div>
                    <div className="flex justify-between items-center bg-white shadow-md p-4 rounded-lg">
                        <div>
                            <h3 className="font-medium text-lg">Projects</h3>
                            <p className="font-semibold text-2xl">{dataCounts.projects}</p>
                        </div>
                        <div className="text-3xl text-green-500">📊</div>
                    </div>
                    <div className="flex justify-between items-center bg-white shadow-md p-4 rounded-lg">
                        <div>
                            <h3 className="font-medium text-lg">Reviews</h3>
                            <p className="font-semibold text-2xl">{dataCounts.reviews}</p>
                        </div>
                        <div className="text-3xl text-yellow-500">⭐</div>
                    </div>
                    <div className="flex justify-between items-center bg-white shadow-md p-4 rounded-lg">
                        <div>
                            <h3 className="font-medium text-lg">Testimonials</h3>
                            <p className="font-semibold text-2xl">{dataCounts.testimonials}</p>
                        </div>
                        <div className="text-3xl text-purple-500">💬</div>
                    </div>
                    <div className="flex justify-between items-center bg-white shadow-md p-4 rounded-lg">
                        <div>
                            <h3 className="font-medium text-lg">Events</h3>
                            <p className="font-semibold text-2xl">{dataCounts.events}</p>
                        </div>
                        <div className="text-3xl text-orange-500">🎉</div>
                    </div>
                </div>

                {/* Line Chart (Blog Views Over Time) */}
                <div className="bg-white shadow-md mb-8 p-6 rounded-lg">
                    <h3 className="mb-4 font-medium text-lg">Blog Views Over Time</h3>
                    <Line data={lineChartData} />
                </div>

                {/* Pie Chart (Event Type Distribution) */}
                <div className="bg-white shadow-md p-6 rounded-lg">
                    <h3 className="mb-4 font-medium text-lg">Event Type Distribution</h3>
                    <Pie data={pieChartData} />
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
