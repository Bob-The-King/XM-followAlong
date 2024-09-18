<html>
    <?php
        require_once("initialize.php");

        $feedback = $_POST["feedback"];
        $rating = $_POST["rating"];

        $sql = "INSERT INTO testimonials (feedback, rating) VALUES (\"$feedback\", \"$rating\")";

        $result = mysqli_query($connection, $sql);

        if($result) {
            echo "<h2>Testimonial Created!</h2>";
        } else {
            echo "Error! Testimonial not created.";
        }

    ?>

        <a href="index.php">Return to Testimonials</a>
</html>