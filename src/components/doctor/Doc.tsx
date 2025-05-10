import Hero from './Hero'
import WhatIsHealmirror from './WhatIsHealmirror'
import Highlights from './Highlights'

const Doc = () => {
  return (
    <div className="w-full overflow-x-hidden">
      <Hero/>
      <WhatIsHealmirror/>
      <Highlights/>
    </div>
  )
}

export default Doc