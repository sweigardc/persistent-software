import { Band } from '@/components/ps/band';
import { SectionHeader } from '@/components/ps/section-header';
import { Lattice, LatticeCell } from '@/components/ps/lattice';
import { Smartphone, TestTube2, Layers, Bell, RefreshCw, LineChart } from 'lucide-react';

const phases = [
  {
    week: 'Week 1',
    title: 'Pin down what the app actually is',
    body: 'I go through your prototype or your requirements screen by screen and write down the behaviour — including the parts that only exist in someone’s head. That document is what I build against, and it is yours whether or not we continue.'
  },
  {
    week: 'Weeks 2–3',
    title: 'Foundation before features',
    body: 'Navigation, data layer, auth, theming and the build pipeline land first. Both stores get a signed internal build in the first two weeks, so distribution is never the thing that surprises you at the end.'
  },
  {
    week: 'Weeks 3–7',
    title: 'Build the screens for real',
    body: 'Features ship in vertical slices — a real screen against real data on a real device, not a mock. You get a new TestFlight and Play internal build every week and can use the app while it is being built.'
  },
  {
    week: 'Weeks 6–8',
    title: 'Make it survive the real world',
    body: 'Slow networks, small screens, large fonts, permission denials, expired sessions and low-end Android hardware. This is where most of the difference between a prototype and a product gets earned.'
  },
  {
    week: 'Weeks 8–10',
    title: 'Submit, review, launch',
    body: 'Store listings, screenshots, privacy disclosures and account-deletion requirements handled for you. I drive the review process and turn around the reviewer’s notes rather than handing you a checklist.'
  }
];

const principles = [
  {
    index: '01',
    icon: Smartphone,
    title: 'Test on the phones your users own',
    body: 'A simulator on a fast laptop hides everything. I test on real devices, including the three-year-old mid-range Android a large share of your users are actually holding.'
  },
  {
    index: '02',
    icon: Layers,
    title: 'Native where it matters',
    body: 'React Native covers the vast majority of an app. Camera, biometrics, background location and hardware integrations get native modules when the ecosystem does not already have a good one.'
  },
  {
    index: '03',
    icon: TestTube2,
    title: 'Tests on the paths that cost money',
    body: 'Checkout, login and sync get end-to-end coverage on both platforms. I do not chase a coverage percentage on screens whose worst failure is a misaligned label.'
  },
  {
    index: '04',
    icon: RefreshCw,
    title: 'Ship without waiting on review',
    body: 'Over-the-air updates push JavaScript fixes to users in minutes, with store submissions reserved for native changes. A typo does not cost you a three-day review cycle.'
  },
  {
    index: '05',
    icon: Bell,
    title: 'Notifications with a reason to exist',
    body: 'Push is the strongest retention tool a mobile app has and the fastest way to get uninstalled. Segmentation, quiet hours and per-category preferences are designed in from the start.'
  },
  {
    index: '06',
    icon: LineChart,
    title: 'Know what happens after launch',
    body: 'Crash reporting, release health and product analytics are wired up before the first submission, so week one is spent reading real numbers instead of guessing.'
  }
];

export function Approach() {
  return (
    <Band className="pt-0 pb-16 md:pt-0 md:pb-20">
      <SectionHeader label="How a build runs" />
      <div className="mt-10 max-w-[68ch]">
        <h2 className="text-h2">A signed build on your phone in two weeks</h2>
        <p className="mt-3.5 text-graphite-500">
          You get a new one every week after that. Nothing about the timeline depends on you
          trusting a status update.
        </p>
      </div>

      <ul className="mt-10 border-t border-rule">
        {phases.map((phase) => (
          <li
            key={phase.title}
            className="grid gap-2 border-b border-rule py-6 md:grid-cols-12 md:gap-8"
          >
            <div className="md:col-span-3">
              <span className="ps-label text-signal-700">{phase.week}</span>
            </div>
            <div className="md:col-span-9">
              <h3 className="text-h4">{phase.title}</h3>
              <p className="mt-1.5 max-w-[68ch] text-graphite-500">{phase.body}</p>
            </div>
          </li>
        ))}
      </ul>

      <Lattice className="mt-12 md:grid-cols-2 lg:grid-cols-3">
        {principles.map((principle) => (
          <LatticeCell
            key={principle.index}
            index={principle.index}
            icon={principle.icon}
            title={principle.title}
          >
            {principle.body}
          </LatticeCell>
        ))}
      </Lattice>

      <p className="mt-8 max-w-[68ch] text-sm text-graphite-500">
        Timelines above describe a typical single-product build. A white-label launch on an
        existing foundation is considerably shorter; an app with heavy hardware or offline
        requirements runs longer. I scope yours before quoting it.
      </p>
    </Band>
  );
}
