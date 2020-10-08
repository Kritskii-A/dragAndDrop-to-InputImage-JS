/* DRAG and Drop */
function dragAndDropImage(input) {
  if (input === "reset") {
    // если нажили кнопку удалить, то очищаем поле input
    let inputImage = document.querySelector("#imagefile");
    inputImage.value = "";
  } else {
    if (input.files && input.files[0]) {
      var reader = new FileReader();

      reader.onload = function (e) {
        var image = new Image();
        image.onload = function () {
          if (this.width >= 1080 || this.height >= 1080) {
            // проверяем ширину и высоту изображения, если больше, то выводим ошибку
            $(".errorUploadImage").html("Слишком большое изображение");
            removeUploadImg("true");
          } else {
            $(".imageUpload--wrap").hide();

            $(".fileUpload--content").attr(
              "style",
              "background-image: url(" + e.target.result + ")"
            );
            $(".fileUpload--content").show();
            $(".errorUploadImage").html("");
          }
        };
        image.src = e.target.result;
      };

      reader.readAsDataURL(input.files[0]);
    } else {
      removeUploadImg();
    }
  }
}

function removeUploadImg(info) {
  $(".fileUpload--input").replaceWith($(".fileUpload--input").clone());
  $(".fileUpload--content").hide();
  $(".imageUpload--wrap").show();
  if (!info) {
    $(".errorUploadImage").html("");
  }

  dragAndDropImage("reset");
}

/* END DRAG and Drop */
