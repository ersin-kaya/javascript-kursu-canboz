const request = new XMLHttpRequest(); //isteği aslında javascriptte fecth ile yapabilirsiniz ama bunu öğrenmeniz önemli çünkü büyük e-ticaret projelerinde yamalı projelerde bunu çokça görürsünüz, görmüş olun


request.addEventListener('readystatechange', () => {
    // console.log(request, request.readyState);
    if (request.readyState === 4 && request.status === 200) { //3. o halde yapmamız gereken şey, readyState 4 veeee request.status===200 ise bana başarılı cevap döner
        console.log(request, request.responseText); //2. ancak readyState 4 yani tamamlanmış
    } else if (request.readyState === 4) {
        console.log("Başarılı cevap alamadık...")
    }
}); // şu adresi incele: https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/readyState


request.open('GET', 'https://jsonplaceholder.typicode.com/todosssss'); //1. örneğin yanlış bir url yazsam, veya farklı bir problem olsa(mesela böyle todosss) böyle bir endpoint'im yok. hatalı old. için herhangi bir responseText dönmeyecektir. console'da 404 hatasını veriyor ve responseText {} dönüyor //4. doğru bir endpoint'e istek atmıyoruzz
request.send();

