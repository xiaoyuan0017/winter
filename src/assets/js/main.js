// 展示图片
function showImg(input) {
    let file = input.files[0];
    let fSize = 1024 * 1024 * 0.5;
    let reader = new FileReader()
    reader.onload = function (e) {
        let eimginfo = e.target.result;

        let image = new Image();
        image.src = eimginfo;
        console.log(file.size);
        console.log(fSize);
        // 判断是否有缓存
        if (image.complete) {
            //console.log('完成'+image.width+'/'+image.height);
            if (file.type == 'image/jpeg' || file.type == 'image/png') {
                if (file.size < fSize && image.width < 600 && image.height < 600) {
                    // console.log($(input).parent());
                    $(input).parent().closest('div').find('img')[0].src = eimginfo
                } else {
                    alert('文件要求:\n类型:png or jpg\n宽度:600\n高度:600\n大小:500k以下')
                }
            } else {
                alert('文件类型必须:jpg 或者 png')
                return false;
            }
        } else {
            image.onload = function () {
                //console.log('要加载'+image.width+'/'+image.height);
                if (file.type == 'image/jpeg' || file.type == 'image/png') {
                    if (file.size < fSize && image.width < 600 && image.height < 600) {
                        console.log('ok');
                        // $(input).parent().find('img').src=eimginfo
                        // console.log($(input).parent().closest('div').find('img')[0].src);
                        $(input).parent().closest('div').find('img')[0].src = eimginfo

                    } else {
                        alert('文件要求:\n类型:png or jpg\n宽度:600\n高度:600\n大小:500k以下')
                    }
                } else {
                    alert('文件类型必须:jpg 或者 png')
                    return false;
                }
            }
        }

    };
    reader.readAsDataURL(file)
}



$(function () {
    // $('#cardradio').click(function (e) {
    //     $("#cardlist").show()
    //     $("#paypal").hide()
    // })
    // $('#payradio').click(function (e) {
    //     $("#cardlist").hide()
    //     $("#paypal").show()
    // })
    // $("#logout").click(function (e) {
    //     sessionStorage.removeItem('name');
    //     sessionStorage.removeItem('selfname');
    //     sessionStorage.removeItem('usercode');
    //     window.location.reload();
    // });



})