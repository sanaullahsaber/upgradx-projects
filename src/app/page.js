"use client"
import Banner from '@/components/Banner/Banner';
import Products from '@/components/Products/Products';
import TopBrand from '@/components/TopBrand/TopBrand';
import ZetEffect from '@/components/ZetEffect/ZetEffect';
import Image from 'next/image'

 function HomePage() {
   return (
    <>
    <main className="max-w-screen-2xl mx-auto">
      <Banner></Banner>
      <TopBrand></TopBrand>
      <Products></Products>
       </main>
       <ZetEffect></ZetEffect>
    </>
  );
}
export default HomePage;