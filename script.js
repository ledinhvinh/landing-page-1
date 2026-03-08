$(document).ready(function () {
    const arrImage = [
        {
            nameImg: "Hình ảnh 1",
            url: 'images/workshop/workshops.png',
            tagA: '#'
        },
        {
            nameImg: "Hình ảnh 2",
            url: 'images/workshop/image2.png',
            tagA: '#'
        },
        {
            nameImg: "Hình ảnh 3",
            url: 'images/workshop/image3.png',
            tagA: '#'
        },
        {
            nameImg: "Hình ảnh 4",
            url: 'images/workshop/image4.jpg',
            tagA: '#'
        },
    ];

    let currentIndex = 0;

    function updateCarousel() {
        const currentImage = arrImage[currentIndex];
        $('.carousel a').attr('href', currentImage.tagA);
        $('.carousel img').attr('src', currentImage.url).attr('alt', currentImage.nameImg);
        updatePagination();
    }

    function updatePagination() {
        $('.pagination span').removeClass('active');
        $(`.pagination span[data-index="${currentIndex}"]`).addClass('active');
    }

    function createPagination() {
        const paginationContainer = $('<div class="pagination"></div>');
        arrImage.forEach((_, index) => {
            const dot = $(`<span data-index="${index}"></span>`);
            dot.click(function () {
                currentIndex = index;
                updateCarousel();
            });
            paginationContainer.append(dot);
        });
        $('.carousel').append(paginationContainer); 
    }

    $('.previous').click(function () {
        currentIndex = (currentIndex - 1 + arrImage.length) % arrImage.length;
        updateCarousel();
    });

    $('.next').click(function () {
        currentIndex = (currentIndex + 1) % arrImage.length;
        updateCarousel();
    });

    createPagination();
    updateCarousel();
});