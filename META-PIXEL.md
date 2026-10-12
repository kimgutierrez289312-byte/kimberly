# Meta Pixel — Kimberly Ali

Pixel: **2156349778651668**. Every public HTML page contains the supplied loader,
one `init`, one `PageView`, and the noscript image. `assets/site-nav.js` loads the
shared `assets/pixel-events.js` action tracker once. Never add a second base pixel.

## Event map

| Event | Trigger |
| --- | --- |
| PageView (standard) | Each page load |
| ViewContent (standard) | Flujo, Abundancia or Código page load |
| InitiateCheckout (standard) | Actual click on a pay.hotmart.com checkout link |
| CheckoutClick | The same checkout click, with placement and product ID |
| CTAClick | Internal CTA or offer-anchor click |
| NavigationClick | Header/footer navigation click |
| SocialClick | Instagram, TikTok or YouTube link click |
| LibraryOpen / PresentationOpen | Library or individual presentation link click |
| PresentationNavigate | Presentation next/previous control (also keyboard/swipe) |
| FAQOpen | A details disclosure is opened |
| ScrollDepth | 25%, 50%, 75%, 90% of scrollable page; once per load |
| VideoPlay / VideoResume / VideoPause | Actual native or YouTube player state |
| VideoProgress | 25%, 50%, 75%, 95% playhead position; once per video/load |
| VideoComplete | Player reports playback ended; once per video/load |

Scroll events are suppressed while Flujo's 60-second reveal is active. Video
progress indicates playhead position, not guaranteed continuous watch time.
The video API loads only on pages with YouTube embeds; progress polling runs only
during playback. Analytics never prevent navigation or change purchase destinations.

## Accurate revenue

US$7 is attached only to the confirmed Flujo checkout product `N105653151G`.
Other product checkouts do not receive an invented price. No `Purchase`, `Lead`,
`AddToCart` or `CompleteRegistration` event is fabricated on this static site.

**Hotmart is a separate installation.** Configure this same pixel in the Hotmart
product's tracking settings and verify successful-payment `Purchase` events there.
Do not inject website scripts into Hotmart or report clicks as completed sales.
If CAPI is enabled, align event IDs between browser/server to avoid double counting.

## Privacy and verification

Payloads contain only page paths (without query strings), coarse action placement,
public product/video IDs and progress percentages. No form values, names, contact
details or user-entered answers are collected. Existing browser/privacy controls
may block tracking; do not bypass them. Integrate a consent manager before expanding
the installation where advertising consent is required.

`window.kaPixelStatus` exposes small per-load event counts and connected video
player counts for diagnostics; counts show calls to `fbq`, not receipt by Meta.
Verify the pixel ID, PageView, ViewContent and action events in Meta Events Manager
Test Events / Pixel Helper. Confirm approved-payment Purchase separately in Hotmart.

References: [Meta conversion tracking](https://developers.facebook.com/docs/meta-pixel/implementation/conversion-tracking/),
[YouTube IFrame API](https://developers.google.com/youtube/iframe_api_reference).
