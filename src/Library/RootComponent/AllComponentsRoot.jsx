import React from 'react';
import Accordion from '../Accordion/Accordion';
import ModalRoot from '../Modals/CustomModal/ModalRoot';
import SuccessModalRoot from '../Modals/SuccessModal/SuccessModalRoot';
import Tab1 from '../Tabs/Tab1';
import Tab2 from '../Tabs/Tab2';
import LoaderRoot from '../Loader/LoaderRoot';
import ProgressBarRoot from '../ProgressBar/ProgressBarRoot';
import RatingRoot from '../Rating/RatingRoot';
import DateFieldRoot from '../DateField/DateFieldRoot';
import SwitchRoot from '../ToggleSwitch/SwitchRoot';
import ShowInputImage from '../Inputs/ShowInputImage';
import CustomRadioInput from '../Inputs/CustomRadioInput';
import AddMore from '../Inputs/AddMore';
import TreeBeard from '../TreeView/TreeBeard/TreeBeard';
import TreeView from '../TreeView/Treeview/TreeView';
import CustomTree from '../TreeView/CustomTree/CustomTree';
import BasicDrawer from '../Drawers/BasicDrawer/BasicDrawer';
import MiniVariantDrawer from '../Drawers/BasicDrawer/MiniVariantDrawer';
import Calendar from '../Calendar/Calendar';
import { AccordionCodeSnippet } from '../../utils/AccordionCode';
import ShowCodeContainer from '../../NecessaryComponents/ShowCodeContainer';
import { Tab_1_Code } from '../../utils/Tab_1_Code';
import { Tab_2_Code } from '../../utils/Tab_2_Code';

const allComponents = [
    { id: 1, title: 'Accordion', component: <Accordion />, codeSnippet: AccordionCodeSnippet },
    { id: 2, title: 'Modal', component: <ModalRoot /> },
    { id: 3, title: 'SuccessModal', component: <SuccessModalRoot /> },
    { id: 4, title: 'Tab 1', component: <Tab1 />, codeSnippet: Tab_1_Code },
    { id: 5, title: 'Tab 2', component: <Tab2 />, codeSnippet: Tab_2_Code },
    { id: 6, title: 'Loader', component: <LoaderRoot /> },
    { id: 7, title: 'Progress Bar', component: <ProgressBarRoot /> },
    { id: 8, title: 'Number Rating', component: <RatingRoot /> },
    { id: 9, title: 'Date Field', component: <DateFieldRoot /> },
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