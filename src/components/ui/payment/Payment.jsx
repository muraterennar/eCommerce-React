import React, {useEffect, useState} from 'react';
import ContainerPage from "../../../tools/container/ContainerPage";
import {useDispatch, useSelector} from "react-redux";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import DialogModel from "../../../tools/dialogs/DialogModel";
import {showDialogReducer} from "../../../redux/slices/dialogSlice";
import {useNavigate} from "react-router-dom";

function Payment() {

    const shippingEsmite = 5;
    const taxEsmite = 8;

    const navigate = useNavigate();

    // ---------- SAYAÇ
    const [sayac, setSayac] = useState(null);

    useEffect(() => {
        if (sayac > 0) {
            const timer = setTimeout(() => {
                setSayac(sayac - 1);
            }, 1000);

            return () => clearTimeout(timer);
        } else {
            dispatch(showDialogReducer(false));
            if (sayac === 0)
                navigate('/payment/complete');
            console.log('bitti');
        }
    }, [sayac]);

    const handleBasla = () => {
        setSayac(5);
    };

    const dispatch = useDispatch();
    const {totalAmount} = useSelector(state => state.cart);
    const openDialogModelHandler = () => {
        dispatch(showDialogReducer(true));
        handleBasla();
    }


    // DATE PICKER CONFIG
    const [startDate, setStartDate] = useState(new Date());
    const renderMonthContent = (month, shortMonth, longMonth) => {
        const tooltipText = `Tooltip for month: ${longMonth}`;
        return <span title={tooltipText}>{shortMonth}</span>;
    };


    return (
       <>

           <ContainerPage>
               <div className={"mt-12"}>
                   <h1 className={"text-4xl font-semibold antialiased px-0 py-8"}>Payment</h1>

                   <div className={"flex justify-between items-start h-auto gap-12"}>
                       <div className={"flex flex-col justify-between items-start w-8/12"}>
                           <div className={"w-full border-t py-5"}>
                               <h1 className={"capitalize text-lg antialiased font-medium"}>Shipping information</h1>

                               <div className={"grid grid-cols-2 gap-4 mt-4"}>
                                   <div className={"flex flex-col w-10/12"}>
                                       <label htmlFor="firstname" className={"text-base py-2 text-darkColor"}>First Name</label>
                                       <input type="text" id={"firstname"} placeholder={"Jack"} required className={"border border-gray-300 rounded-md p-1 px-2 shadow-sm"}/>
                                   </div>
                                   <div className={"flex flex-col w-10/12"}>
                                       <label htmlFor="lastname" className={"text-base py-2 text-darkColor"}>Last Name</label>
                                       <input type="text" id={"lastname"} placeholder={"Black"} required className={"border border-gray-300 rounded-md p-1 px-2 shadow-sm"}/>
                                   </div>
                               </div>

                               <div className={"grid grid-cols-2 gap-4 mt-4"}>
                                   <div className={"flex flex-col w-10/12"}>
                                       <label htmlFor="email" className={"text-base py-2 text-darkColor"}>Email</label>
                                       <input type="email" required id={"email"} placeholder={"info@info.com"} className={"border border-gray-300 rounded-md p-1 px-2 shadow-sm"}/>
                                   </div>
                                   <div className={"flex flex-col w-10/12"}>
                                       <label htmlFor="phone" className={"text-base py-2 text-darkColor"}>Phone</label>
                                       <input type="tel" id={"phone"} required placeholder={"05553334466"} className={"border border-gray-300 rounded-md shadow-sm p-1 px-2"}/>
                                   </div>
                               </div>

                               <div className={"flex flex-col w-full"}>
                                   <label htmlFor="adress" className={"text-base py-2 text-darkColor"}>Adress</label>
                                   <textarea id={"adress"} className={"border border-gray-300 rounded-md p-1 shadow-sm"}/>
                               </div>
                           </div>

                           <div className={"w-full border-t py-5"}>
                               <h1 className={"capitalize text-lg antialiased font-medium"}>Cart Information</h1>

                               <div className={"flex flex-col w-10/12 mt-4"}>
                                   <label htmlFor="cartNumber" className={"text-base py-2 text-darkColor"}>Cart Number</label>
                                   <input type="text" id={"cartNumber"} placeholder={"4444 **** **** ****"} required className={"border border-gray-300 rounded-md p-1 px-2 shadow-sm"}/>
                               </div>

                               <div className={"flex flex-col w-10/12 mt-4"}>
                                   <label htmlFor="onCartName" className={"text-base py-2 text-darkColor"}>On Cart Name</label>
                                   <input type="text" id={"onCartName"} placeholder={"Jack Black"} required className={"border border-gray-300 rounded-md p-1 px-2 shadow-sm"}/>
                               </div>

                               <div className={"grid grid-cols-2 gap-4 mt-4"}>
                                   <div className={"flex flex-col w-10/12"}>
                                       <label htmlFor="expirationDate" className={"text-base py-2 text-darkColor"}>Expiration Date</label>
                                       {/*<input type="datetime-local" id={"expirationDate"} placeholder={"01/27"} required className={"border border-gray-300 rounded-md p-1 px-2 shadow-sm"}/>*/}
                                       <DatePicker selected={startDate} autoFocus={true} onChange={(date) => setStartDate(date)} dateFormat="MM/yyyy" renderMonthContent={renderMonthContent}
                                                   showMonthYearPicker className={"border border-gray-300 rounded-md p-1 px-2 shadow-sm w-full"} />
                                   </div>
                                   <div className={"flex flex-col w-10/12"}>
                                       <label htmlFor="cvv" className={"text-base py-2 text-darkColor"}>CVV</label>
                                       <input type="text" id={"cvv"} placeholder={"111"} required className={"border border-gray-300 rounded-md p-1 px-2 shadow-sm"}/>
                                   </div>
                               </div>

                           </div>
                       </div>

                       <div
                           className={"bg-gray-50 rounded-md p-12 flex flex-col justify-between items-start gap-4 w-4/12"}>
                           <h1 className={"text-lg font-medium"}>Order Summary</h1>
                           <div className={"flex flex-col justify-start items-start w-full gap-1"}>
                               <div
                                   className={"flex justify-between items-start w-full border-b py-4 text-sm text-gray-500"}>
                                   <p>Subtotal</p> <span>${totalAmount}</span></div>
                               <div
                                   className={"flex justify-between items-start w-full border-b py-4 text-sm text-gray-500"}>
                                   <p>Shipping estimate</p> <span>${shippingEsmite}</span></div>
                               <div
                                   className={"flex justify-between items-start w-full border-b py-4 text-sm text-gray-500"}>
                                   <p>Tax estimate</p> <span>${taxEsmite}</span></div>
                               <div className={"flex flex-col justify-between items-center w-full mt-2 gap-5"}>
                                   <div className={"flex justify-between items-start w-full"}>
                                       <p className={"cursor-lg"}>Order total</p>
                                       <span>${totalAmount > 0 ? totalAmount + (shippingEsmite + taxEsmite) : 0}</span>
                                   </div>
                                   <button onClick={()=>openDialogModelHandler()}
                                       className={"transition-colors duration-150 bg-indigo-600 hover:bg-indigo-500 w-full text-white py-3 rounded-md"}>Complete
                                   </button>
                               </div>
                           </div>
                       </div>
                   </div>
               </div>
           </ContainerPage>



           <DialogModel title={"Ödeme Yapılıyor"} buttonTitle={"Ödemeyi Tamamla"}>
               <img src="https://firebasestorage.googleapis.com/v0/b/file-upload-firebase-d3899.appspot.com/o/ecommerce%2Fcash.gif?alt=media&token=58601448-3df4-48ba-a1bc-91cebd6d202d" alt="gif"/>
           </DialogModel>
       </>
    );
}

export default Payment;