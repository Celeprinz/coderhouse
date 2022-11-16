function iniciarMap(){
    const coord = {lat:-34.6396071 ,lng: -58.3621835};
    const map = new google.maps.Map(document.getElementById('map'),{
      zoom: 10,
      center: coord
    });
    const marker = new google.maps.Marker({
      position: coord,
      map: map
    });
}