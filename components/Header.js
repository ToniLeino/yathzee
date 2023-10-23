import {Text, View} from 'react-native';
import styles from '..styles/style';

export default function header() {
    return(
        <view style={styles.header}>
            <text style={styles.title}>Yathzee</text>
        </view>
    )
}