const request = new XMLHttpRequest(); //isteği aslında javascriptte fecth ile yapabilirsiniz ama bunu öğrenmeniz önemli çünkü büyük e-ticaret projelerinde yamalı projelerde bunu çokça görürsünüz, görmüş olun


request.addEventListener('readystatechange', () => {
    // console.log(request, request.readyState);
    if (request.readyState === 4) {
        console.log(request.responseText);
    }
}); // şu adresi incele: https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/readyState


request.open('GET', 'https://jsonplaceholder.typicode.com/todos');
request.send();

