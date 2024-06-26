// script.js
document.addEventListener("DOMContentLoaded", function () {
    const submitBtn = document.getElementById("submitBtn");
    const nextPageBtn = document.getElementById("nextPageBtn");
    const userInfoForm = document.getElementById("userInfoForm");

    submitBtn.addEventListener("click", async function (event) {
        event.preventDefault();

        const name = document.getElementById("userName").value;
        const address = document.getElementById("userAddress").value;
        const income = document.getElementById("userIncome").value;

        try {
            const response = await fetch("/api/submit", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ name, address, income }),
            });

            if (!response.ok) {
                throw new Error("Network response was not ok");
            }

            alert("Data submitted successfully!");
        } catch (error) {
            console.error("Error:", error);
            alert("Error submitting data. Please try again.");
        }
    });

    nextPageBtn.addEventListener("click", function () {
        window.location.href = "data.html";
    });
});
