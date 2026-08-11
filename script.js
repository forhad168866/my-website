document.getElementById("year").textContent = new Date().getFullYear();

const form = document.getElementById("contactForm");
const note = document.getElementById("formNote");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  const data = new FormData(form);
  const name = data.get("name") || "there";
  const email = data.get("email") || "";
  const service = data.get("service") || "General inquiry";
  const message = data.get("message") || "";
  const subject = encodeURIComponent(`Portfolio inquiry — ${service}`);
  const body = encodeURIComponent(
    `Name: ${name}\nEmail: ${email}\nService: ${service}\n\n${message}`
  );
  window.location.href =
    `mailto:civilengineerforhad@gmail.com?subject=${subject}&body=${body}`;
  note.textContent = "Opening your email app…";
});

document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener("click", () => {
    const target = document.querySelector(a.getAttribute("href"));
    if (target) target.scrollIntoView({behavior:"smooth"});
  });
});
