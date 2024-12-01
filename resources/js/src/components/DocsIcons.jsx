
import IconsImg from '../assets/images/icons.webp';

const DocsIcons = () => (
    <div className="border-2 border-warning bg-warning bg-opacity-10 mb-4 border rounded">
        <div className="d-flex flex-xl-nowrap align-items-center px-xl-4 p-3 row">
            <div className="d-xl-block p-0 col-12 col-xl-auto d-none">
                <img className="img-fluid" src={IconsImg} width="160px" height="160px" alt="CoreUI Icons" />
            </div>
            <div className="px-lg-4 col-12 col-md">
                CoreUI Icons package is delivered with more than 1500 icons in multiple formats SVG, PNG,
                and Webfonts. CoreUI Icons are beautifully crafted symbols for common actions and items. You
                can use them in your digital products for web or mobile app. For more information please
                visit our documentation.
            </div>
            <div className="mt-3 mt-lg-0 col-12 col-md-auto">
                <a
                    className="text-nowrap text-white btn btn-warning"
                    href="https://coreui.io/react/docs/components/icon/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Explore Documentation
                </a>
            </div>
        </div>
    </div>
)

export default DocsIcons
