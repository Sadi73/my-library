import React from 'react';
import ShowCodeContainer from '../../NecessaryComponents/ShowCodeContainer';
import { AccordionCodeSnippet } from '../../utils/AccordionCode';
import { ProgressBarCode } from '../../utils/ProgressBarCode';
import { RatingCode } from '../../utils/RatingCode';
import { Tab_1_Code } from '../../utils/Tab_1_Code';
import { Tab_2_Code } from '../../utils/Tab_2_Code';
import Accordion from '../Accordion/Accordion';
import Calendar from '../Calendar/Calendar';
import DateField from '../DateField/DateField';
import BasicDrawer from '../Drawers/BasicDrawer/BasicDrawer';
import MiniVariantDrawer from '../Drawers/BasicDrawer/MiniVariantDrawer';
import AddMore from '../Inputs/AddMore';
import CustomRadioInput from '../Inputs/CustomRadioInput';
import ShowInputImage from '../Inputs/ShowInputImage';
import LoaderRoot from '../Loader/LoaderRoot';
import ModalRoot from '../Modals/CustomModal/ModalRoot';
import SuccessModalRoot from '../Modals/SuccessModal/SuccessModalRoot';
import ProgressBar from '../ProgressBar/ProgressBar';
import Rating from '../Rating/Rating';
import Tab1 from '../Tabs/Tab1';
import Tab2 from '../Tabs/Tab2';
import SwitchRoot from '../ToggleSwitch/SwitchRoot';
import CustomTree from '../TreeView/CustomTree/CustomTree';
import TreeBeard from '../TreeView/TreeBeard/TreeBeard';
import TreeView from '../TreeView/Treeview/TreeView';
import { DateFieldCode } from '../../utils/DateFieldCode';

const allComponents = [
    { id: 1, title: 'Accordion', component: <Accordion />, codeSnippet: AccordionCodeSnippet },
    { id: 2, title: 'Modal', component: <ModalRoot /> },
    { id: 3, title: 'SuccessModal', component: <SuccessModalRoot /> },
    { id: 4, title: 'Tab 1', component: <Tab1 />, codeSnippet: Tab_1_Code },
    { id: 5, title: 'Tab 2', component: <Tab2 />, codeSnippet: Tab_2_Code },
    { id: 6, title: 'Loader', component: <LoaderRoot /> },
    { id: 7, title: 'Progress Bar', component: <ProgressBar />, codeSnippet: ProgressBarCode },
    { id: 8, title: 'Number Rating', component: <Rating />, codeSnippet: RatingCode },
    { id: 9, title: 'Date Field', component: <DateField />, codeSnippet: DateFieldCode },
    { id: 10, title: 'Toggle Switch', component: <SwitchRoot /> },
    { id: 11, title: 'Input Image', component: <ShowInputImage /> },
    { id: 12, title: 'Radio input Custom Style', component: <CustomRadioInput /> },
    { id: 13, title: 'Add More', component: <AddMore /> },
    { id: 14, title: 'Tree View (Tree Beard)', component: <TreeBeard /> },
    { id: 15, title: 'Tree View - Not Clickable', component: <TreeView /> },
    { id: 16, title: 'Tree View - Clickable', component: <CustomTree /> },
    { id: 17, title: 'Responsive Menu', component: <BasicDrawer /> },
    { id: 18, title: 'Mini Variant Drawer', component: <MiniVariantDrawer /> },
    { id: 19, title: 'Calendar', component: <Calendar /> },
]

const AllComponentsRoot = () => {
    return (
        <div className="library">
            {allComponents.map(eachComponent =>
                <div className="border rounded-lg my-10 px-10 py-5">
                    <div>
                        <h1 className="text-center text-xl font-bold mb-5">{eachComponent?.title}</h1>
                        {eachComponent?.component}
                    </div>
                    <ShowCodeContainer codeSnippet={eachComponent?.codeSnippet} />
                </div>
            )}
        </div>
    );
};

export default AllComponentsRoot;