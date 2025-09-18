/* eslint-disable react/prop-types */
import ProductCard from "./ProductCard";

const MerchandiseSection = ({ merchandise }) => {
  return (
    <section id="merchandise" className="bg-gray-100 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900">HIMTI Merchandise</h2>
          <p className="mt-4 text-lg text-gray-600">
            Tunjukkan gayamu dengan merchandise eksklusif dari HIMTI!
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
          {merchandise.map((item) => (
            <ProductCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default MerchandiseSection;