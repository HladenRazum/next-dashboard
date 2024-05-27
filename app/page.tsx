import AcmeLogo from '@/app/ui/acme-logo';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import Image from 'next/image';
import { lusitana } from './ui/fonts';
import Gallery from './ui/gallery/gallery';

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col p-6">
      <Gallery />
    </main>
  );
}
