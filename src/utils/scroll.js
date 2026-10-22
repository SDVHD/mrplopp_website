/**
 * Scrollt sanft zu einer Section.
 * Wegen des Hash-Routers funktionieren Anker wie href="#contact" nicht —
 * sie würden als Route /contact interpretiert.
 */
export function scrollToSection(id) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
}
