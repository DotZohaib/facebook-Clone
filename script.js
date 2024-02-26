
    // JavaScript code goes here

    // Function to handle clicking on the navigation links
    const navLinks = document.querySelectorAll('nav .nav-middle a');
    navLinks.forEach(function (link) {
        link.addEventListener('click', function (event) {
            event.preventDefault();
            // Implement navigation functionality based on the clicked link
        });
    });

    // Function to handle creating a new post
    const newPostInput = document.querySelector('.post.create input');
    const newPostContent = document.querySelector('.post.create .post-content');
    const createPostButton = document.querySelector('.post.create .action i.fa-image');

    createPostButton.addEventListener('click', function () {
        const text = newPostInput.value;
        // Implement functionality to create a new post with the provided text
        // You can clear the input field and display the new post
    });

    // Function to handle liking a post
    const likeButtons = document.querySelectorAll('.post .post-bottom .action i.far.fa-thumbs-up');
    likeButtons.forEach(function (likeButton) {
        likeButton.addEventListener('click', function () {
            // Implement functionality to handle liking a post
            // Update the like count and UI
            const likeCount = likeButton.nextElementSibling;
            const currentLikes = parseInt(likeCount.textContent, 10) || 0;
            if (likeButton.classList.contains('liked')) {
                likeButton.classList.remove('liked');
                likeCount.textContent = currentLikes - 1;
            } else {
                likeButton.classList.add('liked');
                likeCount.textContent = currentLikes + 1;
            }
        });
    });

    // Function to handle commenting on a post
    const commentButtons = document.querySelectorAll('.post .post-bottom .action i.far.fa-comment');
    commentButtons.forEach(function (commentButton) {
        commentButton.addEventListener('click', function () {
            // Implement functionality to open a comment section for the post
            const post = commentButton.closest('.post');
            const commentsSection = post.querySelector('.comments-section');

            // You can show/hide the comments section or implement custom logic to handle comments
            // For example, you can add an input field to enter a new comment and display existing comments.
        });
    });

    // Function to handle sharing a post
    const shareButtons = document.querySelectorAll('.post .post-bottom .action i.fa-share');
    shareButtons.forEach(function (shareButton) {
        shareButton.addEventListener('click', function () {
            // Implement functionality to share the post
        });
    });

    // You can continue adding more features and event listeners as needed.

