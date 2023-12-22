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
import { Form } from 'formik';

const AllComponentsRoot = () => {
    return (
        <div className="library w-3/4 px-16">
            <div className="my-10">
                <h1 className="text-center text-xl font-bold">Accordion</h1>
                <Accordion />
            </div>
            <hr />

            <div className="my-10">
                <h1 className="text-center text-xl font-bold">Modal</h1>
                <ModalRoot />
            </div>
            <hr />

            <div className="my-10">
                <h1 className="text-center text-xl font-bold">SuccessModal</h1>
                <SuccessModalRoot />
            </div>
            <hr />

            <div className="my-10">
                <h1 className="text-center text-xl font-bold">Tab 1</h1>
                <Tab1 />
            </div>
            <hr />

            <div className="my-10">
                <h2 className="text-center text-xl font-bold">Tab 2</h2>
                <Tab2 />
            </div>
            <hr />

            <div className="my-10">
                <h1 className="text-center text-xl font-bold">Loader</h1>
                <LoaderRoot />
            </div>
            <hr />

            <div className="my-10">
                <h1 className="text-center text-xl font-bold">Progress Bar</h1>
                <ProgressBarRoot />
            </div>
            <hr />


            <div className="my-10">
                <h1 className="text-center text-xl font-bold">Number Rating</h1>
                <RatingRoot />
            </div>
            <hr />

            <div className="my-10">
                <h1 className="text-center text-xl font-bold">Date Field</h1>
                <DateFieldRoot />
            </div>
            <hr />

            <div className="my-10">
                <h1 className="text-center text-xl font-bold">Toggle Switch</h1>
                <SwitchRoot />
            </div>
            <hr />

            <div className="my-10">
                <h1 className="text-center text-xl font-bold">Input Image</h1>
                <ShowInputImage />
            </div>
            <hr />

            <div className="my-10">
                <h1 className="text-center text-xl font-bold">Radio input Custom Style</h1>
                <CustomRadioInput />
            </div>
            <hr />


            <div className="my-10">
                <h1 className="text-center text-xl font-bold">Add More</h1>
                <AddMore />
            </div>
            <hr />

            {/* <div className="my-10">
                <h1 className="text-center text-xl font-bold">Add More</h1>
                <Form />
            </div>
            <hr /> */}



        </div>
    );
};

export default AllComponentsRoot;