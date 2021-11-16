const swiperWrapper = document.querySelector('.swiper-wrapper')


const getData = fetch(
    'https://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline'
  )
    .then((response) => response.json())
    .then((data) => renderItems(data))
  
  const renderItems = (data) => {
    data
      .filter(({ price }) => Number(price) < 5)
      .forEach(({ price, name }) => {
      const div = document.createElement('div')
      div.classList.add('swiper-slide')
      div.innerHTML = `
                <div class="swiper-slide-info">
                  <div class="quote">“</div>
                  <p>${name}</p>
                  <div class="swiper-slide-price"><span> — ${price}</span></div>
                </div>
      `
      console.log({price, name})
      
      swiperWrapper.append(div)
      
    })
  }

  
  