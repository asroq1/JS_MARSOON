const input = document.querySelector('.input');
const submit = document.querySelector('.submit');
const container = document.querySelector('.container');
const section = document.querySelector('section');

function addOn() {
    const text = input.value;
    if(text == ''){
        input.value = '';
        input.focus();
        alert('다시 입력해주세요.');
        return;
    }
    const feed = creatFeed(text);

    section.appendChild(feed);

    input.value = '';
    input.focus();
    feed.scrollIntoView({
        behavior: "smooth",
        block: "center"
    });
}

function creatFeed(text) {
    const feed = document.createElement('div');
    feed.setAttribute('class', 'feed');

    const memo = document.createElement('div');
    memo.setAttribute('class', 'memo');
    memo.innerText = text;

    const del = document.createElement('button');
    del.setAttribute('class', 'delete');
    del.innerHTML = '<i class="fas fa-trash-alt fa-2x"></i>';
    del.addEventListener('click', () => {
        feed.removeChild(memo);
        feed.removeChild(del);
    });

    feed.appendChild(memo);
    feed.appendChild(del);

    section.appendChild(feed);
    return feed;
}

submit.addEventListener('click', () => {
    addOn();
});