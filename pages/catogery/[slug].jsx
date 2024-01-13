import React from 'react'
import { useRouter } from 'next/router'
import Wraper from '@/components/Wraper'
import ProducCard from '@/components/ProducCard'
const Category = () => {
    const router = useRouter();
    const {slug} = router.query;
  return (
    <div className='w-full md:py-20'  >
        <Wraper>
        <div className="text-center max-w-[800px] mx-auto my-[50px] md:my-[80px]   ">
                <div className="text-[28px] md:text-[34px] mb-5 font-semibold leading-tight  "  >
                    Running Shoes
                </div>
                </div> 
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-5 my-14 px-5 md:px-0 " >
<ProducCard/>
<ProducCard/>
<ProducCard/>
<ProducCard/>
<ProducCard/>
<ProducCard/>
<ProducCard/>
<ProducCard/>
<ProducCard/>
<ProducCard/>
<ProducCard/>
                </div>
        </Wraper>
        </div>
  )
}

export default Category