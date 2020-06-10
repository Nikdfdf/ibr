const selectOpttion = document.querySelector('.form-select__option');
const formSelect = document.querySelector('.form-select');
const selectItem = document.querySelectorAll('.form-select__item');

selectOpttion.addEventListener('click', () => {
    if (formSelect.classList.contains('active')) {
        formSelect.classList.remove('active');
        selectOpttion.classList.remove('active');
    }
    else {
        formSelect.classList.add('active');
        selectOpttion.classList.add('active');
    }
});

selectItem.forEach(item => {
    item.addEventListener('click', () => {
        text = item.innerText;
        selectOpttion.innerText = text;
        formSelect.classList.remove('active');
        selectOpttion.classList.remove('active');        
    });
});