let autocomplete;

function initAutocomplete() {
    autocomplete = new google.maps.places.Autocomplete(
        document.getElementById('autocomplete'),
        {
            /* types: [''], */
            /* componentRestrictions: {'country': ['PL']}, */
            fields: ['place_id', 'geometry', 'name']
        });

    autocomplete.addListener('place_changed', onPlaceChanged);

}

function onPlaceChanged() {

    var place = autocomplete.getPlace();

    if (!place.geometry) {
        document.getElementById('autocomplete').placeholder = "Enter a place";
    }
}