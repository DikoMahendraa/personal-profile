import { MessageSquareCode } from 'lucide-react'
import React from 'react'

const AssistantPage = () => {
  return (
    <div className="my-6 gap-4 dark:text-gray-200 h-[20rem] flex justify-center items-center w-full">
      <MessageSquareCode className="text-gray-500" size={100} />
      <div>
        <h1 className="text-2xl italic font-semibold">Coming Soon</h1>
        <h1 className="text-xl italic font-normal text-gray-500 mt-2">
          Under Development
        </h1>
      </div>
    </div>
  )
}

export default AssistantPage
