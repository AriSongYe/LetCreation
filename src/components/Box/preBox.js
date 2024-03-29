import "./preBox.css";

import { useState, useEffect } from "react";
import axios from "axios";
import PropTypes from "prop-types";


function PreBox(props) {
    const {title, imgPath, id} = props;
    return (
    <div class="preBox">
        <img class="preImg" src="http://localhost:3000/api/imgs/실루엣퀴즈.png" alt="이미지"></img>
        <div class="preTitle">{title}</div>
    </div>
    );
}

PreBox.propTypes = {
    title: PropTypes.string.isRequired,
    imgPath: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
}

export default PreBox;