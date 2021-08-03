import { useRef, useEffect } from "react"
import Thumbnail from "./Thumbnail"
import gsap from "gsap"
const Results = ({ results, genre }) => {
  const parentRef = useRef()
  useEffect(() => {
    gsap.from(parentRef.current.children, {
      opacity: 0,
      y: 50,
      stagger: 0.1,
    })
  }, [results])
  return (
    <>
      <h1 className='capitalize text-center p-5'>
        {genre !== "TV" ? `${genre} Movies` : `${genre} series`}
      </h1>
      <div
        ref={parentRef}
        className='grid grid-flow-row grid-cols-1 xl:grid-cols-2 2xl:grid-cols-3 mx-auto max-w-full px-48 justify-items-center'>
        {results.map((el, i) => (
          <Thumbnail key={el.id} result={el} />
        ))}
      </div>
    </>
  )
}

export default Results
