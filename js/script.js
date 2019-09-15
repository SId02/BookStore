class Book {
      constructor(name, author, type, dop, price) {
        this.name = name;
        this.author = author;
        this.type = type;
        this.dop = dop;
        this.price = price;
      }
    }

    class Display {
      add(book) {
        let tableBody = document.querySelector('#tBody');
        let listofBook = `<tr>
                                    <td class="has-text-centered" >${book.name}</td>
                                    <td class="has-text-centered" >${book.author}</td>
                                    <td class="has-text-centered" >${book.type}</td>
                                     <td class="has-text-centered" >${book.dop}</td>
                                    <td class="has-text-centered" >${book.price}</td>
                                   

                                </tr>`;
        tableBody.innerHTML += listofBook;
      }

      clear() {
        let bookForm = document.querySelector('#bookForm');
        bookForm.reset();
      }

      validate({
        name,
        author,
        price,
        dop
      }) {
        if (name.length < 2 || author.length < 2 || price.length < 0 || dop.length < "") {
          return false
        } else {
          return true;
        }
      }
      show(type, displayMessage) {
        let message = document.querySelector('#message');
        let msgText;
        if (type === 'success') {
          msgText = 'Success';
        } else {
          msgText = 'Error!';
        }
        message.innerHTML = `
                <div class="notification is-${type}">
                        <strong>${ msgText}:</strong> ${displayMessage}
                </div> `;
        setTimeout(() => {
          message.innerHTML = ''
        }, 1000);

      }
    }
    var selectedRow = null;

    document.querySelector("#bookForm").addEventListener("submit", bookFormSubmit);

    function bookFormSubmit(e) {
      let name = document.querySelector('#name').value;
      let author = document.querySelector('#author').value;
      let price = document.querySelector('#price').value;
      let dop = document.querySelector('#dop').value;
      let type;
      let cooking = document.querySelector('#cooking');
      let programming = document.querySelector('#programming');
      let fiction = document.querySelector('#fiction');
      let biography = document.querySelector('#biography');
      let dictionary = document.querySelector('#dictionary');
      let horror = document.querySelector('#horror');
      let journalism = document.querySelector('#journalism');

      if (cooking.checked) {
        type = cooking.value;
      } else if (programming.checked) {
        type = programming.value;
      } else if (biography.checked) {
        type = biography.value;
      } else if (dictionary.checked) {
        type = dictionary.value;
      } else if (horror.checked) {
        type = horror.value;
      } else if (journalism.checked) {
        type = journalism.value;
      } else if (fiction.checked) {
        type = fiction.value;
      }

      let book = new Book(name, author, type, price, dop);

      let display = new Display();

      if (display.validate(book)) {

        display.add(book);
        display.clear();
        display.show('success', 'Book has been successfully added')
      } else {
        display.show('danger', 'Sorry cannot add Fields are empty');
      }

      e.preventDefault();
    }

  