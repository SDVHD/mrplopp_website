/**
 * v-reveal directive
 * Animiert Elemente rein wenn sie den Viewport betreten.
 *
 * Usage:
 *   v-reveal                              → fade + slide up (default)
 *   v-reveal="{ delay: 150 }"            → mit Verzögerung (ms)
 *   v-reveal="{ direction: 'left' }"     → von rechts reinschieben
 *   v-reveal="{ direction: 'right' }"    → von links reinschieben
 *   v-reveal="{ direction: 'scale' }"    → scale + fade
 *   v-reveal="{ fade: true, delay: 300 }" → nur fade, kein transform
 */
export const vReveal = {
  mounted(el, binding) {
    const opts = binding.value || {}
    const delay = opts.delay ?? 0
    const distance = opts.distance ?? 30
    const fade = opts.fade ?? false
    const direction = opts.direction ?? 'up'

    const transforms = {
      up:    `translateY(${distance}px)`,
      down:  `translateY(-${distance}px)`,
      left:  `translateX(${distance}px)`,
      right: `translateX(-${distance}px)`,
      scale: `scale(0.92) translateY(${distance / 2}px)`,
    }

    // Setze Startzustand nach dem ersten Frame (verhindert FOUC)
    requestAnimationFrame(() => {
      el.style.opacity = '0'
      if (!fade) {
        el.style.transform = transforms[direction] ?? transforms.up
      }
      el.style.transition = fade
        ? `opacity 0.75s ease ${delay}ms`
        : `opacity 0.7s ease ${delay}ms, transform 0.7s cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms`
      el.style.willChange = 'opacity, transform'
    })

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          requestAnimationFrame(() => {
            el.style.opacity = '1'
            if (!fade) el.style.transform = 'none'
          })
          observer.unobserve(el)
        }
      },
      { threshold: 0.1 }
    )

    // Kleiner Timeout damit requestAnimationFrame oben zuerst läuft
    setTimeout(() => observer.observe(el), 60)
  },
}
