import HotelModel from "../models/hotel.model.js";
import RoomModel from "../models/room.model.js";

export const get = (req, res) => {
  try {
    res.status(200).json("done");
  } catch {
    console.log("there is an error");
  }
};

export const createHotel = async (req, res, next) => {
  const newHotel = new HotelModel(req.body);
  try {
    const savedHotel = await newHotel.save();
    res.status(200).json(savedHotel);
  } catch (error) {
    next(error);
  }
};

export const updateHotel = async (req, res, next) => {
  try {
    const updatedHotel = await HotelModel.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(updatedHotel);
  } catch (error) {
    next(error);
  }
};
export const deleteHotel = async (req, res, next) => {
  try {
    await HotelModel.findByIdAndDelete(req.params.id);
    res.status(200).json("Hotel has been deleted.");
  } catch (error) {
    next(error);
  }
};
export const getHotelById = async (req, res, next) => {
  try {
    const hotel = await HotelModel.findById(req.params.id);
    res.status(200).json(hotel);
  } catch (error) {
    next(error);
  }
};
export const getHotels = async (req, res, next) => {
  try {
    const hotels = await HotelModel.find();
    res.status(200).json(hotels);
  } catch (error) {
    next(error);
    res.status(400).json("cannot get hotels");
  }
};

// export const getHotelRoom = async (req, res, next) => {
//   try {
//     console.log("line 62");
//     const hotel = await HotelModel.findById(req.params.id);
//     console.log("line 64", hotel);
//     const roomList = await Promise.all(
//       hotel.rooms.map((room) => {
//         console.log(room);
//         const l = RoomModel.findById(room);
//         // console.log(l);
//         return RoomModel.findById("635b78f9ffb019ba05b90024");
//       })
//     );
//     console.log("line 71");

//     res.status(200).json(roomList);
//   } catch (error) {
//     res.status(400).json("error with getting rooms");
//   }
// };
export const getHotelRooms = async (req, res, next) => {
  const hotelId = req.params.id;
  console.log(hotelId);

  try {
    const hotel = await HotelModel.findById(hotelId);
    const list = await Promise.all(
      hotel.rooms.map((room) => {
        console.log(room);
        if (room !== "") {
          return RoomModel.findById(room);
        } else {
          res.status(400).json("there is no rooms");
        }
      })
    );
    res.status(200).json(list);
  } catch (err) {
    next(err);
  }
};

export const deleteAllRooms = async (req, res, next) => {
  try {
  } catch (error) {
    next(er);
  }
};
