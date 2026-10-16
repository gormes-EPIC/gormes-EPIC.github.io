# Image Editing with Array Transformations Lab

## Objectives
1. Explain how a digital image is stored as a multidimensional array of pixel values.
2. Identify the structure of grayscale and color images, including height, width, and color channels.
3. Apply array operations such as slicing, flipping, rotating, and scaling to edit an image.
4. Compare common data formats and describe when each is used.

## Vocabulary

| Vocabulary| Description |
| ----------- | ----------- |
| pixel | the smallest unit of a digital image; a single point of color |
| array | a grid of values stored in rows and columns; images are stored as arrays of pixel values |
| color channel | one layer of an image that stores a single color (red, green, or blue) for every pixel |
| shape | the size of an array in each dimension, written as `(height, width, channels)` for a color image |
| slicing | selecting part of an array using `arr[start:stop:step]` |

## Your Task

1. Find an image (`.jpg` or `.png`) that you would like to edit and save it in the same folder as a new Jupyter Notebook file.

2. Import the `matplotlib.pylab` library as `plt` (by convention).

3. Create an array called `image` with `plt.imread(image_name)` and display it with `plt.imshow(image)`.

4. Print out `image`. What do all those numbers mean? Add a markdown cell explaining your answer.

5. How many pixels wide and tall is your image? Display your answer as integers. *Tip: Try using `image.shape`.*

6. **Crop** your image to a 100x100 pixel image from the top right corner of your image. *Tip: Remember array slicing with `arr[:,:]`?*

7. **Compress** your image by creating a new image half the size of your original, using every other pixel. You can make it even more pixelated by choosing every third, fourth, fifth pixel, etc.

8. **Rotate** your image by creating a new image that is a 90 degree counterclockwise rotation of the original. Try to do this by modifying the pixels of the array yourself before reaching for a built-in function.

9. **Just for fun:** look at the red, green, and blue channels of your image individually using array slicing. You may need to `pip install numpy`. Make sure you activate your virtual environment. 

```python
import numpy as np

fig, axs = plt.subplots(nrows=1, ncols=3, figsize=(20,8))

for c, ax in zip(range(3), axs):
    rgb_img = np.zeros(image.shape, dtype=image.dtype)
    rgb_img[:,:,c] = image[:,:,c]
    ax.imshow(rgb_img)
    ax.set_axis_off()
```

## Tips, Tricks, and Resources

- [matplotlib Image Tutorial](https://matplotlib.org/stable/tutorials/images.html)
- [NumPy Indexing and Slicing](https://numpy.org/doc/stable/user/basics.indexing.html)
- A `.jpg` loads as whole numbers from `0` to `255`, while a `.png` loads as decimals from `0.0` to `1.0` and may have a fourth (transparency) channel.
- Remember that negative indexes count from the end of an array, and a step of `-1` reverses it.

## Reflection Questions
1. How is a color image stored differently than a grayscale image?
2. Explain how you used array slicing to crop, compress, and rotate your image.
3. What is the difference between file formats like `.jpg` and `.png`? When would you choose one over the other?

## How to Submit

Attach your GitHub repository to Google Classroom. Then, show your instructor your GitHub repository with your notebook and demonstrate your edited images. You will also need to answer the reflection questions.

## Rubric
- **20 points** - All required items are present.
- **0 points** - Task was not attempted to completion or student should reattempt.
