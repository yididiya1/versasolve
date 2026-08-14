import { SERVICES, serviceSchema } from '@/lib/siteData'

/**
 * The full Service catalog, for the homepage only.
 *
 * Each /services/* page emits its own node for that one service via serviceSchema(), using
 * the same @id. Rendering this component on a service page too would put that @id in the
 * document twice, so it stays on the homepage, which is the one page that presents all
 * five services and has no per-service node of its own.
 */
export default function ServiceCatalog() {
  const json = {
    '@context': 'https://schema.org',
    '@graph': SERVICES.map((s) => serviceSchema(s.key)),
  }
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(json) }} />
}
