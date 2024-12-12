import React from 'react';
import ShowCodeContainer from '../../NecessaryComponents/ShowCodeContainer';
import ShowCssContainer from '../../NecessaryComponents/ShowCssContainer';
import { AccordionCodeSnippet } from '../../utils/AccordionCode';
import { AddMoreCode } from '../../utils/AddMoreCode';
import { CalendarCode } from '../../utils/CalendarCode';
import { DateFieldCode } from '../../utils/DateFieldCode';
import { MiniVariantDrawerCode } from '../../utils/MiniVariantDrawerCode';
import { ProgressBarCode } from '../../utils/ProgressBarCode';
import { RatingCode } from '../../utils/RatingCode';
import { ResponsiveMenuBarCode } from '../../utils/ResponsiveMenuBarCode';
import { ShowInputImageCode } from '../../utils/ShowInputImageCode';
import { Tab_1_Code } from '../../utils/Tab_1_Code';
import { Tab_2_Code } from '../../utils/Tab_2_Code';
import { SwitchCode } from '../../utils/SwitchCode';
import Accordion from '../Accordion/Accordion';
import Calendar from '../Calendar/Calendar';
import DateField from '../DateField/DateField';
import MiniVariantDrawer from '../Drawers/BasicDrawer/MiniVariantDrawer';
import ResponsiveMenu from '../Drawers/BasicDrawer/ResponsiveMenu';
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
import Switch from '../ToggleSwitch/Switch';
import CustomTree from '../TreeView/CustomTree/CustomTree';
import TreeBeard from '../TreeView/TreeBeard/TreeBeard';
import TreeView from '../TreeView/Treeview/TreeView';
import { SwitchStyles } from '../../utils/SwitchStyles';
import { RadioInputCode } from '../../utils/RadioInputCode';
import { RadioInputStyles } from '../../utils/RadioInputStyles';

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
    { id: 10, title: 'Toggle Switch', component: <Switch />, hasCssFile: true, codeSnippet: SwitchCode, cssCodeSnippet: SwitchStyles },
    { id: 11, title: 'Input Image', component: <ShowInputImage />, codeSnippet: ShowInputImageCode },
    { id: 12, title: 'Radio input Custom Style', component: <CustomRadioInput />, hasCssFile: true, codeSnippet: RadioInputCode, cssCodeSnippet: RadioInputStyles },
    { id: 13, title: 'Add More', component: <AddMore />, codeSnippet: AddMoreCode },
    { id: 14, title: 'Tree View (Tree Beard)', component: <TreeBeard /> },
    { id: 15, title: 'Tree View - Not Clickable', component: <TreeView /> },
    { id: 16, title: 'Tree View - Clickable', component: <CustomTree /> },
    { id: 17, title: 'Responsive Menu', component: <ResponsiveMenu />, codeSnippet: ResponsiveMenuBarCode },
    { id: 18, title: 'Mini Variant Drawer', component: <MiniVariantDrawer />, codeSnippet: MiniVariantDrawerCode },
    { id: 19, title: 'Calendar', component: <Calendar />, codeSnippet: CalendarCode },
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
                    {eachComponent?.hasCssFile && <ShowCssContainer cssFile={eachComponent?.cssCodeSnippet} />}
                </div>
            )}
        </div>
    );
};

export default AllComponentsRoot;