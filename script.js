document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("contact-form");

    form.addEventListener("submit", async function (event) {
        event.preventDefault(); // Останавливаем стандартную отправку формы

        const formData = new FormData(form);
        const data = {
            name: formData.get("name"),
            contact: formData.get("contact"),
            details: formData.get("details"),
        };
        try {
            const response = await fetch("https://script.google.com/macros/s/AKfycbzo6nuuSASOP_Z0008Mrorlr7lI8KbxpMr6ZX5_j94dJkXsP-8Jr664onunqQRmHw-u/exec", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
                mode: 'no-cors', // Disable CORS
            });
            alert("Данные отправлены: " + result.status);
        } catch (error) {
            form.reset();
            alert("Данные отправлены: " + result.status);
        }
        form.reset();
    });
});