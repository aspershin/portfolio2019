<template lang="pug">
  div
    h1 This is page {{pageId}}
    .icon SVG1
    .icon2 SVG2
</template>

<script>

export default {
  props: {
    pageId: String
  }
};
</script>

<style lang="scss">

//   @function svg($url, $color) {
//     $base-color: str-slice(inspect($color), 2);
//     @return unquote('url("' + $url + "?fill=%23" + $base-color +'")');
// }

  @mixin apply-background-image($url, $color) {
    $base-color: str-slice(inspect($color), 2);
    background-image: unquote('url("' + $url + "?fill=%23" + $base-color +'")');
  }

  $hex-color: #e6e6e6;

  .icon {
    // background: svg('../img/icons/phone.svg', '#ccc') center center no-repeat;
    width: 40px;
    height: 40px;

    @include apply-background-image("../img/icons/phone.svg", $hex-color);
  }

  .icon2 {
    background-image: url('../img/logo.png');
    background-position: center center;
    background-repeat: no-repeat;
    width: 40px;
    height: 40px;
  }
</style>