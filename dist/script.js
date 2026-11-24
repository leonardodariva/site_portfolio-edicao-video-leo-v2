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
  if (event.target === dialog || event.target.matches(".dialog-inner, .dialog-stage")) dialog.close();
});
dialog.addEventListener("close", () => {
  dialogVideo.pause();
  dialogVideo.removeAttribute("src");
  dialogVideo.load();
});

const contactForm = document.querySelector("#contact-form");
const contactStatus = contactForm.querySelector(".form-status");
const contactSubmit = contactForm.querySelector('button[type="submit"]');
const contactMessages = document.documentElement.lang === "en"
  ? {
    sending: "Sending your message…",
    success: "Message sent. Thanks for getting in touch!",
    error: "Your message could not be sent. Try again or use the email address above.",
  }
  : {
    sending: "Enviando sua mensagem…",
    success: "Mensagem enviada. Obrigado pelo contato!",
    error: "Não foi possível enviar a mensagem. Tente novamente ou use o e-mail acima.",
  };

contactForm.addEventListener("submit", async (event) => {
  event.preventDefault();
  if (contactSubmit.disabled) return;

  const data = new URLSearchParams(new FormData(contactForm));
  contactSubmit.disabled = true;
  contactStatus.textContent = contactMessages.sending;

  try {
    const response = await fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: data,
    });
    if (!response.ok) throw new Error("Form submission failed");
    contactForm.reset();
    contactStatus.textContent = contactMessages.success;
  } catch {
    contactStatus.textContent = contactMessages.error;
  } finally {
    contactSubmit.disabled = false;
  }
});
