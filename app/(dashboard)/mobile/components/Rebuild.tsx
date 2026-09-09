import { Band } from '@/components/ps/band';
import { SectionHeader } from '@/components/ps/section-header';
import { Lattice, LatticeCell } from '@/components/ps/lattice';
import { Sparkles, Trash2, Lock, WifiOff, Store, Gauge } from 'lucide-react';

const gaps = [
  {
    area: 'Navigation',
    prototype: 'Screens wired together ad hoc; the back button loses your place',
    rebuilt: 'A typed navigation graph with deep links and restored state'
  },
  {
    area: 'Data layer',
    prototype: 'Every component fetches for itself — no cache, spinners everywhere',
    rebuilt: 'One client with caching, retries, and optimistic updates'
  },
  {
    area: 'Auth and secrets',
    prototype: 'Keys shipped inside the bundle, tokens in plain storage',
    rebuilt: 'Real session handling, tokens in the device keychain, silent refresh'
  },
  {
    area: 'Bad networks',
    prototype: 'Assumes the request always succeeds',
    rebuilt: 'Queued writes, cached reads, and honest offline states'
  },
  {
    area: 'Store readiness',
    prototype: 'Cannot be submitted — no signing, permissions, or privacy strings',
    rebuilt: 'Signed builds, entitlements, privacy manifests, review-ready'
  },
  {
    area: 'When it breaks',
    prototype: 'You find out from a one-star review',
    rebuilt: 'Crash reporting and release health, per build, per version'
  }
];

const decisions = [
  {
    index: '01',
    icon: Sparkles,
    title: 'What I keep',
    body: 'Everything you learned. The screens, the flows, the copy, the ordering of steps, the features users actually touched. A prototype that has been in front of real people is the most detailed product spec you will ever get, and it is yours already.'
  },
  {
    index: '02',
    icon: Trash2,
    title: 'What I do not keep',
    body: 'The code. Generated app code is optimised for producing a convincing demo on the first try, not for being changed fifty times. Rewriting it against a known-good spec is faster and cheaper than untangling it.'
  },
  {
    index: '03',
    icon: Gauge,
    title: 'It has to stay smooth at 60fps',
    body: 'Long lists get virtualised, images get sized and cached, and animations run on the native thread. Jank that is invisible in a browser preview is the first thing a user feels.'
  },
  {
    index: '04',
    icon: Lock,
    title: 'The bundle is public',
    body: 'Anyone can unzip a shipped app. Keys move to the server, privileged calls move behind your API, and the client stops being trusted with anything it should not know.'
  },
  {
    index: '05',
    icon: WifiOff,
    title: 'The network is not a given',
    body: 'Elevators, basements, planes and rural coverage are normal operating conditions. Reads come from cache, writes queue and reconcile, and the UI says what is happening instead of hanging.'
  },
  {
    index: '06',
    icon: Store,
    title: 'Two reviewers stand between you and users',
    body: 'Apple and Google reject for permission strings, account deletion, data disclosures and login requirements. I handle submission and the first round of review notes as part of the build.'
  }
];

export function Rebuild() {
  return (
    <Band id="rebuild" className="scroll-mt-8 py-16 md:py-20">
      <SectionHeader label="Prototype to product" />
      <div className="mt-10 max-w-[68ch]">
        <h2 className="text-h2">From vibe-coded prototype to a real React Native app</h2>
        <p className="mt-3.5 text-graphite-500">
          The gap between an app that demos well and an app that holds up in the stores is not
          visual polish. It is everything underneath the screens.
        </p>
      </div>

      <div className="mt-10 overflow-x-auto border border-rule">
        <div className="min-w-[640px]">
          <div className="ps-label grid grid-cols-12 gap-4 bg-sunk px-6 py-4 text-graphite-500">
            <div className="col-span-3">Area</div>
            <div className="col-span-5">In the prototype</div>
            <div className="col-span-4 text-signal-700">After the rebuild</div>
          </div>
          {gaps.map((row) => (
            <div
              key={row.area}
              className="grid grid-cols-12 items-baseline gap-4 border-t border-rule px-6 py-5"
            >
              <div className="col-span-3 font-semibold">{row.area}</div>
              <div className="col-span-5 text-graphite-500">{row.prototype}</div>
              <div className="col-span-4 text-signal-700">{row.rebuilt}</div>
            </div>
          ))}
        </div>
      </div>

      <Lattice className="mt-10 md:grid-cols-2 lg:grid-cols-3">
        {decisions.map((item) => (
          <LatticeCell key={item.index} index={item.index} icon={item.icon} title={item.title}>
            {item.body}
          </LatticeCell>
        ))}
      </Lattice>
    </Band>
  );
}
