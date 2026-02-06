var mm = gsap.matchMedia()

mm.add("(max-width: 768px)", function () {
    var tl = gsap.timeline()

    tl.from("#nav h3", {
        y: -20,
        opacity: 0,
        delay: 0.2,
        duration: 0.5,
        stagger: 0.15
    })

    tl.from("#main h1", {
        x: -120,
        opacity: 0,
        duration: 0.6,
        stagger: 0.2
    })

    tl.from("img", {
        x: 40,
        rotate: 20,
        opacity: 0,
        duration: 0.4,
        stagger: 0.25
    })
})

mm.add("(min-width: 769px)", function () {
    var tl = gsap.timeline()

    tl.from("#nav h3", {
        y: -50,
        opacity: 0,
        delay: 0.4,
        duration: 0.7,
        stagger: 0.3
    })

    tl.from("#main h1", {
        x: -500,
        opacity: 0,
        duration: 0.8,
        stagger: 0.4
    })

    tl.from("img", {
        x: 100,
        rotate: 45,
        opacity: 0,
        duration: 0.5,
        stagger: 0.5
    })
})
