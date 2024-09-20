import React from 'react';
import { AiOutlineHome, AiOutlineSearch, AiOutlineBell, AiOutlineMessage } from 'react-icons/ai';
import { BsBarChart } from 'react-icons/bs';

const Icon = ({ name, size = 24 }) => {
  const icons = {
    home: <AiOutlineHome size={size} />,
    search: <AiOutlineSearch size={size} />,
    notifications: <AiOutlineBell size={size} />,
    messages: <AiOutlineMessage size={size} />,

    chart: <BsBarChart size={size} />,
  };

  return icons[name] || <span>No Icon</span>;
};

export default Icon;