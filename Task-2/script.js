// Contact Form Validation
document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();
  const status = document.getElementById("formStatus");

  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

  if (!name || !email || !message) {
    status.textContent = "⚠️ Please fill in all fields.";
    status.style.color = "crimson";
    return;
  }

  if (!email.match(emailPattern)) {
    status.textContent = "⚠️ Enter a valid email address.";
    status.style.color = "crimson";
    return;
  }

  status.textContent = "✅ Message sent successfully!";
  status.style.color = "green";
});

// To-Do List
function addTodo() {
  const input = document.getElementById("todoInput");
  const task = input.value.trim();

  if (task === "") return;

  const li = document.createElement("li");
  li.textContent = task;

  const btn = document.createElement("button");
  btn.textContent = "Remove";
  btn.onclick = () => li.remove();

  li.appendChild(btn);
  document.getElementById("todoList").appendChild(li);

  input.value = "";
}
