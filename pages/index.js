import HeroBanner from "@/components/HeroBanner";
import ProducCard from "@/components/ProducCard";
import Wraper from "@/components/Wraper";


export default function Home() {
    return <main >
        <HeroBanner/>
        <Wraper>
            <div className="text-center max-w-[800px] mx-auto my-[50px] md:my-[80px]   ">
                <div className="text-[28px] md:text-[34px] mb-5 font-semibold leading-tight  "  >
                    Best Product fou You
                </div>
                <div className="text-md md:text-xl " >
                   A Light Weight Nike ZomeX Midsole is combines with 
                   increase Stack Heights to help Provide Cushoioning
                   during extended Strethesof running
                </div>
                {/* second component */}
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
            </div>
        </Wraper>
        </main>;
}
