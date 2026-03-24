  import type { DashboardItem } from '@/types/common.types'
 
 function DashboardTabs({Arrdata}:{Arrdata:DashboardItem[]}) {
   return (
     <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  gap-5 p-3'>
        {Arrdata.map((el)=>{
            const Icon = el.icon
            return(
                <div className=' border-gray-200    border rounded-xl w-full px-4 py-5 '>
                <div className='flex justify-between   '>
                    <h2 className='text-[17px] text-gray-500 '>{el.title}</h2>
                    
                    <div className={`${el.iconBg} flex justify-center  rounded-md px-2 py-1 `}>
                        <Icon className={`${el.iconColor} w-3.75 `}> </Icon>
                    </div>
                </div>
                <div className='font-bold text-3xl'>{el.value}</div>
                <div className='text-gray-400 text-[13px] mt-2'>{el.subtitle}</div>
                </div>
            )
        })}

     </div>
   )
 }
 
 export default DashboardTabs