const list = document.getElementById('prompt-list');
const form = document.getElementById('prompt-form');

function AddPromptToList(prompt) {
  const li = document.createElement('li');

  li.innerHTML = `
    <b>${prompt.title}</b><br>
    <i>${prompt.category}</i><br>
    ${prompt.prompt}
  `;

  list.appendChild(li);
}

fetch('prompts.json')
    .then(response => response.json())
    .then(data => {

        data.forEach(prompt => {
            AddPromptToList(prompt)
        });

    })
    .catch(error => {
        console.error('Error loading JSON:', error);
    });

form.addEventListener('submit', function (event) {
  event.preventDefault();

  const NewPrompt = {
    title: document.getElementById('title').value,
    category: document.getElementById('category').value,
    prompt: document.getElementById('content').value
  };

  AddPromptToList(NewPrompt);

  form.reset();
});