import type { Post } from '@/lib/blog';
import { BeforeAfter, CodeBlock } from '@/components/ps/prose';
import { Figure } from '@/components/ps/figure';

const IMAGES = '/blog/react-native-iphone-duo';
const PORTRAIT = '687/1000';
const LANDSCAPE = '1400/985';

function Body() {
  return (
    <>
      <h2>What changes on iPhone Duo</h2>
      <p>
        The Duo breaks three assumptions most React Native layouts quietly make: one screen
        size, a camera at the top centre, and equal insets on both sides.
      </p>
      <ul>
        <li>
          <strong>Two postures, one running app.</strong> Closed, the outer screen measured
          466 × 678 points in the simulator; opened, 951 × 669. The app is resized live as the
          device folds, so nothing measured at launch stays true.
        </li>
        <li>
          <strong>The camera sits in a corner.</strong> The status bar and pinhole camera run
          down the right edge, so the safe-area insets were top 0, right 84, bottom 34, left 0.
          Most iPhones put their inset on top.
        </li>
        <li>
          <strong>Insets are asymmetric.</strong> Apple warns that layout maths assuming left
          equals right gives the wrong size on Duo.
        </li>
        <li>
          <strong>The SDK you build with decides how much screen you get.</strong> Apps built
          with older Xcode versions do not extend beneath the status bar and camera, so build
          with Xcode 27.1.
        </li>
      </ul>
      <p>
        React Native has no fold API, and none of the new iOS 27.1 reserved-region APIs have
        JavaScript bindings yet. In practice you treat the Duo as a window that changes size
        and has an inset on one side.
      </p>

      <h2>Before and after</h2>
      <p>
        All screenshots are from BeerXchange on the iPhone Duo simulator (iOS 27.1, Xcode
        27.1).
      </p>
      <BeforeAfter
        before={`${IMAGES}/collection-closed-before.png`}
        after={`${IMAGES}/collection-closed-after.png`}
        alt="BeerXchange Collection screen on the closed iPhone Duo"
        ratio={PORTRAIT}
        caption={
          <>
            <strong>Collection, Duo closed.</strong> Before, the tab area was 298 points wide
            instead of 382 and prices were cut off. After, it fills the space beside the
            camera.
          </>
        }
      />
      <BeforeAfter
        before={`${IMAGES}/profile-closed-before.png`}
        after={`${IMAGES}/profile-closed-after.png`}
        alt="BeerXchange Profile screen on the closed iPhone Duo"
        ratio={PORTRAIT}
        caption={
          <>
            <strong>Profile, Duo closed.</strong> Before, every card was cut off on the left,
            starting mid-word. After, the banner, tabs and cards sit inside the safe area.
          </>
        }
      />
      <BeforeAfter
        before={`${IMAGES}/profile-open-before.png`}
        after={`${IMAGES}/profile-open-after.png`}
        alt="BeerXchange Profile screen on the open iPhone Duo"
        ratio={LANDSCAPE}
        layout="stack"
        caption={
          <>
            <strong>Profile, Duo open.</strong> Before, the header logo was clipped at the top
            and card text started mid-word. After, the logo fits the 32-point landscape header
            and the content reflows to 867 points.
          </>
        }
      />

      <h2>The fixes</h2>
      <p>Six changes did it on React Native 0.87.1: five in JavaScript, plus moving iPhone to the system tab bar.</p>

      <h3>1. Build with Xcode 27.1</h3>
      <p>
        No code changes were needed for the build itself: the app and its pods compiled
        cleanly against the iOS 27.1 SDK. The Duo simulator needs the iOS 27.1 runtime, so
        install it from Xcode › Settings › Components.
      </p>

      <h3>2. Read the window size at render time</h3>
      <p>
        Anything measured once at startup is wrong after the Duo folds. Swap module-level{' '}
        <code>Dimensions.get</code> for the <code>useWindowDimensions</code> hook.
      </p>
      <CodeBlock>{`
// Before: captured once, stale after a resize
const { width } = Dimensions.get('window')

// After: re-read on every render
const isTablet = useWindowDimensions().width >= 600
`}</CodeBlock>
      <p>
        Watch for libraries that do the same internally. The react-native-elements{' '}
        <code>Tile</code> defaults its width to the window width, which pushed our Profile
        screen 42 points past the camera inset. Pass the width you actually have, one side at
        a time:
      </p>
      <CodeBlock>{`
const { width } = useWindowDimensions()
const insets = useSafeAreaInsets()

<Tile featured width={width - insets.left - insets.right} … />
`}</CodeBlock>

      <h3>3. Don&rsquo;t nest provider-based SafeAreaViews</h3>
      <p>
        The <code>SafeAreaView</code> from react-native-safe-area-context pads by the nearest
        provider&rsquo;s full insets, not by how much the view actually overlaps the camera.
        Nest one inside another and the 84-point camera inset is applied twice; our Collection
        tabs shrank from 382 to 298 points. Use one safe-area container per screen (or set{' '}
        <code>edges</code>), and use plain views inside it.
      </p>

      <h3>4. Remount native pagers when their width changes</h3>
      <p>
        Top tabs (react-native-tab-view on react-native-pager-view) did not reliably re-lay out
        their pages after a resize, or when insets settled after the first layout. A small
        wrapper measures its container and remounts the navigator on a width change, reopening
        the tab that was showing:
      </p>
      <CodeBlock label="ResizeSafeTopTabs.tsx">{`
const ResizeSafeTopTabs = ({ navigator: Navigator, initialRouteName, children, ...props }) => {
  const [width, setWidth] = useState<number | null>(null)
  const focused = useRef(initialRouteName)

  return (
    <View
      style={{ flex: 1, alignSelf: 'stretch' }}
      onLayout={e => setWidth(Math.round(e.nativeEvent.layout.width))}
    >
      {width != null && (
        <Navigator
          key={width}
          initialRouteName={focused.current}
          screenListeners={({ route }) => ({ focus: () => { focused.current = route.name } })}
          {...props}
        >
          {children}
        </Navigator>
      )}
    </View>
  )
}
`}</CodeBlock>
      <p>
        <code>alignSelf: &apos;stretch&apos;</code> matters too: in a parent with{' '}
        <code>alignItems: &apos;center&apos;</code>, tab pages set an explicit width and would
        otherwise size the container to the full window.
      </p>

      <h3>5. Fit header content to the bar you get</h3>
      <p>
        React Navigation&rsquo;s stack header is 44 points tall on iPhone portrait but 32
        points in landscape, and the open Duo counts as landscape. Our 40-point logo overflowed
        the top of the screen. Size header items from the window shape, and take keyboard
        offsets from the measured header height rather than a hard-coded number:
      </p>
      <CodeBlock>{`
const { width, height } = useWindowDimensions()
const logoSize = width > height && !Platform.isPad ? 28 : 40

<KeyboardAvoidingView behavior="padding" keyboardVerticalOffset={useHeaderHeight()}>
`}</CodeBlock>

      <h3>6. Use the system tab bar so iOS can move it into the side column</h3>
      <p>
        On the closed Duo, iOS moves the status bar, toolbar buttons and tab bar into one column
        beside the camera, but only for bars that come from <code>UITabBarController</code>. A tab
        bar drawn in JavaScript stays at the bottom of the screen. React Navigation&rsquo;s native
        bottom tabs use <code>UITabBarController</code>, so switching to them on iPhone moved our
        tabs into the side column with no layout code of our own.
      </p>
      <BeforeAfter
        before={`${IMAGES}/tabs-closed-before.png`}
        after={`${IMAGES}/tabs-closed-after.png`}
        alt="BeerXchange Collection screen on the closed iPhone Duo"
        ratio={PORTRAIT}
        caption={
          <>
            <strong>Tabs, Duo closed.</strong> Before, the JavaScript tab bar sat along the bottom
            and took height from the list. After, the system tab bar sits in the side column below
            the camera, and the list runs the full height of the screen.
          </>
        }
      />
      <figure className="m-0">
        <Figure
          src={`${IMAGES}/tabs-open-after.png`}
          alt="BeerXchange Collection screen on the open iPhone Duo, with the tabs in the side column"
          ratio={LANDSCAPE}
          sizes="(min-width: 1024px) 740px, 100vw"
        />
        <figcaption className="mt-3 text-sm text-graphite-500">
          <strong>Tabs, Duo open.</strong> The open Duo counts as landscape, so the tabs stay in
          the side column there too.
        </figcaption>
      </figure>
      <CodeBlock label="routes.tsx">{`
import { createNativeBottomTabNavigator } from '@react-navigation/bottom-tabs/unstable'

const NativeTabs = createNativeBottomTabNavigator()

// iPhone (including Duo): system tab bar. iPad and Android: the existing JS tab bar.
if (Platform.OS === 'ios' && !Platform.isPad) {
  return (
    <NativeTabs.Navigator>
      <NativeTabs.Screen
        name="Collection"
        component={Collection}
        options={{ headerShown: false, tabBarIcon: { type: 'sfSymbol', name: 'list.bullet' } }}
      />
      {/* …one screen per tab */}
    </NativeTabs.Navigator>
  )
}
`}</CodeBlock>
      <p>What it took:</p>
      <ul>
        <li>
          <strong>Upgrades.</strong> react-native-screens 4.30.0 (the navigator&rsquo;s minimum)
          and React Navigation 7.21, then <code>pod install</code> and a native rebuild.
        </li>
        <li>
          <strong>SF Symbols for icons.</strong> Native tabs don&rsquo;t render React components as
          icons, so each tab names an SF Symbol.
        </li>
        <li>
          <strong>A one-line native fix.</strong> Launched while the Duo was open, the side
          column came up empty. react-native-screens PR #4990 fixes this by sizing the tab bar
          controller&rsquo;s view before attaching it. We applied it to 4.30.0 with
          patch-package until a release includes it.
        </li>
        <li>
          <strong>Pad each tab once by the window insets.</strong> Under the native tab bar, each
          screen&rsquo;s own safe-area measurement changed mid-transition, so lists re-laid out
          and dropped taps. We wrap every tab screen in a view padded by the window&rsquo;s left
          and right insets, and report zero side insets to everything inside it.
        </li>
        <li>
          <strong>Keep the JS tab bar on iPad.</strong> On iPad, UIKit puts the system tab bar at
          the top, where it covered our JS stack headers, and there is no API to put it back at
          the bottom. Android also keeps the JS tab bar.
        </li>
        <li>
          <strong>No control over order within the column.</strong> iOS keeps the tabs at the
          bottom of the side column, as on a regular iPhone, and offers no API to start them at
          the top.
        </li>
      </ul>

      <h2>Test checklist</h2>
      <p>
        Test every screen in each of these, and fold or rotate while the app is open, not only
        at launch.
      </p>
      <div className="overflow-x-auto">
        <table>
          <thead>
            <tr>
              <th>Device</th>
              <th>Size (points)</th>
              <th>What to look for</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>iPhone Duo, closed</td>
              <td>466 × 678, 84 pt right inset</td>
              <td>Tabs in the side column below the camera; nothing under it; no clipping on the left</td>
            </tr>
            <tr>
              <td>iPhone Duo, open</td>
              <td>951 × 669</td>
              <td>Side-column tabs appear after a cold launch while open; lists reflow; header items fit a 32 pt bar</td>
            </tr>
            <tr>
              <td>Regular iPhone (we used iPhone 18 Pro)</td>
              <td>402 × 874</td>
              <td>No doubled top padding under the header; keyboard clears text inputs</td>
            </tr>
            <tr>
              <td>iPad, portrait and landscape</td>
              <td>834 × 1210 / 1210 × 834</td>
              <td>Tab pages reflow after rotation</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>
        Two practical notes. Installing the iOS 27.1 runtime left the simulator service
        unresponsive for several minutes, stalling a build in progress. And logging{' '}
        <code>useSafeAreaInsets()</code> alongside a container&rsquo;s <code>onLayout</code>{' '}
        found the doubled inset in minutes, after screenshots alone had pointed us at the wrong
        cause.
      </p>

      <h2>Sources</h2>
      <ul>
        <li>
          <a
            href="https://developer.apple.com/videos/play/tech-talks/111461/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Prepare your app for iPhone Duo
          </a>
          , Apple Developer tech talk: postures, asymmetric safe areas, the Xcode 27.1
          requirement, testing in the simulator.
        </li>
        <li>
          <a
            href="https://www.infoq.com/news/2026/09/apple-iphone-duo-api/"
            target="_blank"
            rel="noopener noreferrer"
          >
            What iOS developers need to change in their apps to prepare for the iPhone Duo
          </a>
          , InfoQ, September 2026: reserved regions, size classes, standard bars.
        </li>
      </ul>
      <p>
        Measurements and screenshots are from our own tests of BeerXchange on the Xcode 27.1
        simulators.
      </p>
    </>
  );
}

const post: Post = {
  slug: 'react-native-iphone-duo',
  title: 'Making a React Native app ready for iPhone Duo',
  description:
    'Getting BeerXchange ready for iPhone Duo took one Xcode 27.1 build, five small layout fixes and a switch to the system tab bar so iOS can place the tabs in the Duo’s side column. What the Duo changes, the fixes with code, and a test checklist.',
  published: '2026-10-16',
  tags: ['React Native', 'iOS', 'iPhone Duo'],
  related: { label: 'Mobile app development', href: '/mobile' },
  image: `${IMAGES}/profile-open-after.png`,
  cardTitle: 'React Native on iPhone Duo.',
  Body
};

export default post;
