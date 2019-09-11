$.fn.extend({
    triStateCheckbox: function () {
        return this.each(function () {
            var cbx = $("<input/>", {
                type: 'checkbox',
                name: $(this).attr("name"),
                value: $(this).val(),
                data: $(this).data(),
                id: $(this).attr("id"),
            }).insertBefore(this);
            $(cbx).on("click", function () {
                var cbx = $(this);
                var data = cbx.data();
                switch (data.checked) {
                    // unchecked, going indeterminate
                    case 0:
                        cbx.data('checked', 1);
                        cbx.prop('indeterminate', true);
                        cbx.next("input[type='hidden']").next('label.tri-state-checkbox-status').text(data.indeterminateLabel);
                        $("input[name='" + cbx.attr("name") + "']").val(0);
                        break;
                    // indeterminate, going checked
                    case 1:
                        cbx.data('checked', 2);
                        cbx.prop('indeterminate', false);
                        cbx.prop('checked', true);
                        cbx.next("input[type='hidden']").next('label.tri-state-checkbox-status').text(data.checkedLabel);
                        $("input[name='" + cbx.attr("name") + "']").val(1);
                        break;
                    // checked, going unchecked
                    case 2:
                        cbx.data('checked', 0);
                        cbx.prop('indeterminate', false);
                        cbx.prop('checked', false);
                        cbx.next("input[type='hidden']").next('label.tri-state-checkbox-status').text(data.uncheckedLabel);
                        $("input[name='" + cbx.attr("name") + "']").val(2);
                }
            });
            $(cbx).trigger('click');
        });
    }
});
