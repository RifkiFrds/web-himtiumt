/* eslint-disable react/prop-types */
import { ShoppingCart, ExternalLink } from 'lucide-react';
import { Button } from '../../../components/ui/Button';

// Fungsi untuk format harga
const formatPrice = (price) => {
  return `Rp ${Number(price).toLocaleString('id-ID')}`;
};

const ProductCard = ({ item }) => {
  const priceRange = item.endPrice 
    ? `${formatPrice(item.startPrice)} - ${formatPrice(item.endPrice)}`
    : formatPrice(item.startPrice);

  return (
    <div className="group relative flex h-full flex-col overflow-hidden rounded-lg border border-gray-200 bg-white shadow-md transition-all duration-300 hover:shadow-xl">
      <div className="aspect-square overflow-hidden">
        <img
          src={item.businessImage[0]} // Menampilkan gambar pertama
          alt={item.title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>
      <div className="flex flex-1 flex-col space-y-2 p-4">
        <h3 className="text-lg font-bold text-gray-900">{item.title}</h3>
        <p className="text-sm text-gray-500 line-clamp-3">{item.description.split('\n')[0]}</p>
        <div className="flex flex-1 flex-col justify-end pt-4">
          <p className="text-base font-semibold text-gray-800">{priceRange}</p>
          <a href={item.url} target="_blank" rel="noopener noreferrer" className="mt-4 w-full">
            <Button className="w-full bg-yellow-500 hover:bg-yellow-600">
              <ShoppingCart className="mr-2 h-4 w-4" />
              Pesan Sekarang
            </Button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;