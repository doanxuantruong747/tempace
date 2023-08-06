import React, { useState } from 'react';

const Tab = ({ tabs }) => {
    const [activeTab, setActiveTab] = useState(0);

    const handleTabClick = (index) => {
        setActiveTab(index);
    };

    return (
        <div className=' flex flex-col justify-between h-auto'>
            <div className="pt-[10px] ">
                {tabs[activeTab]?.content}
            </div>

            <div className="pt-[10px] h-[80px] w-full flex cursor-pointer">
                {tabs?.map((tab, index) => (
                    <div
                        key={index}
                        className={` mr-5 rounded-[5px] ${activeTab === index ? 'outline-[#84B213] outline outline-offset-2 outline-2 ' : ''}`}
                        onClick={() => handleTabClick(index)}
                    >
                        {tab.title}
                    </div>
                ))}
            </div>

        </div>
    );
};

export default Tab;
