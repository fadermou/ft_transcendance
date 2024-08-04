{% comment %} fetch("https://dog.ceo/api/breeds/list/all") {% endcomment %}


  {% comment %} .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
    if (data.status === 'success') {
      console.log('Breeds:', data.message); // Log the list of breeds
    } else {
      console.error('API returned an error status:', data.status);
    }
  })
  .catch(error => {
    console.error('There was a problem with the fetch operation:', error);
  }); {% endcomment %}
