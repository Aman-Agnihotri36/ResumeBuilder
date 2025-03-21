import { useDispatch, useSelector, TypedUseSelectorHook } from 'react-redux'
import type { RootState, AppDispatch } from './redux/store'

// Create a typed version of useDispatch
export const useAppDispatch: () => AppDispatch = useDispatch

// Create a typed version of useSelector
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
