document.addEventListener("DOMContentLoaded", function () {
    createModal();
    createOpenButton();
  });
  
  function createModal() {
    const modal = document.createElement("div");
    modal.setAttribute("id", "modal");
    modal.style.display = "none";
    modal.style.position = "fixed";
    modal.style.zIndex = "1";
    modal.style.left = "0";
    modal.style.top = "0";
    modal.style.width = "100%";
    modal.style.height = "100%";
    modal.style.overflow = "auto";
    modal.style.backgroundColor = "rgba(0, 0, 0, 0.4)";
  
    const modalContent = document.createElement("div");
    modalContent.style.backgroundColor = "#fefefe";
    modalContent.style.margin = "15% auto";
    modalContent.style.padding = "20px";
    modalContent.style.border = "1px solid #888";
    modalContent.style.width = "80%";
    modalContent.style.boxShadow = "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)";
  
    const closeButton = document.createElement("span");
    closeButton.innerHTML = "&times;";
    closeButton.style.color = "#aaaaaa";
    closeButton.style.float = "right";
    closeButton.style.fontSize = "28px";
    closeButton.style.fontWeight = "bold";
    closeButton.style.cursor = "pointer";
    closeButton.addEventListener("click", closeModal);
  
    const modalTitle = document.createElement("h2");
    modalTitle.textContent = "Fenêtre modale";
  
    const modalText = document.createElement("p");
    modalText.textContent = "Contenu de la fenêtre modale...";
  
    modalContent.appendChild(closeButton);
    modalContent.appendChild(modalTitle);
    modalContent.appendChild(modalText);
    modal.appendChild(modalContent);
    document.body.appendChild(modal);
  
    window.addEventListener("click", function (event) {
      if (event.target === modal) {
        closeModal();
      }
    });
  }
  
  function createOpenButton() {
    const openButton = document.createElement("button");
    openButton.textContent = "Ouvrir la fenêtre modale";
    openButton.addEventListener("click", openModal);
    document.body.appendChild(openButton);
  }
  
  function openModal() {
    document.getElementById("modal").style.display = "block";
  }
  
  function closeModal() {
    document.getElementById("modal").style.display = "none";
  }
  