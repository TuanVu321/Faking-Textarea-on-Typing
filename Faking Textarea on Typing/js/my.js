let text = 'Mot ngay that dai!!!';
let array = text.split('');
let html = '';
let i = 0;
function change() {
    if (i == 20) {
        html = '';
        document.getElementById('display').value = html;
        i = 0;
    } else {
        html = html + array[i];
        document.getElementById('display').value = html;
        i++;

    }
}
