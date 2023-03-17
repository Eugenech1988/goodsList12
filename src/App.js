import styles from 'styles/globalStyles.module.scss';
import SearchInput from 'components/SearchInput';
import GoodsPanel from 'components/GoodsPanel';
import SortingButtons from 'components/SortingButtons';
import ColorPicker from 'components/ColorPicker';
import MinMaxInput from 'components/MinMaxInput';

function App() {
  return (
    <div className={styles.wrapper}>
      <SearchInput/>
      <SortingButtons/>
      <div className={styles.sidebarWrapper}>
        <ColorPicker/>
        <MinMaxInput/>
      </div>
      <GoodsPanel/>
    </div>
  );
}

export default App;
