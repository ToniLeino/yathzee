import {Text, View} from 'react-native';
import styles from '..styles/style';

export default function Footer() {
    return(
        <view style={styles.footer}>
            <text style={styles.author}>Author: Toni Leino</text>
        </view>
    )
}