import { Button } from "../../../components/ui/Button";
import { FaWhatsapp } from "react-icons/fa";

const CtaSection = () => {
  const admin1 = "6285210493501"; 
  const admin2 = "6281234567890"; 

  const createWhatsAppLink = (phone) => `https://wa.me/${phone}`;

  return (
    <section className="bg-yellow-400">
      <div className="max-w-4xl mx-auto text-center py-16 px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-black">
          Punya Pertanyaan Lebih Lanjut?
        </h2>
        <p className="mt-4 text-lg text-gray-800">
          Jangan ragu untuk menghubungi admin kami melalui WhatsApp.
        </p>
        <div className="mt-8 flex justify-center gap-4 flex-wrap">
          <a href={createWhatsAppLink(admin1)} target="_blank" rel="noopener noreferrer">
            <Button variant="secondary" size="lg">
              <FaWhatsapp className="mr-2" /> Hubungi Admin 1
            </Button>
          </a>
          <a href={createWhatsAppLink(admin2)} target="_blank" rel="noopener noreferrer">
            <Button variant="secondary" size="lg">
              <FaWhatsapp className="mr-2" /> Hubungi Admin 2
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;