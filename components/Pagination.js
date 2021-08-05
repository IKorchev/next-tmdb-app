import { useRouter } from "next/router"
import ChevronDoubleRightIcon from "@heroicons/react/solid/ChevronDoubleRightIcon"
import ChevronRightIcon from "@heroicons/react/solid/ChevronRightIcon"
import ChevronDoubleLeftIcon from "@heroicons/react/solid/ChevronDoubleLeftIcon"
import ChevronLeftIcon from "@heroicons/react/solid/ChevronLeftIcon"
const Pagination = ({ pagesCount }) => {
  const router = useRouter()
  const handlePrevious = () => {
    if (router.query.page === "1") return
    router.query.page = parseInt(router.query.page || 2) - 1
    router.push(router)
  }
  const handleNext = () => {
    if (router.query.page === pagesCount.toString()) return
    router.query.page = parseInt(router.query.page || 1) + 1
    router.push(router)
  }

  return (
    <div className='flex justify-center items-center py-5'>
      <button
        className='px-2'
        onClick={() => {
          if (router.query.page !== "1") {
            router.query.page = 1
            router.push(router)
          }
        }}>
        <ChevronDoubleLeftIcon className='w-4' />
      </button>
      <button
        onClick={handlePrevious}
        className='flex place-items-center mr-4 text-lg font-semibold'>
        <ChevronLeftIcon className='w-7' /> <span>Previous</span>
      </button>
      <button
        onClick={handleNext}
        className='flex place-items-center ml-4 text-lg font-semibold'>
        <span>Next</span> <ChevronRightIcon className='w-7' />
      </button>
      <button
        onClick={() => {
          if (router.query.page !== pagesCount.toString()) {
            router.query.page = pagesCount
            router.push(router)
          }
        }}
        className='px-2'>
        <ChevronDoubleRightIcon className='w-4' />
      </button>
    </div>
  )
}

export default Pagination
