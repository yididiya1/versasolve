/**
 * Obsolete commerce URL from a previous incarnation of this domain.
 *
 * Returns 410 Gone rather than redirecting: there is no consulting equivalent of a
 * product page, so redirecting would send crawlers (and anyone following a stale link)
 * to something unrelated. 410 tells search engines the URL is intentionally dead and
 * should be dropped from the index, which 404 does not communicate as decisively.
 */
export function GET() {
  return new Response('410 Gone. This product page no longer exists.', {
    status: 410,
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'X-Robots-Tag': 'noindex',
    },
  })
}
