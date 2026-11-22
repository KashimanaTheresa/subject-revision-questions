// TOPIC MAP - LESSON SELECTION

// Get the learning area
const learningArea = document.getElementById("learningArea");

// Get the lesson title
const lessonTitle = document.getElementById("lessonTitle");

// Get the close button
const closeLessonButton = document.getElementById("closeLesson");

// Open the selected lesson

document.querySelectorAll(".lesson-node.available, .lesson-node.completed").forEach(function (node) {
    node.addEventListener("click", function () {

        const topicId = node.dataset.topicId;
        const lesson = lessonData[topicId];

        if (!lesson) {
            console.log("Lesson data not found:", topicId);
            return;
        }

        learningArea.hidden = false;
        document.querySelector(".topic-map-section").hidden = true;

        lessonTitle.textContent = lesson.title;

        document.getElementById("videoContainer").innerHTML = `
            <iframe
                src="${lesson.video}"
                title="${lesson.title}"
                allowfullscreen
                loading="lazy">
            </iframe>
        `;

        learningArea.scrollIntoView({ behavior: "smooth" });
    });
});


// Return to the topic map
closeLessonButton.addEventListener("click", function () {
    learningArea.hidden = true;

    document.querySelector(".topic-map-section").hidden = false;

    window.scrollTo({ top: 0, behavior: "smooth" });
});


// LESSON CONTENT
const lessonData = {
    "introduction-to-web-development": {
        title: "Introduction to Web Development",
        video: "https://www.youtube.com/embed/kUMe1FH4CHE"
    },

    "html-document-structure": {
        title: "HTML Document Structure",
        video: "https://www.youtube.com/embed/kUMe1FH4CHE?start=1213"
    },

    "headings-paragraphs-links": {
        title: "Headings, Paragraphs and Links",
        video: "https://www.youtube.com/embed/kUMe1FH4CHE?start=1742"
    },

    "images-lists-tables": {
        title: "Images, Lists and Tables",
        video: "https://www.youtube.com/embed/kUMe1FH4CHE?start=2985"
    },

    "forms-semantic-html": {
        title: "Forms and Semantic HTML",
        video: "https://www.youtube.com/embed/kUMe1FH4CHE?start=7258"
    }
};
