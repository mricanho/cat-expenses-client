import React from 'react';

type CategoryDetailProps = {
  category: string;
  onChange: (newCategory: string) => void;
};

const CategoryDetail: React.FC<CategoryDetailProps> = ({
  category,
  onChange,
}) => {
  const categories = ['Food', 'Furniture', 'Accessory'];

  return (
    <div>
      <label
        htmlFor="category"
        className="block text-sm font-medium text-gray-700"
      >
        Category
      </label>
      <select
        id="category"
        value={category}
        onChange={(e) => onChange(e.target.value)}
        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
      >
        {categories.map((cat) => (
          <option key={cat} value={cat}>
            {cat}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CategoryDetail;
