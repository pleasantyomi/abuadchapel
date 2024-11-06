/* eslint-disable @typescript-eslint/no-unused-vars */
export default function ContactUS() {
    const options = [
        {
            title : "option1",
            id : 1
        },

        {
            title : "option2",
            id : 2
        },

        {
            title : "option3",
            id : 3
        },

        {
            title : "option4",
            id : 4
        }
    ]
    return(
        <div className="lg:w-6/12 w-11/12 mx-auto text-black">
            <h2 className="text-center text-lg pb-8">Select the form you wish to fill and we will get back to you shortly</h2>
            <div className="grid gap-5">
                {options.map((option) =>(
                    <div key={option.id}>
                        <div className="w-full rounded-md border-[1px] border-black lg:p-5 p-3 cursor-pointer">
                            <span className="text-black">{option.title}</span>
                        </div>
                    </div>
                ))}
            </div>

        </div>
    )
}