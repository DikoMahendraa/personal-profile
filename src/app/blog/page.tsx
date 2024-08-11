import { MainLayout } from '@/layouts/MainLayout'
import Image from 'next/image'
import React from 'react'

interface BlogCardProps {
  thumbnail: string
  title: string
  published: string
  description: string
}

const BlogCard: React.FC<BlogCardProps> = ({
  thumbnail,
  title,
  published,
  description,
}) => {
  return (
    <div className="max-w-sm bg-white dark:bg-gray-800 shadow-lg rounded-lg overflow-hidden transition-colors duration-300">
      <div className="w-full h-48 object-cover relative">
        <Image src={thumbnail} alt={title} fill />
      </div>
      <div className="p-4">
        <h2 className="text-xl font-semibold mb-2 text-gray-900 dark:text-gray-100">
          {title}
        </h2>
        <p className="text-gray-500 text-sm mb-2 dark:text-gray-400">
          {published}
        </p>
        <p className="text-gray-700 dark:text-gray-300 text-base line-clamp-3">
          {description}
        </p>
      </div>
    </div>
  )
}

export default function PageBlog() {
  return (
    <MainLayout>
      <div className="lg:grid lg:grid-cols-2 lg:gap-6">
        {Array.from({ length: 5 }).map(() => {
          return (
            // eslint-disable-next-line react/jsx-key
            <div className="lg:col-span-1">
              <BlogCard
                thumbnail="https://via.assets.so/img.jpg?w=400&h=150&tc=blue&bg=#cecece&t=Image"
                title="Sample Blog Post"
                published="August 11, 2024"
                description="This is a sample description for the blog post. It will be truncated to a maximum of three lines with an ellipsis if it exceeds that limit."
              />
            </div>
          )
        })}
      </div>
    </MainLayout>
  )
}
