import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import PageHeader from '@/components/layout/PageHeader';
import styles from '@/components/layout/Legal.module.css';
import { getLegalPages } from '@/lib/db';
import MarkdownView from '@/components/common/MarkdownView';

export default function TermsOfService() {
  const pages = getLegalPages();
  const page = pages.find((p: any) => p.slug === 'terms-of-service') || { title: 'Terms of Service', content: 'Content not found.' };

  return (
    <main>
      <Header />
      <PageHeader title={page.title} subtitle="Agreement for IT Services" />
      
      <div className="container">
        <div className={styles.legalContainer}>
           <p className={styles.lastUpdated}>Last Updated: {new Date(page.last_updated).toLocaleDateString()}</p>
           <MarkdownView content={page.content || "No content defined yet."} />
        </div>
      </div>

      <Footer />
    </main>
  );
}
