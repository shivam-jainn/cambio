import gogglePayIcon from "/assets/googlepayicon.png";
function PaymentInfoCard() {
    return (
        <div className="flex flex-col justify-center px-4 py-6 md:p-6 xl:p-8 w-full bg-gray-50 dark:bg-gray-800 space-y-6">
            <h3 className="text-xl dark:text-white font-semibold leading-5 text-gray-800">Payment</h3>
            <div className="flex justify-between items-start w-full">
                <div className="flex justify-center items-center space-x-4">
                    <div className="w-8 h-8">
                        <img className="w-full h-full" alt="logo" src={gogglePayIcon} />
                    </div>
                    <div className="flex flex-col justify-start items-center">
                        <p className="text-lg leading-6 dark:text-white font-semibold text-gray-800">Google Pay UPI<br /><span className="font-normal">randomupi@okbank</span></p>
                    </div>
                </div>
            </div>
            <div className="w-full flex justify-center items-center">
                <button className="hover:bg-black dark:bg-white dark:text-gray-800 dark:hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 py-5 w-96 md:w-full bg-gray-800 text-base font-medium leading-4 text-white">Continue to Payment</button>
            </div>
        </div>
    )
}

export default PaymentInfoCard;