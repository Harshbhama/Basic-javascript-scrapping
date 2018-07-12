var button =$('#append-button');

console.log(button);

var message = "message";

button.click(function(){

	var myText = $('<p>',{

		'html': message,
		'class': 'large-text-blue',
		
	});



	console.log(myText);
	$('#text-container').append(myText);
	});


var dogImageButton = $('#get-dog-image');

function updateImageTag(imageLink){

	$('#dog-random-image').attr('src', imageLink);

}


function getImage(){

	var breed = $('#dog-breed').val();

	$.ajax({

		type: 'get',
		// url: 'https://dog.ceo/api/breeds/image/random',

		url: 'https:dog.ceo/api/breed/' + breed + '/images/random',
		success: function(responseData){
			updateImageTag(responseData.message);

		},

		error:function(){
			console.log('some error');
		}




	});

}
dogImageButton.click(function(){

	getImage();
})


// bLh9W83Y3h8ceZdfclP9ZLR6mcE2mox0DjDx3mRB


function createImage(imageLink){

	let newImg = $('<img>',{


		'src': imageLink
	})

	$('#image-grid').append(newImg);
	// $('#image-grid').attr('src',imageLink);
	}

	var marsForm  = $('#mars-form');

	marsForm.submit(function(event){

		 event.preventDefault();




		$.ajax({

			type: 'get',
			url:'https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos',
			data:{
				sol: $('#sol').val(),
				page: $('#page').val(),
				api_key:'bLh9W83Y3h8ceZdfclP9ZLR6mcE2mox0DjDx3mRB'
			},
			success:function(responseData){

				console.log('aaa');
				photos = responseData.photos;
				for(let i=0;i<photos.length;i++){
					createImage(photos[i].img_src);
				}
			},
			error:function(){
				console.log('error');
			}

		})
	})







