document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("contact-form");
    const status = document.getElementById("form-status");
    if (!form || !status) return;

    form.addEventListener("submit", async (event) => {
        event.preventDefault();
        const button = form.querySelector('button[type="submit"]');
        const fields = new FormData(form);
        const data = {
            name: fields.get("name"),
            contact: fields.get("contact"),
            details: fields.get("details"),
        };

        button.disabled = true;
        status.textContent = "Отправляем заявку…";
        try {
            await fetch("https://script.google.com/macros/s/AKfycbzo6nuuSASOP_Z0008Mrorlr7lI8KbxpMr6ZX5_j94dJkXsP-8Jr664onunqQRmHw-u/exec", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data),
                mode: "no-cors",
            });
            // An opaque response does not confirm delivery to the spreadsheet.
            status.textContent = "Запрос отправлен, но доставка не подтверждена. Если ответа не будет, напишите на Repapro@Gmail.Com.";
        } catch {
            status.textContent = "Не удалось отправить заявку. Напишите на Repapro@Gmail.Com.";
        } finally {
            button.disabled = false;
        }
    });
});
