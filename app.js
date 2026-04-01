fetch('prompts.json')
    .then(response => response.json())
    .then(data => {

        //console.log(data);
        data.forEach(prompt => {
            console.log(prompt.title);
        });

    })
    .catch(error => {
        console.error('Error loading JSON:', error);
    });