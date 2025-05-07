import React from 'react';
import { Download } from 'lucide-react';

const DownloadButton: React.FC = () => {
  return (
    <a 
      href="#download" 
      className="inline-flex items-center px-6 py-3 bg-yellow-400 hover:bg-yellow-500 text-gray-900 text-base font-medium rounded-2xl transition-all duration-300 transform hover:scale-105"
    >
      <Download size={18} className="mr-2" />
      Download The App
    </a>
  );
};

export default DownloadButton;