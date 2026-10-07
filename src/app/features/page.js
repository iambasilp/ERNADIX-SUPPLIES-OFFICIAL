import FeaturesPageHeader from '@/components/FeaturesPageHeader';
import FeaturesPageFeatures from '@/components/FeaturesPageFeatures';
import Quality from '@/components/Quality';
import WhyChooseUs from '@/components/WhyChooseUs';
import FeaturesOurFaqsSection from '@/components/FeaturesOurFaqsSection';
import Comforts from '@/components/Comforts';

export default function Page() {
  return (
    <main>
      <FeaturesPageHeader />

    <FeaturesPageFeatures />

    <Quality />

    <WhyChooseUs />

    <FeaturesOurFaqsSection />

    <Comforts />
    </main>
  );
}
