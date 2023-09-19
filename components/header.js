import classes from "./footer.module.css";
import Image from "next/image"; // Image コンポーネントをインポート

export function Footer() {
    return (
       <footer className={classes.header}>
            <a
                href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
                
            >
                Thanks By{' '}
                <Image
                    src="/vercel.svg"
                    alt="Vercel Logo"
                    className={classes.vercelLogo}
                    width={100}
                    height={24}
                    
                />
            </a>
        </footer>
    );
}
