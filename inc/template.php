<?php
$args = array(
    'post_type' => 'quizzes',
    'posts_per_page' => 10,
    'orderby' => 'date',
    'order' => 'ASC'
);
$quizzes = new WP_Query( $args );

$quizes = $settings['total_quizes'];
$total_quizes = $quizzes->found_posts;
echo $total_quizes;
?>
<form action="" id="quiz-form">
		<?php foreach ( $quizzes->posts as  $quiz) : ?>
		<div class="quiz-<?php echo $quiz->ID; ?>">
			<h2><?php echo $quiz->post_title; ?></h2>
			<?php
			$option1 = get_post_meta($quiz->ID, 'option_1', true);
			$option2 = get_post_meta($quiz->ID, 'option_2', true);
			$answer = get_post_meta($quiz->ID, 'answer', true);
			?>
			<span style="display:none;"><?php echo $answer; ?></span>
			<input type="radio" name="options-<?php echo $quiz->ID; ?>" value="<?php echo $option1; ?>">
			<label><?php echo $option1; ?></label><br>
			<input type="radio" name="options-<?php echo $quiz->ID; ?>" value="<?php echo $option2; ?>">
			<label><?php echo $option2; ?></label><br>
		</div>


		<?php endforeach; ?>
        <input type="submit" value="Result" id="quiz-btn">
</form>
