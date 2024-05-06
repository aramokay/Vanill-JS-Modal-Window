# Vanill JS Modal Window

[![Modal window in Vanilla Javascript](https://github.com/josenavarrohub/vanilla-js-modal-window/blob/main/demo.png?raw=true)](https://github.com/aramokay)

## Demo
[https://aramokay.github.io/Vanill-JS-Modal-Window/](https://aramokay.github.io/Vanill-JS-Modal-Window/)

# How to Use Vanilla JS Modal Window

## Introduction

This documentation provides a step-by-step guide on how to use the Vanilla JS Modal Window script in your project. The modal window allows you to display content or messages in a pop-up overlay on your webpage.

## Getting Started

1. **Download the Files:**
   - Download the `modal.js` and `modal.css` files from the GitHub repository.

2. **Include the Files:**
   - Include `modal.js` and `modal.css` in your project directory.

3. **Link CSS File:**
   - In the `<head>` section of your HTML file, add a link to the `modal.css` file:
     ```html
     <link rel="stylesheet" href="path/to/modal.css">
     ```

4. **Add HTML Structure:**
   - Create the HTML structure for your modal window in your HTML file:
     ```html
     <div id="modal" class="modal">
       <div class="modal-content">
         <!-- Your modal content here -->
         <span class="close">&times;</span>
         <p>This is a modal window!</p>
       </div>
     </div>
     ```

5. **Initialize the Modal:**
   - At the end of your HTML body or in an external JavaScript file, initialize the modal:
     ```html
     <script src="path/to/modal.js"></script>
     <script>
       const modal = new Modal();
     </script>
     ```

6. **Trigger the Modal:**
   - To open the modal window, call the `openModal()` method:
     ```html
     <button onclick="modal.openModal()">Open Modal</button>
     ```

7. **Close the Modal:**
   - To close the modal window, click on the close button or anywhere outside the modal.

## Customization

You can customize the modal window according to your preferences by modifying the `modal.css` file. Additionally, you can customize the modal content by editing the HTML structure inside the modal container.

## Example

For a complete example, refer to the `index.html` file in the GitHub repository.

## Support

If you encounter any issues or have any questions, feel free to open an issue in the GitHub repository.



## Author

#### Aram Sargsyan - [View profile](https://github.com/aramokay)
