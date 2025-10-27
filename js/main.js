async function loadTaskData(taskNumber) {
  const response = await fetch(`../data/rus/task${taskNumber}.json`);
  const data = await response.json();

  const container = document.getElementById('task-content');
  container.innerHTML = `
    <h3>${data.title}</h3>
    <p>${data.description}</p>
    ${data.types.map(t => `
      <div class="task">
        <p><b>${t.question}</b></p>
        ${t.options.map(o => `
          <label>
            <input type="radio" name="q${t.id}" value="${o}"> ${o}
          </label><br>
        `).join('')}
      </div>
    `).join('')}
  `;
}