const dialog = document.querySelector("#media-dialog");
const dialogTitle = document.querySelector("#dialog-title");
const dialogDescription = document.querySelector("#dialog-description");
const dialogClose = document.querySelector(".dialog-close");
const dialogVideo = document.querySelector(".dialog-video");
const dialogPlaceholder = document.querySelector(".dialog-placeholder");

document.querySelectorAll(".media-card").forEach((card) => {
  card.addEventListener("click", () => {
    dialogTitle.textContent = card.dataset.title;
    dialogDescription.textContent = card.dataset.description;
    const videoUrl = card.dataset.video;
    dialogVideo.hidden = !videoUrl;
    dialogPlaceholder.hidden = Boolean(videoUrl);
    if (videoUrl) dialogVideo.src = videoUrl;
    dialog.showModal();
    if (videoUrl) dialogVideo.load();
  });
});

dialogClose.addEventListener("click", () => dialog.close());
dialog.addEventListener("click", (event) => {
  if (event.target === dialog) dialog.close();
});
dialog.addEventListener("close", () => {
  dialogVideo.pause();
  dialogVideo.removeAttribute("src");
  dialogVideo.load();
});

document.querySelector("#contact-form").addEventListener("submit", (event) => {
  event.preventDefault();
  const data = new FormData(event.currentTarget);
  const name = String(data.get("name") || "").trim();
  const email = String(data.get("email") || "").trim();
  const message = String(data.get("message") || "").trim();
  const subject = encodeURIComponent(`Novo briefing — ${name}`);
  const body = encodeURIComponent(`Nome: ${name}\nE-mail: ${email}\n\nProjeto:\n${message}`);
  const status = document.querySelector(".form-status");
  status.textContent = "Seu aplicativo de e-mail será aberto. Revise a mensagem e confirme o envio por lá.";
  window.location.href = `mailto:leodarivask@gmail.com?subject=${subject}&body=${body}`;
});
