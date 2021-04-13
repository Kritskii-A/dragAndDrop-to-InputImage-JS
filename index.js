/* DRAG and Drop */
function dragAndDropImage(input) {
  if (input === "reset") {
    // если нажили кнопку удалить, то очищаем поле input
    let inputImage = document.querySelector("#image-file");
    inputImage.value = "";
  } else {
    if (input.files && input.files[0]) {
      var reader = new FileReader();

      reader.onload = function (e) {
        var image = new Image();
        image.onload = function () {
          if (this.width >= 1080 || this.height >= 1080) {
            // проверяем ширину и высоту изображения, если больше, то выводим ошибку
            $(".block-image__error").html("Слишком большое изображение");
            removeUploadImg("true");
          } else {
            $(".block-image-wrap").hide();

            $(".block-image__img").attr(
              "style",
              "background-image: url(" + e.target.result + ")"
            );
            $(".block-image__img").show();
            $(".block-image__error").html("");
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
  $(".block-image__input").replaceWith($(".block-image__input").clone());
  $(".block-image__img").hide();
  $(".block-image-wrap").show();
  if (!info) {
    $(".block-image__error").html("");
  }

  dragAndDropImage("reset");
}

/* END DRAG and Drop */
