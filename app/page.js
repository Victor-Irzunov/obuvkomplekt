
import Preimushestva from "@/components/Catalog/Catalog";
import Services from "@/components/Preimushestva/Preimushestva";


export default function Home() {
  return (
    <main className='pb-20'>
      <div className='container mx-auto'>

        <section className="hero h-auto md:h-[500px] rounded-lg overflow-hidden" id="main" style={{ backgroundImage: "url('/fon/fon.webp')" }}>
          <div className="hero-overlay bg-opacity-60 bg-secondary"></div>
          <div className="hero-content text-center text-secondary-content">
            <div className="max-w-lg">
              <h1 className="mb-5 sm:mb-7 text-2xl sm:text-4xl font-semibold uppercase">
                <span className='block sd:text-7xl xz:text-4xl mb-3 font-bold'>
                  Магазин
                </span>
                <span className="block mb-2">
                  натуральной кожи
                </span>
                <span className="block mb-2">
                  кожевенной химии
                </span>
                <span className="block">
                  фурнитуры
                </span>
              </h1>
              <h2 className='text-xl uppercase mb-8'>
                Все для пошива кожгалантереи и обуви
              </h2>
              <p className="mb-5 sm:mb-7 sm:text-sm">
                Магазин "ОбувьКомплект" специализуруется на оптовой и розничной продаже широкого ассортимента высококачественной натуральной кожи различного назначения, кожевенной химии и фурнитуры.
              </p>
              <a href="tel:" className="btn btn-warning sm:btn-wide">Позвонить</a>
            </div>
          </div>
        </section>


      </div>
      <Services />

      <Preimushestva />

     
    </main>
  )
}
