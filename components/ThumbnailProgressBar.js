const ThumbnailProgressBar = ({ data, className, fill }) => {
  const progress = data * 10
  const radius = 24
  const stroke = 6
  const normalizedRadius = radius - stroke * 2 + stroke
  const circumference = normalizedRadius * 2 * Math.PI
  const strokeDashoffset = circumference - (progress / 100) * circumference

  return (
    <div className={`${className} bg-gray-900 rounded-full shadow-2xl text-white`}>
      <div className='relative'>
        <svg className=' transform -rotate-90' height={radius * 2} width={radius * 2}>
          <circle
            stroke={
              progress < 50 || 0 ? "#FF6D8E" : progress < 70 ? "#F6FF69" : "#00FFC9"
            }
            fill={fill || "transparent"}
            strokeWidth={stroke}
            strokeDasharray={circumference}
            style={{ strokeDashoffset }}
            r={normalizedRadius}
            cx={radius}
            cy={radius}
          />
        </svg>
        <p className='absolute text-sm top-1/2 w-full  transform translate-x-1/3 -translate-y-1/2'>
          {(data || 0) * 10}
          <sup className='text-xxs '>%</sup>
        </p>
      </div>
    </div>
  )
}

export default ThumbnailProgressBar
