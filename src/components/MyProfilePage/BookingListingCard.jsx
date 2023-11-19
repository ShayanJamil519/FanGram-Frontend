import React from "react";
import BookingStepsProgress from "./BookingStepsProgress";

function BookingListingCard({ booking }) {
  console.log("booking", booking);

  function formatDate(dateString) {
    const date = new Date(dateString);
    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0"); // January is 0
    const year = date.getFullYear();

    return `${day}-${month}-${year}`;
  }

  return (
    <div className="flex flex-col lg:flex-row gap-6 bg-[#202020] rounded-2xl px-6 py-3">
      <div
        className="w-[150px] md:w-[250px] lg:w-[275px] rounded-2xl overflow-hidden border border-[#ccc]"
        style={{
          background: "lightgray 50%",
          margin: "0 auto",
        }}
      >
        <img
          src={booking?.celebrityID?.celebrityImage}
          alt="celebrity"
          className="w-full max-h-[175px] md:max-h-[275px] object-fill"
        />
      </div>
      <div className="w-full">
        <h1 className="font-extrabold text-2xl md:text-3xl lg:text-4xl text-center lg:text-left mb-2 md:mb-0">
          {booking.name}
        </h1>
        <div className="flex flex-col lg:flex-row w-full py-4 text-sm md:text-base">
          <div className="flex w-full lg:w-2/3 flex-col lg:flex-row items-center font-semibold">
            <div className="w-full lg:w-1/2 lg:border-r-2">
              <div className="flex justify-between mb-2 lg:mb-4 font-semibold">
                <span className="w-full text-[#7E7E7E]">Request For</span>
                <span className="w-full text-right lg:text-left">
                  Recorder Video
                </span>
              </div>
              <div className="flex justify-between mb-2 lg:mb-0">
                <p className="w-full text-[#7E7E7E]">Booking Date</p>
                <p className="w-full text-right lg:text-left">
                  {formatDate(booking?.createdAt)}
                </p>
              </div>
            </div>
            <div className="w-full lg:w-1/2">
              <div className="flex justify-between mb-2 lg:mb-4">
                <span className="w-full lg:ml-12 text-[#7E7E7E]">Order Id</span>
                <span className="w-full text-right lg:text-left">
                  {booking?._id}
                </span>
              </div>
              <div className="flex justify-between mb-2 lg:mb-0">
                <p className="w-full lg:ml-12 text-[#7E7E7E]">Amount</p>
                <p className="w-full text-right lg:text-left">
                  Rs {booking?.price}
                  <sub className="text-[#7E7E7E] text-xs">(INC. OF GST)</sub>
                </p>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-1/3 flex justify-between items-end lg:flex-col gap-1 font-semibold">
            {booking.bookingTo && (
              <>
                <p className="text-[#7E7E7E]">Booking For</p>
                <p>{booking.bookingTo.name}</p>
              </>
            )}

            <p className="hidden lg:flex text-[#D42978] underline">
              Need help?
            </p>
          </div>
          <p className="lg:hidden text-[#D42978] underline mt-6 text-center">
            Need help?
          </p>
        </div>
        <div className="w-full flex items-center justify-center">
          <BookingStepsProgress currentIndex={booking?.bookingStatus} />
        </div>
      </div>
    </div>
  );
}

export default BookingListingCard;
