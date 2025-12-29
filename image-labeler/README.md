# image_labeler_aws
• Built an image labeling application using Amazon Rekognition and S3 to detect objects in images with confidence scores, visualizing results using Python and matplotlib.

# Image Label Generator using Amazon Rekognition

This project uses Amazon Rekognition to analyze images stored in Amazon S3
and automatically generate labels with confidence scores.

## Services Used
- Amazon S3
- Amazon Rekognition
- AWS IAM
- AWS CLI
- Python (boto3, matplotlib)

## Architecture
1. Images are uploaded to an S3 bucket
2. Python script calls Amazon Rekognition
3. Rekognition returns detected labels
4. Bounding boxes are drawn on the image

## How to Run
1. Configure AWS CLI
2. Upload image to S3 bucket
3. Run:
```bash
python image_labeler.py

