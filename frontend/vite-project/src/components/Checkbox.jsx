import { useState } from "react";

const Checkbox = ({ id, content, checked, onChange }) => {
  return (
    <label htmlFor={id} className="flex items-center">
      <input type="checkbox" className="h-5 w-5 accent-red-600" id={id} checked={checked} onChange={onChange} />
      <span className="ml-2 text-gray-700">{content}</span>
    </label>
  );
};

export default Checkbox;
