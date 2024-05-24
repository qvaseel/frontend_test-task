import Head from 'next/head';
import Form from '@/components/Form/Form';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Авторизация"
};

export default function Auth() {
  return (
    <div>
      <Head>
        <title>Авторизация</title>
      </Head>
      <div className="flex justify-center items-center min-h-screen bg-slate-100">
        <div className="absolute inset-0 flex flex-col">
          <div className="h-2/5 bg-slate-800"></div>
        </div>
        <div className="relative flex justify-center items-center min-h-screen">
          <Form />
        </div>
      </div>
    </div>
  );
}
