import Link from "next/link"
import jazzicon from "@metamask/jazzicon"
import { menuItems } from "../../utils/menuItems"
import {
  useEtherBalance,
  useEthers,
  shortenAddress,
  useTokenBalance,
} from "@usedapp/core"
import { formatEther } from "@ethersproject/units"
import { useEffect, useRef } from "react"

const Navbar = () => {
  const iconRef = useRef()
  const { activateBrowserWallet, account, chainId, library } = useEthers()
  const etherBalance = useEtherBalance(account)
  const xBalance = useTokenBalance("0x419ae022948a917bd3b0e79b790434487e308fe6", account)

  useEffect(() => {
    if (account && iconRef.current) {
      iconRef.current.innerHTML = ""
      iconRef.current.appendChild(jazzicon(12, parseInt(account.slice(2, 10), 16)))
    }
  }, [account])
  return (
    <nav className='bg-gray-800 border-b-2'>
      <div className='container flex justify-between items-center lg:px-36 relative mx-auto'>
        <h1 className='hidden lg:block text-white cursor-default'>Moovy</h1>
        <div className='flex flex-row text-gray-200 '>
          {menuItems.map((el, i) => (
            <Link key={el.label} href={el.url} passHref>
              <a className='nav-link lg:mx-12'>{el.label}</a>
            </Link>
          ))}
        </div>

        {account && (
          <div className='text-white flex items-center bg-gray-700 border border-gray-500 rounded-xl'>
            {chainId === 56 ? (
              <p className='px-2 py-2  text-sm'>
                {` ${etherBalance ? formatEther(xBalance) : "Loading..."} xQc`}
              </p>
            ) : (
              <h1 className='bg-gray-700 px-2 py-2 rounded-xl text-sm'>Change to BSC</h1>
            )}
            <p className='bg-gray-900 px-2 py-1.5 rounded-xl text-sm flex items-center'>
              {shortenAddress(account)}
              <span className='ml-3 mr-1' ref={iconRef}></span>
            </p>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar
