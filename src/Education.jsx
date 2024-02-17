import React from 'react';

const Education = () => {
    return (
        <div className='flex justify-center gap-5'>
            <div className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    Bachelor in CSE
                </h5>
                <h5 className="mb-2 text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                    Jashore University of Science & Technology
                </h5>
                <p className="font-normal text-gray-700 dark:text-gray-400">
                    2015-2020
                </p>
                <p className="font-normal text-gray-700 dark:text-gray-400">
                    3.09 out of 4
                </p>
            </div>
            <div className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Higher Secondary Certificate
                </h5>
                <h5 className="mb-2 text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                Chuadanga Govt. College
                </h5>
                <p className="font-normal text-gray-700 dark:text-gray-400">
                    2012-2014
                </p>
                <p className="font-normal text-gray-700 dark:text-gray-400">
                    5 out of 5
                </p>
            </div>
            <div className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    Secondary School Certificate
                </h5>
                <h5 className="mb-2 text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                    V.J.Govt. High School, Chuadanga
                </h5>
                <p className="font-normal text-gray-700 dark:text-gray-400">
                    2012
                </p>
                <p className="font-normal text-gray-700 dark:text-gray-400">
                    5 out of 5
                </p>
            </div>
        </div>
    );
};

export default Education;