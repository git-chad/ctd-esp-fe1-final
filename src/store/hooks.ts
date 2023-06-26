import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "./store";
import type { TypedUseSelectorHook } from "react-redux";

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useAppDispatch: () => AppDispatch = useDispatch;