<template lang="pug">
    <upload-image url="" name=""></upload-image>
</template>

<script>
    import UploadImage from 'vue-upload-image';
    import abstractField from "../abstractField";

	export default {
        mixins: [ abstractField ],
        template: '<upload-image url=""></upload-image>',
        components: {
            UploadImage
        }
	};
</script>

<style lang="sass">

	.vue-form-generator .field-image {

		.wrapper {
			width: 100%;
		}

		.preview {
			position: relative;
			margin-top: 5px;
			height: 100px;
			background-repeat: no-repeat;
			background-size: contain;
			background-position: center center;
			border: 1px solid #ccc;
			border-radius: 3px;
			box-shadow: inset 0 1px 1px rgba(0, 0, 0, .075);

			.remove {
				background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAXUlEQVR42u2SwQoAIAhD88vVLy8KBlaS0i1oJwP3piGVg0Skmpq8HjqZrWl9uwCbGAmwKYGZs/6iqgMyAdJuM8W2QmYKpLt/0AG9ASCv/oAnANd3AEjmAlFT1BypAV+PnRH5YehvAAAAAElFTkSuQmCC');
				width: 16px;
				height: 16px;

				font-size: 1.2em;

				position: absolute;
				right: 0.2em;
				bottom: 0.2em;
				opacity: 0.7;

				&:hover {
					opacity: 1.0;
					cursor: pointer;
				}
			}
		}
	}
</style>
