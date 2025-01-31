const ClockTime = () => {

    let time = new Date();

    return (
        <p className="lead">
            Current Time is : {time.toLocaleDateString()} - {time.toLocaleTimeString()}
        </p>
    )
}

export default ClockTime;