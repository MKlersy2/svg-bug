import styles from '../../styles/Home.module.css'

export function hideSvg(index) {
    const element = document.querySelector(`#bigBox${index}`);
    const icon = document.querySelector(`#bigBox${index} .${styles.icon}`);
    icon.style.display = "none"
    console.log("click")
}

export default function myScripts() {
    return (
        <></>
    )
}