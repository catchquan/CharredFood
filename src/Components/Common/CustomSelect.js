import React, { useState, useEffect } from "react";
import "./CustomSelect.css";
import PropTypes from "prop-types";

CustomSelect.propTypes = {
    options: PropTypes.array.isRequired,
    getVal: PropTypes.func.isRequired
};

export default function CustomSelect(props) {
    const { options, getVal } = props;
    const [selectValue, setSelectValue] = useState(options[0]);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    function openSelect(e) {
        if (!e.target.dataset.value) {
            setIsMenuOpen(!isMenuOpen);
            return;
        }

        if (e.target.dataset.value !== selectValue) {
            setSelectValue(e.target.dataset.value);
        }

        setIsMenuOpen(!isMenuOpen);
    }

    useEffect(() => {
        getVal(selectValue);
        //eslint-disable-next-line
    }, [selectValue]);

    useEffect(() => {
        window.addEventListener("click", function (e) {
            if (![...e.target.classList].join("").includes("CustomSelect")) {
                setIsMenuOpen(false);
            }
        });
        return () => {
            window.addEventListener("click", function (e) {
                if (
                    ![...e.target.classList].join("").includes("CustomSelect")
                ) {
                    setIsMenuOpen(false);
                }
            });
        };
    }, []);

    const openMenuAni = isMenuOpen ? "open" : "closed";
    return (
        <div className="CustomSelect">
            <p className="CustomSelect-label">Subject</p>
            <div
                onClick={openSelect}
                className={`CustomSelect-optionList ${openMenuAni}`}>
                <div className="CustomSelect-display">
                    <p className="CustomSelect-displayText">{selectValue}</p>
                    <div className="CustomSelect-arrowContainer">
                        <i className="CustomSelect-arrowIcon fas fa-chevron-down" />
                    </div>
                </div>
                {options.map((option, i) => {
                    let classNames;
                    if (option === selectValue) {
                        classNames = "CustomSelect-option active";
                    } else {
                        classNames = "CustomSelect-option";
                    }
                    return (
                        <div
                            key={i}
                            style={{
                                transform: `translateY(calc(${i * 100}%))`
                            }}
                            className={classNames}
                            data-value={option}
                            onClick={() => setSelectValue(option)}>
                            {option}
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
