  const card = document.querySelector('.card')

  let cardId = 0
  const cards = async ()=>{
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts/')
        const data = await response.json()
        data.forEach(() => {
            const {title , body} =data[cardId]
            card.innerHTML += `
                <div class="card-mini">
                <img src="https://masterpiecer-images.s3.yandex.net/606d1525a8859a4:3" alt="леди баг ">
                <h4>${title}</h4>
                <p>${body}</p>
                </div>
            `
        })
    }catch (error){
        console.log(error)
    }
  }

  cards()