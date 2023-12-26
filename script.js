// script.js
document.addEventListener("DOMContentLoaded", function () {
  const passwordInput = document.getElementById("password");

  const confirmPasswordInput = document.getElementById("confirmPassword");

  const togglePassword = document.getElementById("togglePassword");

  togglePassword.addEventListener("click", function () {
    const type =
      passwordInput.getAttribute("type") === "password" ? "text" : "password";
    passwordInput.setAttribute("type", type);
    if (type === "text") {
      this.classList.remove("fa-eye");
      this.classList.add("fa-eye-slash");
    } else {
      this.classList.remove("fa-eye-slash");
      this.classList.add("fa-eye");
    }

    const type2 =
      confirmPasswordInput.getAttribute("type") === "password"
        ? "text"
        : "password";
    confirmPasswordInput.setAttribute("type", type2);
    if (type2 === "text") {
      this.classList.remove("fa-eye");
      this.classList.add("fa-eye-slash");
    } else {
      this.classList.remove("fa-eye-slash");
      this.classList.add("fa-eye");
    }
  });
});

// document.addEventListener("DOMContentLoaded", function () {
//   const passwordInput = document.getElementById("confirmPassword");
//   const togglePassword = document.getElementById("togglePassword");

//   togglePassword.addEventListener("click", function () {
//     const type =
//       passwordInput.getAttribute("type") === "password" ? "text" : "password";
//     passwordInput.setAttribute("type", type);
//     if (type === "text") {
//       this.classList.remove("fa-eye");
//       this.classList.add("fa-eye-slash");
//     } else {
//       this.classList.remove("fa-eye-slash");
//       this.classList.add("fa-eye");
//     }
//     // Change color on toggle
//   });
// });

function calculateCourse() {
  const checkboxes = document.getElementsByName("interest");
  let selectedCourses = [];

  checkboxes.forEach((checkbox) => {
    if (checkbox.checked) {
      selectedCourses.push(checkbox.value);
    }
  });

  if (selectedCourses.length < 2) {
    alert("Please select at least two interests.");
    return;
  }

  const courseCount = {};
  selectedCourses.forEach((course) => {
    courseCount[course] = (courseCount[course] || 0) + 1;
  });

  const sortedCourses = Object.keys(courseCount).sort(
    (a, b) => courseCount[b] - courseCount[a]
  );

  const resultElement = document.getElementById("result");

  // Clear previous results
  resultElement.innerHTML = "";

  const recommendedCourseElement = document.createElement("p");
  recommendedCourseElement.textContent = `Your recommended course is ${sortedCourses[0]} with `;
  resultElement.appendChild(recommendedCourseElement);

  const percentageSpan = document.createElement("span");
  percentageSpan.classList.add("percentage-bar");
  recommendedCourseElement.appendChild(percentageSpan);

  animatePercentageBar(
    percentageSpan,
    0,
    (courseCount[sortedCourses[0]] / selectedCourses.length) * 100,
    () => {
      // Callback function to display the popup after the percentage animation
      displayPopup(
        sortedCourses[0],
        (courseCount[sortedCourses[0]] / selectedCourses.length) * 100
      );
    }
  );

  const otherCoursesElement = document.createElement("p");
  otherCoursesElement.textContent = "Other courses:";
  resultElement.appendChild(otherCoursesElement);

  sortedCourses.slice(1).forEach((course) => {
    const percentage = (
      (courseCount[course] / selectedCourses.length) *
      100
    ).toFixed(2);
    const courseElement = document.createElement("p");
    courseElement.textContent = `${course}: ${percentage}%`;
    otherCoursesElement.appendChild(courseElement);
  });
}

function animatePercentageBar(
  element,
  currentPercentage,
  targetPercentage,
  onComplete
) {
  const step = 0.5;
  const duration = 1000;

  const updatePercentage = () => {
    currentPercentage += step;
    element.textContent = currentPercentage.toFixed(2) + "%";

    if (currentPercentage < targetPercentage) {
      requestAnimationFrame(updatePercentage);
    } else {
      // Animation complete, call the onComplete callback
      onComplete();
    }
  };

  updatePercentage();
}

function displayPopup(course, percentage) {
  // You can implement your popup logic here
  alert(
    `Congratulations! Your recommended course is ${course} with ${percentage.toFixed(
      2
    )}% interest.`
  );
}
