document.addEventListener('DOMContentLoaded', () => {

  // JSON data for sample news
  let jsonData = `{
      "sample": [
        {
          "description": "OpenAI’s fired CEO Sam Altman to join Microsoft",
          "imageUrl": "https://www.aljazeera.com/wp-content/uploads/2023/11/2023-05-16T143040Z_423692862_RC2QZ0AUCU1O_RTRMADP_3_USA-AI-CONGRESS-1700462555.jpg?resize=770%2C513&quality=80"
        },
        {
          "description": "‘Out of control’ fires endanger wildlife in Brazil’s Pantanal wetlands",
          "imageUrl": "https://www.aljazeera.com/wp-content/uploads/2023/11/343K8RW-highres-1700422585.jpg"
        },
        {
          "description": "Photos: Head breaks India hearts as Australia win sixth World Cup title",
          "imageUrl": "https://www.aljazeera.com/wp-content/uploads/2023/11/2023-11-19T165916Z_681108936_UP1EJBJ1B6PVQ_RTRMADP_3_CRICKET-WORLDCUP-IND-AUS-1700413267.jpg"
        },
        {
          "description": "World Cup 2022 updates: Spain’s Gavi makes history",
          "imageUrl": "https://www.aljazeera.com/wp-content/uploads/2022/11/2022-11-23T174433Z_294352935_UP1EIBN1DA7EA_RTRMADP_3_SOCCER-WORLDCUP-ESP-CRI-REPORT.jpg?resize=570%2C380&quality=80"
        },
        {
          "description": "Japan seeking talks with Houthi hijackers of Red Sea Israeli-linked ship",
          "imageUrl": "https://www.aljazeera.com/wp-content/uploads/2023/11/2022-01-03T181953Z_1202213461_RC2URR9X1XPF_RTRMADP_3_YEMEN-SECURITY-SHIP-1700466760.jpg?resize=770%2C513&quality=80"
        }
      ]
  }`;

  // Parse JSON data
  let newsObject = JSON.parse(jsonData);
  let newContainer = document.getElementById('newContainer');
  let currentIndex = 0;

  // Function to update news content
  const updateNews = () => {
      while (newContainer.firstChild) {
          newContainer.removeChild(newContainer.firstChild);
      }

      // Create a new div element for displaying news
      let newDiv = document.createElement('div');
      newDiv.className = 'newDiv';
      newDiv.style.backgroundImage = `url('${newsObject.sample[currentIndex]["imageUrl"]}')`;
      newDiv.style.backgroundSize = 'cover';
      newDiv.style.backgroundPosition = 'center';

      // Create and style text content for news
      let textContent = document.createElement('p');
      textContent.style.color = ' #fff'
      textContent.style.backgroundColor = 'red'
      textContent.style.padding = '8px'
      textContent.style.borderRadius = '8px'
      textContent.style.position = 'absolute'
      textContent.style.bottom = '0px'

      textContent.textContent = newsObject.sample[currentIndex].description;

      // Append text content to the new div
      newDiv.appendChild(textContent);
      newContainer.appendChild(newDiv);

      // Update the current index for the next iteration
      if (currentIndex === newsObject.sample.length - 1) {
        currentIndex = 0;
      } else {
          currentIndex++;
      }
  };

  // Initial update of news
  updateNews();

  // Set interval to update news every 4 seconds
  setInterval(updateNews, 4000);

  // Event listeners for adding notes
  let addNoteButton = document.getElementById('addNote');
  let noteInput = document.getElementById('noteInput');
  let noteList = document.getElementById('noteList');

  addNoteButton.addEventListener('click', () => {    
      let noteText = noteInput.value.trim();

      if (noteText === '') {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Please enter a note.',
        })
          return;
      }

      // Create a new list item
      let listItem = document.createElement('li');
      listItem.textContent = noteText;

      // Create a delete button for the list item
      let deleteButton = document.createElement('button');
      deleteButton.textContent = 'X';
      deleteButton.className = 'deleteButton';
      deleteButton.addEventListener('click', () => {
          listItem.remove();
      });

      // Append delete button to the list item
      listItem.appendChild(deleteButton);

      // Append list item to the note list
      noteList.appendChild(listItem);

      // Clear the note input field
      noteInput.value = '';
  });
});
