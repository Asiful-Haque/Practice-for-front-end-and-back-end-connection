// data.js
document.addEventListener("DOMContentLoaded", async function () {
    try {
        const response = await fetch("/api/getData");

        if (!response.ok) {
            throw new Error("Network response was not ok");
        }

        const data = await response.json();
        const userDataDiv = document.getElementById("userData");

        data.forEach((user) => {
            const userCard = document.createElement("div");
            userCard.classList.add("userCard");

            const nameElem = document.createElement("p");
            nameElem.textContent = `Name: ${user.name}`;
            userCard.appendChild(nameElem);

            const addressElem = document.createElement("p");
            addressElem.textContent = `Address: ${user.address}`;
            userCard.appendChild(addressElem);

            const incomeElem = document.createElement("p");
            incomeElem.textContent = `Income: ${user.income}`;
            userCard.appendChild(incomeElem);

            userDataDiv.appendChild(userCard);
        });
    } catch (error) {
        console.error("Error:", error);
        const userDataDiv = document.getElementById("userData");
        userDataDiv.innerHTML = `<p>Error fetching data: ${error.message}</p>`;
    }
});
