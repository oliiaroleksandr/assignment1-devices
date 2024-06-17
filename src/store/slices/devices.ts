import { createSelector, createSlice } from "@reduxjs/toolkit";
import Deviceimage from "@/assets/device.jpg";
import { RootState } from "../store";
import { selectSort } from "./sort";
import { sortObjects } from "@/shared/utils";
import { Device } from "@/shared/types";

const intialDevices = [
  {
    id: 1,
    image: Deviceimage,
    title: "Ipad Pro",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem quia incidunt sequi illum labore? Quia pariatur deleniti quam itaque tempore?",
    subscriptionPrice: 800,
    copayment: 100,
  },
  {
    id: 2,
    image: Deviceimage,
    title: "Iphone 12",
    description:
      "Designed by Apple to complement iPhone 12 Pro Max, the Leather Case with MagSafe is a delightful way to give your iPhone extra protection while adding style.",
    subscriptionPrice: 600,
    copayment: 10,
  },
  {
    id: 3,
    image: Deviceimage,
    title: "Samsung S23",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem quia incidunt sequi illum labore? Quia pariatur deleniti quam itaque tempore?",
    subscriptionPrice: 700,
    copayment: 10,
  },
  {
    id: 4,
    image: Deviceimage,
    title: "Mackbook Pro",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem quia incidunt sequi illum labore? Quia pariatur deleniti quam itaque tempore?",
    subscriptionPrice: 1800,
    copayment: 200,
  },
];

const devicesSlice = createSlice({
  name: "devices",
  initialState: {
    devices: intialDevices,
  },
  reducers: {},
});

export const { reducer: devicesReducer, reducerPath: devicesReducerPath } =
  devicesSlice;

const selectDevices = (state: RootState) => state.devices.devices;

export const selectSortedDevices = createSelector(
  [selectDevices, selectSort],
  (devices, sort) => {
    return sortObjects({
      sort: {
        sortKey: sort.sortKey as keyof Device,
        sortOrder: sort.sortOrder,
      },
      data: devices,
    });
  },
);
