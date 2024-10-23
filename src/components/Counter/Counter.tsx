import styles from "./Counter.module.css"
import Countdown from "react-countdown"

const Counter = () => {
    const renderer = ({ days, hours, minutes, seconds, completed }: any) => {
        if (completed) {
            // Render setelah countdown selesai
            return <span>Countdown selesai!</span>;
        } else {
            // Render countdown
            return (
                <div className="flex justify-evenly">
                    <div>
                        <h2 className={`${styles.p1}`}>{days}</h2>
                        <p className={`${styles.p2}`}>Hari</p>
                    </div>
                    <div>
                        <h2 className={`${styles.p1}`}>{hours}</h2>
                        <p className={`${styles.p2}`}>Jam</p>
                    </div>
                    <div>
                        <h2 className={`${styles.p1}`}>{minutes}</h2>
                        <p className={`${styles.p2}`}>Menit</p>
                    </div>
                    <div>
                        <h2 className={`${styles.p1}`}>{seconds}</h2>
                        <p className={`${styles.p2}`}>Detik</p>
                    </div>
                </div>
            );
        }
    };

    return (
        <Countdown
            date={Date.now() + 10000000}
            renderer={renderer}
        ></Countdown>
    )
}

export default Counter