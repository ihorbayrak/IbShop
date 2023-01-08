import { useSelector, useDispatch } from 'react-redux';
import { sortByChanged } from '../../redux/reducers/sortSlice/sortSlice';

import { SortContainer, SelectMenu } from './style.js';
import { Title } from '../../styles/Titles';

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
        <SortContainer>
            <Title fz='semi'>Sort by:</Title>

            <SelectMenu onChange={(e) => dispatch(sortByChanged(e.target.value))}>
                <option defaultValue='choose'>Choose</option>

                {elements}
            </SelectMenu>
        </SortContainer>
    );
};

export default SortMenu;
