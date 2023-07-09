import { React, useState } from 'react';
import styles from '../styles/HowItWorks.module.css';

const HowItWorks = () => {
    const [cargoOwners, setCargoOwnersStatus] = useState(true);

    const cargoOwnersDiv = 
<div className={styles["bottom-container"]}>
    <div className={styles["img"]} id={styles.img1}>
        <img src="https://cdn.cogoport.io/cms-prod/cogo_public/vault/original/homepagem1.png" alt=""></img>
    </div>
    <div>
        <div className={styles["info-box"]}>
            <p> Stage 1:</p>
            <div>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14" width="40" height="40" role="img"><path class="ic-a-discover_svg__ic_a_discover" stroke="#221F1F" stroke-linecap="round" stroke-linejoin="round" stroke-width="0.264" d="M12.613 7h-1.576"></path><path class="ic-a-discover_svg__ic_a_discover" fill="#FBDC00" stroke="#221F1F" stroke-linecap="round" stroke-linejoin="round" stroke-width="0.264" d="M7 12.85a5.85 5.85 0 1 0 0-11.7 5.85 5.85 0 0 0 0 11.7Z"></path><path class="ic-a-discover_svg__ic_a_discover" fill="#fff" stroke="#221F1F" stroke-linecap="round" stroke-linejoin="round" stroke-width="0.264" d="M9.383 4.371 5.72 5.652a.11.11 0 0 0-.068.068L4.37 9.383a.21.21 0 0 0 .246.246L8.28 8.348a.109.109 0 0 0 .068-.068l1.28-3.663a.21.21 0 0 0-.245-.246Z"></path><path class="ic-a-discover_svg__ic_a_discover" fill="#221F1F" d="M7 7.762a.762.762 0 1 0 0-1.524.762.762 0 0 0 0 1.524Z"></path><path class="ic-a-discover_svg__ic_a_discover" stroke="#221F1F" stroke-linecap="round" stroke-linejoin="round" stroke-width="0.264" d="M7 1.387v1.576m0 9.65v-1.576M1.387 7h1.576"></path></svg>
            <div>Discover</div>
            </div>
            <span>
                <div> &#x2022; </div>
                <p> Spot and Contract Rates for Logistics </p>
            </span>
            <span>
                <div> &#x2022; </div>
                <p> Service details, Trade Compliance/ Regulatory Requirements </p>
            </span>
            <span>
                <div> &#x2022; </div>
                <p> Knowledge and Insights on Trade, Logistics, Finance, Supply Chains </p>
            </span>
        </div>
        <div className={styles["arrow-img"]} id={styles.arrow1}>
            <img src="https://www.cogoport.com/_next/image?url=https%3A%2F%2Fcdn.cogoport.io%2Fcms-prod%2Fcogo_public%2Fvault%2Foriginal%2Flinearrow1.png&w=384&q=75" alt="arrow image"></img>
        </div>
        <div  className={styles["info-box"]}>
            <p> Stage 2: </p>
            <div>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14" width="40" height="40" role="img"><path class="ic-a-plan_svg__ic_a_plan" fill="#FBDC00" stroke="#221F1F" stroke-linecap="round" stroke-linejoin="round" stroke-width="0.374" d="M9.37 1.851c0-.36-.276-.651-.617-.651-.34 0-.617.291-.617.651v1.307c0 .36.276.65.617.65.341.001.618-.29.618-.65V1.851Z"></path><g stroke="#221F1F" stroke-linecap="round" stroke-linejoin="round" stroke-width="0.374"><path class="ic-a-plan_svg__ic_a_plan" fill="#FBDC00" d="M9.935 2.2h-5.87c-.515 0-.932.44-.932.981v8.638c0 .542.417.981.932.981h5.87c.515 0 .932-.44.932-.981V3.18c0-.542-.417-.981-.932-.981Z"></path><path class="ic-a-plan_svg__ic_a_plan" fill="#FBDC00" d="M5.864 1.851c0-.36-.276-.651-.617-.651-.341 0-.618.291-.618.651v1.307c0 .36.277.65.618.65.34.001.617-.29.617-.65V1.851Z"></path><path class="ic-a-plan_svg__ic_a_plan" d="M6.366 5.78h2.908M6.366 8.095h2.908M6.366 10.41h2.908"></path><path class="ic-a-plan_svg__ic_a_plan" fill="#fff" d="M4.749 6.525c.39 0 .707-.334.707-.745s-.317-.745-.707-.745c-.39 0-.707.334-.707.745s.317.745.707.745Zm0 2.315c.39 0 .707-.334.707-.745s-.317-.745-.707-.745c-.39 0-.707.334-.707.745s.317.745.707.745Zm0 2.314c.39 0 .707-.333.707-.745 0-.411-.317-.744-.707-.744-.39 0-.707.333-.707.744 0 .412.317.745.707.745Z"></path></g></svg>
                <div> Plan & Book </div>
            </div>
            <span>
                <div> &#x2022; </div>
                <p> Route, Service Schedules, Inventory, and Cashflow planning</p>
            </span>
            <span>
                <div> &#x2022; </div>
                <p> Book with upfront visibility of service terms and inclusions</p>
            </span>
        </div>
        <div className={styles["arrow-img"]} id={styles.arrow2}>
            <img src="https://www.cogoport.com/_next/image?url=https%3A%2F%2Fcdn.cogoport.io%2Fcms-prod%2Fcogo_public%2Fvault%2Foriginal%2Flinearrow2.png&w=384&q=75" alt="arrow-image"></img>
        </div>
    </div>
    <div className={styles["img"]} id={styles.img2}>
        <img alt="cogoport platform with rate search" src="https://www.cogoport.com/_next/image?url=https%3A%2F%2Fcdn.cogoport.io%2Fcms-prod%2Fcogo_public%2Fvault%2Foriginal%2Fhomepagem1.png&w=1200&q=75"></img>
    </div>
    <div>
        <div className={styles["arrow-img"]} id={styles.arrow3}>
            <img src="https://www.cogoport.com/_next/image?url=https%3A%2F%2Fcdn.cogoport.io%2Fcms-prod%2Fcogo_public%2Fvault%2Foriginal%2Flinearrow.png&w=384&q=75" alt="arrow image"></img>
        </div>
        <div className={styles["info-box"]}>
            <p> Stage 3: </p>
            <div>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14" width="40" height="40" role="img"><path class="ic-a-book_svg__ic_a_book" fill="#FBDC00" d="M12.75 10.698V4.715a.967.967 0 0 0-.968-.967H2.219a.967.967 0 0 0-.968.967v5.983c0 .534.433.968.968.968h9.563a.968.968 0 0 0 .967-.968Z"></path><path class="ic-a-book_svg__ic_a_book" fill="#231F20" d="M12.895 4.529v6.355a.927.927 0 0 1-.927.927H2.032a.927.927 0 0 1-.927-.927V4.53a.927.927 0 0 1 .927-.927h9.936a.927.927 0 0 1 .927.927ZM1.397 10.884a.636.636 0 0 0 .635.635h9.936a.635.635 0 0 0 .635-.634V4.529a.636.636 0 0 0-.635-.635H2.032a.636.636 0 0 0-.635.635v6.355Z"></path><path class="ic-a-book_svg__ic_a_book" fill="#231F20" d="M12.749 5.85h-11.5a.145.145 0 0 1-.144-.147.144.144 0 0 1 .145-.145h11.498a.144.144 0 0 1 .144.145.144.144 0 0 1-.143.147Z"></path><path class="ic-a-book_svg__ic_a_book" fill="#fff" d="M5.396 2.335H3.682v2.388h1.714V2.335Z"></path><path class="ic-a-book_svg__ic_a_book" fill="#231F20" d="M3.68 2.189h1.715a.144.144 0 0 1 .145.144v2.39a.144.144 0 0 1-.145.144H3.68a.144.144 0 0 1-.144-.145V2.333a.144.144 0 0 1 .144-.144Zm1.57.291H3.827v2.097H5.25V2.48Z"></path><path class="ic-a-book_svg__ic_a_book" fill="#fff" d="M10.318 2.335H8.604v2.388h1.714V2.335Z"></path><path class="ic-a-book_svg__ic_a_book" fill="#231F20" d="M8.603 2.189h1.715a.144.144 0 0 1 .145.144v2.39a.144.144 0 0 1-.145.144H8.603a.144.144 0 0 1-.144-.145V2.333a.144.144 0 0 1 .144-.144Zm1.57.291H8.75v2.097h1.423V2.48Z"></path><path class="ic-a-book_svg__ic_a_book" fill="#fff" d="M4.07 6.675H2.397v1.673H4.07V6.675Z"></path><path class="ic-a-book_svg__ic_a_book" fill="#231F20" d="M2.396 6.53H4.07a.144.144 0 0 1 .145.144v1.674a.144.144 0 0 1-.145.145H2.396a.144.144 0 0 1-.145-.145V6.674a.144.144 0 0 1 .145-.145Zm1.527.29h-1.38v1.383h1.381V6.82Z"></path><path class="ic-a-book_svg__ic_a_book" fill="#fff" d="M6.655 6.675H4.982v1.673h1.673V6.675Z"></path><path class="ic-a-book_svg__ic_a_book" fill="#231F20" d="M4.981 6.53h1.675a.144.144 0 0 1 .144.144v1.674a.144.144 0 0 1-.144.145H4.98a.144.144 0 0 1-.144-.145V6.674a.144.144 0 0 1 .144-.145Zm1.528.29h-1.38v1.383h1.38V6.82Z"></path><path class="ic-a-book_svg__ic_a_book" fill="#fff" d="M9.24 6.675H7.568v1.673h1.674V6.675Z"></path><path class="ic-a-book_svg__ic_a_book" fill="#231F20" d="M7.566 6.53h1.675a.144.144 0 0 1 .144.144v1.674a.144.144 0 0 1-.144.145H7.566a.144.144 0 0 1-.144-.145V6.674a.144.144 0 0 1 .144-.145Zm1.528.29h-1.38v1.383h1.38V6.82Z"></path><path class="ic-a-book_svg__ic_a_book" fill="#fff" d="M11.825 6.675h-1.673v1.673h1.673V6.675Z"></path><path class="ic-a-book_svg__ic_a_book" fill="#231F20" d="M10.151 6.53h1.675a.144.144 0 0 1 .144.144v1.674a.144.144 0 0 1-.144.145H10.15a.144.144 0 0 1-.144-.145V6.674a.144.144 0 0 1 .144-.145Zm1.528.29h-1.38v1.383h1.381l-.001-1.382Z"></path><path class="ic-a-book_svg__ic_a_book" fill="#fff" d="M4.07 9.098H2.397v1.673H4.07V9.098Z"></path><path class="ic-a-book_svg__ic_a_book" fill="#231F20" d="M2.396 8.953H4.07a.144.144 0 0 1 .145.144v1.675a.144.144 0 0 1-.145.144H2.396a.144.144 0 0 1-.145-.145V9.098a.144.144 0 0 1 .145-.144Zm1.527.291h-1.38v1.382h1.381V9.244Z"></path><path class="ic-a-book_svg__ic_a_book" fill="#fff" d="M6.655 9.098H4.982v1.673h1.673V9.098Z"></path><path class="ic-a-book_svg__ic_a_book" fill="#231F20" d="M4.981 8.953h1.675a.144.144 0 0 1 .144.144v1.675a.144.144 0 0 1-.144.144H4.98a.144.144 0 0 1-.144-.145V9.098a.144.144 0 0 1 .144-.144Zm1.528.291h-1.38v1.382h1.38V9.244Z"></path><path class="ic-a-book_svg__ic_a_book" fill="#fff" d="M9.24 9.098H7.568v1.673h1.674V9.098Z"></path><path class="ic-a-book_svg__ic_a_book" fill="#231F20" d="M7.566 8.953h1.675a.144.144 0 0 1 .144.144v1.675a.144.144 0 0 1-.144.144H7.566a.144.144 0 0 1-.144-.145V9.098a.144.144 0 0 1 .144-.144Zm1.528.291h-1.38v1.382h1.38V9.244Z"></path><path class="ic-a-book_svg__ic_a_book" fill="#fff" d="M11.825 9.098h-1.673v1.673h1.673V9.098Z"></path><path class="ic-a-book_svg__ic_a_book" fill="#231F20" d="M10.151 8.953h1.675a.144.144 0 0 1 .144.144v1.675a.143.143 0 0 1-.089.133.144.144 0 0 1-.055.01H10.15a.144.144 0 0 1-.133-.088.145.145 0 0 1-.011-.056V9.098a.144.144 0 0 1 .144-.144Zm1.528.291h-1.38v1.382h1.381l-.001-1.382Zm-3.948-.915a.145.145 0 0 1-.135-.09.144.144 0 0 1 .032-.159l1.51-1.508a.145.145 0 0 1 .205 0 .144.144 0 0 1 0 .206L7.835 8.286a.144.144 0 0 1-.104.043Z"></path><path class="ic-a-book_svg__ic_a_book" fill="#231F20" d="M9.155 8.407a.144.144 0 0 1-.103-.042L7.464 6.778a.144.144 0 0 1 0-.206.144.144 0 0 1 .206 0L9.257 8.16a.144.144 0 0 1-.102.248ZM5.16 10.739a.144.144 0 0 1-.135-.09.144.144 0 0 1 .032-.16l1.496-1.494a.144.144 0 0 1 .206 0 .144.144 0 0 1 0 .206l-1.495 1.495a.145.145 0 0 1-.104.043Z"></path><path class="ic-a-book_svg__ic_a_book" fill="#231F20" d="M6.348 10.61a.142.142 0 0 1-.103-.043L4.879 9.201a.145.145 0 0 1 0-.206.144.144 0 0 1 .207 0l1.365 1.366a.144.144 0 0 1-.103.249Z"></path></svg>
                <div> Execute </div>
            </div>
            <span>
                <div> &#x2022; </div>
                <p> Ocean and Air Cargo Tracking </p>
            </span>
            <span>
                <div> &#x2022; </div>
                <p> Documentation and Filings, Handled</p>
            </span>
            <span>
                <div> &#x2022; </div>
                <p> Multi-modal: Smooth coordination and handovers between various service providers and stakeholders </p>
            </span>
        </div>
        <div className={styles["arrow-img"]} id={styles.arrow4}>
            <img src="https://www.cogoport.com/_next/image?url=https%3A%2F%2Fcdn.cogoport.io%2Fcms-prod%2Fcogo_public%2Fvault%2Foriginal%2Flinearrow4.png&w=384&q=75" alt="arrow-image"></img>
        </div>
        <div className={styles["info-box"]}>
            <p> Stage 4: </p>
            <div>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14" width="40" height="40" role="img"><path class="ic-a-trade_finance_svg__ic_a_trade_finance" d="M9.545 10.056a.108.108 0 0 1-.076-.031l-.636-.636a.107.107 0 0 1 0-.15.107.107 0 0 1 .15 0l.636.636a.107.107 0 0 1 0 .15.107.107 0 0 1-.074.031Zm.932-2.403h-.92a.108.108 0 0 1 0-.215h.92a.108.108 0 0 1 0 .215ZM8.738 5.947a.107.107 0 0 1-.075-.032.107.107 0 0 1 0-.15l.488-.488a.107.107 0 0 1 .15 0 .108.108 0 0 1 0 .15l-.489.488a.108.108 0 0 1-.074.032ZM7.032 5.28a.108.108 0 0 1-.107-.108V3.813a.107.107 0 1 1 .215 0v1.359a.108.108 0 0 1-.107.108Zm-1.647.725a.107.107 0 0 1-.076-.031l-.546-.546a.108.108 0 0 1 0-.15.108.108 0 0 1 .15 0l.546.546a.108.108 0 0 1 0 .15.107.107 0 0 1-.074.031Zm-.767 1.648h-1.45a.108.108 0 0 1 0-.215h1.45a.107.107 0 1 1 0 .215Zm.076 2.337a.108.108 0 0 1-.075-.031.108.108 0 0 1 0-.15l.556-.557a.107.107 0 0 1 .15 0 .107.107 0 0 1 0 .15l-.557.557a.108.108 0 0 1-.074.031Zm2.338 1.108a.108.108 0 0 1-.107-.108v-.918a.107.107 0 0 1 .107-.108.108.108 0 0 1 .108.107v.921a.107.107 0 0 1-.107.105Z" fill="#231F20"></path><path class="ic-a-trade_finance_svg__ic_a_trade_finance" fill="#FBDC00" d="M7.032 4.074a.92.92 0 1 0 0-1.84.92.92 0 0 0 0 1.84Z"></path><path class="ic-a-trade_finance_svg__ic_a_trade_finance" fill="#231F20" d="M7.033 4.183a1.03 1.03 0 0 1-.727-1.755 1.029 1.029 0 0 1 1.755.727 1.03 1.03 0 0 1-1.028 1.028Zm0-1.841a.814.814 0 1 0 0 1.627.814.814 0 0 0 0-1.627Z"></path><path class="ic-a-trade_finance_svg__ic_a_trade_finance" fill="#FBDC00" d="M7.025 12.892a.92.92 0 1 0 0-1.841.92.92 0 0 0 0 1.841Z"></path><path class="ic-a-trade_finance_svg__ic_a_trade_finance" fill="#231F20" d="M7.025 13a1.03 1.03 0 0 1 0-2.056 1.03 1.03 0 0 1 .727 1.754 1.03 1.03 0 0 1-.727.302Zm0-1.841a.814.814 0 1 0 .002 1.627.814.814 0 0 0-.002-1.627Z"></path><path class="ic-a-trade_finance_svg__ic_a_trade_finance" fill="#FBDC00" d="M11.535 8.465a.92.92 0 1 0 0-1.84.92.92 0 0 0 0 1.84Z"></path><path class="ic-a-trade_finance_svg__ic_a_trade_finance" fill="#231F20" d="M11.535 8.573a1.03 1.03 0 0 1-.726-1.754 1.03 1.03 0 0 1 1.453 0 1.03 1.03 0 0 1 0 1.453 1.03 1.03 0 0 1-.727.301Zm0-1.84a.814.814 0 1 0 .001 1.627.814.814 0 0 0-.001-1.628Z"></path><path class="ic-a-trade_finance_svg__ic_a_trade_finance" fill="#FBDC00" d="M2.465 8.465a.92.92 0 1 0 0-1.84.92.92 0 0 0 0 1.84Z"></path><path class="ic-a-trade_finance_svg__ic_a_trade_finance" fill="#231F20" d="M2.465 8.573a1.03 1.03 0 0 1-.726-1.754 1.03 1.03 0 0 1 1.452 0 1.03 1.03 0 0 1 0 1.453 1.03 1.03 0 0 1-.726.301Zm0-1.84a.814.814 0 0 0 0 1.625.814.814 0 0 0 0-1.626Z"></path><path class="ic-a-trade_finance_svg__ic_a_trade_finance" fill="#fff" d="M4.264 5.467a.69.69 0 1 0 0-1.381.69.69 0 0 0 0 1.38Z"></path><path class="ic-a-trade_finance_svg__ic_a_trade_finance" fill="#231F20" d="M4.263 5.574A.796.796 0 0 1 3.7 4.212a.793.793 0 0 1 .87-.174.792.792 0 0 1 .432.433.792.792 0 0 1 0 .61.793.793 0 0 1-.738.493Zm0-1.38a.58.58 0 0 0-.582.582.584.584 0 1 0 .582-.582Z"></path><path class="ic-a-trade_finance_svg__ic_a_trade_finance" fill="#fff" d="M10.017 11.082a.69.69 0 1 0 0-1.381.69.69 0 0 0 0 1.381Z"></path><path class="ic-a-trade_finance_svg__ic_a_trade_finance" fill="#231F20" d="M10.017 11.187a.792.792 0 0 1-.738-.493.792.792 0 0 1 0-.61.793.793 0 0 1 .738-.492.8.8 0 0 1 .564.232.8.8 0 0 1-.564 1.363Zm0-1.38a.581.581 0 1 0 0 1.165.58.58 0 1 0 0-1.163v-.002Z"></path><path class="ic-a-trade_finance_svg__ic_a_trade_finance" fill="#fff" d="M9.802 5.467a.69.69 0 1 0 0-1.381.69.69 0 0 0 0 1.38Z"></path><path class="ic-a-trade_finance_svg__ic_a_trade_finance" fill="#231F20" d="M9.802 5.574a.796.796 0 0 1-.738-1.103.793.793 0 0 1 .432-.433.793.793 0 0 1 .611 0 .792.792 0 0 1 .432.433.792.792 0 0 1 0 .61.793.793 0 0 1-.432.433c-.097.04-.2.06-.305.06Zm0-1.38a.58.58 0 0 0-.583.582.58.58 0 0 0 .583.583.584.584 0 0 0 0-1.165Z"></path><path class="ic-a-trade_finance_svg__ic_a_trade_finance" fill="#fff" d="M4.217 11.052a.69.69 0 1 0 0-1.382.69.69 0 0 0 0 1.382Z"></path><path class="ic-a-trade_finance_svg__ic_a_trade_finance" fill="#231F20" d="M4.217 11.159a.793.793 0 0 1-.738-.493.792.792 0 0 1 0-.61.8.8 0 0 1 1.476.611.792.792 0 0 1-.432.432.802.802 0 0 1-.306.06Zm0-1.38a.582.582 0 1 0-.001 1.163.582.582 0 0 0 .001-1.164Z"></path><path class="ic-a-trade_finance_svg__ic_a_trade_finance" fill="#fff" d="M7.01 9.978a2.393 2.393 0 1 0 0-4.786 2.393 2.393 0 0 0 0 4.786Z"></path><path class="ic-a-trade_finance_svg__ic_a_trade_finance" fill="#231F20" d="M7.01 10.084a2.503 2.503 0 0 1-2.5-2.5 2.503 2.503 0 0 1 2.5-2.5 2.504 2.504 0 0 1 2.5 2.5 2.504 2.504 0 0 1-2.5 2.5Zm0-4.786a2.288 2.288 0 0 0-2.285 2.285A2.288 2.288 0 0 0 7.011 9.87a2.288 2.288 0 0 0 2.285-2.286A2.288 2.288 0 0 0 7.011 5.3v-.002Z"></path><path class="ic-a-trade_finance_svg__ic_a_trade_finance" fill="#FFF2EE" d="M7.96 7.155h-.357v1.256h.357V7.155Z"></path><path class="ic-a-trade_finance_svg__ic_a_trade_finance" fill="#231F20" d="M8.067 8.519h-.572V7.048h.572v1.471Zm-.356-.216h.141v-1.04h-.141v1.04Z"></path><path class="ic-a-trade_finance_svg__ic_a_trade_finance" fill="#FFF2EE" d="M7.172 7.155h-.357v1.256h.357V7.155Z"></path><path class="ic-a-trade_finance_svg__ic_a_trade_finance" fill="#231F20" d="M7.28 8.519h-.57V7.048h.572L7.28 8.519Zm-.357-.216h.141v-1.04h-.141v1.04Z"></path><path class="ic-a-trade_finance_svg__ic_a_trade_finance" fill="#FFF2EE" d="M6.385 7.155h-.357v1.256h.357V7.155Z"></path><path class="ic-a-trade_finance_svg__ic_a_trade_finance" fill="#231F20" d="M6.492 8.519H5.92V7.048h.572v1.471Zm-.356-.216h.141v-1.04h-.141v1.04Z"></path><path class="ic-a-trade_finance_svg__ic_a_trade_finance" fill="#FFF2EE" d="M6.968 5.829a.05.05 0 0 1 .05 0 90.569 90.569 0 0 1 1.527.993c-.036-.011-2.837 0-3.087 0h-.003a.006.006 0 0 1-.002-.007l.002-.003 1.513-.983Z"></path><path class="ic-a-trade_finance_svg__ic_a_trade_finance" fill="#231F20" d="m8.605 6.953-.08-.025c-.144-.006-1.63-.004-3.066 0h-.08l-.05-.157.069-.05 1.514-.984a.155.155 0 0 1 .168 0c.1.066.484.311.842.542.37.24.562.365.657.439h.002c.1.078.088.1.066.147l-.042.088ZM6.995 5.94l-1.188.773a337.38 337.38 0 0 1 2.379-.003c-.257-.168-.67-.434-1.191-.77Z"></path><path class="ic-a-trade_finance_svg__ic_a_trade_finance" fill="#020202" d="M6.994 6.588a.203.203 0 1 0 0-.407.203.203 0 0 0 0 .407Z"></path><path class="ic-a-trade_finance_svg__ic_a_trade_finance" fill="#FFF2EE" d="M8.283 6.822H5.706v.333h2.577v-.333Z"></path><path class="ic-a-trade_finance_svg__ic_a_trade_finance" fill="#231F20" d="M8.39 7.263H5.599v-.55h2.793v.55Zm-2.576-.215h2.361v-.119H5.814v.119Z"></path><path class="ic-a-trade_finance_svg__ic_a_trade_finance" fill="#FFF2EE" d="M8.283 8.411H5.706v.406h2.577v-.406Z"></path><path class="ic-a-trade_finance_svg__ic_a_trade_finance" fill="#231F20" d="M8.39 8.925H5.599v-.622h2.793v.622Zm-2.576-.216h2.361v-.19H5.814v.19Z"></path></svg>
                <div> Finance </div>
            </div>
            <span>
                <div> &#x2022; </div>
                <p> Deferred payment on Logistics with PayLater </p>
            </span>
            <span>
                <div> &#x2022; </div>
                <p> Trade Finance for your Cargo with Export Factoring </p>
            </span>
        </div>
    </div>
</div>;

    const logisticsPartersDiv = 
<div className={styles["bottom-container"]}>
    <div className={styles["img"]} id={styles.img1}>
        <img alt="cogoport platform with rate search" src="https://cdn.cogoport.io/cms-prod/cogo_public/vault/original/homepagem2.png"></img>
    </div>
    <div>
        <div className={styles["info-box"]}>
            <p> Channel Partner Program </p>
            <div>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14" width="40" height="40" role="img"><path class="ic-a-discover_svg__ic_a_discover" stroke="#221F1F" stroke-linecap="round" stroke-linejoin="round" stroke-width="0.264" d="M12.613 7h-1.576"></path><path class="ic-a-discover_svg__ic_a_discover" fill="#FBDC00" stroke="#221F1F" stroke-linecap="round" stroke-linejoin="round" stroke-width="0.264" d="M7 12.85a5.85 5.85 0 1 0 0-11.7 5.85 5.85 0 0 0 0 11.7Z"></path><path class="ic-a-discover_svg__ic_a_discover" fill="#fff" stroke="#221F1F" stroke-linecap="round" stroke-linejoin="round" stroke-width="0.264" d="M9.383 4.371 5.72 5.652a.11.11 0 0 0-.068.068L4.37 9.383a.21.21 0 0 0 .246.246L8.28 8.348a.109.109 0 0 0 .068-.068l1.28-3.663a.21.21 0 0 0-.245-.246Z"></path><path class="ic-a-discover_svg__ic_a_discover" fill="#221F1F" d="M7 7.762a.762.762 0 1 0 0-1.524.762.762 0 0 0 0 1.524Z"></path><path class="ic-a-discover_svg__ic_a_discover" stroke="#221F1F" stroke-linecap="round" stroke-linejoin="round" stroke-width="0.264" d="M7 1.387v1.576m0 9.65v-1.576M1.387 7h1.576"></path></svg>
                <div> Sell with Cogoport </div>
            </div>
            <span>
                <div> &#x2022; </div>
                <p> Upfront rates and SLAs, close more deals with your cutomers for end to end shipment </p>
            </span>
            <span>
                <div> &#x2022; </div>
                <p> Knowledge and Insights on Trade, Logistics, Finance, Supply Chains </p>
            </span>
        </div>
        <div className={styles["arrow-img"]} id={styles.arrow1}>
            <img src="https://www.cogoport.com/_next/image?url=https%3A%2F%2Fcdn.cogoport.io%2Fcms-prod%2Fcogo_public%2Fvault%2Foriginal%2Flinearrow1.png&w=384&q=75" alt="arrow image"></img>
        </div>
        <div  className={styles["info-box"]}>
            <p> Logistics Partners </p>
            <div>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14" width="40" height="40" role="img"><path class="ic-a-financial_svg__ic_a_financial" fill="#FDDE01" d="M3.59 12.072H2.349a.18.18 0 0 1-.181-.18v-2.84c0-.1.082-.18.18-.18H3.59c.1 0 .18.082.18.18v2.84a.18.18 0 0 1-.18.18Zm3.552-3.2a2.615 2.615 0 1 0 0-5.229 2.615 2.615 0 0 0 0 5.23Z"></path><path class="ic-a-financial_svg__ic_a_financial" fill="#000" d="m7.294 12.347-1.888-.508a57.07 57.07 0 0 1-.672-.187.66.66 0 0 0-.504.054c-.065.034-.127.076-.195.104-.12.05-.204.11-.193.264.007.104-.076.169-.183.166-.487-.01-.975-.02-1.462-.037-.139-.005-.201-.082-.197-.229.023-.87.05-1.742.073-2.613.006-.181.008-.362.015-.543.005-.163.07-.226.235-.223l1.363.034c.203.006.259.07.252.276-.003.069 0 .139 0 .21.16-.056.315-.121.476-.166.582-.16 1.155-.12 1.69.159a2.28 2.28 0 0 0 1.083.265c.34-.002.68.019 1.019.025.452.008.802.197 1.044.58l.03.044.299-.14c.397-.186.792-.378 1.19-.56a.936.936 0 0 1 1.167.33c.101.15.085.244-.067.341-1.075.696-2.15 1.393-3.227 2.085-.234.15-.504.206-.775.248-.035.006-.07.015-.107.023-.156-.002-.311-.002-.466-.002Zm-3.423-.891c.014.002.023.004.029.003a.824.824 0 0 0 .089-.045c.29-.174.595-.199.916-.103.354.104.709.204 1.065.3.434.118.864.256 1.305.338.414.079.835.02 1.196-.21.998-.631 1.985-1.279 2.977-1.921l.087-.062c-.189-.158-.402-.192-.611-.1-.135.06-.267.125-.401.188l-1.122.531c.005.052.012.1.016.146.013.204-.056.278-.26.274a154.717 154.717 0 0 1-2.126-.06c-.14-.006-.222-.108-.193-.225.025-.1.095-.146.23-.143l1.562.042c.13.004.257.001.387 0-.04-.327-.368-.618-.723-.636-.232-.011-.465-.015-.697-.022-.27-.01-.54-.01-.808-.028-.31-.02-.579-.16-.854-.288-.655-.307-1.3-.272-1.93.083-.063.035-.088.075-.09.147-.013.576-.032 1.152-.048 1.728-.001.023.002.043.004.063Zm-.39.39.08-2.855H2.455l-.078 2.854h1.104Z"></path><path class="ic-a-financial_svg__ic_a_financial" fill="#000" d="M7.116 8.874a2.7 2.7 0 0 1-2.7-2.697 2.702 2.702 0 0 1 5.402 0 2.7 2.7 0 0 1-2.702 2.697Zm.003-.37a2.328 2.328 0 0 0 2.324-2.339 2.324 2.324 0 0 0-2.325-2.312 2.325 2.325 0 1 0 .001 4.65Z"></path><path class="ic-a-financial_svg__ic_a_financial" fill="#fff" d="M9.108 5.197a1.35 1.35 0 1 0 0-2.7 1.35 1.35 0 0 0 0 2.7Z"></path><path class="ic-a-financial_svg__ic_a_financial" fill="#000" d="M7.3 2.064c0 .291.002.583-.001.875-.002.15-.126.238-.253.186-.091-.039-.116-.115-.116-.207.002-.296 0-.59 0-.886l.001-.81c0-.14.074-.225.189-.222.111.003.178.083.179.221.003.281 0 .562 0 .843Zm-1.396.476c0 .133.003.266-.001.399-.003.123-.08.203-.189.2-.104-.004-.177-.08-.178-.2a40.755 40.755 0 0 1 0-.808c0-.124.08-.203.189-.2.104.004.175.08.178.2.004.136 0 .273 0 .41Zm.79 3.017c.001.21.15.381.36.412.087.014.177.015.263.037a.79.79 0 0 1 .593.706.778.778 0 0 1-.462.776c-.125.05-.19.1-.176.247.011.1-.08.174-.175.176-.095.002-.173-.068-.185-.169a.326.326 0 0 1-.003-.088c.013-.084-.023-.12-.1-.153-.29-.124-.447-.352-.485-.662-.017-.142.054-.243.17-.252.113-.008.19.073.203.213a.416.416 0 0 0 .428.391.416.416 0 0 0 .414-.383.411.411 0 0 0-.366-.45c-.17-.02-.337-.035-.484-.135-.258-.174-.385-.419-.362-.725a.754.754 0 0 1 .486-.672c.08-.034.108-.073.098-.153a.327.327 0 0 1 .003-.088.183.183 0 0 1 .181-.162c.095 0 .189.074.178.172-.016.148.057.192.178.246.285.123.43.36.461.666.013.133-.063.23-.177.235-.107.005-.183-.076-.195-.208-.023-.237-.209-.41-.434-.4a.419.419 0 0 0-.412.423Z"></path><path class="ic-a-financial_svg__ic_a_financial" fill="#FDDE01" d="M9.101 4.799a.963.963 0 1 0 0-1.926.963.963 0 0 0 0 1.926Z"></path><path class="ic-a-financial_svg__ic_a_financial" fill="#000" d="M9.262 2.416c.166.051.343.083.498.16.371.18.609.483.722.881.026.092-.003.158-.074.177-.075.02-.129-.016-.158-.11-.172-.543-.612-.871-1.158-.865-.578.006-1.09.47-1.144 1.04-.058.607.33 1.155.91 1.28.63.138 1.24-.24 1.399-.867a.566.566 0 0 1 .015-.054c.024-.07.085-.105.152-.085.062.018.097.077.082.147a1.32 1.32 0 0 1-.305.627c-.405.45-.907.616-1.488.442-.58-.174-.919-.585-1.003-1.185-.106-.757.449-1.47 1.207-1.574.019-.003.035-.01.054-.015h.29Z"></path><path class="ic-a-financial_svg__ic_a_financial" fill="#000" d="m9.04 4.025.484-.484.045-.045c.052-.049.11-.052.154-.01.046.045.045.105-.01.16l-.36.36c-.075.075-.15.152-.227.226-.062.06-.114.06-.175 0-.146-.143-.29-.289-.434-.434-.055-.056-.059-.113-.014-.16.046-.046.107-.041.165.016l.372.371Z"></path><path class="ic-a-financial_svg__ic_a_financial" fill="#FDDE01" d="M2.91 10.248h.2c.047 0 .085.038.085.085a.085.085 0 0 1-.085.084h-.2a.085.085 0 0 1-.084-.084c0-.047.038-.085.085-.085Z"></path></svg>
                <div> Growth Profits </div>
            </div>
            <span>
                <div> &#x2022; </div>
                <p> Invoicing and payment terms that help you sell more with the same working capital </p>
            </span>
            <span>
                <div> &#x2022; </div>
                <p> Book with upfront visibility of service terms and inclusions</p>
            </span>
        </div>
        <div className={styles["arrow-img"]} id={styles.arrow2}>
            <img src="https://www.cogoport.com/_next/image?url=https%3A%2F%2Fcdn.cogoport.io%2Fcms-prod%2Fcogo_public%2Fvault%2Foriginal%2Flinearrow2.png&w=384&q=75" alt="arrow-image"></img>
        </div>
    </div>
    <div className={styles["img"]} id={styles.img2}>
        <img alt="cogoport platform with rate search" src="https://www.cogoport.com/_next/image?url=https%3A%2F%2Fcdn.cogoport.io%2Fcms-prod%2Fcogo_public%2Fvault%2Foriginal%2Fhomepagem1.png&w=1200&q=75"></img>
    </div>
    <div>
        <div className={styles["arrow-img"]} id={styles.arrow3}>
            <img src="https://www.cogoport.com/_next/image?url=https%3A%2F%2Fcdn.cogoport.io%2Fcms-prod%2Fcogo_public%2Fvault%2Foriginal%2Flinearrow.png&w=384&q=75" alt="arrow image"></img>
        </div>
        <div className={styles["info-box"]}>
            <p> Logistics Service Providers </p>
            <div>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14" width="40" height="40" role="img"><path class="ic-a-book_svg__ic_a_book" fill="#FBDC00" d="M12.75 10.698V4.715a.967.967 0 0 0-.968-.967H2.219a.967.967 0 0 0-.968.967v5.983c0 .534.433.968.968.968h9.563a.968.968 0 0 0 .967-.968Z"></path><path class="ic-a-book_svg__ic_a_book" fill="#231F20" d="M12.895 4.529v6.355a.927.927 0 0 1-.927.927H2.032a.927.927 0 0 1-.927-.927V4.53a.927.927 0 0 1 .927-.927h9.936a.927.927 0 0 1 .927.927ZM1.397 10.884a.636.636 0 0 0 .635.635h9.936a.635.635 0 0 0 .635-.634V4.529a.636.636 0 0 0-.635-.635H2.032a.636.636 0 0 0-.635.635v6.355Z"></path><path class="ic-a-book_svg__ic_a_book" fill="#231F20" d="M12.749 5.85h-11.5a.145.145 0 0 1-.144-.147.144.144 0 0 1 .145-.145h11.498a.144.144 0 0 1 .144.145.144.144 0 0 1-.143.147Z"></path><path class="ic-a-book_svg__ic_a_book" fill="#fff" d="M5.396 2.335H3.682v2.388h1.714V2.335Z"></path><path class="ic-a-book_svg__ic_a_book" fill="#231F20" d="M3.68 2.189h1.715a.144.144 0 0 1 .145.144v2.39a.144.144 0 0 1-.145.144H3.68a.144.144 0 0 1-.144-.145V2.333a.144.144 0 0 1 .144-.144Zm1.57.291H3.827v2.097H5.25V2.48Z"></path><path class="ic-a-book_svg__ic_a_book" fill="#fff" d="M10.318 2.335H8.604v2.388h1.714V2.335Z"></path><path class="ic-a-book_svg__ic_a_book" fill="#231F20" d="M8.603 2.189h1.715a.144.144 0 0 1 .145.144v2.39a.144.144 0 0 1-.145.144H8.603a.144.144 0 0 1-.144-.145V2.333a.144.144 0 0 1 .144-.144Zm1.57.291H8.75v2.097h1.423V2.48Z"></path><path class="ic-a-book_svg__ic_a_book" fill="#fff" d="M4.07 6.675H2.397v1.673H4.07V6.675Z"></path><path class="ic-a-book_svg__ic_a_book" fill="#231F20" d="M2.396 6.53H4.07a.144.144 0 0 1 .145.144v1.674a.144.144 0 0 1-.145.145H2.396a.144.144 0 0 1-.145-.145V6.674a.144.144 0 0 1 .145-.145Zm1.527.29h-1.38v1.383h1.381V6.82Z"></path><path class="ic-a-book_svg__ic_a_book" fill="#fff" d="M6.655 6.675H4.982v1.673h1.673V6.675Z"></path><path class="ic-a-book_svg__ic_a_book" fill="#231F20" d="M4.981 6.53h1.675a.144.144 0 0 1 .144.144v1.674a.144.144 0 0 1-.144.145H4.98a.144.144 0 0 1-.144-.145V6.674a.144.144 0 0 1 .144-.145Zm1.528.29h-1.38v1.383h1.38V6.82Z"></path><path class="ic-a-book_svg__ic_a_book" fill="#fff" d="M9.24 6.675H7.568v1.673h1.674V6.675Z"></path><path class="ic-a-book_svg__ic_a_book" fill="#231F20" d="M7.566 6.53h1.675a.144.144 0 0 1 .144.144v1.674a.144.144 0 0 1-.144.145H7.566a.144.144 0 0 1-.144-.145V6.674a.144.144 0 0 1 .144-.145Zm1.528.29h-1.38v1.383h1.38V6.82Z"></path><path class="ic-a-book_svg__ic_a_book" fill="#fff" d="M11.825 6.675h-1.673v1.673h1.673V6.675Z"></path><path class="ic-a-book_svg__ic_a_book" fill="#231F20" d="M10.151 6.53h1.675a.144.144 0 0 1 .144.144v1.674a.144.144 0 0 1-.144.145H10.15a.144.144 0 0 1-.144-.145V6.674a.144.144 0 0 1 .144-.145Zm1.528.29h-1.38v1.383h1.381l-.001-1.382Z"></path><path class="ic-a-book_svg__ic_a_book" fill="#fff" d="M4.07 9.098H2.397v1.673H4.07V9.098Z"></path><path class="ic-a-book_svg__ic_a_book" fill="#231F20" d="M2.396 8.953H4.07a.144.144 0 0 1 .145.144v1.675a.144.144 0 0 1-.145.144H2.396a.144.144 0 0 1-.145-.145V9.098a.144.144 0 0 1 .145-.144Zm1.527.291h-1.38v1.382h1.381V9.244Z"></path><path class="ic-a-book_svg__ic_a_book" fill="#fff" d="M6.655 9.098H4.982v1.673h1.673V9.098Z"></path><path class="ic-a-book_svg__ic_a_book" fill="#231F20" d="M4.981 8.953h1.675a.144.144 0 0 1 .144.144v1.675a.144.144 0 0 1-.144.144H4.98a.144.144 0 0 1-.144-.145V9.098a.144.144 0 0 1 .144-.144Zm1.528.291h-1.38v1.382h1.38V9.244Z"></path><path class="ic-a-book_svg__ic_a_book" fill="#fff" d="M9.24 9.098H7.568v1.673h1.674V9.098Z"></path><path class="ic-a-book_svg__ic_a_book" fill="#231F20" d="M7.566 8.953h1.675a.144.144 0 0 1 .144.144v1.675a.144.144 0 0 1-.144.144H7.566a.144.144 0 0 1-.144-.145V9.098a.144.144 0 0 1 .144-.144Zm1.528.291h-1.38v1.382h1.38V9.244Z"></path><path class="ic-a-book_svg__ic_a_book" fill="#fff" d="M11.825 9.098h-1.673v1.673h1.673V9.098Z"></path><path class="ic-a-book_svg__ic_a_book" fill="#231F20" d="M10.151 8.953h1.675a.144.144 0 0 1 .144.144v1.675a.143.143 0 0 1-.089.133.144.144 0 0 1-.055.01H10.15a.144.144 0 0 1-.133-.088.145.145 0 0 1-.011-.056V9.098a.144.144 0 0 1 .144-.144Zm1.528.291h-1.38v1.382h1.381l-.001-1.382Zm-3.948-.915a.145.145 0 0 1-.135-.09.144.144 0 0 1 .032-.159l1.51-1.508a.145.145 0 0 1 .205 0 .144.144 0 0 1 0 .206L7.835 8.286a.144.144 0 0 1-.104.043Z"></path><path class="ic-a-book_svg__ic_a_book" fill="#231F20" d="M9.155 8.407a.144.144 0 0 1-.103-.042L7.464 6.778a.144.144 0 0 1 0-.206.144.144 0 0 1 .206 0L9.257 8.16a.144.144 0 0 1-.102.248ZM5.16 10.739a.144.144 0 0 1-.135-.09.144.144 0 0 1 .032-.16l1.496-1.494a.144.144 0 0 1 .206 0 .144.144 0 0 1 0 .206l-1.495 1.495a.145.145 0 0 1-.104.043Z"></path><path class="ic-a-book_svg__ic_a_book" fill="#231F20" d="M6.348 10.61a.142.142 0 0 1-.103-.043L4.879 9.201a.145.145 0 0 1 0-.206.144.144 0 0 1 .207 0l1.365 1.366a.144.144 0 0 1-.103.249Z"></path></svg>
                <div> Sell to Cogoport </div>
            </div>
            <span>
                <div> &#x2022; </div>
                <p> Accurate forecast of demand so you can plan your operations and cashflows </p>
            </span>
            <span>
                <div> &#x2022; </div>
                <p> Steady flow of bookings from Cogoport, minimize P & L risks </p>
            </span>
            <span>
                <div> &#x2022; </div>
                <p> Get paid on time, minimize collections risks </p>
            </span>
        </div>
        <div className={styles["arrow-img"]} id={styles.arrow4}>
            <img src="https://www.cogoport.com/_next/image?url=https%3A%2F%2Fcdn.cogoport.io%2Fcms-prod%2Fcogo_public%2Fvault%2Foriginal%2Flinearrow4.png&w=384&q=75" alt="arrow-image"></img>
        </div>
        <div className={styles["info-box"]}>
            <p> Overseas Partners </p>
            <div>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14" width="40" height="40" role="img"><path class="ic-a-our_network_svg__ic_a_our_network" fill="#fff" d="M6.997 12.001a4.461 4.461 0 1 0 0-8.922 4.461 4.461 0 0 0 0 8.922Z"></path><path class="ic-a-our_network_svg__ic_a_our_network" fill="#231F20" d="M6.997 12.121a4.582 4.582 0 1 1 0-9.164 4.582 4.582 0 0 1 0 9.165Zm0-8.921a4.34 4.34 0 1 0 0 8.68 4.34 4.34 0 0 0 0-8.68Z"></path><path class="ic-a-our_network_svg__ic_a_our_network" fill="#231F20" d="M6.997 12.121a.121.121 0 0 1-.12-.12V7.013a.12.12 0 1 1 .241 0v4.989a.12.12 0 0 1-.12.12Zm0-6.621a.121.121 0 0 1-.12-.12v-2.3a.121.121 0 1 1 .24 0v2.3a.121.121 0 0 1-.12.12Zm-1.619 6.326a.12.12 0 0 1-.097-.05c-.042-.056-1.034-1.4-1.034-4.239 0-2.838.992-4.183 1.034-4.238a.121.121 0 0 1 .193.146c-.01.013-.985 1.34-.985 4.092 0 2.753.975 4.08.985 4.093a.121.121 0 0 1-.096.193v.003Zm3.25 0a.12.12 0 0 1-.12-.131.121.121 0 0 1 .024-.062c.01-.013.985-1.34.985-4.092 0-2.762-.976-4.08-.986-4.093a.121.121 0 0 1 .193-.146c.042.056 1.034 1.398 1.034 4.239s-.992 4.183-1.034 4.239a.12.12 0 0 1-.096.046Z"></path><path class="ic-a-our_network_svg__ic_a_our_network" fill="#231F20" d="M11.464 7.655H2.542a.121.121 0 1 1 0-.242h8.922a.121.121 0 0 1 0 .242ZM2.837 6.036a.121.121 0 0 1-.073-.217c.056-.042 1.398-1.034 4.239-1.034 2.84 0 4.183.992 4.239 1.034a.12.12 0 0 1-.147.193c-.013-.01-1.34-.985-4.093-.985-2.76 0-4.08.975-4.093.985a.12.12 0 0 1-.072.024Zm4.166 4.259c-2.841 0-4.183-.992-4.24-1.034a.121.121 0 0 1 .147-.192c.013.01 1.34.984 4.093.984 2.752 0 4.08-.975 4.093-.984a.12.12 0 0 1 .146.192c-.056.043-1.398 1.034-4.239 1.034Z"></path><path class="ic-a-our_network_svg__ic_a_our_network" fill="#fff" d="M4.369 8.231a.585.585 0 1 0 0-1.169.585.585 0 0 0 0 1.169Z"></path><path class="ic-a-our_network_svg__ic_a_our_network" fill="#231F20" d="M4.368 8.351a.705.705 0 1 1 0-1.41.705.705 0 0 1 0 1.41Zm0-1.168a.463.463 0 1 0 0 .927.463.463 0 0 0 0-.927Z"></path><path class="ic-a-our_network_svg__ic_a_our_network" fill="#fff" d="M9.402 5.965a.585.585 0 1 0 0-1.169.585.585 0 0 0 0 1.169Z"></path><path class="ic-a-our_network_svg__ic_a_our_network" fill="#231F20" d="M9.402 6.086a.705.705 0 1 1 0-1.41.705.705 0 0 1 0 1.41Zm0-1.169a.464.464 0 1 0 0 .927.464.464 0 0 0 0-.927Z"></path><path class="ic-a-our_network_svg__ic_a_our_network" fill="#fff" d="M7.004 10.76a.585.585 0 1 0 0-1.17.585.585 0 0 0 0 1.17Z"></path><path class="ic-a-our_network_svg__ic_a_our_network" fill="#231F20" d="M7.003 10.88a.706.706 0 1 1 0-1.411.706.706 0 0 1 0 1.411Zm0-1.169a.463.463 0 1 0 0 .928.463.463 0 0 0 0-.928Z"></path><path class="ic-a-our_network_svg__ic_a_our_network" fill="#FBDC00" d="M10.539 3.293c-.038.763-1.136 2.22-1.136 2.22s-1.092-1.418-1.135-2.22A1.193 1.193 0 0 1 9.403 2a1.161 1.161 0 0 1 1.136 1.293Z"></path><path class="ic-a-our_network_svg__ic_a_our_network" fill="#231F20" d="M9.402 5.634a.12.12 0 0 1-.095-.047C9.261 5.528 8.191 4.13 8.147 3.3a1.372 1.372 0 0 1 .371-1.03 1.217 1.217 0 0 1 1.781-.009 1.383 1.383 0 0 1 .36 1.038c-.039.791-1.113 2.226-1.16 2.287a.121.121 0 0 1-.096.05v-.002Zm0-3.514a.988.988 0 0 0-.709.316 1.134 1.134 0 0 0-.305.85c.033.618.75 1.658 1.013 2.022.264-.37.987-1.432 1.017-2.021a1.144 1.144 0 0 0-.294-.86.987.987 0 0 0-.722-.307Z"></path><path class="ic-a-our_network_svg__ic_a_our_network" fill="#fff" d="M9.403 3.757a.602.602 0 1 0 0-1.204.602.602 0 0 0 0 1.204Z"></path><path class="ic-a-our_network_svg__ic_a_our_network" fill="#231F20" d="M9.402 3.877a.722.722 0 1 1 0-1.444.722.722 0 0 1 0 1.445Zm0-1.203a.48.48 0 1 0 0 .965.48.48 0 0 0 0-.967v.002Z"></path><path class="ic-a-our_network_svg__ic_a_our_network" fill="#fff" d="M9.402 5.514a8.09 8.09 0 0 0-4.45 1.753Z"></path><path class="ic-a-our_network_svg__ic_a_our_network" fill="#231F20" d="M4.952 7.388a.121.121 0 0 1-.072-.217l.132-.1a.121.121 0 0 1 .143.195l-.13.096a.121.121 0 0 1-.073.026Zm.615-.428a.121.121 0 0 1-.065-.223c.166-.106.337-.209.508-.304a.121.121 0 1 1 .118.211 9.078 9.078 0 0 0-.496.297.121.121 0 0 1-.065.02V6.96Zm1.023-.57a.121.121 0 0 1-.05-.23c.18-.085.362-.164.545-.236a.121.121 0 0 1 .088.225c-.177.07-.356.15-.53.23a.121.121 0 0 1-.053.01v.001Zm1.09-.43a.121.121 0 0 1-.037-.236c.19-.06.383-.114.573-.16a.121.121 0 1 1 .056.236 8.025 8.025 0 0 0-.556.154.118.118 0 0 1-.037.006Zm1.138-.27a.12.12 0 0 1-.017-.24c.198-.033.398-.053.6-.058a.121.121 0 1 1 0 .242c-.19.006-.379.024-.566.055l-.017.001Z"></path><path class="ic-a-our_network_svg__ic_a_our_network" fill="#FBDC00" d="M5.507 5.452c-.038.763-1.136 2.22-1.136 2.22s-1.092-1.418-1.135-2.22A1.194 1.194 0 0 1 4.37 4.158a1.161 1.161 0 0 1 1.136 1.294Z"></path><path class="ic-a-our_network_svg__ic_a_our_network" fill="#231F20" d="M4.368 7.793a.12.12 0 0 1-.095-.048c-.045-.059-1.116-1.457-1.16-2.287a1.371 1.371 0 0 1 .371-1.029 1.217 1.217 0 0 1 1.782-.009 1.383 1.383 0 0 1 .359 1.038c-.04.791-1.114 2.225-1.16 2.286a.12.12 0 0 1-.096.05v-.001Zm0-3.515a.988.988 0 0 0-.709.317 1.134 1.134 0 0 0-.306.85c.034.618.75 1.658 1.014 2.022.265-.37.987-1.433 1.016-2.021a1.145 1.145 0 0 0-.293-.859.986.986 0 0 0-.722-.308Z"></path><path class="ic-a-our_network_svg__ic_a_our_network" fill="#fff" d="M4.369 5.915a.602.602 0 1 0 0-1.204.602.602 0 0 0 0 1.204Z"></path><path class="ic-a-our_network_svg__ic_a_our_network" fill="#231F20" d="M4.369 6.036a.723.723 0 1 1 0-1.445.723.723 0 0 1 0 1.445Zm0-1.204a.48.48 0 1 0 0 .962.48.48 0 0 0 0-.962Z"></path><path class="ic-a-our_network_svg__ic_a_our_network" fill="#fff" d="M4.873 8.137A3.81 3.81 0 0 1 6.709 9.67L4.873 8.137Z"></path><path class="ic-a-our_network_svg__ic_a_our_network" fill="#231F20" d="M6.603 9.629a.12.12 0 0 1-.1-.05 3.671 3.671 0 0 0-.235-.3.121.121 0 0 1 .183-.158c.09.103.173.21.25.322a.12.12 0 0 1-.1.19l.002-.004Zm-.613-.686a.12.12 0 0 1-.08-.03 3.76 3.76 0 0 0-.3-.238.12.12 0 1 1 .141-.197c.11.079.217.165.319.254a.12.12 0 0 1-.08.211Zm-.757-.523a.12.12 0 0 1-.057-.014 2.601 2.601 0 0 0-.342-.154.121.121 0 0 1 .076-.23c.13.047.258.104.38.17a.121.121 0 0 1-.057.228Z"></path><path class="ic-a-our_network_svg__ic_a_our_network" fill="#FBDC00" d="M8.133 7.955c-.038.763-1.136 2.22-1.136 2.22s-1.093-1.418-1.136-2.22A1.194 1.194 0 0 1 6.997 6.66a1.161 1.161 0 0 1 1.136 1.295Z"></path><path class="ic-a-our_network_svg__ic_a_our_network" fill="#231F20" d="M6.997 10.296a.122.122 0 0 1-.096-.047c-.046-.06-1.116-1.458-1.16-2.288a1.373 1.373 0 0 1 .37-1.029 1.218 1.218 0 0 1 1.782-.009 1.384 1.384 0 0 1 .36 1.038c-.04.791-1.114 2.226-1.16 2.287a.122.122 0 0 1-.096.05v-.002Zm0-3.515a.99.99 0 0 0-.71.317 1.134 1.134 0 0 0-.305.85c.033.618.75 1.658 1.014 2.022.264-.37.986-1.433 1.016-2.022a1.145 1.145 0 0 0-.294-.859.987.987 0 0 0-.721-.308Z"></path><path class="ic-a-our_network_svg__ic_a_our_network" fill="#fff" d="M6.997 8.419a.602.602 0 1 0 0-1.205.602.602 0 0 0 0 1.205Z"></path><path class="ic-a-our_network_svg__ic_a_our_network" fill="#231F20" d="M6.997 8.537a.722.722 0 1 1 0-1.445.722.722 0 0 1 0 1.445Zm0-1.203a.481.481 0 1 0 .481.48.482.482 0 0 0-.481-.477v-.003Z"></path></svg>
                <div> Scale Globally </div>
            </div>
            <span>
                <div> &#x2022; </div>
                <p> Become Cogoport's local agent in your country, boost revenue from nominations and handling </p>
            </span>
            <span>
                <div> &#x2022; </div>
                <p> Make Cogoport your local agent outside your home country, do shipments to and from 149+ countries globally </p>
            </span>
        </div>
    </div>
</div>;
    
  return (
    <div className={styles.container}>
        <div>
            <h3> How it Works </h3>
            <div className={styles.btns}>
                <button className={styles.btn1} onClick={() => setCargoOwnersStatus(true)}>
                    <span> For Cargo Owners </span>
                </button>
                <button className={styles.btn2} onClick={() => setCargoOwnersStatus(false)}>
                    <span> For Logistics Partners</span>
                </button>
            </div>
            <div>
                { cargoOwners && cargoOwnersDiv }
                {   !cargoOwners && logisticsPartersDiv }
            </div>
        </div>
    </div>
  )
}

export default HowItWorks;


