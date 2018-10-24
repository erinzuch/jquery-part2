"use strict";
$(document).ready(() => {
  let table = null;

  $(document)
    .on("mouseenter", ".available", (event) => { //when mouse enters a table with a class of available, the table is fading in 
      $(event.target).fadeTo(500, 0.5);
    })
    .on("mouseleave", ".available", (event) => { //when mouse leaves the table with a class of available, fade out 
      $(event.target).fadeTo(500, 1);
    })
    .on("mouseenter", ".reserved", (event) => { // when your mouse enters a table with a class of reserved, it changes the cursor to not allowed
      $(event.target).css("cursor", "not-allowed");
    })
    .on("click", ".available", (event) => { // when you click an available table
      $(".reserve-form").fadeIn(2000); //form fades in
      $(".reserve-form").css("display", "flex"); //form is styled as display flex
      table = $(event.target); // setting the variable table to be equal to the specific table you are clicking on aka event.target
      if (event.target.tagName === "P") {
        $(".form-table-num").text(`Table Number: ${table.text()}`);
      } else {
        $(".form-table-num").text(`Table Number: ${table.children().text()}`);
      }
    })
    .on("click", ".form-x, .form-save", (event) => {//when you click the X on the form or the save button do this...
      table
      $(".reserve-form").fadeOut(2000);//form will fade out
      // we need to assign data to tables that are reserved
      if ($(event.target).hasClass("form-save")) {
        table
          .attr("name", $("input").eq(0).val())
          .attr("phone", $("input").eq(1).val())
          .attr("partysize", $("input").eq(2).val())
        table.removeClass("available").addClass("reserved");
        $("input").each(function () {
          $(this).val("");
        })
      }
    })

    .on("mouseenter", ".reserved", (event) => {
      if ($(event.target).attr("name") && $(event.target).attr("partysize")) {
        $(event.target).append(`
          <section class="tooltip">
          Name: ${$(event.target).attr("name")}
          PartySize: ${$(event.target).attr("partysize")}
          </section>
          `)
      }
    })
      
      .on("mouseleave", ".reserved", (event) => {
        $(".tooltip").remove();
      })
    });


