jQuery(document).ready(function($) {
  $(function () {

    $('.variations select').each(function (selectIndex, selectElement) {

      var select = $(selectElement);
      var container = $("<div class='instantButtonsContainer' />");
      select.parent().append(container);
      container.append(select);

      select.find('option').each(function (optionIndex, optionElement) {
        var radioGroup = select.attr('id') + "Group";
        var label = $("<label />");
        container.append(label);

        $("<input type='radio' name='" + radioGroup + "' />")
            .attr("value", $(this).val())
            .click((function () { select.val($(this).val()).prop("selected", true)}))
            .appendTo(label);

        $("<span>" + $(this).val() + "</span>").appendTo(label);
      });

      container.find(":radio + span").mousedown(
        function (e) {
          var $span = $(this);
          var $radio = $($span.prev());
          if ($radio.is(':checked')) {
            var uncheck = function() {
              setTimeout(function () { $radio.prop('checked', false); }, 0);
            };
            var unbind = function() {
              $span.unbind('mouseup', up);
            };
            var up = function() {
              uncheck();
              unbind();
            };
            $span.bind('mouseup', up);
            $span.one('mouseout', unbind);
          } else {
            select.val($radio.val());
          }
        }
      );
    });
  });
});
