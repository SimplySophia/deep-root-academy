"use client"
import { FaStar } from 'react-icons/fa'
import ReviewSlider from './ReviewSlider'
import { motion } from 'framer-motion'

const Review = () => {
  return (
    <div className='pt-20 pb-20 flex items-center justify-center flex-col bg-[#000b3d]'>
      <div className='w-[80%] mx-auto grid items-center grid-cols-1 lg:grid-cols-2 gap-10'>

        {/* Left Text Section */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <h1 className='text-2xl font-semibold text-white'>
            Success Stories
          </h1>
          <p className='mt-6 text-gray-200'>
            Hear from our graduates who have transformed their careers and are now working at top tech companies across Nigeria and beyond.
          </p>
          <div className='mt-6 flex items-center space-x-6'>
            <div>
              <p className='text-2xl font-bold text-white'>4.85</p>
              <p className='mb-2 text-white'>Overall Rating</p>
              <div className='flex items-center'>
                <FaStar className='text-white' />
                <FaStar className='text-white' />
                <FaStar className='text-white' />
                <FaStar className='text-white' />
                <FaStar className='text-white' />
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right Review Slider */}
        <motion.div
          className='overflow-hidden'
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <ReviewSlider />
        </motion.div>
      </div>
    </div>
  )
}

export default Review;
