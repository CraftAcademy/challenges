var onReady = function(){
  loadLocale().done(function(){
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
}

loadLocale = function(code) {
    var deferred = $.Deferred();
    setTimeout(function() {
        var locale = code || 'en';
        $.getJSON(`src/locales/${locale}.json`)
            .done(function(data) {
                i18n.translator.add(data);
                applyTranstations();
                // Resolve the deferred
                deferred.resolve();
            }).fail(function() {
                $('#display_value').html('Could not load translation file');
                deferred.reject();
            });

        // Resolve the deferred
        deferred.resolve();
    }, 200);
    return deferred.promise();

}

getLocaleCode = function(id) {
    switch (id) {
        case 'swedish':
            loadLocale('sv')
            break;
        case 'english':
            loadLocale('en');
            break;
    }
}

applyTranstations = function() {
    $('h3').html(i18n('app_name'))
    $('#calculate').html(i18n('calculate'))
    $("#weight").attr("placeholder", i18n('weight'));
    $("#height").attr("placeholder", i18n('height'));
    $("#swedish").html(i18n('swedish'));
    $("#english").html(i18n('english'));
    return;
}
