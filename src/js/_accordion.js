
export function accordionClick() {
    const target = event.target;
    const toggle = target.closest(
        'li[data-content-type="accordion-item"] > h3'
    );

    if (toggle) {
        const iBody = toggle.parentNode.querySelector('div[data-content="true"]');
        const iDetail = toggle.parentNode.querySelector('div[data-element="description"]');

        if (toggle.classList.contains("active")) {
            toggle.classList.remove("active");
            if (iBody) {
                iBody.style.height = "0px";
            }
        } else {
            document
                .querySelectorAll(
                    'li[data-content-type="accordion-item"] > h3.active'
                )
                .forEach((item) => {
                    item.classList.remove("active");
                    const _iBody = item.parentNode.querySelector('div[data-content="true"]');
                    _iBody.style.height = "0px";
                });
            toggle.classList.add("active");
            if (iBody) {
                iBody.style.height = iDetail.clientHeight + 'px';
            }
        }
    }
}
