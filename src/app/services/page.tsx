import PageHeader from '@/components/layout/PageHeader';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Services from '@/components/home/Services';

export const dynamic = 'force-dynamic';

export default async function ServicesPage() {
  return (
    <main>
      <Header />
      <PageHeader 
        title="Our Services" 
        subtitle="Exclusive technology solutions tailored for your business needs."
      />
      
      {/* Reusing Home Services component but adding top padding to separate from header */}
      <div style={{ paddingTop: '6rem' }}>
        <Services />
      </div>

      <Footer />
    </main>
  );
}
