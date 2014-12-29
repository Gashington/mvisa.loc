var jsCountModule = (function () {
    var
        $block = $('.js-count-module'),
        $input = $block.find('.js-num-input'),
        $spiner = $block.find('.js-spiner');
    return {
        init: function () {
            var _this = this;
            $input.on('keypress', function (key) {
                if (key.charCode < 48 || key.charCode > 57) return false;
            });

            $input.on('change', function () {
                var $this = $(this);
                if (!isNumeric($this.val()) || $this.val() < 1) {
                    $this.val(1)
                }
                else if (parseInt($this.val()) > 99) {
                    $this.val(99)

                }
                $this.val(parseInt($this.val()))

            });

            $spiner.on('click', function () {
                var $this = $(this);

                if ($this.hasClass('js-plus')) {
                    $input.val(parseInt($input.val()) + 1)
                }
                else if ($this.hasClass('js-minus')) {
                    $input.val(parseInt($input.val()) - 1)
                };
                $input.change()
            })
        }
    }

    //return { // методы доступные извне
    //    addItem: function(values) {
    //        basket.push(values);
    //    },
    //    getItemCount: function() {
    //        return basket.length;
    //    },
    //    getTotal: function() {
    //        var q = this.getItemCount(),p=0;
    //        while(q--){
    //            p+= basket[q].price;
    //        }
    //        return p;
    //    }
    //}
}());


$(function () {
    jsCountModule.init()
});


function isNumeric(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
}
