import HotelModel from "../models/hotel.model.js";
import RoomModel from "../models/room.model.js";

export const createRoom = async (req, res, next) => {
  const hotelId = req.params.id;
  const newRoom = new RoomModel(req.body);

  try {
    const savedRoom = await newRoom.save();
    try {
      await HotelModel.findByIdAndUpdate(hotelId, {
        $push: {
          rooms: savedRoom._id,
        },
      });
      res.status(200).json(savedRoom);
    } catch (error) {
      res.status(400).json("error when pushing room data to the hotel");
    }
  } catch (error) {
    res.status;
  }
};

export const updateRoom = async (req, res, next) => {
  try {
    const updatedRoom = await RoomModel.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );

    res.status(200).json(updatedRoom);
  } catch (error) {
    res.status(400).json("there is a error when updating the room");
  }
};

export const deleteRoom = async (req, res, next) => {
  const hotelId = req.params.hotelId;

  try {
    await RoomModel.findByIdAndDelete(req.params.id);

    try {
      const updatedHotel = await HotelModel.findByIdAndUpdate(
        hotelId,
        {
          $pull: req.params.id,
        },
        { new: true }
      );

      res.status(200).json({
        message: "succesfully deleted the room",
        newHotelDetails: updatedHotel,
      });
    } catch (error) {
      console.log(error);

      res.status(400).json("error when updating the rooms in hotel");
    }
  } catch (error) {
    console.log(error);
    res.status(400).json("error when deleting the room");
  }
};

export const getRooms = async (req, res, next) => {
  try {
    const rooms = await RoomModel.find();
    res.status(200).json(rooms);
  } catch (error) {
    console.log(error);
    res.status(400).json("error when getting all rooms");
  }
};

export const getRoomById = async (req, res, next) => {
  try {
    const room = await RoomModel.findById(req.params.id);
    res.status(200).json(room);
  } catch (error) {
    res.status(400).json(`error when getting ${req.params.id}`);
  }
};