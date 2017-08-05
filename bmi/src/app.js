$(document).ready(function() {
    loadLocale();
    $('#weight').focus(function() {
        $('#display_value').empty();
        $('#display_message').empty();
    });

    $('button').click(function() {
        getLocaleCode(this.id);
    })

    $('#calculate').click(function() {
        var w = parseFloat($('#weight').val());
        var h = parseFloat($('#height').val());
        var person = new Person({
            weight: w,
            height: h
        });
        person.calculate_bmi();
        $('#display_value').html(i18n("bmi_message_prefix") + person.bmiValue);
        $('#display_message').html(i18n("bmi_message_results") + person.bmiMessage.toLowerCase());
    });
});

loadLocale = function(code) {
    var url = new URL(window.location.href);
    var locale = code || url.searchParams.get('locale') || 'en';
    $.ajax(`src/locales/${locale}.json`)
        .done(function(data) {
            console.log(`parsed: ${locale}.json`)
            i18n.translator.add(data);
            $('h3').html(i18n('app_name'))
            $('#calculate').html(i18n('calculate'))
            $("#weight").attr("placeholder", i18n('weight'));
            $("#height").attr("placeholder", i18n('height'));
            $("#swedish").html(i18n('swedish'));
            $("#english").html(i18n('english'));
        }).fail(function() {
            $('#display_value').html('Could not load translation file');
        });
}

getLocaleCode = function(id){
  switch (id) {
      case 'swedish':
          loadLocale('sv')
          break;
      case 'english':
          loadLocale('en');
          break;
  }
}
