# Launch Migration Checklist

## Goal

Preserve organic traffic and local visibility while replacing the current WordPress site on `https://www.econstructinc.com` with the new Next.js frontend.

## Keep Stable at Launch

- Keep the current domain unchanged: `www.econstructinc.com`
- Keep high-value slugs unchanged wherever possible:
  - `/`
  - `/about-us/`
  - `/architectural-design/`
  - `/commercial-construction-los-angeles/`
  - `/los-angeles-residential-construction-services/`
  - `/restaurant-construction-services/`
  - `/retail-construction-los-angeles/`
  - `/turn-key-build-outs-la/`
  - core blog post slugs
  - case study slugs
- Keep one consistent NAP everywhere:
  - Name: `econstruct Inc.`
  - Address: `25350 Magic Mountain Pkwy, Suite 300, Valencia, CA 91355`
  - Phone: confirm whether `310.740.9999` or `888.990.0303` is the official launch number, then use only one across site, GBP, and citations

## Before Launch

1. Crawl the current WordPress site and export every indexable URL.
2. Build a one-to-one redirect map for any URL not preserved exactly.
3. Verify Search Console access for the live property.
4. Verify Google Business Profile access and confirm primary category, address, phone, hours, and website URL.
5. Export current title tags, meta descriptions, and top-performing pages from Search Console and GA4 if available.
6. Confirm canonical hostname strategy: `https://www.econstructinc.com/`

## Launch-Day Technical Checks

1. Deploy the Next.js site with redirects enabled.
2. Confirm `200` on preserved URLs.
3. Confirm `301` on changed URLs, with no redirect chains.
4. Submit the new sitemap in Search Console.
5. Check `robots.txt`, canonical tags, metadata, and structured data on key pages.
6. Spot-check mobile rendering and Core Web Vitals candidates.

## Local SEO Priorities

- Keep the business data on the site aligned with Google Business Profile.
- Use the site to support local relevance in:
  - Los Angeles
  - Beverly Hills
  - Santa Monica
  - Brentwood
  - Pacific Palisades
  - Calabasas
  - West Hollywood
  - Hollywood Hills
  - San Fernando Valley
- Grow with unique geo pages backed by real project proof, not thin keyword pages.
- Continue collecting reviews and replying to them from the business profile.

## Content Priorities After Launch

- Add more real case studies with neighborhood context.
- Publish additional high-intent posts around residential cost, permitting, and hospitality build-outs.
- Expand service pages with stronger project photography and proof modules.
- Add citation cleanup and business directory consistency work outside the codebase.

## First 30 Days After Launch

1. Monitor Search Console for crawl errors and coverage changes.
2. Compare clicks, impressions, and top landing pages against the pre-launch baseline.
3. Watch for redirect misses in server logs or analytics landing pages.
4. Check Google Business Profile clicks and call activity.
5. Add any missed legacy URLs to the redirect map quickly.
