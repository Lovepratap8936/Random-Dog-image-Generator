const show = document.getElementById('show');

fetch('https://dog.ceo/api/breeds/image/random')
    .then((response) => response.json())
    .then((data) => {
        const imageUrl = data.message;

        // Create an img element and add it to the container
        show.innerHTML = `<img src="${imageUrl}" alt="Random Dog Image" class="dog-image" />`;
    })
    .catch((error) => {
        console.error('Error fetching the image:', error);
        show.innerHTML = 'Failed to load image.';
    });
    const refresh=document.getElementById('nextButton')
    refresh.addEventListener('click',(e)=>{
        location.reload();
     
    })
    window.scrollTo({
        top:document.body.scrollIntoView,
        behavior: 'smooth'  // Smooth scrolling
    });