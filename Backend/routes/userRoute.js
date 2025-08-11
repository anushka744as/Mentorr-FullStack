import express from 'express'
import { registerUser,loginUser, getProfile, updateProfile, bookAppointment, listAppointment , cancelAppointment, paymentRazorpay, verifyRazorpay, generateOtp, verifyOtp,} from '../controllers/userController.js'
import authUser from '../middlewares/authUser.js'
import upload from '../middlewares/multer.js'
import { addDoctor } from '../controllers/adminController.js'

const userRouter = express.Router()

userRouter.post('/register',registerUser)
userRouter.post('/login',loginUser)
userRouter.post('/generate-otp',generateOtp)
userRouter.post('/verify-otp', verifyOtp);

userRouter.get('/get-profile',authUser,getProfile)
userRouter.post('/update-profile',upload.single('image'),authUser,updateProfile)
userRouter.post('/book-appointment',authUser,bookAppointment)
userRouter.get('/appointments',authUser,listAppointment)
userRouter.post('/cancel-appointment',authUser,cancelAppointment)
userRouter.post('/payment-razorpay',authUser,paymentRazorpay)
userRouter.post('/verifyRazorpay',authUser,verifyRazorpay)
userRouter.post('/add-doctor',upload.single('image'),addDoctor)


export default userRouter