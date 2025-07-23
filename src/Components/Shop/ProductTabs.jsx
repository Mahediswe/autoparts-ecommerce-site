import React, { useState } from 'react'

const ProductTabs = ({ description, features, warranty }) => {
  const [activeTab, setActiveTab] = useState('description')

  const tabs = [
    { key: 'description', label: '📝 Description' },
    { key: 'features', label: '⚙️ Features' },
    { key: 'warranty', label: '🔐 Warranty' },
  ]

  const getContent = () => {
    switch (activeTab) {
      case 'description':
        return description
      case 'features':
        return features
      case 'warranty':
        return warranty
      default:
        return ''
    }
  }

  return (
    <div className="mt-10">
      <div className="flex gap-4 border-b pb-2">
        {tabs.map(tab => (
          <button
            key={tab.key}
            onClick={() => setActiveTab(tab.key)}
            className={`px-4 py-2 font-medium ${
              activeTab === tab.key
                ? 'border-b-2 border-blue-600 text-blue-600'
                : 'text-gray-600'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div className="mt-4 text-gray-700 leading-relaxed">
        {getContent()}
      </div>
    </div>
  )
}

export default ProductTabs
