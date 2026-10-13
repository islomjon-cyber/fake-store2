    const elList = document.querySelector('.list')

    async function postlarniOlish() {
        try {
            const javob = await fetch('https://fakestoreapi.com/products');
            const malumot = await javob.json();
            
            renderPost(malumot);
        
        } catch(xato) {
            console.error("Api bilan bogliq xatolik", xato);
        }
    }

    postlarniOlish()

    function renderPost(malumot) {
        elList.innerHTML = ""; 
        
        malumot.forEach((data)=> {
            elList.innerHTML += `
            <li class="li">
                <span>ID: ${data.id}</span>
                <h3>Ismi: ${data.title}</h3>
                <p>Holati: ${data.price}</p>
                <img src="${data.image}" alt="${data.title}" width="100">
            </li>
            `;
        });
    }