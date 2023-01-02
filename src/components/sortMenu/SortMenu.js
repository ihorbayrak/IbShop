import { useSelector, useDispatch } from 'react-redux';
import { sortByChanged } from '../../utils/reducers/sortSlice/sortSlice';

import './sortMenu.scss';

const SortMenu = () => {
    const { options } = useSelector((state) => state.sort);
    const dispatch = useDispatch();

    const renderOptions = (arr) => {
        return arr.map(({ label, optionValue }) => {
            return (
                <option value={optionValue} key={optionValue}>
                    {label}
                </option>
            );
        });
    };

    const elements = renderOptions(options);

    return (
        <div className='sort'>
            <div className='title title_small'>Sort by:</div>

            <select
                className='sort__menu'
                onChange={(e) => dispatch(sortByChanged(e.target.value))}
            >
                <option defaultValue='choose'>Choose</option>
                {elements}
            </select>
        </div>
    );
};

export default SortMenu;
