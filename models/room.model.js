import mongoose from "mongoose";

const roomShcema = mongoose.Schema(
  {
    images: {
      type: [String],
      required: true,
    },
    desc: {
      type: [String],
      required: true,
    },

    isHourlyAvailable: {
      type: Boolean,
    },
    hourlyPrice: {
      type: Number,
    },
    recipie: {
      type: [String],
    },
    view: {
      type: [String],
    },
    roomFacilities: {
      type: [String],
    },
    roomNumbers: [
      {
        number: Number,
        unavailableDates: {
          type: [Date],
        },
      },
    ],
  },
  {
    timestamps: true,
  }
);

const RoomModel = mongoose.model("Room", roomShcema);

export default RoomModel;
