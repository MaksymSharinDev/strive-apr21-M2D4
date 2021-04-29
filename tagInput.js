
const loadTagInput = ()=> {
    let tags = [];
    let $container = document.querySelector('.tag-field');
    let $input = document.querySelector('.js-tag-input');
    let $tags = document.querySelector('.js-tags');

    $container.addEventListener('click', function () {
        $input.focus();
    });

    $container.addEventListener('keydown', function (evt) {
        if (!evt.target.matches('.js-tag-input')) {
            return;
        }

        if (evt.keyCode !== 13) {
            return;
        }

        let value = String(evt.target.value);

        if (!value.length || value.length > 20 || tags.length === 20) {
            return;
        }

        tags.push(evt.target.value);
        $input.value = '';
        render(tags, $tags);
    });

    $container.addEventListener('keydown', function (evt) {
        if (!evt.target.matches('.js-tag-input')) {
            return;
        }

        if (evt.keyCode !== 8) {
            return;
        }

        if (String(evt.target.value).length) {
            return;
        }

        tags = tags.slice(0, tags.length - 1);
        $input.value = '';
        render(tags, $tags);
    });

    $container.addEventListener('click', function (evt) {
        if (evt.target.matches('.js-tag-close') || evt.target.matches('.js-tag')) {
            tags = tags.filter(function (tag, i) {
                return i != evt.target.getAttribute('data-index');
            });
            render(tags, $tags);
        }
    }, true);


    function render(tags, el) {
        el.innerHTML = tags.map(function (tag, i) {
            return (
                '<div class="tag js-tag" data-index="' + i + '">' +
                tag +
                '<span class="tag-close js-tag-close" data-index="' + i + '">×</span>' +
                '</div>'
            );
        }).join('') + (tags.length === 20 ? '' : '<input placeholder="Enter new tag..." class="js-tag-input">')
        ;

        $container.querySelector('.js-tag-input').focus();
        $("#textInput").css("width", "100%")

    }
}