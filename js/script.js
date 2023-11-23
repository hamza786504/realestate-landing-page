function showContent(contentId) {
    const buttons = document.querySelectorAll('.toggle-button');
    buttons.forEach(button => button.classList.remove('active'));

    const contentItems = document.querySelectorAll('.gallery-item');
    contentItems.forEach(item => item.classList.remove('active'));

    const activeButton = document.querySelector(`button[onclick="showContent('${contentId}')"]`);
    activeButton.classList.add('active');

    const activeContent = document.getElementById(contentId);
    activeContent.classList.add('active');
  }