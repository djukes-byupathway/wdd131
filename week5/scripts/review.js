

function storeValue() {
 var cnt = localStorage.getItem("reviewCount");

    if (cnt === null) {
        cnt = 0;
    }
    cnt++;
    localStorage.setItem("reviewCount", cnt);
}