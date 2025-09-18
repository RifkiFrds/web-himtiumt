import { useKlinik } from '../hooks/useKlinik';
import LoadingStatus from '../../../components/LoadingStatus';
import ErrorStatus from '../../../components/ErrorStatus';
import HeroSection from '../components/HeroSection';
import ServiceSection from '../components/ServiceSection';
import MerchandiseSection from '../components/MerchandiseSection';
import CtaSection from '../components/CtaSection';

const KlinikPage = () => {
  const { loading, error, merchandise, fetchData } = useKlinik();

  if (loading) {
    return <LoadingStatus message="Memuat halaman Klinik..." />;
  }

  if (error) {
    return <ErrorStatus message={error} onRetry={fetchData} />;
  }

  return (
    <div>
      <HeroSection />
      <MerchandiseSection merchandise={merchandise} />
      <ServiceSection />
      <CtaSection />
    </div>
  );
};

export default KlinikPage;