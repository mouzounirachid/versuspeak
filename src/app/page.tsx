import { VersusPeakApp } from '@/components/versuspeak-app';
import type { Metadata } from 'next';
export const metadata: Metadata = { alternates: { canonical: '/' } };
export default function Home() { return <VersusPeakApp />; }
