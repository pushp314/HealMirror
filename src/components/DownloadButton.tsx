import React from 'react';
import { Download } from 'lucide-react';

const DownloadButton: React.FC = () => {
  return (
    <a 
      href="#download" 
      className="inline-flex items-center px-4 sm:px-6 py-2.5 sm:py-3 bg-yellow-400 hover:bg-yellow-500 text-gray-900 text-sm sm:text-base font-medium rounded-xl sm:rounded-2xl transition-all duration-300 transform hover:scale-105"
    >
      <Download size={16} className="mr-2 sm:mr-2 w-4 h-4 sm:w-5 sm:h-5" />
      Download The App
    </a>
  );
};

export default DownloadButton