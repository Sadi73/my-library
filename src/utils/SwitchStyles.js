export const SwitchStyles = `
  
  /* The switch - the box around the slider */
  .switchContainer {
    width: 45px;
    height: 22px;
    position: relative;
  }
  
  /* Hide default HTML checkbox */
  .checkbox {
    opacity: 0;
    width: 0;
    height: 0;
    position: absolute;
  }
  
  .switch {
    width: 100%;
    height: 100%;
    display: block;
    background-color: #e9e9e9;
    border-radius: 16px;
    cursor: pointer;
    transition: all 0.2s ease-out;
  }
  
  /* The slider */
  .slider {
    width: 20px;
    height: 20px;
    position: absolute;
    left: calc(50% - 21px/2 - 10px);
    top: calc(50% - 22px/2);
    border-radius: 50%;
    background: #FFFFFF;
    box-shadow: 0px 3px 8px rgba(0, 0, 0, 0.15), 0px 3px 1px rgba(0, 0, 0, 0.06);
    transition: all 0.2s ease-out;
    cursor: pointer;
  }
  
  .checkbox:checked + .switch {
    background-color: #5479f3;
  }
  
  .checkbox:checked + .switch .slider {
    left: calc(50% - 21px/2 + 10px);
    top: calc(50% - 21px/2);
  }

 
`