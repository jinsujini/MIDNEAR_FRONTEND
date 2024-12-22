import React, { Suspense } from 'react';
import { useLocation } from 'react-router-dom';
import Nav from './Nav';

const Manager = () => {
    const location = useLocation();
    const path = location.pathname.split('/manager/')[1];

    const ManagerContent = React.lazy(() => {
        return import(`./${path.charAt(0).toUpperCase() + path.slice(1)}.jsx`);
    });

    return (
        <div className="manager">
            <Nav />
            <div className="contents">
                <Suspense fallback={<div>Loading...</div>} >
                    <ManagerContent />
                </Suspense>
            </div>
        </div>
    );
};

export default Manager;
