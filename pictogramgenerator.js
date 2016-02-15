function PictogramGenerator(obj, target_id) {
    _.each(obj, function(pictogram, index) {
        meta_array = pictogram[0].meta;
        title = meta_array[0].title;

        var result_c = document.getElementById(target_id);

        var graph_c = 'pictogram_' + index;
        var title_c = 'title_' + index;
        var legend_c = 'legend_' + index;
        var graphics_c = 'graphics_' + index;

        result_c.innerHTML = result_c.innerHTML + '<div class="pictogram" id="' + graph_c + '"><div class="title" id="' + title_c + '">' + title + '</div><div class="graphics" id="' + graphics_c + '"></div><div class="legend"  id="' + legend_c + '"></div></div>';

        var legend_c = document.getElementById(legend_c);

        values_array = pictogram[0].values;

        _.each(values_array, function(weights) {
            legend = weights.legend;
            weight = weights.weight;
            image = weights.image;
            colour = weights.colour;

            legend_c.innerHTML = legend_c.innerHTML + '<div class="weight ' + colour + '">' + weight + '</div>' + '<div class="legend_text">' + legend + '</div><div class="visualClear"></div>';

            AddPictogram(graphics_c, image, weight);

        });

    });
};

function AddPictogram(target, src, times) {
    for (i = 0; i < times; i++) {
        var div = document.createElement("img");
        div.src = src;
        document.getElementById(target).appendChild(div);
    }
}
