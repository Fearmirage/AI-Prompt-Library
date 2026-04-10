fetch('prompts.json')
    .then(response => response.json())
    .then(data => {

        const list = document.getElementById('prompt-list');

        data.forEach(prompt => {
            const li = document.createElement('li');
            li.innerHTML = `
                <b>${prompt.title}</b><br>
                <i>${prompt.category}</i><br>
                ${prompt.prompt}
                `;
            list.appendChild(li);
        });

    })
    .catch(error => {
        console.error('Error loading JSON:', error);
    });