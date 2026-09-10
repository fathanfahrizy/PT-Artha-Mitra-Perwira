import HeroSection from "@/components/organisms/HeroSection"
import ProductsSection from "@/components/organisms/ProductsSection"
import { PRODUCTS } from "@/data/homeData"

export default function Product() {
    return (
        <>
            <HeroSection
                subheading="Produk Kami"
                title={
                    <>
                        KATEGORI <span className="text-[#eab308] inline-block hover:scale-110 transition-transform duration-300 cursor-default">PRODUK</span>
                    </>
                }
                description="Berikut adalah kategori produk karton berkualitas tinggi yang kami sediakan untuk mendukung industri Anda."
                badges={[]}
                imageSrc="/images/foto-hero.jpeg"
            />
            <ProductsSection title="KATALOG PRODUK LENGKAP" products={PRODUCTS} />
        </>
    )
}