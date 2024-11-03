
const button = document.querySelector('.word-counter');
const input = document.querySelector('.input-value');

button.addEventListener('click', () => {
    let text = input.value;
    let counter = 0;
    const vowels = ['a','e','i','o','u'];

    for(let i = 0; i < text.length; i++) {
        if(vowels.includes(text.charAt(i).toLowerCase())) {
            counter++;
        }
    }

    alert(`There are ${counter} vowels in the text`);
})