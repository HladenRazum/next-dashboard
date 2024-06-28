import Example from '../components/Example';
import initTranslations from '../i18n';

export default async function Page({ params: { locale } }) {
  const { t } = await initTranslations(locale, ['test']);

  return (
    <main className="flex min-h-screen flex-col p-6">
      <h2>{t('welcome')}</h2>
      <Example />
    </main>
  );
}
