(function () {

  angular
    .module('loc8rApp')
    .controller('aboutCtrl', aboutCtrl);

  function aboutCtrl() {
    var vm = this;

    vm.pageHeader = {
      title: 'About Loc8r',
    };
    vm.main = {
      content: 'Loc8r was created to help people find places to sit down and get a bit of work done.\n\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi et mattis augue. Praesent ornare eget ipsum sit amet finibus. Maecenas vehicula ac tellus a mattis. Morbi consequat ultrices massa sodales tristique. Donec commodo nulla nec enim interdum condimentum. Pellentesque maximus nulla mi, sed accumsan neque semper et. Aliquam vestibulum placerat lobortis. Morbi sit amet urna ut mauris rutrum tristique ac non tellus. Curabitur congue pellentesque turpis sit amet lobortis. Maecenas maximus congue justo, vel dapibus sapien rutrum sit amet. Aliquam erat volutpat. Cras mattis lacus sed velit ornare, vel vestibulum metus dictum. Mauris eget tellus purus.\n\nNullam malesuada posuere tortor et dapibus. Donec lorem augue, fermentum ut enim at, iaculis bibendum ex. Duis sit amet feugiat justo, vitae ultricies nibh. Integer dictum urna nec sodales egestas. Donec in molestie nibh, vitae.'
    };
  }

})();
