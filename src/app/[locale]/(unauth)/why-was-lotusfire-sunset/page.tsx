import { getTranslations, unstable_setRequestLocale } from 'next-intl/server';

import { Section } from '@/features/landing/Section';
import { Navbar } from '@/templates/Navbar';

export async function generateMetadata(props: { params: { locale: string } }) {
  const t = await getTranslations({
    locale: props.params.locale,
    namespace: 'Index',
  });

  return {
    title: t('meta_title'),
    description: t('meta_description'),
  };
}

const WhyWasLotusfireSunsetPage = (props: { params: { locale: string } }) => {
  unstable_setRequestLocale(props.params.locale);

  return (
    <>
      <Navbar />
      <Section className="py-4 md:py-12">
        <h1 className="mb-8 text-3xl font-bold">Why We Sunset Lotusfire</h1>
        <p className="mb-6">
          <strong className="font-semibold">The TL;DR:</strong>
          {' '}
          While we did build something useful, we ran out of time and runway, and pursuing different projects was a more appealing path than raising capital to work asynchronously.
        </p>
        <p className="mb-6">
          Lotusfire was the brainchild of two founders: Yinghan Gan (marketing & sales) and myself, Patrick Hamelin (coding & product). We officially stopped developing it in 2021 when life took us in new directions, though the platform ran for existing users until 2023.
        </p>

        <h2 className="mb-4 mt-8 text-2xl font-bold">Why We Started</h2>
        <p className="mb-6">
          To explain why we stopped, it’s important to first talk about why we started. In 2018, I was working at RhinoShield, a successful hard-tech startup in Taiwan. I joined as employee #11 and their first coder, quickly expanding into operations and e-commerce, building systems and teams to scale with the company. I thrived on the engineering challenges but felt something was missing.
        </p>
        <p className="mb-6">
          Around that time, I came across YC’s Startup School. Its mix of practicality and an engineering mindset captivated me—especially the concept of going from
          {' '}
          <em>zero to one</em>
          . At 28, with some savings and an itch to take a leap, I decided to quit my job and cofound a startup with my friend, Yinghan, who herself had had great success in marketing and operations. After talking with our respective spouses and looking at our finances, we gave ourselves two years to make it work before we moved to Canada.
        </p>

        <h2 className="mb-4 mt-8 text-2xl font-bold">Building and Pivoting</h2>
        <p className="mb-6">
          For the first few months we brainstormed and tested multiple ideas. Some, like a Taiwanese recruitment platform for developers, didn’t inspire us. Others, like a 360-degree mosquito detection camera, were too far ahead technologically. After structured evaluation, we landed on a problem I knew well: making advanced language learning easier, starting with Mandarin.
        </p>
        <p className="mb-6">
          We reached out to 500 Chinese language teachers in the U.S. and dozens of Mandarin learners, got feedback, and saw initial usage—but not enough usage to reasonably expect revenue. We learnt the market for advanced Chinese learners was small, scattered and hard to reach.
        </p>
        <p className="mb-6">
          So, we flipped the problem. Instead of teaching Mandarin, we focused on teaching English—a massive global market with strong demand from parents investing in their children’s futures.
        </p>
        <p className="mb-6">
          We built an app that let users engage with their regular content (like Facebook or Instagram) while learning words tailored to their interests and skill levels. The business model was simple: users could pay to remove ads shown when they interacted with words. This approach worked, and revenue grew at a respectable 4% weekly pace, but retention was very low, yet we knew other apps like Duolingo also had very high churn rates.
        </p>
        <p className="mb-6">
          We improved onboarding, notifications, and engagement, even reaching the top five education apps in Taiwan. But our efforts didn’t move the needle enough to make the business sustainable quickly enough.
        </p>
        <p className="mb-6">
          It was time for me to relocate to Canada for immigration requirements, and now we faced two obstacles:
        </p>
        <ol className="mb-6 list-inside list-decimal">
          <li>Overcoming the barriers of asynchronous work between Canada and Taiwan caused by the 12 hour time difference.</li>
          <li>Creating a new source of revenue: scaling to markets outside Taiwan or pivoting to a physical device concept we had prototyped.</li>
        </ol>
        <p className="mb-6">
          We calculated that while our growth rate showed promise, it would have taken two years to reach salaries comparable to working in established startups—and we needed funding to get there.
        </p>

        <h2 className="mb-4 mt-8 text-2xl font-bold">The Decision to Stop</h2>
        <p className="mb-6">
          Fundraising for asynchronous work didn’t appeal to me, especially when I was introduced to an exciting AI applications company (Botpress) in my time zone. Joining a talented team with VC backing was more aligned with my goals than grinding solo for another two years.
        </p>
        <p className="mb-6">
          Meanwhile, Yinghan kept up at language learning and built up a very succesful podcast for English learners.
        </p>

        <h2 className="mb-4 mt-8 text-2xl font-bold">Reflections</h2>
        <p className="mb-6">
          Lotusfire solved real problems for many users, but startups ultimately hinge on the people behind them. When it stopped being the right fit for our team, it was time to move on. In a parallel world, a startup called Toucan later raised funding for a Chrome extension resembling our app and sold it to Babbel—a lesson in not hesitating to raise capital when the time is right.
        </p>

        <h2 className="mb-4 mt-8 text-2xl font-bold">Lessons for Aspiring Founders</h2>
        <ol className="mb-6 list-inside list-decimal">
          <li className="mb-4">
            <strong className="font-semibold">Don’t quit your job so rashly.</strong>
            {' '}
            Ensure there’s a validated business need or early traction before leaving a stable income.
          </li>
          <li className="mb-4">
            <strong className="font-semibold">Be cautious with B2C.</strong>
            {' '}
            Consumer businesses can take years to gain traction, and validation is harder without large-scale tests.
          </li>
          <li className="mb-4">
            <strong className="font-semibold">Plan to seek funding.</strong>
            {' '}
            Bootstrapping can limit your ambitions and delay growth. Even if you decide against raising later, aim for ideas that meet a higher bar. You can always choose to not raise if things are going well.
          </li>
          <li className="mb-4">
            <strong className="font-semibold">Consider changing jobs first.</strong>
            {' '}
            Identify your ideal company, field, and position. Apply there and see how it compares to founding a startup. It’s often easier to get a dream job than to make a startup work, and you’ll still learn a lot in the process.
          </li>
        </ol>
        <p className="mb-6">
          Starting a company is equal parts exhilarating and humbling. I’m proud of what we built with Lotusfire, the people we helped, and the lessons it taught me, even if we ultimately decided to move away from it.
        </p>
        <p className="mt-6 font-bold">— Patrick Hamelin, Co-founder @ Lotusfire</p>
      </Section>
    </>
  );
};

export default WhyWasLotusfireSunsetPage;
