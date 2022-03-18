// Progress bars

const ratio = 0.1
const options = {
    root: null,
    rootMargin: '0px',
    threshold: ratio
}

const handleIntersect = function (entries, observer) {
    entries.forEach(function (entry) {
        if (entry.intersectionRatio > ratio) {
            entry.target.classList.add($(document).ready(function () {
                $('.progress .progress-bar').css("width",
                    function () {
                        return $(this).attr("aria-valuenow") + "%";
                    }
                )
            }))
            observer.unobserve(entry.target)
        }
    })
}

const observer = new IntersectionObserver(handleIntersect, options)
observer.observe(document.querySelector('.progress'))

const Intersect = function (entries, observer) {
    entries.forEach(function (entry) {
        if (entry.intersectionRatio > ratio) {
            entry.target.classList.add('reveal-visible')
            observer.unobserve(entry.target)
        }
    })
}

const observ = new IntersectionObserver(Intersect, options)
document.querySelectorAll('[class*="reveal-"]').forEach(function (r) {
    observ.observe(r)
})

const titlecheck = function (entries, observer) {
    entries.forEach(function (entry) {
        if (entry.intersectionRatio > ratio) {
            entry.target.classList.add('title-visible')
            observer.unobserve(entry.target)
        }
    })
}
const ckeck = new IntersectionObserver(titlecheck, options)
ckeck.observe(document.querySelector('.titlereveal'))
