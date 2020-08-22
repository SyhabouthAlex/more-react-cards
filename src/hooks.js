import { useState } from "react";
import { v4 as uuid } from "uuid";
import axios from "axios";

const useFlip = () => {
    const [isFacingUp, setIsFacingUp] = useState(true);
    const flipCard = () => {
        setIsFacingUp(isUp => !isUp);
    };
    return [isFacingUp, flipCard];
}

const useAxios = (baseUrl) => {
    const [data, setData] = useState([]);
    const addData = async (restOfUrl = "") => {
        const urlEnd = typeof restOfUrl === "string" ? restOfUrl : "";
        const response = await axios.get(`${baseUrl}${urlEnd}`);
        setData(data => [...data, { ...response.data, id: uuid() }]);
    };
    return [data, addData];
}

export {useFlip, useAxios};