import React from 'react';
import TextAndImage from '../common/TextAndImage';
import ProtectionImage from "@/assets/protection/imageProtection.png"
import ProtectionContent from './ProtectionContent';
const Protection = () => {
    return (
        <div>
            <TextAndImage contentComponent={<ProtectionContent />} contentWidth={60} imageSrc={ProtectionImage} />
        </div>
    );
};

export default Protection;