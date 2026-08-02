import { portfolioItems } from '@/lib/projectsInfo';
import LenisWrapper from '@/components/LenisWrapper';
import { notFound } from 'next/navigation';
import PageWithLoader from '@/components/PageWithLoader';
import SpiderTerminal from '@/components/projectSections/SpiderTerminal';

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = portfolioItems.find((item) => item.slug === slug);
  if (!project) return notFound();

  return (
    <LenisWrapper>
      <main key={slug} className='min-h-dvh overflow-hidden w-screen relative bg-black'>
        <PageWithLoader>
          <SpiderTerminal project={project} />
        </PageWithLoader>
      </main>
    </LenisWrapper>
  );
}
