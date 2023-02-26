import { Layout } from 'antd';
import React from 'react';
import styles from './UI.module.css'

const { Footer } = Layout;

function FooterComponent() {
    return (
        <Footer className={styles.footer}>
            Currency-converter APP Check out the source code on <a href="https://github.com/stassold/currency-converter">GitHub</a>
        </Footer>
    );
}

export default FooterComponent;
