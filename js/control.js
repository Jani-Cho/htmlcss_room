$(document).ready(function () {
    jQuery(function ($) {
        $tabCus = $('#tabCus');
        $tabTa = $('#tabTa');
        $edits = $('#edits');
        $menuBtn = $('#menuBtn');
        $menu = $('#menu');
        $cancel = $('#cancel');

        $tabCus.click(function () {
            $tabCus.addClass('active');
            $tabTa.removeClass('active');
        });
        
        $tabTa.click(function () {
            $tabTa.addClass('active');
            $tabCus.removeClass('active');
        });

        /* 全選 */
        $("#selectAll").click(function(){
            $(".checkbox").prop("checked",$(this).prop("checked"));
        });
        
        /* 編輯選單 */
        $edits.click(function(){
            $edits.addClass('active');
        });
        
        $(document).mouseup(function (e) {
            var container =$(".suggest"); // 這邊放你想要排除的區塊
            if (!$edits.is(e.target) && $edits.has(e.target).length === 0) {
                $edits.removeClass('active');
            }
        });

        /* 手機版選單 */
        $menuBtn.click(function(){
            $menu.show();
        });
        $cancel.click(function(){
            $menu.hide();
        });
        
    });

});


