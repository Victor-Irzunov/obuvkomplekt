"use client"
import Image from "next/image";
import Modal from "../modal/Modal";
import { useState } from "react";
import CTA from "../CTA/CTA";


export default function Catalog() {
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleOrderClick = (product) => {
    setSelectedProduct(product);
    document.getElementById("my_modal_3").showModal();
  };
  return (
    <>
      <section className='py-10 md:py-16 bg-neutral' id="catalog">
        <div className='container mx-auto'>
          <div className='text-center text-white'>
            <h3 className='text-3xl sm:text-5xl font-bold mb-4'>
              Каталог товаров
            </h3>
            <p className='text-base sm:text-xl mb-6 md:mb-14'>
              Добро пожаловать в наш каталог товаров! Здесь представлен широкий ассортимент натуральной кожи, кожевенной химии и фурнитуры для пошива кожгалантереи и кожаной обуви.
            </p>
          </div>

          <div className='flex flex-wrap justify-center'>
            <div className="card card-compact w-96 bg-base-100 shadow-xl mb-8 lg:mb-10 sd:mx-2 xz:mx-0">
              <figure><Image src="/catalog/1.webp" alt="Натуральная кожа" width={480} height={480} /></figure>
              <div className="card-body">
                <h4 className="card-title">Натуральная кожа</h4>
                <p>Вороток , замша, нубук, велюр, пола, чепрак, подкладочная, одежная, галантерейная, обувная, ременная</p>
                <div className="card-actions justify-end">
                  <button className="btn btn-primary" onClick={() => handleOrderClick("Натуральная кожа")}>
                    Заказать
                  </button>
                </div>
              </div>
            </div>

            <div className="card card-compact w-96 bg-base-100 shadow-xl mb-8 lg:mb-10 sd:mx-2 xz:mx-0">
              <figure><Image src="/catalog/2.webp" alt="Клей" width={480} height={480} /></figure>
              <div className="card-body">
                <h4 className="card-title">Клей</h4>
                <p>
                  Резиновый, наиритовый (хлоропреновый), полиуретановый, растворители
                </p>
                <div className="card-actions justify-end">
                  <button className="btn btn-primary" onClick={() => handleOrderClick("Клей")}>Заказать</button>
                </div>
              </div>
            </div>

            <div className="card card-compact w-96 bg-base-100 shadow-xl mb-8 lg:mb-10 sd:mx-2 xz:mx-0">
              <figure><Image src="/catalog/3.webp" alt="Натуральная кожа" width={480} height={480} /></figure>
              <div className="card-body">
                <h4 className="card-title">
                  Средства
                </h4>
                <p>
                  Краски, крема, воск, химия, жидкая кожа
                </p>
                <div className="card-actions justify-end">
                  <button className="btn btn-primary" onClick={() => handleOrderClick("Средства")}>Заказать</button>
                </div>
              </div>
            </div>

            <div className="card card-compact w-96 bg-base-100 shadow-xl mb-8 lg:mb-10  sd:mx-2 xz:mx-0">
              <figure><Image src="/catalog/4.webp" alt="Подошва" width={480} height={480} /></figure>
              <div className="card-body">
                <h4 className="card-title">
                  Подошва
                </h4>
                <p>
                  Мужская, женская
                </p>
                <div className="card-actions justify-end">
                  <button className="btn btn-primary"  onClick={() => handleOrderClick("Подошва")}>Заказать</button>
                </div>
              </div>
            </div>

            <div className="card card-compact w-96 bg-base-100 shadow-xl mb-8 lg:mb-10  sd:mx-2 xz:mx-0">
              <figure><Image src="/catalog/5.webp" alt=" Сумочная фурнитура" width={480} height={480} /></figure>
              <div className="card-body">
                <h4 className="card-title">
                  Сумочная фурнитура
                </h4>
                <p></p>
                <div className="card-actions justify-end">
                  <button className="btn btn-primary" onClick={() => handleOrderClick("Сумочная фурнитура")}>Заказать</button>
                </div>
              </div>
            </div>

            <div className="card card-compact w-96 bg-base-100 shadow-xl mb-8 lg:mb-10  sd:mx-2 xz:mx-0">
              <figure><Image src="/catalog/6.webp" alt="Нитки" width={480} height={480} /></figure>
              <div className="card-body">
                <h4 className="card-title">
                  Нитки
                </h4>
                <p>
                  Машинные, прошивные
                </p>
                <div className="card-actions justify-end">
                  <button className="btn btn-primary" onClick={() => handleOrderClick("Нитки")}>Заказать</button>
                </div>
              </div>
            </div>


            <div className="card card-compact w-96 bg-base-100 shadow-xl mb-8 lg:mb-10  sd:mx-2 xz:mx-0">
              <figure><Image src="/catalog/7.webp" alt="Молнии, Бегунки" width={480} height={480} /></figure>
              <div className="card-body">
                <h4 className="card-title">
                  Молнии, Бегунки
                </h4>
                <p> </p>
                <div className="card-actions justify-end">
                  <button className="btn btn-primary" onClick={() => handleOrderClick("Молнии, Бегунки")}>Заказать</button>
                </div>
              </div>
            </div>

            <div className="card card-compact w-96 bg-base-100 shadow-xl mb-8 lg:mb-10  sd:mx-2 xz:mx-0">
              <figure><Image src="/catalog/8.webp" alt=" Материалы для ремонта обуви" width={480} height={480} /></figure>
              <div className="card-body">
                <h4 className="card-title">
                  Материалы для ремонта обуви
                </h4>
                <p>
                  Формовочный, листовой, набоечный материал, картон
                </p>
                <div className="card-actions justify-end">
                  <button className="btn btn-primary" onClick={() => handleOrderClick("Материалы для ремонта обуви")}>Заказать</button>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      <CTA handleOrderClick={handleOrderClick} />
      <Modal selectedProduct={selectedProduct}  />
    </>
  )
}