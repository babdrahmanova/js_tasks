
document.querySelectorAll('.accordion-button').forEach((e) => {
    e.addEventListener('click', () => {
        let content = e.nextElementSibling;
        if (content.style.maxheight) {
            document.querySelectorAll('.accordion-content').forEach((e) => e.style.maxHeight = null)
        } else {
            document.querySelectorAll('.accordion-content').forEach((e) => e.style.maxHeight = null)
            content.style.maxHeight = content.scrollHeight + 'px';
        }
    })
})