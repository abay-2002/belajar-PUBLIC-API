function searchMovie(){
    $('#movie-list').html('');

    $.ajax({
        url: 'http://www.omdbapi.com',
        type: 'get',
        dataType: 'json',
        data: {
            'apikey': '7c8b6135',
            's': $('#input-movie').val()
        },
        success: function (result){
            // console.log(result);
            if(result.Response == "True"){
                let movies = result.Search;
                $.each(movies, function(i, element){
                    $('#movie-list').append(`
                    <div class="col-md-4 mx-auto my-1">
                        <div class="card">
                            <img src="`+element.Poster+`" class="card-img-top"/>
                            <div class="card-body">
                                <h5 class="card-title">`+element.Title+`</h5>
                                <h6 class="card-subtitle mb-2 text-muted">`+element.Year+`</h6>
                                <p class="card-text">
                                    Some quick example text to build on the card title and make up
                                    the bulk of the card's content.
                                </p>
                                <a href="#">Detail</a>
                            </div>
                        </div>
                    </div> 
                    `);
                });
                $('#input-movie').val('');
            }
            else{
                $('#movie-list').html(`<h1 class="text-center">`+result.Error+` :(</h1>`)
            }
        }
    })//penutup ajax
}

$('#search-button').on('click',function(){
    searchMovie();
});