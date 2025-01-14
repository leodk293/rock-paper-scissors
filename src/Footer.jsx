import React from 'react'

export default function Footer() {
  return (
    <footer className=' mt-[65px] flex flex-col gap-4 items-center'>
        <p className=' text-white font-bold text-2xl'>Follow me on:</p>
        <div className=' text-white font-semibold flex flex-wrap gap-3'>
            <a target='_blank' href="https://www.linkedin.com/in/aboubacar-traore-495736252/">Linkedin</a>
            <a target='_blank' href="https://x.com/Aboubac48530295">Twitter</a>
            <a target='_blank' href="https://web.facebook.com/profile.php?id=100092315485742">Facebook</a>
        </div>

    </footer>
  )
}
