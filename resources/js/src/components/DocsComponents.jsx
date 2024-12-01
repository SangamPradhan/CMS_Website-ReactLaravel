import PropTypes from 'prop-types'

import ComponentsImg from '../assets/images/components.webp'; //'../../assets/images/components.webp'

const DocsComponents = (props) => (
    <div className="border-2 border-primary bg-primary bg-opacity-10 mb-4 border rounded">
        <div className="d-flex flex-xl-nowrap align-items-center px-xl-4 p-3 row">
            <div className="d-xl-block p-0 col-12 col-xl-auto d-none">
                <img
                    className="img-fluid"
                    src={ComponentsImg}
                    width="160px"
                    height="160px"
                    alt="CoreUI PRO hexagon"
                />
            </div>
            <div className="px-lg-4 col-12 col-md">
                Our Admin Panel isn’t just a mix of third-party components. It’s{' '}
                <strong>
                    the only open-source React dashboard built on a professional, enterprise-grade UI
                    Components Library
                </strong>
                . This component is part of this library, and we present only the basic usage of it here. To
                explore extended examples, detailed API documentation, and customization options, refer to
                our docs.
            </div>
            <div className="mt-3 mt-lg-0 col-12 col-md-auto">
                <a
                    className="text-nowrap text-white btn btn-primary"
                    href={`https://coreui.io/react/docs/${props.href}`}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Explore Documentation
                </a>
            </div>
        </div>
    </div>
)

DocsComponents.propTypes = {
    href: PropTypes.string,
}

export default DocsComponents
