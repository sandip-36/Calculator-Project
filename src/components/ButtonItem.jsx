function ButtonItem({buttonClick}) {

    const buttonVal = ["AC", "C", "%", "÷", "7", "8", "9", "x", "4", "5", "6", "-", "1", "2", "3", "+", "0", ".", "=",]

    let handleButton = () => {
        console.log(`button is click`);
    }

    return <>
        <div class="buttons">
            {buttonVal.map((item) => {
                let handleButton = () => {
                    console.log(`button is click ${item}`);
                }

                let buttonClass = "button";

                if(["AC", "c", "%"].includes(item)){
                    buttonClass = "button special"
                }

                if (["÷", "x", "-", "+", "=",].includes(item)){
                    buttonClass = "button operator"
                }

                if (item === "0"){
                    buttonClass = "button zero"
                }
                return (
                <button key={item} class={buttonClass}
                onClick={() => buttonClick(item)}
                >{item}</button>
            );
            })}

        </div>
    </>
}

export default ButtonItem;