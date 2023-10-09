import Chef from '@/components/Chef'
import Commitment from '@/components/Commitment'
import Delivery from '@/components/Delivery'
import Dishes from '@/components/Dishes'
import Slider from '@/components/Slider'
import Image from 'next/image'

export default function Home() {
  return (
   <main>
    <Slider/>
    <Dishes/>
    <Commitment/>
    <Chef/>
    <Delivery/>
   </main>
  )
}
