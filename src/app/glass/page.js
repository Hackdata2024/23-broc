import React from 'react';
import styles from './glass.css'

const Page = () => {
    return (
        <div className={styles.card}>
            <li className="list-group-item bg-transparent border-bottom py-3 px-0">
                <div className="row align-items-center">
                    <div className="col-auto">
                        <a href="#" className="user-avatar rounded bordered">
                            <img className="p-1 rounded" alt="Image placeholder" src="./assets/img/team/profile-picture-1.jpg"/>
                        </a>
                    </div>
                    <div className="col-auto px-0">
                        <h4 className="fs-6 mb-0">
                            Chris Wood
                        </h4>
                        <span className="small text-muted">Graphic Designer</span>
                    </div>
                    <div className="col text-end">
                        <span className="fs-6 fw-bolder">$1,834</span>
                    </div>
                </div>
            </li>

        </div>
    );
};

export default Page;