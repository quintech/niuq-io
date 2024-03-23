export default function bbcSearch(...vaule){
    const url = vaule[0];
    const formData = vaule[1];
    const doc = vaule[2];
    if (url.indexOf('sport') !== -1){
        formData.append('title', doc.querySelectorAll('#page')[0].innerHTML);
    }else {
        formData.append('title', doc.querySelectorAll('#main-heading')[0].innerHTML);
    }
}
