# Is It a Cat? Lab

## Objectives
1. Apply 3x3 convolutional kernels by hand to an image grid and calculate the resulting feature map.
2. Explain how different kernels detect features such as edges, corners, and textures.
3. Build and train a Convolutional Neural Network (CNN) that classifies images.
4. Evaluate the classifier’s accuracy and analyze examples it got wrong to suggest improvements.

## Vocabulary

| Vocabulary| Description |
| ----------- | ----------- |
| kernel | a small grid of weights (such as 3x3) that slides across an image to detect a feature |
| convolution | multiplying a kernel by each patch of an image and summing the results to produce a new value |
| feature map | the output grid created by applying a kernel to an entire image |
| flatten | reshaping a multidimensional array (like a `(64, 64, 3)` image) into a 1D vector of values |
| epoch | one complete pass through all of the training data |
| confusion matrix | a table that compares a model's predictions to the actual labels, showing correct and incorrect predictions for each class |

## Your Task

### Part 1: Convolution by Hand

1. On paper or in a markdown cell, copy the 5x5 grayscale image grid below.

```
 0   0   0   0   0
 0  10  10  10   0
 0  10  10  10   0
 0  10  10  10   0
 0   0   0   0   0
```

2. Apply the 3x3 vertical edge kernel below to the grid. Slide the kernel across every position where it fully fits and calculate the 3x3 feature map.

```
-1   0   1
-1   0   1
-1   0   1
```

3. Apply the horizontal edge kernel (the vertical kernel rotated 90 degrees) to the same grid. What is different about the two feature maps? Add a markdown cell explaining what each kernel "looks for."

### Part 2: The Cat Classifier

4. Open the `CatNotCat.ipynb` starter notebook in Google Colab. Run the first two cells to download the `train_catvnoncat.h5` and `test_catvnoncat.h5` datasets and import the libraries.

5. Load the training and test data. How many photos are in each dataset, and what is the shape of each photo? Add a markdown cell explaining what each number in `X_train.shape` means.

6. Display a random training photo and the first 25 training photos with their labels. Do any of the labels surprise you?

7. **Scale** the data by dividing every pixel value by `255.0`. Why do we scale the data before training? *Tip: what are the smallest and largest possible pixel values?*

8. Train the provided model. It uses a `Flatten` layer followed by `Dense` layers. Record the training and test accuracy, and plot the cost and accuracy over all epochs.

9. Plot the **confusion matrix** heat map for the test photos. Which type of mistake does the model make most often: calling a cat a NOT-CAT, or calling a NOT-CAT a cat?

### Part 3: Build a CNN

10. Replace the model with a **Convolutional Neural Network**. Add at least two `Conv2D` layers (with `MaxPooling2D` after each) before the `Flatten` layer. *Tip: a `Conv2D(16, (3, 3), activation='relu')` layer learns sixteen 3x3 kernels, just like the ones you applied by hand.*

```python
model = tf.keras.Sequential([
    tf.keras.layers.Conv2D(16, (3, 3), activation='relu', input_shape=(xy_pixels, xy_pixels, n_color_layers)),
    tf.keras.layers.MaxPooling2D((2, 2)),
    # add more layers here
    tf.keras.layers.Flatten(),
    tf.keras.layers.Dense(1, activation='sigmoid')
])
```

11. Train your CNN and compare its test accuracy and confusion matrix to the original model. Try changing the number of filters, layers, epochs, or the optimizer to improve your results.

12. Display at least 5 test photos your CNN classified **incorrectly**, along with the predicted probability of being a cat. What do these photos have in common? Add a markdown cell suggesting ways to improve the model.

13. Save your trained model with `model.save()`.

14. **Just for fun:** upload your own photo, resize it to 64x64 pixels, scale it, and ask your model if it is a cat.

## Tips, Tricks, and Resources

- [Keras Conv2D Layer](https://keras.io/api/layers/convolution_layers/convolution2d/)
- [TensorFlow CNN Tutorial](https://www.tensorflow.org/tutorials/images/cnn)
- [Image Kernels Explained Visually](https://setosa.io/ev/image-kernels/)
- A color photo that is 64x64 pixels has 64 x 64 x 3 = 12,288 values once it is flattened.
- If training is slow, switch the Colab runtime to a GPU under **Runtime > Change runtime type**.

## Reflection Questions
1. How does a convolutional kernel detect features like edges and corners?
2. Why might a CNN classify images better than a model that only flattens the image and uses Dense layers?
3. What does your confusion matrix tell you about your model that accuracy alone does not?
4. Based on the photos your model got wrong, what changes to the model or the data would most improve it?

## How to Submit

Attach your GitHub repository to Google Classroom. Then, show your instructor your GitHub repository with your notebook, your hand-calculated feature maps, and your CNN's results. You will also need to answer the reflection questions.

## Rubric
- **20 points** - All required items are present.
- **0 points** - Task was not attempted to completion or student should reattempt.
