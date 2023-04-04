

function addTodo() {
    axios
      .post('https://crudcrud.com/api/6477b419a0584261975fe7bbe5eae32d/appointmentData', {
        name: "mahi",
        email: "mahi@gmail.com"
      })
      .then(res => showOutput(res))
      .catch(err => console.error(err));
  }




function showOutput(res) {
    document.getElementById('res').innerHTML = `
    <div class="card card-body mb-4">
      <h5>Status: ${res.status}</h5>
    </div>
    <div class="card mt-3">
      <div class="card-header">
        Headers
      </div>
      <div class="card-body">
        <pre>${JSON.stringify(res.headers, null, 2)}</pre>
      </div>
    </div>
    <div class="card mt-3">
      <div class="card-header">
        Data
      </div>
      <div class="card-body">
        <pre>${JSON.stringify(res.data, null, 2)}</pre>
      </div>
    </div>
    <div class="card mt-3">
      <div class="card-header">
        Config
      </div>
      <div class="card-body">
        <pre>${JSON.stringify(res.config, null, 2)}</pre>
      </div>
    </div>
  `;
  }

document.getElementById('post').addEventListener('click', addTodo);