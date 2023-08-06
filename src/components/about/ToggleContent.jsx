import React, { useState } from 'react';

const ToggleContent = () => {
  const [showContent, setShowContent] = useState(false);

  const handleToggle = () => {
    setShowContent((prevShowContent) => !prevShowContent);
};

return (
    <div className="mb20">
        <button className='btn btn-primary' onClick={handleToggle}>
            {showContent ? 'Hide' : 'Read more'}
        </button>
        {showContent && (
            <div>
                <p>I have over 12 years of experience working with <strong>Google Analytics</strong>, allowing me to effectively analyze data and provide valuable insights for my clients. In addition, I have over 8 years of experience with <strong>Google Tag Manager</strong>, which I successfully implement tracking tags and manage complex data layers for various websites. Finally, I have over 5 years of experience with <strong>Google Optimize</strong>, allowing me to conduct effective A/B testing and optimization experiments that have resulted in improved website performance and increased conversion rates.</p>
                
                <p>Lastly, I have a deep understanding of the latest <strong>SEO</strong> trends and best practices. My expertise covers a broad range of SEO techniques, including on-page optimization, technical SEO, link building, and local SEO. I have also worked with a diverse range of clients across various industries, including e-commerce, finance, tech, and security. This has allowed me to consistently deliver impactful results for my clients and help them achieve their business objectives.</p>
            </div>
        )}
        </div>
    );
};

export default ToggleContent;
