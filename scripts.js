const randomThingsLink = document.getElementById('randomThingsLink');
createDropdown(randomThingsLink, [
    { text: 'Random Jokes', href: 'randomJokes.html' },
    { text: 'Cat Facts', href: 'catFacts.html' },
    { text: 'Dog Images', href: 'dogPictures.html' }
]);

const gamesLink = document.getElementById('gamesLink');
createDropdown(gamesLink, [
    { text: 'Simon Says', href: 'SimonSays.html' },
    { text: 'Candy Crush', href: 'CandyCrush.html' },
    { text: 'Fruit Slicer', href: 'FruitSlicer.html' },
    { text: 'Snake Bite', href: 'SnakeBite.html' }
]);

function createDropdown(parentLink, items, bgColor = '#4b4b4b') {
    parentLink.style.position = 'relative';
    parentLink.style.zIndex = '1000';

    const dropdown = document.createElement('div');
    dropdown.style.position = 'absolute';
    dropdown.style.top = '100%';
    dropdown.style.left = '0';
    dropdown.style.padding = '0';
    dropdown.style.display = 'none';
    dropdown.style.zIndex = '1000';
    dropdown.style.border = '1px solid #00E77F';
    dropdown.style.boxShadow = '0 2px 5px rgba(0, 0, 0, 0.15)';
    dropdown.style.backgroundColor = bgColor;

    items.forEach(item => {
        const dropdownItem = document.createElement('a');
        dropdownItem.textContent = item.text;
        dropdownItem.href = item.href;
        dropdownItem.style.display = 'block';
        dropdownItem.style.padding = '8px 16px';
        dropdownItem.style.color = '#aaa';
        dropdownItem.style.textDecoration = 'none';
        dropdownItem.style.margin = '0';
        dropdownItem.style.width = '100%';

        dropdownItem.onmouseover = () => (dropdownItem.style.backgroundColor = '#d3d3d3');
        dropdownItem.onmouseout = () => (dropdownItem.style.backgroundColor = bgColor);

        dropdown.appendChild(dropdownItem);
    });

    parentLink.appendChild(dropdown);

    parentLink.addEventListener('click', (e) => {
        e.preventDefault(); 
        dropdown.style.display = dropdown.style.display === 'none' ? 'block' : 'none';
    });

    dropdown.addEventListener('click', (e) => {
        
        e.stopPropagation();
    });

    document.addEventListener('click', (e) => {
        if (!parentLink.contains(e.target)) {
            dropdown.style.display = 'none';
        }
    });
}
