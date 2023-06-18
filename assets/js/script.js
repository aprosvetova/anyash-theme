// Gallery ratio fix
const images = document.querySelectorAll('.kg-gallery-image img')
images.forEach(image => {
    const container = image.closest('.kg-gallery-image')
    const width = image.attributes.width.value
    const height = image.attributes.height.value
    const ratio = width / height
    container.style.flex = ratio + ' 1 0%'
})

// Tags displayed with hyphens
const tags = document.querySelectorAll('.post-tag')
tags.forEach(tag => {
    tag.textContent = tag.textContent.replaceAll(' ', '-')
})